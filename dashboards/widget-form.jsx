import { useEffect, useId, useRef, useState } from "react";
import { Button, Checkbox, Icon, List, Modal, Select, Switch, Tooltip } from "@comagic/ui";
import { useFormContext, useWatch } from "react-hook-form";
import { TypeControl } from "@comagic/reports/lib/components/dashboard/widget-modal/widget-form/components/TypeControl.js";
import { DateTimeDimensions } from "@comagic/reports/lib/components/dashboard/widget-modal/widget-form/components/DateTimeDimensions.js";
import { WidgetCreateForm, WidgetEditForm } from "@comagic/reports/lib/components/dashboard/widget-modal/widget-form/index.js";
import { SimpleWidgetForm } from "@comagic/reports/lib/components/dashboard/widget-modal/widget-form/SimpleWidgetForm.js";
import { getProcessedWidget } from "@comagic/reports/lib/components/dashboard/widget-modal/utils/processWidgets.js";
import { WidgetFactory } from "@comagic/reports/lib/components/dashboard/widget-factory/index.js";
import { FormCounter } from "@comagic/reports/lib/components/form/counter/index.js";
import { FormSelect } from "@comagic/reports/lib/components/form/select/index.js";
import { useDashboard } from "@comagic/reports/lib/components/dashboard/useDashboard.js";
import { useGetReportTypes } from "@comagic/reports/lib/hooks/useGetReportTypes.js";
import { useGetReportColumnsTreeData } from "@comagic/reports/lib/hooks/useGetReportColumnsTreeData.js";
import { useGetReportDimensionsTree } from "@comagic/reports/lib/hooks/useGetReportDimensions.js";
import { useGetReportState } from "@comagic/reports/lib/hooks/useGetReportState/index.js";
import { useReportContext } from "@comagic/reports/lib/providers/report-core-provider/ReportContext.js";
import { useSystemContext } from "@comagic/reports/lib/providers/system-provider/SystemProvider.js";
import { getIsWidgetColumnAvailable } from "@comagic/reports/lib/utils/widgetPanelState.js";
import { arrayToTree } from "@comagic/reports/lib/utils/arrayToTree.js";
import { WidgetFilters } from "./widget-filters.jsx";

const help = {
  type: "Выберите, как показать данные на дашборде, например, линейный график или столбчатая диаграмма",
  source: "Отчет, из которого виджет берет данные. От источника зависят доступные показатели",
  metric: "Выберите, что будет измерять виджет. Например, количество звонков или долю пропущенных.",
  group: "Разделите данные на группы, например по сайту. Для каждой группы на графике появится своя линия.",
  limit: "Сколько групп можно показать на графике одновременно.",
  second: "Включите, чтобы сравнить два показателя на одном графике",
};

function Help({ field, label }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  return (
    <Tooltip text={<span id={id} role="tooltip">{help[field]}</span>} innerClassname="widget-help-tooltip"
      visible={visible} onVisibleChange={setVisible} placement="right" mouseEnterDelay={0.3}
      maxWidth="min(360px, calc(100vw - 32px))">
      <button className="widget-help" type="button" aria-label={`Подсказка: ${label}`} aria-describedby={visible ? id : undefined}
        onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setVisible(true); }}
        onBlur={() => setVisible(false)} onClick={() => setVisible(true)}
        onKeyDown={(event) => { if (event.key === "Escape" && visible) { event.stopPropagation(); setVisible(false); } }}>
        <img src="../assets/icons/info_20.svg" alt="" />
      </button>
    </Tooltip>
  );
}

function HelpRow({ field, label, children }) {
  return <div className="widget-help-row">{children}<Help field={field} label={label} /></div>;
}

function EditableTitle({ title, onChange }) {
  const [draft, setDraft] = useState(null);
  const input = useRef(null);
  const editing = draft !== null;
  useEffect(() => { if (editing) input.current?.select(); }, [editing]);

  function finish() {
    if (draft === null) return;
    onChange(draft.trim());
    setDraft(null);
  }

  return (
    <div className={`node-settings-title-wrap is-editable widget-designer-title${draft !== null ? " is-editing" : ""}`}>
      <span className="node-settings-title-text" title={title} onClick={() => setDraft(title)}>{title}</span>
      <button className="node-settings-title-edit" type="button" aria-label="Переименовать" onClick={() => setDraft(title)}>
        <Icon component="Edit16" type="secondary" aria-hidden="true" />
      </button>
      {draft !== null && <input ref={input} autoFocus className="node-settings-title-input" aria-label="Название виджета" maxLength={120}
        value={draft} onChange={(event) => setDraft(event.target.value)} onBlur={finish}
        onKeyDown={(event) => {
          if (event.key === "Enter") { event.preventDefault(); finish(); }
          if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); setDraft(null); }
        }} />}
    </div>
  );
}

