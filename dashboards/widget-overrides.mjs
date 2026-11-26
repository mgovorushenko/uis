import { readFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

function replaceOnce(source, before, after) {
  if (source.split(before).length !== 2) {
    throw new Error(`The UIS widget package changed at: ${before}`);
  }
  return source.replace(before, after);
}

export function widgetOverrides() {
  return {
    name: "uis-widget-prototype",
    setup(build) {
      build.onLoad({ filter: /\/widget-modal\/(index|WidgetModal)\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        if (path.endsWith("/widget-modal/index.js")) {
          const start = contents.indexOf("return visible &&");
          const end = contents.indexOf("\n};", start);
          if (start < 0 || end < 0) throw new Error("The UIS widget modal entry changed");
          contents = contents.slice(0, start) + 'return visible && jsx(Suspense, { fallback: null, children: jsx(WidgetModalForm, {}) });' + contents.slice(end);
        } else {
          contents = replaceOnce(contents, "import { WidgetModalContent } from './widget-form/Widget.js';", 'import { WidgetModalContent } from "uis-local-widget-form";');
          contents = replaceOnce(contents, "report_type: widgetReportType\n\t\t\t};",
            'report_type: aggregated.some(({ id }) => id === "communications") ? "communications" : widgetReportType,\n\t\t\t\tchartType: "line",\n\t\t\t\tdatetime_dimension: "day"\n\t\t\t};');
        }
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onResolve({ filter: /^uis-local-widget-form$/ }, () => ({
        path: fileURLToPath(new URL("./widget-form.jsx", import.meta.url)),
      }));

      build.onLoad({ filter: /\/widget-form\/components\/TypeControl\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, 'name: "chartType",\n\t\trequired:',
          'name: "chartType",\n\t\tlabel: "Тип виджета",\n\t\tplaceholder: "Выберите тип виджета",\n\t\trequired:');
        contents = replaceOnce(contents, 'children: tooltipTitle\n', 'children: value === "line" ? "Линейный график" : tooltipTitle\n');
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/widget-modal\/widget-form\/(index|components\/SortOrderControl)\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        if (path.endsWith("/SortOrderControl.js")) {
          contents = replaceOnce(contents, 'name: "sortOrder",', 'name: "sortOrder",\n\t\tplaceholder: "Выберите порядок сортировки",');
        } else {
          for (const [label, placeholder] of [
            ["dimensionsLabelText", "Выберите группировку"],
            ["firstDimensionsLabelText", "Выберите группировку"],
            ["secondDimensionsLabelText", "Выберите вторую группировку"],
          ]) {
            const anchor = "label: " + label + ",";
            contents = replaceOnce(contents, anchor, anchor + "\n\t\t\tplaceholder: " + JSON.stringify(placeholder) + ",");
          }
        }
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/widget-form\/components\/DateTimeDimensions\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, "const DateTimeDimensions = () => {",
          "const DateTimeDimensions = ({ popupMatchSelectWidth, selectPlacement } = {}) => {");
        contents = replaceOnce(contents, 'name: "datetime_dimension",\n\t\tlabel:',
          'name: "datetime_dimension",\n\t\tpopupMatchSelectWidth,\n\t\tselectPlacement,\n\t\tlabel:');
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/widget-modal\/utils\/isWidgetsEqual\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        for (const widget of ["prevWidget", "nextWidget"]) {
          const label = `showLabels: ${widget}?.displayParams?.showLabels,`;
          contents = replaceOnce(contents, label,
            `${label}\n\t\tshowLegend: ${widget}?.displayParams?.showLegend,`);
        }
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/widget-factory\/LineWidget\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, "SeriesRole, joinInterval, DEFAULT_OPACITY", "SeriesRole, joinInterval");
        contents = replaceOnce(contents, "opacity: DEFAULT_OPACITY,", "opacity: 0.5,");
        contents = replaceOnce(contents, "const { colors } = useThemeColors();", "const { colors, colorsObj } = useThemeColors();");
        contents = replaceOnce(contents, "const widgetColumns = useWidgetColumns(columns, report_type);",
          'const ungroupedColor = data_dimensions?.length ? undefined : colors.find((color) => colorsObj[color] === "color7");\n\tconst widgetColumns = useWidgetColumns(columns, report_type);');
        contents = replaceOnce(contents, "secondColumnId, secondColumnName }) => {",
          "secondColumnId, secondColumnName, ungroupedColor }) => {");
        contents = replaceOnce(contents, "nextColorByGroupKey[key] ?? values[0]?.color ?? colors[colorsCount]",
          "ungroupedColor ?? nextColorByGroupKey[key] ?? values[0]?.color ?? colors[colorsCount]");
        contents = replaceOnce(contents, "getLineChartSeriesData({\n\t\t\tcolors,",
          "getLineChartSeriesData({\n\t\t\tcolors,\n\t\t\tungroupedColor,");
        contents = replaceOnce(contents, "colorByGroupKey: currentSeries.colorByGroupKey,\n\t\t\tcolors,",
          "colorByGroupKey: currentSeries.colorByGroupKey,\n\t\t\tcolors,\n\t\t\tungroupedColor,");
        contents = replaceOnce(contents, "\t\tisWidgetCompareMode,\n\t\tqueryData\n",
          "\t\tisWidgetCompareMode,\n\t\tqueryData,\n\t\tungroupedColor\n");
        contents = replaceOnce(contents, "data: newLineChartData,\n\t\t\trenderTooltip,", "data: newLineChartData,\n\t\t\thideLegend: widget.displayParams.showLegend === false,\n\t\t\trenderTooltip,");
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/charts\/line\/useLineChartSeries\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/charts/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, "import { FAKE_LINE_POINT_PREFIX",
          'import { SeriesRole } from "../../constants/index.js";\nimport { FAKE_LINE_POINT_PREFIX');
        contents = replaceOnce(contents, "const normalizeSeries =",
          "const isSecondary = (item) => [SeriesRole.secondary, SeriesRole.secondaryCompared].includes(item.meta?.metric);\nconst normalizeSeries =");
        contents = replaceOnce(contents, 'id: `${item.name}-${item.color}`,',
          'id: `${item.name}-${item.color}${isSecondary(item) ? "-secondary" : ""}`,');
        contents = replaceOnce(contents, "uniqBy(series, (item) => item.id), [series]",
          `uniqBy(series, (item) => item.id).map((item) => {
            const column = item.meta?.column;
            return isSecondary(item) && column && item.name !== column
              ? { ...item, name: \`\${item.name} · \${column}\` } : item;
          }), [series]`);
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/LegendItem-[^/]+\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/charts/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, "name, onClick, testId }) =>", "name, onClick, opacity = 1, testId }) =>");
        contents = replaceOnce(contents, 'backgroundColor: isDisabled ? "#fff" : color || "#92968d",\n\t\tborderColor: color || "#92968d"',
          'backgroundColor: isDisabled ? "#fff" : markerColor,\n\t\tborderColor: markerColor,\n\t\tbackgroundClip: opacity < 1 ? "padding-box" : undefined');
        contents = replaceOnce(contents, "\tconst style = {",
          `\tconst baseColor = color || "#92968d";
          const markerColor = opacity === 1 ? baseColor : \`color-mix(in srgb, \${baseColor} \${opacity * 100}%, transparent)\`;
          const style = {`);
        return { contents, loader: "js", resolveDir: dirname(path) };
      });
    },
  };
}
