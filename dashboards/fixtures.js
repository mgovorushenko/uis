import axios from "axios";

const storageKey = "uis-original-dashboard-state-v1";

const sources = [
  ["script_execution", "Выполнение AI-скрипта"],
  ["number_pool", "Отработка номеров в пуле"],
  ["ai_tags", "Распределение AI-тегов"],
  ["communications_rescue", "Сводный отчет по спасению коммуникаций"],
  ["api_summary", "Сводный по запросам API"],
  ["calls", "Сводный по звонкам"],
  ["communications", "Сводный по коммуникациям"],
  ["summary_analytics", "Сводный по рекламе"],
  ["tags", "Сводный по тегам"],
  ["notifications", "Сводный по уведомлениям"],
  ["widgets", "Эффективность виджетов"],
  ["communication_efficiency", "Эффективность коммуникации"],
].map(([id, name]) => ({ id, name, configuration: "aggregated", is_mobile: false }));

const scriptMetrics = [
  ["completed", "Звонки с выполненными пунктами", "integer"],
  ["missed", "Звонки с невыполненными пунктами", "integer"],
  ["completion_rate", "% выполненных пунктов", "percentage"],
];

const generalMetrics = [
  ["incoming", "Всего обращений", "integer"],
  ["handled", "Обработанные обращения", "integer"],
  ["handled_rate", "Доля обработанных обращений", "percentage"],
];

const visitMetrics = [["visits", "Посещения, количество", "integer"]];
const trafficChannels = ["Контекстная реклама", "Поисковые системы", "Классифайды", "Прямые переходы", "Социальные сети"];
const trafficSeries = [
  [140, 520, 1260, 840, 510, 890, 790, 650, 445],
  [920, 700, 590, 610, 415, 335, 500, 390, 590],
  [670, 560, 405, 620, 760, 510, 200, 390, 570],
  [605, 920, 810, 1350, 830, 650, 1210, 985, 610],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const trafficColors = ["#49b880", "#a67eff", "#ff9f46", "#ffd200", "#7694ff"];
const site = ["site", "Сайт", Array(5).fill("uiscom.ru")];

const dimensions = [
  ["traffic", "Канал трафика", trafficChannels],
  ["employee", "Сотрудник", ["Анна", "Борис", "Виктория", "Дмитрий", "Елена"]],
  ["department", "Отдел", ["Продажи", "Поддержка", "Консультации"]],
  ["script", "AI-скрипт", ["Приветствие", "Консультация", "Завершение"]],
  ["direction", "Направление", ["Входящие", "Исходящие"]],
  ["tag", "Тег", ["Заявка", "Вопрос", "Повторное обращение"]],
];

const metrics = [...scriptMetrics, ...generalMetrics, ...visitMetrics];
const flatSources = [
  ["call_log", "Журнал звонков"],
  ["chat_log", "Журнал чатов"],
  ["communication_log", "Журнал коммуникаций"],
].map(([id, name]) => ({ id, name, configuration: "flat", is_mobile: false }));

const reportTypes = [
  { id: "dashboard", name: "Дашборд", configuration: "dashboard", is_mobile: false },
  ...sources,
  ...flatSources,
];
const initialReport = {
  date_from: "2025-12-22 00:00:00",
  date_till: "2025-12-30 23:59:59",
  datetime_dimension: "day",
  global_calendar_on: false,
  columns: [],
  dimensions: [],
  widgets: [],
};

let reportState = initialReport;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved) reportState = { ...initialReport, ...saved };
} catch {
  // Use the fixture defaults if local storage is unavailable.
}

function getColumns(reportType) {
  const isFlat = flatSources.some(({ id }) => id === reportType);
  const sourceMetrics = isFlat
    ? [["employee", "Сотрудник", "string"], ["department", "Отдел", "string"], ["incoming", "Всего обращений", "integer"]]
    : reportType === "script_execution" ? scriptMetrics : reportType === "communications" ? [...visitMetrics, ...generalMetrics] : generalMetrics;
  return {
    columns_groups: [{ id: 1, name: "Обращения", parent_group_id: null, sort: 1 }],
    columns: sourceMetrics.map(([id, name, data_type], index) => ({
      id, name, data_type, group_id: 1, type: isFlat ? "base" : "metric", sort: index + 1,
      is_available_dash_widgets: true, is_available_interactive_dash_widgets: true,
      is_pie_chart_available: true,
    })),
  };
}

const dimensionTree = {
  dimensions_groups: [{ id: 1, name: "Группировки", parent_group_id: null, sort: 1 }],
  dimensions: dimensions.map(([id, name], index) => ({
    id, name, data_type: "string", group_id: 1, is_custom: false, sort: index + 1,
  })),
};