const blankMetric = () => ({ id: "", name: "" });
const fieldChange = { shouldDirty: true, shouldValidate: true };

function selectTree(nodes, excluded) {
  return nodes.flatMap(({ id, name, children, isLeaf }) => {
    if (isLeaf) return id === excluded ? [] : [{ key: String(id), value: name, title: name }];
    const nested = selectTree(children ?? [], excluded);
    return nested.length ? [{ key: `group-${id}`, title: name, children: nested }] : [];
  });
}

function MetricSelect({ label, index, columns, tree, loading, onChange }) {
  return <Select label={label} placeholder={index === 0 ? "Выберите показатель" : "Выберите второй показатель"}
    required value={columns[index]?.id ? [columns[index].id] : []}
    onChange={(selection) => onChange(index, Array.isArray(selection) ? selection[0] : selection)}
    isLoading={loading} searchPopup={{ label: "" }} treeProps={{ checkable: false, treeData: tree }}
    testId={`reports-dashboard-widget-column-${index}`} />;
}

function LineFields({ values, columnData, currentWidget }) {
  const { getValues, setValue } = useFormContext();
  const { aggregated } = useGetReportTypes();
  const { dimensionsTree, dimensionsGroups, isLoading } = useGetReportDimensionsTree(values.report_type);
  const columns = values.columns ?? [];
  const tree = arrayToTree(columnData.columns_groups ?? [], (columnData.columns ?? []).filter((column) => getIsWidgetColumnAvailable("line", column)), "id", "parent_group_id", "group_id");
  const dimensionOptions = arrayToTree(dimensionsGroups, dimensionsTree, "id", "parent_group_id", "group_id");

  function updateMetric(index, id) {
    const next = [...getValues("columns")];
    next[index] = id ? { id, name: id } : blankMetric();
    setValue("columns", next, fieldChange);
  }

  function changeSource() {
    setValue("columns", values.secondColumnControl ? [blankMetric(), blankMetric()] : [blankMetric()], fieldChange);
    setValue("dimension", "", fieldChange);
    setValue("filters", [], fieldChange);
  }

  function toggleSecond(checked) {
    setValue("secondColumnControl", checked, fieldChange);
    setValue("columns", checked ? [columns[0] ?? blankMetric(), blankMetric()] : [columns[0] ?? blankMetric()], fieldChange);
  }

  return (
    <>
      <HelpRow field="source" label="Источник данных">
        <FormSelect name="report_type" label="Источник данных" placeholder="Выберите источник данных" required onChange={changeSource}>
          {aggregated.map(({ id, name }) => <List.Option key={id} value={id}>{name}</List.Option>)}
        </FormSelect>
      </HelpRow>
      <HelpRow field="metric" label="Показатель">
        <MetricSelect label="Показатель" index={0} columns={columns} tree={selectTree(tree, columns[1]?.id)} loading={columnData.isLoading} onChange={updateMetric} />
      </HelpRow>
      <HelpRow field="group" label="Группировать по">
        <Select label="Группировать по" placeholder="Выберите группировку"
          value={values.dimension ? [values.dimension] : []}
          onChange={(selection) => setValue("dimension", selection?.[0] ?? "", fieldChange)}
          isLoading={isLoading} clearable searchPopup={{ label: "" }}
          treeProps={{ checkable: false, treeData: selectTree(dimensionOptions) }}
          testId="reports-dashboard-widget-dimension" />
      </HelpRow>
      {values.dimension && (
        <div className="widget-designer-limit">
          <span>Максимум групп</span><Help field="limit" label="Максимум групп" />
          <FormCounter name="limit" min={1} max={50} testId="reports-dashboard-widget-limit" />
        </div>
      )}
      <div className="widget-designer-second">
        <Switch name="secondColumnControl" checked={Boolean(values.secondColumnControl)}
          disabled={Boolean(currentWidget?.displayParams?.compareModeEnabled)} onChange={toggleSecond}>
          Показывать второй показатель
        </Switch>
        <Help field="second" label="Второй показатель" />
      </div>
      {values.secondColumnControl && (
        <HelpRow field="metric" label="Выбор второго показателя">
          <MetricSelect label="Второй показатель" index={1} columns={columns} tree={selectTree(tree, columns[0]?.id)} loading={columnData.isLoading} onChange={updateMetric} />
        </HelpRow>
      )}
    </>
  );
}

