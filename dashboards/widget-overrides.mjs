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
        contents = replaceOnce(contents, 'switch (nextChartType) {', `setValue("secondColumnControl", false);
          if (chartType === "table" && getValues("reportConfig") === "flat") {
            setValue("reportConfig", "aggregated");
            setValue("report_type", "");
          }
          switch (nextChartType) {`);
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onResolve({ filter: /^uis-local-widget-fields$/ }, () => ({
        path: fileURLToPath(new URL("./widget-fields.jsx", import.meta.url)),
      }));

      build.onLoad({ filter: /\/widget-modal\/widget-form\/(index|components\/(SortOrderControl|SecondColumnControl)|components\/(stacked-)?columns-fields\/index)\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        const fieldsImport = (names) => `import { ${names} } from "uis-local-widget-fields";\n`;
        if (path.endsWith("/widget-form/index.js")) {
          contents = fieldsImport("Help, WidgetFormSelect, WidgetGroupingSelect") + contents;
          for (const name of ["reportConfig", "report_type"]) {
            const anchor = `jsx(FormSelect, {\n\t\t\tname: "${name}",`;
            contents = replaceOnce(contents, anchor, anchor.replace("FormSelect", "WidgetFormSelect"));
          }
          const groupFields = [
            ["dimensionsLabelText", "dimensionOptions", "secondDimensionId", true],
            ["firstDimensionsLabelText", "dimensionOptions", "secondDimensionId", false],
            ["secondDimensionsLabelText", "secondDimensionOptions", "firstDimensionId", false],
          ];
          for (const [label, options, excluded, isTable] of groupFields) {
            const start = contents.lastIndexOf("jsx(FormSelect, {", contents.indexOf("label: " + label));
            const end = contents.indexOf("children: " + options, start) + ("children: " + options).length;
            const component = contents.slice(start, end);
            contents = replaceOnce(contents, component, component
              .replace("jsx(FormSelect, {", "jsx(WidgetGroupingSelect, {")
              .replace("children: " + options, `options: dimensionsTreeView, excluded: ${excluded}, isTable: ${isTable}, placeholder: "${isTable ? "Выберите вложенность" : "Выберите группировку"}"`));
          }
          const oldMenu = contents.slice(contents.indexOf("const renderRecursiveList ="), contents.indexOf("const WidgetFormFields ="));
          contents = replaceOnce(contents, oldMenu, "");
          const oldOptions = contents.slice(contents.indexOf("\tconst dimensionOptions ="), contents.indexOf("\treturn /* @__PURE__ */ jsxs(Fragment"));
          contents = replaceOnce(contents, oldOptions, "");
          contents = replaceOnce(contents, 'const { Option, SubList } = List;', 'const { Option } = List;');
          contents = replaceOnce(contents, '\tconst dimensionField = useWatch({ name: "dimension" });\n\tconst secondDimension = useWatch({ name: "secondDimension" });\n', '');
          const groupingLabel = contents.slice(contents.indexOf(' : formatMessage({', contents.indexOf("const firstDimensionsLabelText")) + 3,
            contents.indexOf("\n\tconst secondDimensionsLabelText"));
          contents = replaceOnce(contents, groupingLabel, '"Группировать по";');
          const legacyName = contents.slice(contents.indexOf("\t\t/* @__PURE__ */ jsx(FormInput, {"),
            contents.indexOf("\t\tlayoutControls,"));
          contents = replaceOnce(contents, legacyName, "");
          const legacyFilter = contents.slice(contents.lastIndexOf(",\n\t\t/* @__PURE__ */ jsx(Switch, {"),
            contents.indexOf("\n\t] });"));
          contents = replaceOnce(contents, legacyFilter, "");
          contents = replaceOnce(contents, '!isHeatmap && !isTable && !isTreeMap && /* @__PURE__ */ jsxs(Box, {',
            'Boolean(firstDimensionId) && !isHeatmap && !isTable && !isTreeMap && /* @__PURE__ */ jsxs(Box, {');
          const oldLimitLabel = /formatMessage\(\{\s*id: "reports-HcWW3btYnVCSLzOA",\s*defaultMessage: "Число групп"\s*\}\)/;
          contents = replaceOnce(contents, contents.match(oldLimitLabel)?.[0] ?? "missing group limit label", '"Максимум групп"');
          contents = replaceOnce(contents, 'selected: config === reportConfig,\n\t\t\t\tchildren: title',
            'selected: config === reportConfig,\n\t\t\t\tchildren: config === "flat" ? "Детальный отчёт" : title.replace("отчет", "отчёт")');
          const funnelLabel = 'value: key,\n\t\t\t\tchildren: /* @__PURE__ */ jsx(Typography, {\n\t\t\t\t\tvariant: "body",\n\t\t\t\t\tchildren: value';
          contents = replaceOnce(contents, funnelLabel, funnelLabel.replace("children: value", 'children: key === "horizontal" ? "Горизонтальная воронка" : value'));
          contents = replaceOnce(contents, '}), /* @__PURE__ */ jsx(FormCounter, {',
            '}), /* @__PURE__ */ jsx(Help, { field: "limit", label: "Максимум групп" }), /* @__PURE__ */ jsx(FormCounter, {');
          contents = replaceOnce(contents, "const WidgetEditForm = ({ filterVisible, onToggleFilters })",
            "const WidgetEditForm = ({ filterVisible, isCompareModeEnabled, onToggleFilters })");
          contents = replaceOnce(contents, "layoutControls: /* @__PURE__ */ jsx(BarLayoutControl, {})",
            "layoutControls: /* @__PURE__ */ jsxs(Fragment, { children: [jsx(BarLayoutControl, {}), jsx(SecondColumnControl, { isCompareModeEnabled })] })");
          contents = replaceOnce(contents, 'onChange: handleReportTypeChange,\n\t\t\tisLoading: isReportTypesLoading,\n\t\t\ttestId: getTestId("widget-report-config")',
            'onChange: () => { setValue("report_type", ""); handleReportTypeChange(); },\n\t\t\tisLoading: isReportTypesLoading,\n\t\t\ttestId: getTestId("widget-report-config")');
        } else if (path.endsWith("/SortOrderControl.js")) {
          contents = fieldsImport("WidgetFormSelect") + replaceOnce(contents, "jsx(FormSelect, {", "jsx(WidgetFormSelect, {");
        } else if (path.endsWith("/SecondColumnControl.js")) {
          contents = fieldsImport("Help") + contents;
          contents = replaceOnce(contents, "import { jsx }", "import { jsx, jsxs }");
          const legacyLabel = contents.slice(contents.indexOf("children: formatMessage({"), contents.lastIndexOf("\n\t\t\t\t})"));
          contents = replaceOnce(contents, legacyLabel, 'children: "Второй показатель"');
          contents = replaceOnce(contents, 'children: /* @__PURE__ */ jsx("div", {', 'children: /* @__PURE__ */ jsxs("div", { className: "widget-designer-second",');
          contents = replaceOnce(contents, 'children: /* @__PURE__ */ jsx(FormSwitch, {', 'children: [/* @__PURE__ */ jsx(FormSwitch, {');
          contents = replaceOnce(contents, '\n\t\t\t})\n\t\t})', '\n\t\t\t}), jsx(Help, { field: "chartSecond", label: "Второй показатель" })]\n\t\t})');
          contents = replaceOnce(contents, 'name: "columns"\n\t})?.length;', 'name: "secondColumnControl"\n\t});');
          contents = replaceOnce(contents, 'const columnsCount =', 'const enabled =');
          contents = replaceOnce(contents, 'checked: columnsCount === 2,', 'checked: Boolean(enabled),');
        } else {
          contents = fieldsImport("WidgetMetricSelect") + replaceOnce(contents, "jsx(Select, {", "jsx(WidgetMetricSelect, { fieldIndex: index,");
        }
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/widget-form\/SimpleWidgetForm\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        const source = await readFile(path, "utf8");
        const oldTitle = source.slice(source.indexOf("\t\twithName && "), source.indexOf("\t\tisTextArea && "));
        let contents = replaceOnce(source, oldTitle, "");
        contents = 'import { WidgetTextField } from "uis-local-widget-fields";\n' + replaceOnce(contents, "jsx(FormTextArea, {", "jsx(WidgetTextField, {");
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

      build.onResolve({ filter: /^uis-local-line-widget-totals$/ }, () => ({
        path: fileURLToPath(new URL("./line-widget-totals.jsx", import.meta.url)),
      }));

      build.onLoad({ filter: /\/widget-factory\/LineWidget\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, "import { getSecondaryYAxisSide } from '../../../utils/getSecondaryYAxisSide.js';",
          'import { LineWidgetTotals } from "uis-local-line-widget-totals";');
        contents = replaceOnce(contents, "\tconst secondaryYAxisSide = getSecondaryYAxisSide(firstColumnDataType, secondColumnDataType);\n", "");
        contents = replaceOnce(contents, "ySide: secondaryYAxisSide,", 'ySide: "right",\n\t\t\thideFromLegend: true,');
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
        contents = replaceOnce(contents, "return /* @__PURE__ */ jsx(GridItem, {\n\t\twidgetName,",
          `return /* @__PURE__ */ jsx(GridItem, {
            widgetName,
            caption: isDataExist ? jsx(LineWidgetTotals, {
              params: { date_from: dateFrom, date_till: dateTill, report_type, columns, filter, goal_ids, perspective_window: 60 },
              columnNames,
              columnDataTypes,
              currency
            }) : null,`);
        contents = replaceOnce(contents, "data: newLineChartData,\n\t\t\trenderTooltip,", "data: newLineChartData,\n\t\t\thideLegend: widget.displayParams.showLegend === false,\n\t\t\trenderTooltip,");
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/widget-factory\/(BarWidget|PieWidget|FunnelWidget|stacked-bar\/StackedBarWidget|horizontal-bar\/HorizontalBarWidget)\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/reports/lib/")) return;
        let contents = await readFile(path, "utf8");
        const component = path.split("/").at(-1);
        const chart = {
          "BarWidget.js": "BaseBarChart",
          "PieWidget.js": "BasePieChart",
          "FunnelWidget.js": "BaseFunnelChart",
          "StackedBarWidget.js": "BaseStackedBarChart",
          "HorizontalBarWidget.js": "BaseHorizontalStackedBarChart",
        }[component];
        const chartStart = `jsx(${chart}, {`;
        contents = replaceOnce(contents, chartStart,
          chartStart + "\n\t\t\thideLegend: widget.displayParams.showLegend === false,");
        if (["BarWidget.js", "StackedBarWidget.js", "HorizontalBarWidget.js"].includes(component)) {
          contents = 'import { GroupedWidgetTotals } from "uis-local-line-widget-totals";\n' + contents;
          const totals = "jsx(GroupedWidgetTotals, { widget, dateFrom, dateTill, goal_ids })";
          if (component === "BarWidget.js") {
            contents = replaceOnce(contents, "caption: totalCaption,", `caption: isWidgetCompareMode ? totalCaption : isDataExist ? ${totals} : null,`);
          } else {
            contents = replaceOnce(contents, "isDataExists: model.groups.length > 0,",
              `isDataExists: model.groups.length > 0,\n\t\tcaption: model.groups.length ? ${totals} : null,`);
          }
        }
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/charts\/funnel\/FunnelVertical\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/charts/lib/")) return;
        let contents = await readFile(path, "utf8");
        contents = replaceOnce(contents, "({ data: defaultData, interactiveTooltip,",
          "({ data: defaultData, hideLegend, interactiveTooltip,");
        contents = replaceOnce(contents, '/* @__PURE__ */ jsx("div", {\n\t\t\t\t\tclassName: styles.compareVerticalLegend,',
          '!hideLegend && /* @__PURE__ */ jsx("div", {\n\t\t\t\t\tclassName: styles.compareVerticalLegend,');
        contents = replaceOnce(contents, '}) }), /* @__PURE__ */ jsx(Legend, {',
          '}) }), !hideLegend && /* @__PURE__ */ jsx(Legend, {');
        return { contents, loader: "js", resolveDir: dirname(path) };
      });

      build.onLoad({ filter: /\/charts\/line\/useLineChartSeries\.js$/ }, async ({ path }) => {
        if (!path.includes("/@comagic/charts/lib/")) return;
        const source = await readFile(path, "utf8");
        const contents = replaceOnce(source, "uniqBy(series, (item) => item.id)",
          "uniqBy(series.filter((item) => !item.hideFromLegend), (item) => item.id)");
        return { contents, loader: "js", resolveDir: dirname(path) };
      });
    },
  };
}