const filters = [...dimensions, site].map(([id, name, values]) => ({
  id, name, format: "text", values: [...new Set(values)],
  operators: [
    { id: "eq", name: "Равно", is_default: true },
    { id: "ne", name: "Не равно" },
  ],
}));

function getMetricValue(metric, index) {
  const metricIndex = Math.max(0, metrics.findIndex(([id]) => id === metric));
  if (metrics[metricIndex][2] === "percentage") return (72 + index * 4 + metricIndex).toFixed(1);
  return String([38, 62, 45, 71, 52][index % 5] + metricIndex * 7);
}

function collectionFor(id) {
  return dimensions.find(([key]) => key === id)?.[2] || dimensions[0][2];
}

function dateIntervals(params) {
  const start = new Date(`${(params.date_from || initialReport.date_from).slice(0, 10)}T00:00:00Z`);
  const end = (params.date_till || initialReport.date_till).slice(0, 10);
  const unit = params.datetime_dimension || "day";
  const intervals = [];
  while (start.toISOString().slice(0, 10) <= end && intervals.length < 31) {
    const from = start.toISOString().slice(0, 10);
    if (unit === "month") {
      start.setUTCDate(1);
      start.setUTCMonth(start.getUTCMonth() + 1);
    } else {
      start.setUTCDate(start.getUTCDate() + (unit === "week" ? 7 : 1));
    }
    const till = new Date(start.getTime() - 86400000).toISOString().slice(0, 10);
    intervals.push({ from: `${from} 00:00:00`, till: `${till > end ? end : till} 23:59:59` });
  }
  return intervals;
}

function fixtureValue(field, index) {
  const values = [...dimensions, site].find(([id]) => id === field)?.[2];
  return values ? values[index % values.length] : getMetricValue(field, index);
}

function matchesFilter(filter, index) {
  if (Array.isArray(filter?.filters)) {
    const check = (child) => matchesFilter(child, index);
    return filter.condition === "or" ? filter.filters.some(check) : filter.filters.every(check);
  }
  if (!filter?.field) return true;
  const current = String(fixtureValue(filter.field, index)).trim().toLocaleLowerCase("ru");
  const values = [filter.value].flat().map((value) => String(value).trim().toLocaleLowerCase("ru"));
  const equal = values.includes(current);
  return filter.operator === "ne" ? !equal : equal;
}

function matchingRows(filter) {
  return [0, 1, 2, 3, 4].filter((index) => matchesFilter(filter, index));
}

function demoFlatReport(params) {
  const rows = matchingRows(params.filter);
  if (params.is_total_items_only) return { data: [], metadata: { total_items: rows.length } };
  const fields = params.fields || [];
  return {
    data: rows.map((index) => Object.fromEntries(fields.map((field) => [field, fixtureValue(field, index)]))),
    metadata: { total_items: rows.length },
  };
}

const fixtureDay = 86400000;
const dayNumber = (date) => Date.parse(date.slice(0, 10) + "T00:00:00Z") / fixtureDay;
const referenceDay = dayNumber(initialReport.date_from);

function lineMetricValue(metric, rowIndices, from, till) {
  const lastDay = dayNumber(till);
  const isPercentage = metrics.find(([id]) => id === metric)?.[2] === "percentage";
  let total = 0;
  let observations = 0;
  for (let day = dayNumber(from); day <= lastDay; day++) {
    for (const rowIndex of rowIndices) {
      const series = trafficSeries[rowIndex];
      const dailyIndex = day - referenceDay;
      const sample = (((dailyIndex + rowIndex) % 5) + 5) % 5;
      if (metric === "handled" || metric === "handled_rate") {
        const incoming = Number(getMetricValue("incoming", sample));
        total += Math.round(incoming * Number(getMetricValue("handled_rate", sample)) / 100);
        observations += incoming;
        continue;
      }
      const value = metric === "visits"
        ? series[((dailyIndex % series.length) + series.length) % series.length]
        : Number(getMetricValue(metric, sample));
      total += value;
      observations++;
    }
  }
  if (metric === "handled_rate" && observations) return (100 * total / observations).toFixed(1);
  return isPercentage && observations ? (total / observations).toFixed(1) : String(total);
}