export function WidgetModalContent({ currentWidget, isCreateMode }) {
  const { control, getValues, setValue, handleSubmit, formState: { isValid } } = useFormContext();
  const values = useWatch({ control });
  const { reportId } = useReportContext();
  const { setWidgetModalParams } = useSystemContext();
  const { handleAddWidget, handleUpdateWidget } = useDashboard();
  const { shadowReportState } = useGetReportState(reportId);
  const columnData = useGetReportColumnsTreeData(values.report_type);
  const [customTitle, setCustomTitle] = useState(() => currentWidget?.displayParams?.customTitle
    ?? (currentWidget && currentWidget.displayParams.autoTitle !== true ? currentWidget.displayParams.widgetName : ""));
  const [showLegend, setShowLegend] = useState(() => currentWidget?.displayParams?.showLegend !== false);
  const metricId = values.columns?.[0]?.id;
  const metricName = columnData.columnsTreeDataHash[metricId]?.name;
  const isLine = values.chartType === "line";
  const isSimple = ["divider", "textArea"].includes(values.chartType);
  const automaticTitle = metricName || (isLine ? "Новый график" : "Новый виджет");
  const title = customTitle || automaticTitle;
  const secondMetricMissing = isLine && values.secondColumnControl && !values.columns?.[1]?.id;
  const canPreview = isValid && (isSimple || (Boolean(metricId) && !secondMetricMissing));
  const close = () => setWidgetModalParams({ visible: false });

  useEffect(() => {
    if (getValues("widgetName") !== title) setValue("widgetName", title, { shouldValidate: true });
  }, [getValues, setValue, title]);

  function process(formValues) {
    const widget = getProcessedWidget({
      formValues: { ...formValues, widgetName: title },
      currentWidget,
      dataType: columnData.columnsTreeDataHash[formValues.columns?.[0]?.id]?.data_type,
    });
    Object.assign(widget.displayParams, { customTitle, autoTitle: !customTitle });
    if (isLine) widget.displayParams.showLegend = showLegend;
    return widget;
  }

  const submit = handleSubmit((formValues) => {
    const widget = process(formValues);
    if (isCreateMode) handleAddWidget(widget);
    else handleUpdateWidget(widget, currentWidget.id);
    close();
  });

  const OtherForm = isCreateMode ? WidgetCreateForm : WidgetEditForm;
  return (
    <Modal visible width={974} className="widget-designer-modal" mainClassname="widget-designer-modal-main"
      maskClosable={false} onCancel={close} footer={null}
      title={<EditableTitle title={title} onChange={setCustomTitle} />}>
      <div className="widget-designer-body">
        <div className="widget-designer-fields">
          <HelpRow field="type" label="Тип виджета"><TypeControl /></HelpRow>
          {isLine ? <LineFields values={values} columnData={columnData} currentWidget={currentWidget} /> : (
            <div className="widget-designer-original-fields">
              {isSimple ? <SimpleWidgetForm /> : <OtherForm isCompareModeEnabled={currentWidget?.displayParams?.compareModeEnabled} />}
            </div>
          )}
          {!isSimple && <WidgetFilters key={values.report_type} reportType={values.report_type} />}
        </div>
        <section className={`widget-designer-preview${canPreview ? " has-widget" : ""}`} aria-label="Предпросмотр">
          {canPreview ? (
            <>
              {isLine && (
                <div className="widget-designer-preview-toolbar">
                  <div className="widget-designer-visibility">
                    <Checkbox checked={showLegend} label="Легенда" onChange={() => setShowLegend((current) => !current)} />
                  </div>
                  <div className="widget-designer-detail"><DateTimeDimensions popupMatchSelectWidth={176} selectPlacement="bottomRight" /></div>
                </div>
              )}
              <div className="widget-designer-chart">
                <WidgetFactory key={values.chartType} id={`widget-show-panel-${values.id}`} widget={process(values)}
                  dateFrom={shadowReportState.date_from} dateTill={shadowReportState.date_till} goal_ids={shadowReportState.goal_ids}
                  draggable={false} isForm />
              </div>
            </>
          ) : (
            <p role="status">{!values.report_type && !isSimple ? "Выберите источник данных" : !metricId && !isSimple ? "Выберите показатель" : secondMetricMissing ? "Выберите второй показатель" : "Заполните обязательные поля"}</p>
          )}
        </section>
      </div>
      <div className="widget-designer-footer">
        <Button size="small" onClick={submit} disabled={!canPreview}>{isCreateMode ? "Создать" : "Сохранить"}</Button>
        <Button size="small" theme="secondary" type="outline" onClick={close}>Отменить</Button>
      </div>
    </Modal>
  );
}
