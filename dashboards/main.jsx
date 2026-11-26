import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "@comagic/ui";
import { CoreContext } from "@comagic/core";
import { ReportsConfigProvider } from "@comagic/reports/lib/providers/reports-config-priovider/ReportsConfigProvider.js";
import { ReportCoreProvider } from "@comagic/reports/lib/providers/report-core-provider/ReportCoreProvider.js";
import { useSystemContext } from "@comagic/reports/lib/providers/system-provider/SystemProvider.js";
import { useGetReportTypes } from "@comagic/reports/lib/hooks/useGetReportTypes.js";
import { DashboardContent } from "@comagic/reports/lib/components/views/report-page-view/DashboardContent.js";
import "@comagic/ui/styles.css";
import "@comagic/charts/styles.css";
import "@comagic/reports/styles.css";
import { installFixtureAdapter } from "./fixtures.js";

const locale = "ru";
const theme = "comagic";
const reportId = 1;
const localApi = new URL("./_fixture", window.location.href);

installFixtureAdapter(localApi);
const apiConfig = {
  dataApi: { url: `${localApi.href}/rpc` },
  reportConstructor: { url: `${localApi.href}/reports` },
  comagicApi: { url: `${localApi.href}/platform` },
};

const core = {
  locale,
  theme,
  accountStore: {
    account: { app_id: 1, user_id: 1, timezone: "Europe/Moscow" },
    hasComponent: () => false,
    hasFeatureFlag: () => false,
    getPermission: () => undefined,
  },
};

function LocalDashboard() {
  const { setWidgetModalParams } = useSystemContext();
  const { aggregated } = useGetReportTypes();
  const ready = aggregated.length > 0;
  useEffect(() => {
    if (ready && new URLSearchParams(window.location.search).has("create")) {
      setWidgetModalParams({ visible: true });
    }
  }, [ready, setWidgetModalParams]);
  return ready ? <DashboardContent /> : null;
}

createRoot(document.querySelector("#uisDashboard")).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <CoreContext.Provider value={core}>
      <ConfigProvider locale={locale} theme={theme}>
        <ReportsConfigProvider locale={locale} theme={theme} currency="RUB" apiConfig={apiConfig}>
          <ReportCoreProvider reportId={reportId} reportType="dashboard" canCreateColumn={false} canCreateDimension={false}>
            <LocalDashboard />
          </ReportCoreProvider>
        </ReportsConfigProvider>
      </ConfigProvider>
    </CoreContext.Provider>
  </BrowserRouter>,
);
