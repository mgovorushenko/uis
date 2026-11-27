import { useId, useState } from "react";
import { Select, Tooltip } from "@comagic/ui";
import { useController, useWatch } from "react-hook-form";
import { FormSelect } from "@comagic/reports/lib/components/form/select/index.js";
import { FormTextArea } from "@comagic/reports/lib/components/form/text-area/index.js";

const help = {
  type: "Выберите, как показать данные на дашборде, например, линейный график или столбчатая диаграмма",
  source: "Отчет, из которого виджет берет данные. От источника зависят доступные показатели",
  metric: "Выберите, что будет измерять виджет. Например, количество звонков или долю пропущенных.",
  group: "Разделите данные на группы, например по сайту. Для каждой группы на графике появится своя линия.",
  limit: "Сколько групп можно показать на графике одновременно",
  chartGroup: "Разделите данные на группы, например по сайту",
  tableGroup: "Выберите, по чему объединить строки таблицы",
  reportConfig: "Сводный отчёт группирует данные, детальный показывает отдельные записи",
  order: "Задайте, в каком порядке вывести группы по значению показателя",
  chartSecond: "Сравните два показателя в одном виджете",
  stage: "Выберите показатель для этого этапа воронки",
  tileSize: "Значение определяет размер каждой секции карты",
  tileColor: "Значение определяет цвет каждой секции карты",
  text: "Текст, который будет виден на дашборде",
  second: "Сравните два показателя на одном графике. У второго показателя будет своя шкала.",
};

export function Help({ field, label }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  return (
    <Tooltip text={<span id={id} role="tooltip">{help[field]}</span>} innerClassname="widget-help-tooltip"
      visible={visible} onVisibleChange={setVisible} placement="right" mouseEnterDelay={0.3}
      maxWidth="min(260px, calc(100vw - 32px))">
      <button className="widget-help" type="button" aria-label={`Подсказка: ${label}`} aria-describedby={visible ? id : undefined}
        onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setVisible(true); }}
        onBlur={() => setVisible(false)} onClick={() => setVisible(true)}
        onKeyDown={(event) => { if (event.key === "Escape" && visible) { event.stopPropagation(); setVisible(false); } }}>
        <img src="../assets/icons/info_20.svg" alt="" />
      </button>
    </Tooltip>
  );
}

export function HelpRow({ field, label, children }) {
  return <div className="widget-help-row">{children}<Help field={field} label={label} /></div>;
}

export function selectTree(nodes, excluded) {
  return nodes.flatMap(({ id, name, children, isLeaf }) => {
    if (isLeaf) return id === excluded ? [] : [{ key: String(id), value: name, title: name }];
    const nested = selectTree(children ?? [], excluded);
    return nested.length ? [{ key: `group-${id}`, title: name, children: nested }] : [];
  });
}

const reportHelp = {
  reportConfig: ["Тип отчёта", "Выберите тип отчёта"],
  report_type: ["Источник данных", "Выберите источник данных", "source"],
  sortOrder: ["Сортировка показателя", "Выберите порядок сортировки", "order"],
};

export function WidgetFormSelect({ name, ...props }) {
  const [label, placeholder, field = name] = reportHelp[name];
  return (
    <HelpRow field={field} label={label}>
      <FormSelect {...props} name={name} label={label} placeholder={placeholder} />
    </HelpRow>
  );
}

export function WidgetGroupingSelect({ name, label, isTable, options, excluded, ...props }) {
  const { field, fieldState } = useController({ name });
  return (
    <HelpRow field={isTable ? "tableGroup" : "chartGroup"} label={label}>
      <Select {...props} unstable_popupFloating label={label} value={field.value ? [field.value] : []}
        onChange={(selection) => field.onChange(selection?.[0] ?? "")}
        onBlur={field.onBlur} validation={fieldState.error && fieldState.isTouched ? "error" : undefined}
        treeProps={{ checkable: false, treeData: selectTree(options, excluded) }} />
    </HelpRow>
  );
}

export function WidgetMetricSelect({ fieldIndex, ...props }) {
  const type = useWatch({ name: "chartType" });
  const [label, placeholder, helpField] = type === "funnel"
    ? [`Этап ${fieldIndex + 1}`, "Выберите показатель для этапа", "stage"]
    : type === "treemap"
      ? (fieldIndex === 0
        ? ["Размер секций", "Выберите показатель для размера", "tileSize"]
        : ["Цвет секций", "Выберите показатель для цвета", "tileColor"])
      : [props.label, props.placeholder, "metric"];
  return (
    <HelpRow field={helpField} label={label}>
      <Select {...props} unstable_popupFloating label={label} placeholder={placeholder} />
    </HelpRow>
  );
}

export function WidgetTextField(props) {
  return <HelpRow field="text" label="Текст"><FormTextArea {...props} /></HelpRow>;
}
