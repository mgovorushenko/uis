import { useQuery } from "@tanstack/react-query";
import { formatter } from "@comagic/reports/lib/i18n/formatter.js";
import { getReportTotals } from "@comagic/reports/lib/requests/getAggregatedReportByType.js";
import { useWidgetColumns } from "@comagic/reports/lib/components/dashboard/useWidgetColumns.js";
import { useReportsConfigContext } from "@comagic/reports/lib/providers/reports-config-priovider/ReportsConfigProvider.js";

export function GroupedWidgetTotals({ widget, dateFrom, dateTill, goal_ids }) {
  const { columns, filter, report_type } = widget.params;
  const metadata = useWidgetColumns(columns, report_type);
  const { currency } = useReportsConfigContext();
  return (
    <LineWidgetTotals
      params={{ date_from: dateFrom, date_till: dateTill, columns, filter, report_type, goal_ids, perspective_window: 60 }}
      columnNames={metadata.map((column) => column?.name)}
      columnDataTypes={metadata.map((column) => column?.data_type)}
      currency={currency} />
  );
}

export function LineWidgetTotals({ params, columnNames, columnDataTypes, currency }) {
  const { data } = useQuery({
    queryKey: ["line-widget-totals", params],
    queryFn: ({ signal }) => getReportTotals({ params, signal }),
    enabled: Boolean(params.date_from && params.date_till && params.columns.length),
  });
  const totals = data?.data?.totals;
  const entries = params.columns
    .map((id, index) => ({ id, index, value: totals?.[index] }))
    .filter(({ value }) => value != null);
  if (!entries.length) return null;

  return (
    <div className="widget-line-totals" aria-label="Итоги за период">
      {entries.map(({ id, index, value }, position) => {
        const name = columnNames[index]?.trim() || `Показатель ${index + 1}`;
        const label = params.columns.length === 1 ? "Всего" : name.charAt(0).toLocaleUpperCase("ru") + name.slice(1);
        return (
          <span key={id}>
            {position > 0 && <span className="widget-line-total-separator">•</span>}
            {label}{"\u00a0—\u00a0"}{formatter(value, columnDataTypes[index], currency)}
          </span>
        );
      })}
    </div>
  );
}