function demoReport(params) {
  const requestedColumns = params.columns || [params.main_column, params.additional_column].filter(Boolean);
  const groups = (params.dimensions || params.data_dimensions || []).filter(Boolean);
  const selectedRows = matchingRows(params.filter);
  const isFiltered = Boolean(params.filter?.field || params.filter?.filters?.length);
  const from = params.date_from || initialReport.date_from;
  const till = params.date_till || initialReport.date_till;
  const valuesFor = (rows) => requestedColumns.map((id) => lineMetricValue(id, rows, from, till));
  const axisLabels = (dimension) => isFiltered
    ? [...new Set(selectedRows.map((index) => fixtureValue(dimension || "employee", index)))]
    : collectionFor(dimension);
  const labels = axisLabels(groups[0]).slice(0, Number(params.limit) || 5);
  if (params.mode === "multidimension") {
    return { rows: labels.flatMap((x, column) =>
      axisLabels(groups[1]).map((y, row) => ({
        dimensions: [x, y],
        dimension_ids: [String(column + 1), String(row + 1)],
        columns: valuesFor(selectedRows.filter((index) => fixtureValue(groups[0], index) === x && fixtureValue(groups[1], index) === y)),
      })),
    ) };
  }
  const totals = selectedRows.length ? valuesFor(selectedRows) : [];
  const rowsFor = (names, rows = selectedRows, depth = 0) => names.map((value) => {
    const dimension = groups[depth] || "employee";
    const groupRows = rows.filter((index) => fixtureValue(dimension, index) === value);
    const rowIndex = collectionFor(dimension).indexOf(value);
    const valueId = String(rowIndex + 1);
    return {
      dimension: { value, value_id: valueId, id: dimension },
      columns: valuesFor(groupRows),
      rows: depth + 1 < groups.length ? rowsFor(axisLabels(groups[depth + 1]), groupRows, depth + 1) : [],
    };
  });
  let items = [];
  if (params.mode === "linechart" || params.mode === "linechart_total") {
    const intervals = dateIntervals(params);
    const lineGroups = groups.length ? labels : selectedRows.length ? [null] : [];
    items = lineGroups.flatMap((label, groupIndex) => {
      const groupRows = label ? selectedRows.filter((index) => fixtureValue(groups[0], index) === label) : selectedRows;
      return intervals.map((interval) => ({
        datetime_dimension_interval: interval,
        data_dimensions: label ? [label] : [],
        data_dimensions_ids: label ? [String(groupIndex + 1)] : [],
        color: groups[0] === "traffic" ? trafficColors[trafficChannels.indexOf(label)] : undefined,
        main_column: lineMetricValue(requestedColumns[0], groupRows, interval.from, interval.till),
        additional_column: requestedColumns[1] ? lineMetricValue(requestedColumns[1], groupRows, interval.from, interval.till) : undefined,
      }));
    });
  }
  const rows = rowsFor(labels);
  const sort = params.sort?.[0];
  const column = requestedColumns.indexOf(sort?.field);
  if (column >= 0) {
    rows.sort((a, b) => (Number(a.columns[column]) - Number(b.columns[column])) * (sort.order === "asc" ? 1 : -1));
  }
  return { rows, totals, items, total: labels.length, date_from: params.date_from, date_till: params.date_till };
}

const rpc = {
  "get.report_types": () => reportTypes,
  "getobj.report_state": () => reportState,
  "set.report_state": ({ state }) => {
    reportState = { ...reportState, ...state };
    localStorage.setItem(storageKey, JSON.stringify(reportState));
    return reportState;
  },
  "getobj.columns_tree": ({ report_type }) => getColumns(report_type),
  "getobj.dimensions_tree": () => dimensionTree,
  "get.report_filters": () => filters,
  "get.reports_list": () => [{ id: 1, name: "Дашборд", type: "dashboard", is_editable: true }],
  "get.report_groups": () => [],
  "get.report_actions": () => [],
  "get.custom_filters": () => [],
  "getobj.report_global_calendar": () => ({ id: 1, user_id: 1, params: {} }),
};

export function installFixtureAdapter(base) {
  axios.defaults.adapter = async (config) => {
    const url = new URL(axios.getUri(config), window.location.href);
    if (!url.href.startsWith(`${base.href}/`)) {
      throw new Error(`Unexpected request outside the dashboard fixture: ${url.pathname}`);
    }
    const body = typeof config.data === "string" ? JSON.parse(config.data) : config.data;
    let data;
    if (url.pathname.endsWith("/rpc")) {
      if (!rpc[body.method]) console.debug("Unmapped fixture RPC", body.method);
      const value = rpc[body.method]?.(body.params) ?? [];
      data = { jsonrpc: "2.0", id: body.id, result: { data: value } };
    } else if (url.pathname.endsWith("/builder/report")) {
      data = body.mode === "flat" ? demoFlatReport(body) : { data: demoReport(body) };
    } else {
      console.debug("Unmapped fixture URL", url.pathname);
      data = { data: [] };
    }
    return { config, data, headers: {}, status: 200, statusText: "OK" };
  };
}
