import { useEffect, useRef, useState } from "react";
import { Button, Icon, TextField, List, Popup, Select, Tag } from "@comagic/ui";
import { useFormContext, useWatch } from "react-hook-form";
import { useGetReportFilters } from "@comagic/reports/lib/hooks/useGetReportFilters.js";

const emptyFilter = { field: "", operator: "", value: "" };
const filterValues = (value) => Array.isArray(value) ? value.join(", ") : (value ?? "");
const filterDropdownContainer = (node) => node.closest(".widget-filter-popover");
const filterDropdown = {
  getPopupContainer: filterDropdownContainer,
  portalClassName: "widget-filter-dropdown-portal",
  unstable_popupFloating: true,
};

function FilterEditor({ existing, filters, onApply, onClose }) {
  const panel = useRef(null);
  const [draft, setDraft] = useState(existing ? { ...existing, value: filterValues(existing.value) } : emptyFilter);
  const definition = filters.find(({ id }) => id === draft.field);
  const unary = ["is_null", "is_not_null"].includes(draft.operator);
  const ready = draft.field && draft.operator && (unary || String(draft.value).trim());

  useEffect(() => { panel.current?.focus({ preventScroll: true }); }, []);

  return (
    <section className="widget-filter-panel" ref={panel} tabIndex={-1}
      role="dialog" aria-label={existing ? "Редактирование фильтра" : "Добавление фильтра"}>
      <div className="widget-filter-form">
        <Select {...filterDropdown} label="Параметр" placeholder="Выберите параметр" required value={draft.field}
          onChange={(field) => setDraft({ ...emptyFilter, field })}>
          {filters.map(({ id, name }) => <List.Option key={id} value={id}>{name}</List.Option>)}
        </Select>
        <Select {...filterDropdown} label="Условие" placeholder="Выберите условие" required value={draft.operator} disabled={!definition}
          onChange={(operator) => setDraft({ ...draft, operator, value: "" })}>
          {definition?.operators.map(({ id, name }) => <List.Option key={id} value={id}>{name}</List.Option>)}
        </Select>
        {!draft.operator || definition?.values?.length ? (
          <Select {...filterDropdown} label="Значение" placeholder="Выберите значение" required value={draft.value} disabled={!draft.operator || unary}
            onChange={(value) => setDraft({ ...draft, value })}>
            {definition?.values?.map((value) => <List.Option key={value} value={value}>{value}</List.Option>)}
          </Select>
        ) : (
          <TextField label="Значение" required disabled={unary} value={draft.value}
            onChange={(event) => setDraft({ ...draft, value: event.target.value })} />
        )}
      </div>
      <div className="widget-designer-footer">
        <Button size="small" disabled={!ready} onClick={() => onApply({ ...draft, value: unary ? null : draft.value.trim() })}>
          {existing ? "Сохранить" : "Добавить"}
        </Button>
        <Button size="small" theme="secondary" type="outline" onClick={onClose}>Отменить</Button>
      </div>
    </section>
  );
}

function FilterPopover({ open, onOpenChange, existing, filters, onApply, children }) {
  const anchor = useRef(null);
  function finish() {
    onOpenChange(false);
    anchor.current?.focus();
  }

  return (
    <Popup ref={anchor} visible={open} onVisibleChange={onOpenChange} trigger="click" placement="bottomLeft"
      unstable_popupFloating showClassicMobilePopup className="widget-filter-popover"
      translation={8} maxWidth="min(380px, calc(100vw - 16px))" maxHeight={null}
      content={open && <FilterEditor existing={existing} filters={filters} onClose={finish}
        onApply={(filter) => { onApply(filter); finish(); }} />}>
      {children}
    </Popup>
  );
}

export function WidgetFilters({ reportType }) {
  const { setValue } = useFormContext();
  const filters = useWatch({ name: "filters" }) ?? [];
  const { reportFilters = [] } = useGetReportFilters(reportType);
  const [editorIndex, setEditorIndex] = useState(null);
  const update = (list) => setValue("filters", list, { shouldDirty: true, shouldValidate: true });

  function apply(index, filter) {
    const next = [...filters];
    next[index] = filter;
    update(next);
  }

  function editorProps(index) {
    return {
      open: editorIndex === index,
      onOpenChange: (open) => setEditorIndex((current) => open ? index : current === index ? null : current),
      existing: filters[index],
      filters: reportFilters,
      onApply: (filter) => apply(index, filter),
    };
  }

  return (
    <div className="widget-designer-filters">
      {filters.map((filter, index) => {
        const parameter = reportFilters.find(({ id }) => id === filter.field);
        const condition = parameter?.operators.find(({ id }) => id === filter.operator);
        const label = [parameter?.name ?? filter.field, condition?.name.toLocaleLowerCase("ru") ?? filter.operator, filterValues(filter.value)].filter(Boolean).join(" ");
        return (
          <Tag key={index} color="color4" closable className="widget-filter-tag"
            onClose={() => update(filters.filter((_, position) => position !== index))}>
            <FilterPopover {...editorProps(index)}>
              <button type="button" className="widget-filter-edit" aria-haspopup="dialog" aria-expanded={editorIndex === index}>{label}</button>
            </FilterPopover>
          </Tag>
        );
      })}
      <FilterPopover {...editorProps(filters.length)}>
        <Button size="extrasmall" theme="secondary" type="outline" prefix={<Icon component="Add16" />}
          disabled={!reportType || !reportFilters.length}>
          Добавить фильтр
        </Button>
      </FilterPopover>
    </div>
  );
}
