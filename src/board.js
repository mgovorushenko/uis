const APP_STORAGE_KEY = "chat-scenarios-app-v1";
const LEGACY_STORAGE_KEY = "chat-scenario-board-d3-v1";
const ICON_ASSET_VERSION = "2026-05-12-2";
const NODE_W = 300;
const NODE_H = 60;
const NODE_HOVER_H = 62;
const NODE_TEXT_DEFAULT_WIDTH = 216;
const NODE_TEXT_COMPACT_WIDTH = 192;
const NODE_PORT_LEFT_X = -14;
const NODE_PORT_RIGHT_X = NODE_W + 51;
const NODE_PORT_RIGHT_COMPACT_X = NODE_W + 20;
const NODE_PORT_R = 3;
const NODE_PORT_EDGE_GAP = 8;
const NODE_CREATE_GAP_X = 80;
const EDGE_LABEL_SIDE_GAP = 60;
const EDGE_LABEL_PADDING_X = 10;
const GROUP_TRANSFER_EMPLOYEES_BY_GROUP = {
  "Отдел продаж": ["Лемаева Юлия", "Васнецов Николай", "Смирнова Алина", "Орлов Денис"],
  "Служба поддержки": ["Кузнецова Мария", "Павлов Игорь", "Романова Елена", "Фомин Артем", "Громова Дарья", "Соколов Кирилл"],
  "Онлайн-консультанты": ["Мельникова Анна", "Титов Максим"],
  "VIP-клиенты": ["Белова Кристина", "Егоров Михаил", "Зайцева Полина"],
  "Биллинг": ["Тарасова Нина", "Шевцов Олег", "Миронова Юлия", "Галкин Степан", "Руднева Софья"],
  "Новая группа": ["Новый сотрудник 1", "Новый сотрудник 2"],
};
const GROUP_TRANSFER_GROUPS = Object.keys(GROUP_TRANSFER_EMPLOYEES_BY_GROUP).filter((groupName) => groupName !== "Новая группа");
const TRANSFER_EMPLOYEES = ["Мирошников Роман", "Лемаева Юлия", "Васнецов Николай", "Смирнова Алина", "Кузнецова Мария", "Фомин Артем"];
const SIMPLE_TRANSFER_CONFIG = {
  "employee-transfer": {
    title: "На сотрудника",
    requiredField: "employeeName",
    requiredError: "Выберите сотрудника",
    emptySubtitle: "Сотрудник не выбран",
    alert: "Чат будет направлен сразу на выбранного сотрудника",
    icon: "user-20",
  },
  "personal-manager-transfer": {
    title: "На персонального менеджера",
    alert: "Чат будет направлен на персонального менеджера клиента",
    icon: "last-manager",
  },
  "last-manager-transfer": {
    title: "На последнего менеджера",
    alert: "Чат будет направлен на менеджера, с которым клиент общался последним",
    icon: "last-manager",
  },
};
const INFO_MESSAGE_OPERATION = "info-message";
const CONTACT_FORM_OPERATION = "contact-form";
const MENU_OPERATION = "menu-operation";
const SCHEDULE_OPERATION = "schedule-distribution";
const MENU_BUTTON_MAX_LENGTH = 128;
const MENU_BUTTON_MAX_COUNT = 15;
const SCHEDULE_MAX_COUNT = 20;
const EDGE_LABEL_MAX_WIDTH = 160;
const AVAILABLE_SCHEDULES = [
  "Рабочее время",
  "Нерабочее время",
  "Выходные и праздники",
  "Ночная смена",
  "VIP-линия",
  "Дежурная группа",
  "Обеденный перерыв",
  "Регион Москва",
  "Регион Санкт-Петербург",
  "Техническая поддержка 24/7",
  "Первая линия",
  "Вторая линия",
  "Коммерческий отдел",
  "Отдел внедрения",
  "Контроль качества",
  "Смена выходного дня",
  "Утренний график",
  "Вечерний график",
  "Федеральная поддержка",
  "Экстренные обращения",
];
const icons = {
  search: '<circle cx="9" cy="9" r="5"></circle><path d="m13 13 4 4"></path>',
  star: '<path d="m10 2 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L10 2Z"></path>',
  zap: '<path d="M11 2 4 12h6l-1 6 7-10h-6l1-6Z"></path>',
  workflow: '<rect x="3" y="3" width="5" height="5" rx="1"></rect><rect x="12" y="12" width="5" height="5" rx="1"></rect><path d="M8 5.5h3a3 3 0 0 1 3 3V12"></path>',
  message: '<path d="M4 5h12v8H7l-3 3V5Z"></path>',
  settings: '<circle cx="10" cy="10" r="3"></circle><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4"></path>',
  branch: '<circle cx="6" cy="5" r="2"></circle><circle cx="14" cy="15" r="2"></circle><path d="M6 7v3a5 5 0 0 0 5 5h1"></path><path d="M14 5v10"></path>',
  bell: '<path d="M15 8a5 5 0 0 0-10 0c0 6-2 6-2 6h14s-2 0-2-6"></path><path d="M8 18h4"></path>',
  info: '<circle cx="10" cy="10" r="8"></circle><path d="M10 9v5"></path><path d="M10 6h.01"></path>',
  user: '<circle cx="10" cy="6" r="3"></circle><path d="M4 18a6 6 0 0 1 12 0"></path>',
  "arrow-left": '<path d="M12 5 7 10l5 5"></path>',
  clock: '<circle cx="10" cy="10" r="8"></circle><path d="M10 5v5l3 2"></path>',
  help: '<path d="M8.5 8a2 2 0 1 1 3 1.7c-.9.5-1.5 1.1-1.5 2.3"></path><path d="M10 16h.01"></path>',
  undo: '<path d="M7 7 3 11l4 4"></path><path d="M4 11h8a4 4 0 0 1 4 4"></path>',
  redo: '<path d="m13 7 4 4-4 4"></path><path d="M16 11H8a4 4 0 0 0-4 4"></path>',
  fullscreen: '<path d="M3 8V3h5"></path><path d="M17 8V3h-5"></path><path d="M3 12v5h5"></path><path d="M17 12v5h-5"></path>',
  minus: '<path d="M5 10h10"></path>',
  plus: '<path d="M10 5v10"></path><path d="M5 10h10"></path>',
  sparkles: '<path d="M10 2 8.5 7.5 3 9l5.5 1.5L10 16l1.5-5.5L17 9l-5.5-1.5L10 2Z"></path>',
  start: '<path d="M4 10h11"></path><path d="m11 6 4 4-4 4"></path><path d="M4 4v12"></path>',
  form: '<rect x="4" y="4" width="12" height="12" rx="2"></rect><path d="M7 8h6"></path><path d="M7 12h6"></path>',
  users: '<circle cx="8" cy="7" r="3"></circle><path d="M3 17a5 5 0 0 1 10 0"></path><circle cx="15" cy="6" r="2"></circle><path d="M13.5 12.5A4 4 0 0 1 18 16"></path>',
  check: '<circle cx="10" cy="10" r="8"></circle><path d="m6.5 10.5 2.2 2.2 4.8-5.4"></path>',
  flag: '<path d="M5 18V3"></path><path d="M5 4h10l-2 4 2 4H5"></path>',
  add:
    '<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.044 3.502L10.087 3.508L10.129 3.517L10.171 3.53L10.211 3.547L10.25 3.567L10.287 3.59L10.321 3.617L10.354 3.646L10.383 3.679L10.41 3.713L10.433 3.75L10.453 3.789L10.47 3.829L10.483 3.871L10.492 3.913L10.498 3.956L10.5 4V9.5H16L16.044 9.502L16.087 9.508L16.129 9.517L16.171 9.53L16.211 9.547L16.25 9.567L16.287 9.59L16.321 9.617L16.354 9.646L16.383 9.679L16.41 9.713L16.433 9.75L16.453 9.789L16.47 9.829L16.483 9.871L16.492 9.913L16.498 9.956L16.5 10L16.498 10.044L16.492 10.087L16.483 10.129L16.47 10.171L16.453 10.211L16.433 10.25L16.41 10.287L16.383 10.321L16.354 10.354L16.321 10.383L16.287 10.41L16.25 10.433L16.211 10.453L16.171 10.47L16.129 10.483L16.087 10.492L16.044 10.498L16 10.5H10.5V16L10.498 16.044L10.492 16.087L10.483 16.129L10.47 16.171L10.453 16.211L10.433 16.25L10.41 16.287L10.383 16.321L10.354 16.354L10.321 16.383L10.287 16.41L10.25 16.433L10.211 16.453L10.171 16.47L10.129 16.483L10.087 16.492L10.044 16.498L10 16.5L9.95599 16.498L9.91302 16.492L9.87097 16.483L9.82898 16.47L9.789 16.453L9.75 16.433L9.71301 16.41L9.67902 16.383L9.646 16.354L9.617 16.321L9.59003 16.287L9.56702 16.25L9.547 16.211L9.53003 16.171L9.51703 16.129L9.508 16.087L9.50201 16.044L9.5 16V10.5H4L3.95599 10.498L3.91302 10.492L3.87097 10.483L3.82898 10.47L3.789 10.453L3.75 10.433L3.71301 10.41L3.67902 10.383L3.646 10.354L3.617 10.321L3.59003 10.287L3.56702 10.25L3.547 10.211L3.53003 10.171L3.51703 10.129L3.508 10.087L3.50201 10.044L3.5 10L3.50201 9.956L3.508 9.913L3.51703 9.871L3.53003 9.829L3.547 9.789L3.56702 9.75L3.59003 9.713L3.617 9.679L3.646 9.646L3.67902 9.617L3.71301 9.59L3.75 9.567L3.789 9.547L3.82898 9.53L3.87097 9.517L3.91302 9.508L3.95599 9.502L4 9.5H9.5V4L9.50201 3.956L9.508 3.913L9.51703 3.871L9.53003 3.829L9.547 3.789L9.56702 3.75L9.59003 3.713L9.617 3.679L9.646 3.646L9.67902 3.617L9.71301 3.59L9.75 3.567L9.789 3.547L9.82898 3.53L9.87097 3.517L9.91302 3.508L9.95599 3.502L10 3.5L10.044 3.502Z"></path>',
  more:
    '<path fill="currentColor" d="M5.49814 10.0001C5.49814 9.17164 4.82655 8.5 3.99809 8.5C3.16964 8.5 2.49805 9.17164 2.49805 10.0001C2.49805 10.8285 3.16964 11.5001 3.99809 11.5001C4.82655 11.5001 5.49814 10.8285 5.49814 10.0001Z"></path><path fill="currentColor" d="M11.4981 10.0001C11.4981 9.17164 10.8265 8.5 9.99809 8.5C9.16964 8.5 8.49805 9.17164 8.49805 10.0001C8.49805 10.8285 9.16964 11.5001 9.99809 11.5001C10.8265 11.5001 11.4981 10.8285 11.4981 10.0001Z"></path><path fill="currentColor" d="M15.9981 8.5C16.8265 8.5 17.4981 9.17164 17.4981 10.0001C17.4981 10.8285 16.8265 11.5001 15.9981 11.5001C15.1696 11.5001 14.498 10.8285 14.498 10.0001C14.498 9.17164 15.1696 8.5 15.9981 8.5Z"></path>',
};
const designSystemIconFiles = {
  "arrow-left": "./assets/icons/arrow-left-16.svg",
  edit: "./assets/icons/edit-16.svg",
  undo: "./assets/icons/node-back-16.svg",
  redo: "./assets/icons/node-forward-16.svg",
  fullscreen: "./assets/icons/fullscreen-16.svg",
  minus: "./assets/icons/math-minus-16.svg",
  plus: "./assets/icons/math-plus-16.svg",
  clock: "./assets/icons/time-16.svg",
  help: "./assets/icons/question-16.svg",
  cancel: "./assets/icons/cancel_20.svg",
  employees: "./assets/icons/employees_20.svg",
  "user-20": "./assets/icons/user_20.svg",
  "form-modal": "./assets/icons/form_modal_20.svg",
  "info-message": "./assets/icons/info-message_20.svg",
  "interactions-paths": "./assets/icons/interactions-paths_20.svg",
  fail: "./assets/icons/fail_20.svg",
  menu: "./assets/icons/menu_20.svg",
  "time-20": "./assets/icons/time_20.svg",
  distribution: "./assets/icons/distribution_20.svg",
  robot: "./assets/icons/robot_20.svg",
  "row-data": "./assets/icons/row-data_20.svg",
  start: "./assets/icons/start-20.svg",
  form: "./assets/icons/form-20.svg",
  "last-manager": "./assets/icons/last-manager-20.svg",
  success: "./assets/icons/success-20.svg",
  attention: "./assets/icons/attention-20.svg",
  finish: "./assets/icons/finish-20.svg",
  "node-connection-line": "./assets/icons/node-connection-line-20.svg",
  add: "./assets/icons/add_16.svg",
  "add-20": "./assets/icons/add_20.svg",
  more: "./assets/icons/more-horisontal_20.svg",
  "edit-20": "./assets/icons/edit_20.svg",
  "arrow-down": "./assets/icons/arrow-down_20.svg",
  "arrow-up": "./assets/icons/arrow-up_20.svg",
  "arrow-list-down": "./assets/icons/arrow-list-down_20.svg",
  "info-20": "./assets/icons/info_20.svg",
  "search-20": "./assets/icons/search_20.svg",
  "math-plus-20": "./assets/icons/math-plus_20.svg",
  "math-minus-20": "./assets/icons/math-minus_20.svg",
  "drag-and-drop": "./assets/icons/drag-and-drop_20.svg",
  "arrows-both-ways": "./assets/icons/arrows-both-ways_20.svg",
  "copy-20": "./assets/icons/copy_20.svg",
  delete: "./assets/icons/delete_20.svg",
};
const designSystemIcons = {};

const catalog = {
  start: { title: "Входящее сообщение", subtitle: "Каналы: Telegram, Email", color: "var(--cmgui-color-special-1)", icon: "start" },
  form: { title: "Форма сбора контактов", subtitle: "Ожидание контактов: 1 мин.", color: "var(--cmgui-color-special-15)", icon: "form" },
  transfer: { title: "На группу: Отдел продаж", subtitle: "Ожидание ответа: 1 мин.", color: "var(--cmgui-color-special-2)", icon: "last-manager" },
  success: { title: "Чат взят в работу", subtitle: "", color: "var(--cmgui-color-special-1)", icon: "success" },
  message: { title: "Информационное сообщение", subtitle: "Следующая операция через: 1 сек.", color: "var(--cmgui-color-special-15)", icon: "info-message" },
  menuNode: { title: "Меню", subtitle: "Ожидание нажатия кнопки: 20 сек.", color: "var(--cmgui-color-special-13)", icon: "menu" },
  schedule: { title: "Распределение по графику", subtitle: "Графиков: 1", color: "var(--cmgui-color-special-13)", icon: "time-20" },
  empty: { title: "Добавить операцию", subtitle: "", color: "var(--cmgui-color-bg-main-gray-dark)", icon: "attention", muted: true },
  finish: { title: "Завершить сценарий через 72 ч", subtitle: "После отправить чат: Всем сотрудникам", color: "var(--cmgui-color-special-21)", icon: "node-connection-line" },
};

const starter = {
  nodes: [
    node("incoming", "start", 96, 349),
    node("contacts", "form", 440, 349),
    node("sales", "transfer", 904, 257),
    node("taken", "success", 1368, 165),
    node("unset", "empty", 1368, 349),
    node("finish", "finish", 910, 568),
  ],
  edges: [
    edge("incoming", "contacts"),
    edge("contacts", "sales", "Форма заполнена", "plain"),
    edge("contacts", "finish", "Форма не заполнена", "plain"),
    edge("sales", "taken", "Разговор состоялся", "success"),
    edge("sales", "unset", "Менеджер не ответил", "danger"),
  ],
};

let appState = loadAppState();
let state = getCurrentScenario()?.board || createInitialBoard(["Telegram", "Email"]);
let selectedId = null;
let hoveredId = null;
let draggedNodeId = null;
let pendingSourceId = null;
let operationSourceId = null;
let operationReplaceId = null;
let operationOutputKey = null;
let outcomeMenuSourceId = null;
let contextMenuNodeId = null;
let titleEditingNodeId = null;
let settingsNodeId = null;
let settingsDrafts = {};
let settingsErrors = {};
let pendingSettingsNodeIds = new Set();
let isSettingsCloseConfirmOpen = false;
let history = [];
let future = [];
let persistTimer = null;

const svg = d3.select("#scenarioSvg");
const viewport = d3.select("#viewport");
const gridLayer = d3.select("#gridLayer");
const edgeLayer = d3.select("#edgeLayer");
const labelLayer = d3.select("#labelLayer");
const nodeLayer = d3.select("#nodeLayer");
const zoom = d3
  .zoom()
  .scaleExtent([0.25, 1])
  .filter((event) => {
    if (event.type === "wheel") return false;
    if (event.type === "mousedown") return event.button === 2;
    if (event.type === "touchstart" || event.type === "touchmove") return event.touches?.length === 2;
    return false;
  })
  .on("start", (event) => {
    closeOutcomeMenu();
    if (event.sourceEvent?.button === 2 || event.sourceEvent?.touches?.length === 2) {
      document.body.classList.add("is-board-panning");
    }
  })
  .on("zoom", (event) => {
    viewport.attr("transform", event.transform);
    document.querySelector("#zoomLabel").textContent = `${Math.round(event.transform.k * 100)}%`;
    state.viewport = { x: event.transform.x, y: event.transform.y, k: event.transform.k };
    schedulePersistState();
  })
  .on("end", () => {
    document.body.classList.remove("is-board-panning");
  });

svg.call(zoom).on("dblclick.zoom", null);
svg.on("contextmenu", (event) => event.preventDefault());
svg.on("wheel.board", handleTrackpadWheel, { passive: false });
setupIcons();
renderMenu();
wireControls();
drawGrid();
render();
restoreViewport();
renderAppShell();
loadDesignSystemIcons().then(() => {
  setupIcons();
  renderMenu();
  renderAppShell();
  render();
});

function node(id, kind, x, y) {
  return { id, kind, x, y, ...catalog[kind] };
}

function edge(source, target, label = "", tone = "plain", outputKey = "main") {
  return { id: `${source}-${target}-${Math.random().toString(16).slice(2)}`, source, target, label, tone, outputKey };
}

function iconSvg(name, size = 20) {
  if (designSystemIcons[name]) return designSystemIcons[name].replace("<svg ", `<svg width="${size}" height="${size}" `);
  return `<svg viewBox="0 0 20 20" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.workflow}</svg>`;
}

async function loadDesignSystemIcons() {
  await Promise.allSettled(
    Object.entries(designSystemIconFiles).map(async ([name, path]) => {
      const response = await fetch(`${path}?v=${ICON_ASSET_VERSION}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Icon ${name} failed: ${response.status}`);
      const source = await response.text();
      designSystemIcons[name] = source
        .replace(/<svg\b/, '<svg aria-hidden="true" class="ds-icon"')
        .replace(/\swidth="[^"]+"/, "")
        .replace(/\sheight="[^"]+"/, "")
        .replace(/fill="#3D3D3D"/g, 'fill="currentColor"')
        .replace(/fill-rule/g, "fill-rule")
        .replace(/clip-rule/g, "clip-rule");
    }),
  );
}

function setupIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const iconSize = el.classList.contains("icon-button") || el.closest(".top-actions") || el.classList.contains("top-title-edit") ? 16 : 20;
    el.innerHTML = `<span class="cmgui-icon">${iconSvg(el.dataset.icon, iconSize)}</span>`;
  });
}

function renderMenu() {
  const top = ["star", "zap", "workflow", "message", "settings", "branch"];
  const bottom = ["bell", "info", "user"];
  document.querySelector("#menuTop").innerHTML = top
    .map((item, index) => `<button class="cmgui-button cmgui-button-size-extrasmall cmgui-button-secondary cmgui-button-ghost cmgui-button-round icon-button is-compact is-subtle ${index === 4 ? "is-active" : ""}" title="Раздел"><span class="cmgui-icon">${iconSvg(item, 20)}</span></button>`)
    .join("");
  document.querySelector("#menuBottom").innerHTML = bottom
    .map((item) => `<button class="cmgui-button cmgui-button-size-extrasmall cmgui-button-secondary cmgui-button-ghost cmgui-button-round icon-button is-compact is-subtle" title="Раздел"><span class="cmgui-icon">${iconSvg(item, 20)}</span></button>`)
    .join("");
}

function wireControls() {
  document.addEventListener(
    "click",
    (event) => {
      if (outcomeMenuSourceId && !event.target.closest("#outcomeMenu") && !event.target.closest(".node-add-button")) closeOutcomeMenu();
      if (contextMenuNodeId && !event.target.closest("#nodeContextMenu") && !event.target.closest(".node-more-icon")) closeNodeContextMenu();
      if (titleEditingNodeId && !event.target.closest("#nodeTitleEditor")) commitNodeTitleEdit();
      if (!document.body.classList.contains("is-node-settings-open") || isSettingsCloseConfirmOpen) return;
      if (event.target.closest("#nodeSettingsSidebar") || event.target.closest("#nodeSettingsCloseConfirm")) return;
      requestNodeSettingsClose();
    },
    true,
  );
  document.querySelector(".top-back-button").addEventListener("click", showScenarioList);
  document.querySelector("#createScenarioButton").addEventListener("click", openScenarioCreateModal);
  document.querySelector("#createScenarioEmptyButton").addEventListener("click", openScenarioCreateModal);
  document.querySelector("#scenarioCreateModal").addEventListener("click", (event) => {
    if (event.target.id === "scenarioCreateModal") closeScenarioCreateModal();
  });
  document.querySelector("#scenarioCreateClose").addEventListener("click", closeScenarioCreateModal);
  document.querySelector("#scenarioCreateCancel").addEventListener("click", closeScenarioCreateModal);
  document.querySelector("#scenarioCreateForm").addEventListener("submit", createScenarioFromForm);
  document.querySelector("#saveButton").addEventListener("click", saveState);
  document.querySelector("#undoButton").addEventListener("click", undo);
  document.querySelector("#redoButton").addEventListener("click", redo);
  document.querySelector("#zoomInButton").addEventListener("click", () => stepZoom(1));
  document.querySelector("#zoomOutButton").addEventListener("click", () => stepZoom(-1));
  document.querySelector("#zoomLabel").addEventListener("click", setZoom100);
  document.querySelector("#fitButton").addEventListener("click", fitToContent);
  document.querySelector("#operationModal").addEventListener("click", (event) => {
    if (event.target.id === "operationModal") closeOperationModal();
  });
  document.querySelector("#operationModalClose").addEventListener("click", closeOperationModal);
  document.querySelector("#outcomeMenu").addEventListener("click", (event) => {
    const button = event.target.closest("[data-outcome-key]");
    if (!button) return;
    const sourceId = outcomeMenuSourceId;
    const outputKey = button.dataset.outcomeKey;
    closeOutcomeMenu();
    openOperationModal(sourceId, null, outputKey);
  });
  document.querySelector("#nodeContextMenu").addEventListener("click", handleNodeContextMenuClick);
  document.querySelector("#nodeTitleEditor").addEventListener("blur", commitNodeTitleEdit);
  document.querySelector("#nodeTitleEditor").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeNodeTitleEditor(false);
    }
  });
  document.querySelector("#nodeSettingsBackdrop").addEventListener("click", handleNodeSettingsBackdropClick);
  document.querySelector("#nodeSettingsCloseConfirmMask").addEventListener("click", (event) => {
    if (event.target.id === "nodeSettingsCloseConfirmMask") closeSettingsCloseConfirm();
  });
  document.querySelector("#nodeSettingsCloseConfirmX").addEventListener("click", closeSettingsCloseConfirm);
  document.querySelector("#nodeSettingsCloseConfirmCancel").addEventListener("click", closeSettingsCloseConfirm);
  document.querySelector("#nodeSettingsCloseConfirmOk").addEventListener("click", () => {
    closeSettingsCloseConfirm();
    cancelNodeSettings(true);
  });
  document.querySelectorAll(".operation-card").forEach((card) => {
    card.addEventListener("click", () => {
      const sourceId = operationSourceId;
      const replaceId = operationReplaceId;
      const outputKey = operationOutputKey;
      const operationType = card.dataset.operation || null;
      closeOperationModal();
      const nodeId = replaceId ? replaceNodeFromOperation(replaceId, card.dataset.kind || "empty", operationType) : addNode(card.dataset.kind || "empty", sourceId, operationType, outputKey);
      const nodeItem = getNode(nodeId);
      if (nodeItem && isConfigurableNode(nodeItem)) {
        pendingSettingsNodeIds.add(nodeId);
        openNodeSettings(nodeId);
      }
    });
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isSettingsCloseConfirmOpen) {
      closeSettingsCloseConfirm();
      return;
    }
    if (event.key === "Escape" && document.body.classList.contains("is-node-settings-open")) {
      requestNodeSettingsClose();
      return;
    }
    if (event.key === "Escape" && document.body.classList.contains("is-operation-modal-open")) {
      closeOperationModal();
      return;
    }
    if (event.key === "Escape" && document.body.classList.contains("is-scenario-create-open")) {
      closeScenarioCreateModal();
      return;
    }
    if (isEditableEventTarget(event.target)) return;
    if ((event.key === "Backspace" || event.key === "Delete") && selectedId) {
      removeSelected();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      saveState();
    }
  });
}

function handleTrackpadWheel(event) {
  event.preventDefault();
  const delta = normalizeWheel(event);
  const pointer = d3.pointer(event, svg.node());

  if (event.ctrlKey) {
    const factor = Math.pow(2, -delta.y * 0.012);
    svg.call(zoom.scaleBy, factor, pointer);
    return;
  }

  const current = d3.zoomTransform(svg.node());
  const next = current.translate(-delta.x / current.k, -delta.y / current.k);
  svg.call(zoom.transform, next);
}

function normalizeWheel(event) {
  const mode = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
  return {
    x: event.deltaX * mode,
    y: event.deltaY * mode,
  };
}

function drawGrid() {
  const width = 2600;
  const height = 1400;
  const dots = [];
  for (let x = 0; x <= width; x += 16) {
    for (let y = 0; y <= height; y += 16) dots.push({ x, y });
  }
  gridLayer
    .selectAll("circle")
    .data(dots)
    .join("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 1.15)
    .attr("fill", "#D8D8D8")
    .attr("opacity", 0.55);
}

function render() {
  renderEdges();
  renderNodes();
  renderProperties();
  renderNodeSettingsSidebar();
  updateHistoryButtons();
}

function renderAppShell() {
  const hasScenarios = appState.scenarios.length > 0;
  const currentScenario = getCurrentScenario();
  document.body.classList.toggle("is-scenario-list", !currentScenario);
  document.querySelector("#scenarioEmptyState").style.display = hasScenarios ? "none" : "grid";
  renderScenarioList();
  if (currentScenario) {
    document.querySelector(".top-bar strong").textContent = currentScenario.name;
  }
}

function renderScenarioList() {
  const grid = document.querySelector("#scenarioListGrid");
  grid.innerHTML = appState.scenarios
    .map((scenarioItem) => {
      const channels = scenarioItem.channels?.length ? scenarioItem.channels.join(", ") : "Каналы не выбраны";
      const nodesCount = scenarioItem.board?.nodes?.length || 0;
      return `<button class="scenario-list-card" type="button" data-scenario-id="${scenarioItem.id}">
        <span class="scenario-list-card-title">${escapeHtml(scenarioItem.name)}</span>
        <span class="scenario-list-card-meta">${escapeHtml(channels)}</span>
        <span class="scenario-list-card-meta">${nodesCount} операций</span>
      </button>`;
    })
    .join("");
  grid.querySelectorAll(".scenario-list-card").forEach((card) => {
    card.addEventListener("click", () => openScenario(card.dataset.scenarioId));
  });
}

function renderNodes() {
  const nodes = nodeLayer.selectAll(".scenario-node-svg").data(state.nodes, (d) => d.id);
  nodes.exit().remove();
  const enter = nodes
    .enter()
    .append("g")
    .attr("class", "scenario-node-svg")
    .call(
      d3
        .drag()
        .filter((event) => event.button === 0)
        .on("start", function (event, d) {
          event.sourceEvent?.stopPropagation();
          const transform = d3.zoomTransform(svg.node());
          const [pointerX, pointerY] = transform.invert(d3.pointer(event, svg.node()));
          d.dragOffsetX = pointerX - d.x;
          d.dragOffsetY = pointerY - d.y;
          d.dragMoved = false;
          draggedNodeId = d.id;
          selectedId = d.id;
          pushHistory();
          renderProperties();
          nodeLayer.selectAll(".scenario-node-svg").classed("is-selected", (nodeItem) => nodeItem.id === selectedId);
        })
        .on("drag", function (event, d) {
          event.sourceEvent?.stopPropagation();
          const transform = d3.zoomTransform(svg.node());
          const [pointerX, pointerY] = transform.invert(d3.pointer(event, svg.node()));
          d.x = pointerX - (d.dragOffsetX || 0);
          d.y = pointerY - (d.dragOffsetY || 0);
          d.dragMoved = true;
          d3.select(this).attr("transform", `translate(${d.x},${d.y})`);
          renderEdges();
        })
        .on("end", function (event, d) {
          const wasMoved = Boolean(d.dragMoved);
          delete d.dragOffsetX;
          delete d.dragOffsetY;
          delete d.dragMoved;
          draggedNodeId = null;
          const isStillHovered = isPointerOverNode(event, d);
          hoveredId = isStillHovered ? d.id : null;
          if (wasMoved && selectedId === d.id) selectedId = null;
          d3.select(this).classed("is-selected", d.id === selectedId);
          updateNodeText(this, d, d.id === selectedId || d.id === hoveredId);
          renderEdges();
          schedulePersistState();
        }),
    );

  enter.append("rect").attr("class", "node-hover-zone").attr("x", NODE_PORT_LEFT_X - NODE_PORT_R).attr("y", -1).attr("width", NODE_PORT_RIGHT_X + NODE_PORT_R - (NODE_PORT_LEFT_X - NODE_PORT_R)).attr("height", NODE_HOVER_H).attr("rx", 12);
  enter.append("rect").attr("class", "node-hover-card").attr("x", 0).attr("y", -1).attr("width", NODE_W).attr("height", NODE_HOVER_H).attr("rx", 12);
  enter.append("rect").attr("class", "node-card").attr("width", NODE_W).attr("height", NODE_H).attr("rx", 12);
  enter.append("rect").attr("class", "node-icon-bg").attr("x", 16).attr("y", 14).attr("width", 32).attr("height", 32).attr("rx", 8);
  enter.append("g").attr("class", "node-icon-svg").attr("transform", "translate(22,20)");
  const textGroup = enter.append("g").attr("class", "node-text-group");
  textGroup.append("text").attr("class", "node-title-svg").attr("x", 60).attr("y", 27);
  textGroup.append("text").attr("class", "node-subtitle-svg").attr("x", 60).attr("y", 44);
  enter.append("circle").attr("class", "node-hover-dot node-hover-dot-left").attr("cx", NODE_PORT_LEFT_X).attr("cy", 30).attr("r", NODE_PORT_R);
  enter.append("circle").attr("class", "node-hover-dot node-hover-dot-right").attr("cx", NODE_PORT_RIGHT_X).attr("cy", 30).attr("r", NODE_PORT_R);
  const addButton = enter.append("g").attr("class", "node-add-button").attr("transform", `translate(${NODE_W + 8},14)`);
  addButton.append("rect").attr("width", 32).attr("height", 32).attr("rx", 16);
  addButton.append("g").attr("class", "node-add-icon").attr("transform", "translate(8,8)");
  const moreButton = enter.append("g").attr("class", "node-more-icon").attr("transform", `translate(${NODE_W - 48},8)`);
  moreButton.append("rect").attr("class", "node-more-hitarea").attr("width", 44).attr("height", 44).attr("rx", 22);
  moreButton.append("g").attr("class", "node-more-graphic").attr("transform", "translate(12,12)");

  const merged = enter.merge(nodes);
  merged
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .classed("is-selected", (d) => d.id === selectedId)
    .classed("is-muted", (d) => d.muted)
    .classed("is-placeholder", (d) => isPlaceholderNode(d))
    .on("mouseenter", function (event, d) {
      if (draggedNodeId === d.id) return;
      hoveredId = d.id;
      updateNodeText(this, d, true);
      renderEdges();
    })
    .on("mouseleave", function (event, d) {
      if (hoveredId === d.id) hoveredId = null;
      updateNodeText(this, d, d.id === selectedId);
      renderEdges();
    })
    .on("click", (event, d) => {
      event.stopPropagation();
      if (isPlaceholderNode(d)) {
        selectedId = d.id;
        hoveredId = d.id;
        openOperationModal(null, d.id);
        render();
        return;
      }
      if (settingsNodeId === d.id) {
        requestNodeSettingsClose();
        hoveredId = d.id;
        render();
        return;
      }
      selectedId = d.id;
      render();
      if (isConfigurableNode(d)) {
        openNodeSettings(d.id);
      }
    });

  merged.select(".node-icon-bg").attr("fill", (d) => d.color);
  merged.select(".node-icon-bg").attr("x", (d) => (isPlaceholderNode(d) ? 16 : 16)).attr("y", (d) => (isPlaceholderNode(d) ? 14 : 14));
  merged.select(".node-icon-svg").html((d) => iconSvg(isPlaceholderNode(d) ? "add-20" : d.icon, 20));
  merged.select(".node-icon-svg").attr("transform", (d) => (isPlaceholderNode(d) ? "translate(22,20)" : "translate(22,20)"));
  merged.select(".node-add-icon").html(() => iconSvg("add", 16));
  merged.select(".node-more-graphic").html((d) => iconSvg(isPlaceholderNode(d) ? "delete" : "more", 20));
  merged.select(".node-more-icon").attr("transform", (d) => (isPlaceholderNode(d) ? `translate(${NODE_W - 36},20)` : `translate(${NODE_W - 48},8)`));
  merged.select(".node-more-hitarea").attr("width", (d) => (isPlaceholderNode(d) ? 20 : 44)).attr("height", (d) => (isPlaceholderNode(d) ? 20 : 44)).attr("rx", (d) => (isPlaceholderNode(d) ? 10 : 22));
  merged.select(".node-more-graphic").attr("transform", (d) => (isPlaceholderNode(d) ? "translate(0,0)" : "translate(12,12)"));
  merged.select(".node-title-svg").attr("x", (d) => (isPlaceholderNode(d) ? 60 : 60)).attr("y", (d) => (isPlaceholderNode(d) ? 35 : 27));
  merged.select(".node-subtitle-svg").attr("x", (d) => (isPlaceholderNode(d) ? 60 : 60)).attr("y", (d) => (isPlaceholderNode(d) ? 44 : 44));
  merged.select(".node-hover-zone").attr("width", (d) => {
    const rightEdge = isPlaceholderNode(d) ? NODE_W : nodeRightPortX(d) + NODE_PORT_R;
    return rightEdge - (NODE_PORT_LEFT_X - NODE_PORT_R);
  });
  merged.select(".node-hover-dot-left").style("display", (d) => (canReceiveInput(d) ? null : "none"));
  merged.select(".node-hover-dot-right").attr("cx", (d) => nodeRightPortX(d)).style("display", (d) => (hasFreeOutputs(d) && !isPlaceholderNode(d) ? null : "none"));
  merged.select(".node-add-button").style("display", (d) => (hasFreeOutputs(d) && !isPlaceholderNode(d) ? null : "none"));
  merged.select(".node-more-icon").style("display", (d) => (isStartNode(d) ? "none" : null));
  merged.each(function (d) {
    updateNodeText(this, d, d.id === selectedId || d.id === hoveredId);
  });
  merged.select(".node-add-button").on("click", (event, d) => {
    event.stopPropagation();
    if (!hasFreeOutputs(d)) return;
    openOutcomeMenu(d.id);
  });
  merged.select(".node-more-icon").on("click", (event, d) => {
    event.stopPropagation();
    if (isPlaceholderNode(d)) {
      removeNodeById(d.id);
      return;
    }
    if (isStartNode(d)) return;
    openNodeContextMenu(d.id);
  });
  merged.select(".node-hover-dot-right").on("click", (event, d) => {
    event.stopPropagation();
    pendingSourceId = d.id;
    selectedId = d.id;
    render();
  });
  merged.select(".node-hover-dot-left").on("click", (event, d) => {
    event.stopPropagation();
    if (!canReceiveInput(d)) return;
    if (pendingSourceId && pendingSourceId !== d.id) {
      pushHistory();
      state.edges.push(edge(pendingSourceId, d.id));
      pendingSourceId = null;
      render();
      schedulePersistState();
    }
  });

  svg.on("click", () => {
    selectedId = null;
    hoveredId = null;
    pendingSourceId = null;
    operationSourceId = null;
    closeNodeContextMenu();
    render();
  });
}

function openNodeContextMenu(nodeId) {
  const nodeItem = getNode(nodeId);
  const menu = document.querySelector("#nodeContextMenu");
  if (!nodeItem || !menu) return;
  closeOutcomeMenu();
  closeNodeTitleEditor(false);
  contextMenuNodeId = nodeId;
  selectedId = nodeId;
  const transform = d3.zoomTransform(svg.node());
  const screen = transform.apply([nodeItem.x + NODE_W - 8, nodeItem.y + 30]);
  menu.innerHTML = renderNodeContextMenu();
  menu.style.visibility = "hidden";
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  const menuWidth = menu.offsetWidth;
  menu.style.left = `${Math.round(Math.min(screen[0] + 8, window.innerWidth - menuWidth - 16))}px`;
  menu.style.top = `${Math.round(screen[1] - 24)}px`;
  menu.style.visibility = "";
  render();
}

function renderNodeContextMenu() {
  return `<button class="node-context-menu-item" type="button" data-node-menu-action="rename">
      <span class="cmgui-icon">${iconSvg("edit-20", 20)}</span>
      <span>Переименовать</span>
    </button>
    <button class="node-context-menu-item" type="button" data-node-menu-action="replace">
      <span class="cmgui-icon">${iconSvg("arrows-both-ways", 20)}</span>
      <span>Заменить</span>
    </button>
    <button class="node-context-menu-item" type="button" data-node-menu-action="copy">
      <span class="cmgui-icon">${iconSvg("copy-20", 20)}</span>
      <span>Копировать</span>
    </button>
    <button class="node-context-menu-item" type="button" data-node-menu-action="delete">
      <span class="cmgui-icon">${iconSvg("delete", 20)}</span>
      <span>Удалить</span>
    </button>`;
}

function closeNodeContextMenu() {
  contextMenuNodeId = null;
  const menu = document.querySelector("#nodeContextMenu");
  if (!menu) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menu.innerHTML = "";
}

function handleNodeContextMenuClick(event) {
  const button = event.target.closest("[data-node-menu-action]");
  if (!button || !contextMenuNodeId) return;
  event.stopPropagation();
  const nodeId = contextMenuNodeId;
  const action = button.dataset.nodeMenuAction;
  closeNodeContextMenu();
  if (action === "rename") {
    startNodeTitleEdit(nodeId);
    return;
  }
  if (action === "replace") {
    openOperationModal(null, nodeId);
    return;
  }
  if (action === "copy") {
    copyNodeWithoutLinks(nodeId);
    return;
  }
  if (action === "delete") removeNodeById(nodeId);
}

function startNodeTitleEdit(nodeId) {
  const nodeItem = getNode(nodeId);
  const input = document.querySelector("#nodeTitleEditor");
  if (!nodeItem || !input) return;
  titleEditingNodeId = nodeId;
  selectedId = nodeId;
  const transform = d3.zoomTransform(svg.node());
  const [x, y] = transform.apply([nodeItem.x + 60, nodeItem.y + 13]);
  input.value = nodeItem.title || "";
  input.style.left = `${Math.round(x)}px`;
  input.style.top = `${Math.round(y)}px`;
  input.style.width = `${Math.round((isPlaceholderNode(nodeItem) ? 176 : NODE_TEXT_DEFAULT_WIDTH) * transform.k)}px`;
  input.classList.add("is-open");
  input.focus();
  input.select();
}

function commitNodeTitleEdit() {
  if (!titleEditingNodeId) return;
  const input = document.querySelector("#nodeTitleEditor");
  const nodeItem = getNode(titleEditingNodeId);
  if (!input || !nodeItem) {
    closeNodeTitleEditor(false);
    return;
  }
  pushHistory();
  const title = input.value.trim() || defaultTitleForNode(nodeItem);
  nodeItem.title = title;
  closeNodeTitleEditor(false);
  selectedId = nodeItem.id;
  render();
  schedulePersistState();
}

function closeNodeTitleEditor(shouldCommit = true) {
  if (shouldCommit) {
    commitNodeTitleEdit();
    return;
  }
  titleEditingNodeId = null;
  const input = document.querySelector("#nodeTitleEditor");
  if (!input) return;
  input.classList.remove("is-open");
}

function defaultTitleForNode(nodeItem) {
  if (!nodeItem) return "Операция";
  if (nodeItem.operationType === "group-transfer") return "На группу";
  if (SIMPLE_TRANSFER_CONFIG[nodeItem.operationType]) return SIMPLE_TRANSFER_CONFIG[nodeItem.operationType].title;
  if (nodeItem.operationType === INFO_MESSAGE_OPERATION) return "Информационное сообщение";
  if (nodeItem.operationType === CONTACT_FORM_OPERATION) return "Форма сбора контактов";
  if (nodeItem.operationType === MENU_OPERATION) return "Меню";
  if (nodeItem.operationType === SCHEDULE_OPERATION) return "Распределение по графику";
  return catalog[nodeItem.kind]?.title || "Операция";
}

function copyNodeWithoutLinks(nodeId) {
  const sourceNode = getNode(nodeId);
  if (!sourceNode) return;
  pushHistory();
  const copy = clone(sourceNode);
  copy.id = `${sourceNode.kind}-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`;
  copy.x = sourceNode.x + NODE_W + NODE_CREATE_GAP_X;
  copy.y = sourceNode.y;
  delete copy.dragOffsetX;
  delete copy.dragOffsetY;
  delete copy.dragMoved;
  state.nodes.push(copy);
  selectedId = copy.id;
  hoveredId = null;
  render();
  schedulePersistState();
}

function isPointerOverNode(event, nodeItem) {
  const transform = d3.zoomTransform(svg.node());
  const [pointerX, pointerY] = transform.invert(d3.pointer(event, svg.node()));
  const left = nodeItem.x + NODE_PORT_LEFT_X - NODE_PORT_R;
  const rightEdge = isPlaceholderNode(nodeItem) ? NODE_W : nodeRightPortX(nodeItem) + NODE_PORT_R;
  const right = nodeItem.x + rightEdge;
  const top = nodeItem.y - 1;
  const bottom = nodeItem.y + NODE_HOVER_H - 1;
  return pointerX >= left && pointerX <= right && pointerY >= top && pointerY <= bottom;
}

function renderEdges() {
  const edges = edgeLayer.selectAll(".scenario-edge").data(state.edges, (d) => d.id);
  edges.exit().remove();
  edges
    .enter()
    .append("path")
    .attr("class", "scenario-edge")
    .merge(edges)
    .attr("d", edgePath)
    .attr("stroke", colorForTone)
    .attr("marker-end", "url(#arrowPlain)");

  const labels = labelLayer.selectAll(".edge-label-svg").data(state.edges.filter((d) => d.label), (d) => d.id);
  labels.exit().remove();
  const enter = labels.enter().append("g").attr("class", "edge-label-svg");
  enter.append("rect").attr("rx", 4);
  enter.append("text").attr("x", EDGE_LABEL_PADDING_X).attr("y", 12);
  enter.merge(labels).each(function (d) {
    const group = d3.select(this);
    const text = group.select("text").text(d.label);
    const maxTextWidth = EDGE_LABEL_MAX_WIDTH - EDGE_LABEL_PADDING_X * 2;
    fitSvgText(text, d.label, maxTextWidth);
    const width = Math.min(EDGE_LABEL_MAX_WIDTH, Math.ceil(text.node().getComputedTextLength()) + EDGE_LABEL_PADDING_X * 2);
    const p = edgeLabelPoint(d, width);
    group.attr("transform", `translate(${p.x - width / 2},${p.y - 12})`).attr("class", "edge-label-svg");
    group.select("rect").attr("width", width).attr("height", 24).attr("fill", colorForTone);
    text.attr("x", EDGE_LABEL_PADDING_X).attr("y", 12).attr("fill", "white").attr("font", "var(--cmgui-font-caption)");
    group.on("mouseenter", (event) => showEdgeTooltip(event, d.label)).on("mouseleave", hideEdgeTooltip);
  });
}

function showEdgeTooltip(event, text) {
  if (!text) return;
  const tooltip = document.querySelector("#edgeTooltip");
  if (!tooltip) return;
  tooltip.textContent = text;
  tooltip.style.left = `${event.clientX + 12}px`;
  tooltip.style.top = `${event.clientY + 12}px`;
  tooltip.classList.add("is-open");
}

function hideEdgeTooltip() {
  document.querySelector("#edgeTooltip")?.classList.remove("is-open");
}

function updateNodeText(groupElement, nodeData, compact) {
  const group = d3.select(groupElement);
  const titleWidth = isPlaceholderNode(nodeData) ? 176 : compact ? NODE_TEXT_COMPACT_WIDTH : NODE_TEXT_DEFAULT_WIDTH;
  fitSvgText(group.select(".node-title-svg"), nodeData.title, titleWidth);
  fitSvgText(group.select(".node-subtitle-svg"), nodeData.subtitle, compact ? NODE_TEXT_COMPACT_WIDTH : NODE_TEXT_DEFAULT_WIDTH);
  if (isPlaceholderNode(nodeData)) group.select(".node-subtitle-svg").text("");
}

function fitSvgText(textSelection, value, maxWidth) {
  const textNode = textSelection.node();
  if (!textNode) return;
  const fullValue = value || "";
  textSelection.text(fullValue);
  if (!fullValue || textNode.getComputedTextLength() <= maxWidth) return;

  let left = 0;
  let right = fullValue.length;
  let result = "...";
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const next = `${fullValue.slice(0, middle).trimEnd()}...`;
    textSelection.text(next);
    if (textNode.getComputedTextLength() <= maxWidth) {
      result = next;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  textSelection.text(result);
}

function edgePath(d) {
  const a = getNode(d.source);
  const b = getNode(d.target);
  if (!a || !b) return "";
  const route = edgeRoute(a, b, d);
  if (!route) return "";
  if (route.points) return roundedPolylinePath(route.points, route.radius);

  const { x1, y1, x2, y2, layoutX1, layoutX2, midX, radius } = route;
  if (Math.abs(y2 - y1) < 1) return `M ${x1} ${y1} L ${x2} ${y2}`;

  const directionY = y2 > y1 ? 1 : -1;
  const commands = [`M ${x1} ${y1}`];
  if (Math.abs(layoutX1 - x1) > 0.5) commands.push(`L ${layoutX1} ${y1}`);
  commands.push(
    `L ${midX - radius} ${y1}`,
    `Q ${midX} ${y1} ${midX} ${y1 + directionY * radius}`,
    `L ${midX} ${y2 - directionY * radius}`,
    `Q ${midX} ${y2} ${midX + radius} ${y2}`,
    `L ${layoutX2} ${y2}`,
  );
  if (Math.abs(layoutX2 - x2) > 0.5) commands.push(`L ${x2} ${y2}`);
  return commands.join(" ");
}

function edgeLabelPoint(d, labelWidth = EDGE_LABEL_MAX_WIDTH) {
  const a = getNode(d.source);
  const b = getNode(d.target);
  if (!a || !b) return { x: 0, y: 0 };
  const route = edgeRoute(a, b, d);
  if (!route) return { x: 0, y: 0 };
  return { x: b.x - EDGE_LABEL_SIDE_GAP - labelWidth / 2, y: route.y2 };
}

function edgeRoute(sourceNode, targetNode, edgeItem = null) {
  const x1 = sourceNode.x + (isNodePortVisible(sourceNode.id) ? nodeRightPortX(sourceNode) + NODE_PORT_R + NODE_PORT_EDGE_GAP : NODE_W + NODE_PORT_EDGE_GAP);
  const layoutX1 = sourceNode.x + NODE_W + NODE_PORT_EDGE_GAP;
  const y1 = sourceNode.y + NODE_H / 2;
  const x2 = targetNode.x + (isNodePortVisible(targetNode.id) && canReceiveInput(targetNode) ? NODE_PORT_LEFT_X - NODE_PORT_R - NODE_PORT_EDGE_GAP : -NODE_PORT_EDGE_GAP);
  const layoutX2 = targetNode.x - NODE_PORT_EDGE_GAP;
  const y2 = targetNode.y + NODE_H / 2;
  if (layoutX2 <= layoutX1 + 48 && Math.abs(y2 - y1) > 1) {
    const labelWidth = edgeItem?.label ? estimateEdgeLabelWidth(edgeItem.label) : 0;
    const outwardX = layoutX1 + 64;
    const labelLeftX = targetNode.x - EDGE_LABEL_SIDE_GAP * 2 - labelWidth;
    const bridgeX = Math.min(layoutX2 - 64, labelLeftX - 40);
    const midY = y1 + (y2 - y1) / 2;
    const points = [{ x: x1, y: y1 }];
    if (Math.abs(layoutX1 - x1) > 0.5) points.push({ x: layoutX1, y: y1 });
    points.push(
      { x: outwardX, y: y1 },
      { x: outwardX, y: midY },
      { x: bridgeX, y: midY },
      { x: bridgeX, y: y2 },
      { x: layoutX2, y: y2 },
    );
    if (Math.abs(layoutX2 - x2) > 0.5) points.push({ x: x2, y: y2 });
    return {
      x1,
      y1,
      x2,
      y2,
      layoutX1,
      layoutX2,
      radius: 18,
      points,
    };
  }
  const midX = layoutX2 > layoutX1 ? layoutX1 + (layoutX2 - layoutX1) / 2 : Math.max(layoutX1 + 56, targetNode.x + NODE_W + 56);
  const radius = Math.min(18, Math.abs(midX - layoutX1) / 2, Math.abs(layoutX2 - midX) / 2, Math.abs(y2 - y1) / 2);
  return { x1, y1, x2, y2, layoutX1, layoutX2, midX, radius };
}

function roundedPolylinePath(points, radius) {
  if (points.length < 2) return "";
  const commands = [`M ${points[0].x} ${points[0].y}`];
  for (let index = 1; index < points.length - 1; index += 1) {
    const prev = points[index - 1];
    const current = points[index];
    const next = points[index + 1];
    const before = shortenPoint(current, prev, radius);
    const after = shortenPoint(current, next, radius);
    commands.push(`L ${before.x} ${before.y}`);
    commands.push(`Q ${current.x} ${current.y} ${after.x} ${after.y}`);
  }
  const last = points[points.length - 1];
  commands.push(`L ${last.x} ${last.y}`);
  return commands.join(" ");
}

function shortenPoint(from, toward, distance) {
  const dx = toward.x - from.x;
  const dy = toward.y - from.y;
  const length = Math.hypot(dx, dy);
  if (!length) return from;
  const amount = Math.min(distance, length / 2);
  return { x: from.x + (dx / length) * amount, y: from.y + (dy / length) * amount };
}

function isNodePortVisible(nodeId) {
  return nodeId === selectedId || nodeId === hoveredId;
}

function nodeRightPortX(nodeItem) {
  return hasFreeOutputs(nodeItem) && !isPlaceholderNode(nodeItem) ? NODE_PORT_RIGHT_X : NODE_PORT_RIGHT_COMPACT_X;
}

function canReceiveInput(nodeItem) {
  return nodeItem.kind !== "start";
}

function renderProperties() {
  const panel = document.querySelector("#propertiesPanel");
  if (!panel) return;
  const selected = getNode(selectedId);
  if (!selected) {
    panel.className = "properties-panel is-empty";
    panel.innerHTML = `<div class="panel-title"><span class="cmgui-icon">${iconSvg("settings", 16)}</span><span>Свойства</span></div>
      <p>Выберите блок на доске, чтобы изменить текст, цвет и описание операции.</p>`;
    return;
  }

  panel.className = "properties-panel";
  panel.innerHTML = `<div class="panel-title"><span class="cmgui-icon">${iconSvg("settings", 16)}</span><span>Свойства</span></div>
    <label class="cmgui-text-field"><span class="cmgui-text-field-label">Название</span><span class="cmgui-text-field-wrapper"><input class="cmgui-text-field-input" id="propTitle" value="${escapeAttr(selected.title)}"></span></label>
    <label class="cmgui-text-field"><span class="cmgui-text-field-label">Подпись</span><span class="cmgui-text-field-wrapper is-textarea"><textarea class="cmgui-text-field-input" id="propSubtitle">${escapeHtml(selected.subtitle)}</textarea></span></label>
    <label class="cmgui-text-field"><span class="cmgui-text-field-label">Цвет</span><span class="cmgui-text-field-wrapper"><input class="cmgui-text-field-input" id="propColor" type="color" value="${normalizeColorValue(selected.color)}"></span></label>
    <label class="cmgui-select"><span class="cmgui-select-label">Подключить к</span><span class="cmgui-select-field"><select class="cmgui-select-native" id="propConnect"><option value="">Выберите блок</option>${state.nodes
      .filter((nodeItem) => nodeItem.id !== selected.id)
      .map((nodeItem) => `<option value="${nodeItem.id}">${escapeHtml(nodeItem.title)}</option>`)
      .join("")}</select></span></label>
    <label class="cmgui-text-field"><span class="cmgui-text-field-label">Подпись связи</span><span class="cmgui-text-field-wrapper"><input class="cmgui-text-field-input" id="propEdgeLabel" placeholder="Например: Условие выполнено"></span></label>
    <button class="cmgui-button cmgui-button-size-extrasmall cmgui-button-secondary cmgui-button-fill secondary-action" id="connectButton">Создать связь</button>
    <button class="cmgui-button cmgui-button-size-extrasmall cmgui-button-error cmgui-button-fill danger-action" id="deleteButton">Удалить блок</button>`;

  panel.querySelector("#propTitle").addEventListener("input", (event) => updateSelected({ title: event.target.value }));
  panel.querySelector("#propSubtitle").addEventListener("input", (event) => updateSelected({ subtitle: event.target.value }));
  panel.querySelector("#propColor").addEventListener("input", (event) => updateSelected({ color: event.target.value }));
  panel.querySelector("#deleteButton").addEventListener("click", removeSelected);
  panel.querySelector("#connectButton").addEventListener("click", () => {
    const target = panel.querySelector("#propConnect").value;
    const label = panel.querySelector("#propEdgeLabel").value;
    if (!target) return;
    pushHistory();
    state.edges.push(edge(selected.id, target, label, "plain"));
    render();
    schedulePersistState();
  });
}

function addNode(kind, sourceId = null, operationType = null, outputKey = null) {
  pushHistory();
  const sourceNode = sourceId ? getNode(sourceId) : null;
  const position = sourceNode ? nextNodePosition(sourceNode, outputKey) : centerNodePosition();
  const id = `${kind}-${Date.now().toString(36)}`;
  const nextNode = node(id, kind, position.x, position.y);
  configureNodeForOperation(nextNode, operationType);
  state.nodes.push(nextNode);
  if (sourceNode) {
    state.edges.push(createOutputEdge(sourceNode, id, outputKey));
  }
  createOutputPlaceholdersFor(nextNode);
  selectedId = id;
  render();
  schedulePersistState();
  return id;
}

function replacePlaceholderNode(replaceId, kind, operationType = null) {
  pushHistory();
  const target = getNode(replaceId);
  if (!target || !isPlaceholderNode(target)) return addNode(kind, null, operationType);
  Object.assign(target, node(replaceId, kind, target.x, target.y));
  configureNodeForOperation(target, operationType);
  createOutputPlaceholdersFor(target);
  selectedId = replaceId;
  render();
  schedulePersistState();
  return replaceId;
}

function replaceNodeFromOperation(replaceId, kind, operationType = null) {
  const target = getNode(replaceId);
  if (!target) return addNode(kind, null, operationType);
  if (isPlaceholderNode(target)) return replacePlaceholderNode(replaceId, kind, operationType);
  pushHistory();
  closeNodeSettings(false);
  const previousOutgoing = state.edges.filter((edgeItem) => edgeItem.source === replaceId);
  const previousTargets = new Set(previousOutgoing.map((edgeItem) => edgeItem.target));
  const nextNode = node(replaceId, kind, target.x, target.y);
  configureNodeForOperation(nextNode, operationType);
  Object.assign(target, nextNode);
  const outputsByKey = new Map(nodeOutputs(target).map((output) => [output.key, output]));
  const keptTargetIds = new Set();
  state.edges = state.edges.filter((edgeItem) => {
    if (edgeItem.source !== replaceId) return true;
    const output = outputsByKey.get(edgeItem.outputKey || "main");
    if (!output) return false;
    edgeItem.label = output.label || "";
    edgeItem.tone = output.tone || "plain";
    keptTargetIds.add(edgeItem.target);
    return true;
  });
  removeDetachedPlaceholderTargets(previousTargets, keptTargetIds);
  createOutputPlaceholdersFor(target);
  selectedId = replaceId;
  render();
  schedulePersistState();
  return replaceId;
}

function removeDetachedPlaceholderTargets(candidateIds, keptIds = new Set()) {
  const removeIds = new Set(
    Array.from(candidateIds).filter((targetId) => {
      if (keptIds.has(targetId)) return false;
      const targetNode = getNode(targetId);
      if (!isPlaceholderNode(targetNode)) return false;
      return !state.edges.some((edgeItem) => edgeItem.target === targetId || edgeItem.source === targetId);
    }),
  );
  if (!removeIds.size) return;
  state.nodes = state.nodes.filter((nodeItem) => !removeIds.has(nodeItem.id));
  state.edges = state.edges.filter((edgeItem) => !removeIds.has(edgeItem.source) && !removeIds.has(edgeItem.target));
}

function configureNodeForOperation(nodeItem, operationType) {
  if (operationType) nodeItem.operationType = operationType;
  if (operationType === "group-transfer") {
    nodeItem.title = "На группу";
    nodeItem.subtitle = "Группа не выбрана";
    nodeItem.settings = { groupTransfer: createGroupTransferSettings() };
  }
  if (SIMPLE_TRANSFER_CONFIG[operationType]) {
    const config = SIMPLE_TRANSFER_CONFIG[operationType];
    nodeItem.title = config.title;
    nodeItem.subtitle = config.emptySubtitle || "Ожидание ответа: 1 мин.";
    nodeItem.icon = config.icon;
    nodeItem.settings = { simpleTransfer: createSimpleTransferSettings(operationType) };
  }
  if (operationType === INFO_MESSAGE_OPERATION) {
    nodeItem.title = "Информационное сообщение";
    nodeItem.subtitle = "Следующая операция через: 1 сек.";
    nodeItem.color = "var(--cmgui-color-special-15)";
    nodeItem.icon = "info-message";
    nodeItem.settings = { infoMessage: createInfoMessageSettings() };
  }
  if (operationType === CONTACT_FORM_OPERATION) {
    nodeItem.title = "Форма сбора контактов";
    nodeItem.subtitle = "Ожидание контактов: 1 мин.";
    nodeItem.color = "var(--cmgui-color-special-15)";
    nodeItem.icon = "form";
    nodeItem.settings = { contactForm: createContactFormSettings() };
  }
  if (operationType === MENU_OPERATION) {
    nodeItem.title = "Меню";
    nodeItem.subtitle = "Ожидание нажатия кнопки: 20 сек.";
    nodeItem.color = "var(--cmgui-color-special-13)";
    nodeItem.icon = "menu";
    nodeItem.settings = { menu: createMenuSettings() };
  }
  if (operationType === SCHEDULE_OPERATION) {
    nodeItem.title = "Распределение по графику";
    nodeItem.subtitle = "1 график";
    nodeItem.color = "var(--cmgui-color-special-13)";
    nodeItem.icon = "time-20";
    nodeItem.settings = { schedule: createScheduleSettings() };
  }
}

function createOutputPlaceholdersFor(sourceNode) {
  nodeOutputs(sourceNode).forEach((output) => {
    if (!output.placeholder) return;
    createPlaceholderForOutput(sourceNode, output);
  });
  alignOutputPlaceholdersFor(sourceNode);
}

function createFallbackPlaceholderFor(sourceNode) {
  const output = nodeOutputs(sourceNode).find((item) => item.key === "failed");
  if (!output) return null;
  return createPlaceholderForOutput(sourceNode, output);
}

function createPlaceholderForOutput(sourceNode, output) {
  if (state.edges.some((edgeItem) => edgeItem.source === sourceNode.id && edgeItem.outputKey === output.key)) return null;
  const id = `empty-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`;
  const position = nextNodePosition(sourceNode, output.key);
  const placeholder = node(id, "empty", position.x, position.y);
  placeholder.operationType = "fallback-placeholder";
  state.nodes.push(placeholder);
  state.edges.push(edge(sourceNode.id, id, output.label || "", output.tone || "plain", output.key));
  return placeholder;
}

function createOutputEdge(sourceNode, targetId, outputKey = null) {
  const output = outputKey ? nodeOutputs(sourceNode).find((item) => item.key === outputKey) : firstFreeOutput(sourceNode);
  if (!output) return edge(sourceNode.id, targetId);
  return edge(sourceNode.id, targetId, output.label || "", output.tone || "plain", output.key);
}

function alignOutputPlaceholdersFor(sourceNode) {
  if (!sourceNode) return;
  const outputs = nodeOutputs(sourceNode).filter((output) => output.placeholder);
  if (!outputs.length) return;
  const outputByKey = new Map(outputs.map((output) => [output.key, output]));
  const gap = placeholderCreateGap(sourceNode);
  state.edges.forEach((edgeItem) => {
    if (edgeItem.source !== sourceNode.id) return;
    const output = outputByKey.get(edgeItem.outputKey);
    const targetNode = getNode(edgeItem.target);
    if (!output || !isPlaceholderNode(targetNode)) return;
    targetNode.x = sourceNode.x + NODE_W + gap;
    targetNode.y = sourceNode.y + (output.offsetY || 0);
  });
}

function centerNodePosition() {
  const transform = d3.zoomTransform(svg.node());
  const rect = svg.node().getBoundingClientRect();
  const [x, y] = transform.invert([rect.width / 2, rect.height / 2]);
  return { x: x - NODE_W / 2, y: y - NODE_H / 2 };
}

function nextNodePosition(sourceNode, outputKey = null) {
  const output = outputKey ? nodeOutputs(sourceNode).find((item) => item.key === outputKey) : firstFreeOutput(sourceNode);
  const gap = output?.placeholder ? placeholderCreateGap(sourceNode) : NODE_CREATE_GAP_X;
  const offsetY = output?.offsetY || 0;
  return { x: sourceNode.x + NODE_W + gap, y: sourceNode.y + offsetY };
}

function placeholderCreateGap(sourceNode) {
  const widestLabel = nodeOutputs(sourceNode)
    .filter((output) => output.placeholder)
    .reduce((maxWidth, output) => Math.max(maxWidth, estimateEdgeLabelWidth(output.label || "")), 0);
  return widestLabel + EDGE_LABEL_SIDE_GAP * 2;
}

function estimateEdgeLabelWidth(label) {
  if (!label) return 0;
  const canvas = estimateEdgeLabelWidth.canvas || (estimateEdgeLabelWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = "400 11px Roboto, sans-serif";
  return Math.min(EDGE_LABEL_MAX_WIDTH, Math.ceil(context.measureText(String(label)).width) + EDGE_LABEL_PADDING_X * 2);
}

function nodeOutputs(nodeItem) {
  if (!nodeItem) return [];
  if (isPlaceholderNode(nodeItem)) return [];
  if (nodeItem.kind === "start") return [{ key: "main", label: "" }];
  if (isInfoMessageNode(nodeItem)) return [{ key: "delivered", label: "Сообщение доставлено", tone: "success", placeholder: true }];
  if (isContactFormNode(nodeItem)) {
    return [
      { key: "completed", label: "Форма заполнена", tone: "plain", placeholder: true, offsetY: -92 },
      { key: "expired", label: "Форма не заполнена", tone: "plain", placeholder: true, offsetY: 92 },
    ];
  }
  if (isMenuNode(nodeItem)) return menuOutputs(nodeItem);
  if (isScheduleNode(nodeItem)) return scheduleOutputs(nodeItem);
  if (isTransferWithFallbackNode(nodeItem)) return [{ key: "failed", label: "Никто не ответил", tone: "plain", placeholder: true }];
  return [{ key: "main", label: "" }];
}

function menuOutputs(nodeItem) {
  const settings = getMenuSettings(nodeItem);
  const count = Math.max(1, settings.buttons.length);
  const center = (count - 1) / 2;
  return settings.buttons.map((button, index) => ({
    key: button.id,
    label: button.text || `Кнопка ${index + 1}`,
    tone: "plain",
    placeholder: true,
    offsetY: Math.round((index - center) * 92),
  }));
}

function scheduleOutputs(nodeItem) {
  const settings = getScheduleSettings(nodeItem);
  const count = Math.max(1, settings.schedules.length);
  const center = (count - 1) / 2;
  return settings.schedules.map((schedule, index) => ({
    key: schedule.id,
    label: schedule.name || `График ${index + 1}`,
    tone: "plain",
    placeholder: true,
    offsetY: Math.round((index - center) * 92),
  }));
}

function firstFreeOutput(nodeItem) {
  return nodeOutputs(nodeItem).find((output) => !state.edges.some((edgeItem) => edgeItem.source === nodeItem.id && (edgeItem.outputKey || "main") === output.key));
}

function freeOutputs(nodeItem) {
  return nodeOutputs(nodeItem).filter((output) => !state.edges.some((edgeItem) => edgeItem.source === nodeItem.id && (edgeItem.outputKey || "main") === output.key));
}

function hasFreeOutputs(nodeItem) {
  return Boolean(firstFreeOutput(nodeItem));
}

function isPlaceholderNode(nodeItem) {
  return nodeItem?.kind === "empty";
}

function isStartNode(nodeItem) {
  return nodeItem?.kind === "start";
}

function openOutcomeMenu(sourceId) {
  const sourceNode = getNode(sourceId);
  const outputs = freeOutputs(sourceNode);
  if (!sourceNode || !outputs.length) return;
  if (outputs.length === 1 && !outputs[0].label) {
    openOperationModal(sourceId, null, outputs[0].key);
    return;
  }
  outcomeMenuSourceId = sourceId;
  const menu = document.querySelector("#outcomeMenu");
  menu.innerHTML = outputs.map(renderOutcomeMenuItem).join("");
  const transform = d3.zoomTransform(svg.node());
  const screen = transform.apply([sourceNode.x + NODE_W + 8, sourceNode.y + NODE_H / 2]);
  menu.style.visibility = "hidden";
  menu.classList.add("is-open");
  const menuHeight = menu.offsetHeight;
  menu.style.left = `${Math.round(screen[0] + 56)}px`;
  menu.style.top = `${Math.round(screen[1] - menuHeight / 2)}px`;
  menu.style.visibility = "";
  menu.setAttribute("aria-hidden", "false");
}

function closeOutcomeMenu() {
  outcomeMenuSourceId = null;
  const menu = document.querySelector("#outcomeMenu");
  if (!menu) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menu.innerHTML = "";
}

function renderOutcomeMenuItem(output) {
  const iconName = output.tone === "success" ? "success" : output.tone === "danger" || output.key === "failed" ? "fail" : "success";
  const label = output.label || "Основной выход";
  return `<button class="outcome-menu-card" type="button" data-outcome-key="${escapeAttr(output.key)}">
    <span class="outcome-menu-icon">${iconSvg(iconName, 20)}</span>
    <span>${escapeHtml(label)}</span>
  </button>`;
}

function openOperationModal(sourceId = null, replaceId = null, outputKey = null) {
  closeOutcomeMenu();
  closeNodeContextMenu();
  closeNodeTitleEditor(false);
  operationSourceId = sourceId;
  operationReplaceId = replaceId;
  operationOutputKey = outputKey;
  document.body.classList.add("is-operation-modal-open");
  document.querySelector("#operationModal").setAttribute("aria-hidden", "false");
}

function closeOperationModal() {
  document.body.classList.remove("is-operation-modal-open");
  document.querySelector("#operationModal").setAttribute("aria-hidden", "true");
  operationSourceId = null;
  operationReplaceId = null;
  operationOutputKey = null;
  selectedId = null;
  hoveredId = null;
  render();
}

function openNodeSettings(nodeId) {
  closeSettingsCloseConfirm();
  settingsNodeId = nodeId;
  selectedId = nodeId;
  const nodeItem = getNode(nodeId);
  if (nodeItem && !settingsDrafts[nodeId]) settingsDrafts[nodeId] = clone(getNodeSettings(nodeItem));
  document.body.classList.add("is-node-settings-open");
  document.querySelector("#nodeSettingsSidebar").setAttribute("aria-hidden", "false");
  renderNodeSettingsSidebar();
  render();
}

function closeNodeSettings(clearSelection = true) {
  closeSettingsCloseConfirm();
  if (settingsNodeId) delete settingsDrafts[settingsNodeId];
  if (settingsNodeId) delete settingsErrors[settingsNodeId];
  settingsNodeId = null;
  document.body.classList.remove("is-node-settings-open");
  document.querySelector("#nodeSettingsSidebar").setAttribute("aria-hidden", "true");
  if (clearSelection) {
    selectedId = null;
    hoveredId = null;
  }
  renderNodeSettingsSidebar();
  renderEdges();
  closeOutcomeMenu();
  nodeLayer.selectAll(".scenario-node-svg").classed("is-selected", (nodeItem) => nodeItem.id === selectedId);
}

function cancelNodeSettings(clearSelection = true) {
  closeSettingsCloseConfirm();
  closeOutcomeMenu();
  const nodeId = settingsNodeId;
  if (!nodeId || !pendingSettingsNodeIds.has(nodeId)) {
    closeNodeSettings(clearSelection);
    return;
  }

  delete settingsDrafts[nodeId];
  delete settingsErrors[nodeId];
  pendingSettingsNodeIds.delete(nodeId);
  settingsNodeId = null;
  document.body.classList.remove("is-node-settings-open");
  document.querySelector("#nodeSettingsSidebar").setAttribute("aria-hidden", "true");
  removeNodeById(nodeId);
}

function requestNodeSettingsClose() {
  if (!settingsNodeId) return;
  if (pendingSettingsNodeIds.has(settingsNodeId)) {
    cancelNodeSettings(true);
    return;
  }
  if (hasUnsavedNodeSettings(settingsNodeId)) {
    openSettingsCloseConfirm();
    return;
  }
  cancelNodeSettings(true);
}

function handleNodeSettingsBackdropClick() {
  requestNodeSettingsClose();
}

function openSettingsCloseConfirm() {
  isSettingsCloseConfirmOpen = true;
  document.body.classList.add("is-settings-close-confirm-open");
  document.querySelector("#nodeSettingsCloseConfirm").setAttribute("aria-hidden", "false");
}

function closeSettingsCloseConfirm() {
  isSettingsCloseConfirmOpen = false;
  document.body.classList.remove("is-settings-close-confirm-open");
  document.querySelector("#nodeSettingsCloseConfirm")?.setAttribute("aria-hidden", "true");
}

function hasUnsavedNodeSettings(nodeId) {
  const nodeItem = getNode(nodeId);
  if (!nodeItem || !isConfigurableNode(nodeItem)) return false;
  if (pendingSettingsNodeIds.has(nodeId)) return true;
  const draft = settingsDrafts[nodeId];
  if (!draft) return false;
  return stableStringifySettings(nodeItem, draft) !== stableStringifySettings(nodeItem, getNodeSettings(nodeItem));
}

function stableStringifySettings(nodeItem, settings) {
  if (isGroupTransferNode(nodeItem)) return JSON.stringify(normalizeComparableGroupTransferSettings(settings));
  if (isInfoMessageNode(nodeItem)) return JSON.stringify(normalizeComparableInfoMessageSettings(settings));
  if (isContactFormNode(nodeItem)) return JSON.stringify(normalizeComparableContactFormSettings(settings));
  if (isMenuNode(nodeItem)) return JSON.stringify(normalizeComparableMenuSettings(settings));
  if (isScheduleNode(nodeItem)) return JSON.stringify(normalizeComparableScheduleSettings(settings));
  return JSON.stringify(normalizeComparableSimpleTransferSettings(nodeItem.operationType, settings));
}

function normalizeComparableGroupTransferSettings(settings) {
  const normalized = createGroupTransferSettings(settings);
  return {
    groupName: normalized.groupName || "",
    distribution: normalized.distribution,
    responseTimeout: sanitizePositiveInteger(normalized.responseTimeout, 60),
    timeoutUnit: normalized.timeoutUnit,
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
    employees: normalized.employees.map((employee) => ({
      name: employee.name,
      enabled: Boolean(employee.enabled),
      timeout: sanitizePositiveInteger(employee.timeout, 1),
    })),
  };
}

function renderNodeSettingsSidebar() {
  const sidebar = document.querySelector("#nodeSettingsSidebar");
  if (!sidebar) return;
  const nodeItem = getNode(settingsNodeId);
  if (!nodeItem || !isConfigurableNode(nodeItem)) {
    sidebar.innerHTML = "";
    return;
  }

  const settings = getNodeSettingsDraft(nodeItem);
  const errors = settingsErrors[nodeItem.id] || {};
  const bodyScrollTop = sidebar.querySelector(".node-settings-body")?.scrollTop || 0;
  const title = settingsTitleForNode(nodeItem);
  sidebar.innerHTML = `<form class="node-settings-form" id="nodeSettingsForm">
    <header class="node-settings-header">
      <h2>${escapeHtml(title)}</h2>
      <button class="node-settings-close" type="button" id="nodeSettingsClose" title="Закрыть" aria-label="Закрыть">
        <span class="cmgui-icon">${iconSvg("cancel", 20)}</span>
      </button>
    </header>
    <div class="node-settings-body">
      ${renderPrimarySettingsCard(nodeItem, settings, errors)}
      <section class="node-settings-card technical-settings-card ${settings.technicalOpen ? "is-open" : ""}">
        <button class="node-settings-card-head" type="button" id="technicalToggle">
          <span>Технические настройки</span>
          <span class="cmgui-icon">${iconSvg(settings.technicalOpen ? "arrow-up" : "arrow-down", 20)}</span>
        </button>
        ${
          settings.technicalOpen
            ? `<div class="node-settings-card-content">
                <div class="cycle-row">
                  <span>Число циклов, если операция будет зациклена</span>
                  ${renderCounter("cycleLimitInput", settings.cycleLimit, { min: 1, max: 9999999 })}
                </div>
                ${renderSettingsAlert("Настройка будет применяться, если операция зациклена. После прохождения максимального количества циклов, сценарий будет завершен, а чат переадресуется в соответствии с настройками завершения сценария.")}
              </div>`
            : ""
        }
      </section>
    </div>
    <footer class="node-settings-footer">
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-primary cmgui-button-fill" type="submit">Сохранить</button>
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline" type="button" id="nodeSettingsCancel">Отменить</button>
    </footer>
  </form>`;

  wireNodeSettingsSidebar(sidebar, nodeItem, settings);
  const body = sidebar.querySelector(".node-settings-body");
  if (body) body.scrollTop = bodyScrollTop;
}

function renderCounter(id, value, { min = 0, max = 9999999 } = {}) {
  const normalized = Math.min(max, Math.max(min, sanitizePositiveInteger(value, min)));
  return `<div class="cmgui-counter" data-counter-min="${min}" data-counter-max="${max}">
    <button class="cmgui-counter-button cmgui-counter-left" type="button" data-cycle-step="-1" ${normalized <= min ? "disabled" : ""}>
      ${iconSvg("math-minus-20", 20)}
    </button>
    <div class="cmgui-counter-input-container" style="width: 56px">
      <input id="${id}" class="cmgui-counter-input" type="text" pattern="\\d*(?:\\.\\d*)?" value="${normalized}" inputmode="numeric" />
    </div>
    <button class="cmgui-counter-button cmgui-counter-right" type="button" data-cycle-step="1" ${normalized >= max ? "disabled" : ""}>
      ${iconSvg("math-plus-20", 20)}
    </button>
  </div>`;
}

function renderPrimarySettingsCard(nodeItem, settings, errors) {
  if (isGroupTransferNode(nodeItem)) return settings.groupName ? renderGroupTransferCard(settings) : renderEmptyGroupTransferCard(errors);
  if (isInfoMessageNode(nodeItem)) return renderInfoMessageCard(settings, errors);
  if (isContactFormNode(nodeItem)) return renderContactFormCard(settings);
  if (isMenuNode(nodeItem)) return renderMenuCard(settings, errors);
  if (isScheduleNode(nodeItem)) return renderScheduleCard(settings, errors);
  return renderSimpleTransferCard(nodeItem, settings, errors);
}

function renderEmptyGroupTransferCard(errors = {}) {
  return `<section class="node-settings-card">
    <div class="node-settings-card-head is-static">
      <span>Группа не выбрана</span>
    </div>
    <div class="group-picker">
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline add-group-button" type="button" id="addGroupButton" aria-expanded="false">
      <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
      <span>Добавить группу</span>
      </button>
      ${errors.groupName ? `<span class="settings-field-error">${escapeHtml(errors.groupName)}</span>` : ""}
    </div>
  </section>`;
}

function renderGroupTransferCard(settings) {
  return `<section class="node-settings-card group-transfer-card">
    <div class="node-settings-card-head is-static">
      <span>${escapeHtml(settings.groupName)}</span>
      <span class="group-title-actions">
        <button class="node-settings-icon-button" type="button" id="changeGroupButton" title="Сменить группу" aria-label="Сменить группу">${iconSvg("arrows-both-ways", 20)}</button>
        ${settings.groupDropdownOpen ? renderGroupDropdown(settings) : ""}
      </span>
    </div>
    <div class="distribution-row">
      ${renderDesignSelect("distributionSelect", "Порядок распределения сообщений*", settings.distribution, [
        ["all", "Всем сразу"],
        ["queued", "По очереди"],
        ["balanced", "Равномерно"],
      ], settings.distributionDropdownOpen)}
      <span class="group-count">Участвуют ${settings.employees.length} ${formatEmployeeCount(settings.employees.length)}</span>
    </div>
    ${renderEmployeesTable(settings)}
    ${renderResponseTimeout(settings)}
    ${renderSettingsAlert(alertForDistribution(settings.distribution))}
  </section>`;
}

function renderSimpleTransferCard(nodeItem, settings, errors = {}) {
  const config = SIMPLE_TRANSFER_CONFIG[nodeItem.operationType];
  return `<section class="node-settings-card simple-transfer-card">
    <div class="node-settings-card-head is-static">
      <span>Основные параметры</span>
    </div>
    ${renderSettingsAlert(config.alert)}
    ${
      config.requiredField === "employeeName"
        ? `<div class="employee-picker">
            ${renderSimpleSelect("employeeSelect", "Сотрудник*", settings.employeeName || "", TRANSFER_EMPLOYEES.map((name) => [name, name]), settings.employeeDropdownOpen)}
            ${errors.employeeName ? `<span class="settings-field-error">${escapeHtml(errors.employeeName)}</span>` : ""}
          </div>`
        : ""
    }
    ${renderResponseTimeout(settings)}
  </section>`;
}

function renderInfoMessageCard(settings, errors = {}) {
  return `<section class="node-settings-card info-message-card">
    <div class="node-settings-card-head is-static">
      <span>Основные параметры</span>
    </div>
    ${renderSettingsAlert("Клиент получит сообщение, а затем сценарий перейдет к следующей операции (через указанное ниже время)")}
    <label class="cmgui-text-field info-message-textarea">
      <span class="cmgui-text-field-wrapper is-textarea ${errors.messageText ? "is-error" : ""}">
        <textarea class="cmgui-text-field-input" id="messageTextInput" placeholder="Текст сообщения*">${escapeHtml(settings.messageText || "")}</textarea>
      </span>
    </label>
    ${renderTransitionDelay(settings)}
  </section>`;
}

function renderContactFormCard(settings) {
  return `<section class="node-settings-card contact-form-card">
    <div class="node-settings-card-head is-static">
      <span>Основные параметры</span>
    </div>
    ${renderSettingsAlert("Клиенту будет предложено оставить свои контактные данные. Эта операция работает только для онлайн-чатов и не работает для мессенджеров или Email.")}
    <div class="contact-form-preview">
      <div class="contact-form-preview-row">
        <span>Текст сообщения:</span>
        <strong>${escapeHtml(settings.messageText)}</strong>
      </div>
      <div class="contact-form-preview-row">
        <span>ФИО контакта*</span>
        <strong>${escapeHtml(settings.namePlaceholder)}</strong>
      </div>
      <div class="contact-form-preview-row">
        <span>Телефон*</span>
        <strong>${escapeHtml(settings.phonePlaceholder)}</strong>
      </div>
      <div class="contact-form-preview-row">
        <span>Email*</span>
        <strong>${escapeHtml(settings.emailPlaceholder)}</strong>
      </div>
    </div>
    <button class="contact-form-settings-link" type="button" id="contactFormSettingsButton">Перейти к настройкам формы</button>
    ${renderContactWait(settings)}
  </section>`;
}

function renderMenuCard(settings, errors = {}) {
  return `<section class="node-settings-card menu-settings-card">
    <div class="node-settings-card-head is-static">
      <span>Основные параметры</span>
    </div>
    ${renderSettingsAlert("Клиент получит сообщение и предложение выбрать какое-либо действие. От его выбора зависит следующая операция сценария.")}
    <label class="cmgui-text-field info-message-textarea menu-message-textarea">
      <span class="cmgui-text-field-wrapper is-textarea ${errors.messageText ? "is-error" : ""}">
        <textarea class="cmgui-text-field-input" id="menuMessageInput" placeholder="Текст сообщения*">${escapeHtml(settings.messageText || "")}</textarea>
      </span>
    </label>
    ${renderMenuWait(settings)}
  </section>
  <section class="node-settings-card menu-buttons-card">
    <div class="node-settings-card-head is-static">
      <span>Кнопки меню</span>
    </div>
    <div class="menu-buttons-list">
      ${settings.buttons.map((button, index) => renderMenuButtonRow(button, index, settings.buttons.length, errors)).join("")}
    </div>
    <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline menu-add-button" type="button" id="addMenuButton" ${settings.buttons.length >= MENU_BUTTON_MAX_COUNT ? "disabled" : ""}>
      <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
      <span>Добавить кнопку</span>
    </button>
  </section>`;
}

function renderMenuButtonRow(button, index, total, errors = {}) {
  const hasError = errors.buttons?.[button.id];
  return `<div class="menu-button-row" data-menu-button-row="${escapeAttr(button.id)}" draggable="true">
    <div class="menu-button-order">
      <button class="drag-icon" type="button" data-menu-drag-handle="${escapeAttr(button.id)}" title="Перетащить" aria-label="Перетащить">${iconSvg("drag-and-drop", 20)}</button>
      <span class="order-badge">${index + 1}</span>
    </div>
    <label class="cmgui-text-field menu-button-input">
      <span class="cmgui-text-field-wrapper ${hasError ? "is-error" : ""}">
        <input class="cmgui-text-field-input" data-menu-button-input="${escapeAttr(button.id)}" maxlength="${MENU_BUTTON_MAX_LENGTH}" value="${escapeAttr(button.text)}" placeholder="Текст в кнопке*" />
      </span>
    </label>
    <button class="menu-button-remove" type="button" data-menu-button-remove="${escapeAttr(button.id)}" title="Удалить" aria-label="Удалить" ${total <= 1 ? "disabled" : ""}>${iconSvg("cancel", 20)}</button>
  </div>`;
}

function renderScheduleCard(settings, errors = {}) {
  return `<section class="node-settings-card schedule-settings-card">
    <div class="node-settings-card-head is-static">
      <span>График работы</span>
    </div>
    ${renderSettingsAlert("Чат будет обработан в зависимости от активного графика работы. Если активно сразу несколько графиков, то приоритетным будет тот, который находится выше")}
    <div class="menu-buttons-list schedule-list">
      ${settings.schedules.map((schedule, index) => renderScheduleRow(schedule, index, settings.schedules.length, errors)).join("")}
    </div>
    <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline menu-add-button" type="button" id="addScheduleButton" ${settings.schedules.length >= SCHEDULE_MAX_COUNT ? "disabled" : ""}>
      <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
      <span>Добавить график</span>
    </button>
  </section>`;
}

function renderScheduleRow(schedule, index, total, errors = {}) {
  const selectId = `scheduleSelect-${schedule.id}`;
  const hasError = errors.schedules?.[schedule.id];
  return `<div class="menu-button-row schedule-row" data-schedule-row="${escapeAttr(schedule.id)}" draggable="true">
    <div class="menu-button-order">
      <button class="drag-icon" type="button" data-schedule-drag-handle="${escapeAttr(schedule.id)}" title="Перетащить" aria-label="Перетащить">${iconSvg("drag-and-drop", 20)}</button>
      <span class="order-badge">${index + 1}</span>
    </div>
    <div class="schedule-select ${hasError ? "is-error" : ""}">
      ${renderSimpleSelect(selectId, "График*", schedule.name || "", AVAILABLE_SCHEDULES.map((name) => [name, name]), schedule.dropdownOpen)}
    </div>
    <button class="menu-button-remove" type="button" data-schedule-remove="${escapeAttr(schedule.id)}" title="Удалить" aria-label="Удалить" ${total <= 1 ? "disabled" : ""}>${iconSvg("cancel", 20)}</button>
  </div>`;
}

function renderSimpleSelect(id, placeholder, value, options, isOpen) {
  const selected = options.find(([optionValue]) => optionValue === value);
  return `<div class="cmgui-select-container simple-select">
    <div class="cmgui-select cmgui-select-size-medium">
      <button class="cmgui-select-field ${isOpen ? "cmgui-select-field-active" : ""}" type="button" id="${id}" aria-expanded="${isOpen}">
        <span class="cmgui-select-field-output ${selected ? "" : "is-placeholder"}">${escapeHtml(selected ? selected[1] : placeholder)}</span>
        <span class="cmgui-select-field-suffix">${iconSvg("arrow-list-down", 20)}</span>
      </button>
    </div>
    ${isOpen ? renderSelectPopup(id, options) : ""}
  </div>`;
}

function renderEmployeesTable(settings) {
  const showOrder = settings.distribution === "queued";
  const showTimeout = settings.distribution !== "all";
  return `<div class="cmgui-table settings-table ${showOrder ? "has-order" : ""} ${showTimeout ? "has-timeout" : ""}">
    <div class="settings-table-row is-header">
      ${showOrder ? `<div class="settings-th is-order"></div>` : ""}
      <div class="settings-th">Сотрудник</div>
      ${showTimeout ? `<div class="settings-th">Ожидание<br />ответа, сек</div>` : ""}
      <div class="settings-th is-switch"></div>
    </div>
    <div class="settings-table-body">
      ${settings.employees
        .map(
          (employee, index) => `<div class="settings-table-row" ${showOrder ? `draggable="true" data-drag-index="${index}"` : ""}>
            ${showOrder ? `<div class="settings-td is-order"><button class="drag-icon" type="button" data-drag-handle="${index}" title="Перетащить" aria-label="Перетащить">${iconSvg("drag-and-drop", 20)}</button><span class="order-badge">${index + 1}</span></div>` : ""}
            <div class="settings-td">${escapeHtml(employee.name)}</div>
            ${showTimeout ? `<div class="settings-td">${renderCellCounter(`employeeTimeout-${index}`, employee.timeout, index, { min: 1, max: 9999999 })}</div>` : ""}
            <div class="settings-td is-switch"><button class="cmgui-switcher ${employee.enabled ? "is-active" : ""}" type="button" data-employee-index="${index}" aria-pressed="${employee.enabled}"><span></span></button></div>
          </div>`,
        )
        .join("")}
    </div>
  </div>`;
}

function renderCellCounter(id, value, employeeIndex, { min = 0, max = 9999999 } = {}) {
  const normalized = Math.min(max, Math.max(min, sanitizePositiveInteger(value, min)));
  return `<div class="cmgui-counter table-cell-counter" data-counter-min="${min}" data-counter-max="${max}" style="width: 80px">
    <div class="cmgui-counter-input-mini-container">
      <input id="${id}" class="cmgui-counter-input-mini" type="text" pattern="\\d*(?:\\.\\d*)?" value="${normalized}" inputmode="numeric" data-employee-timeout-index="${employeeIndex}" />
    </div>
    <div class="cmgui-counter-button-wrapper">
      <button class="cmgui-counter-button-mini" type="button" data-employee-timeout-index="${employeeIndex}" data-employee-timeout-step="1" ${normalized >= max ? "disabled" : ""}>${iconSvg("arrow-up", 20)}</button>
      <button class="cmgui-counter-button-mini" type="button" data-employee-timeout-index="${employeeIndex}" data-employee-timeout-step="-1" ${normalized <= min ? "disabled" : ""}>${iconSvg("arrow-down", 20)}</button>
    </div>
  </div>`;
}

function renderResponseTimeout(settings) {
  if (settings.distribution && settings.distribution !== "all") return "";
  return `<div class="response-row">
    <span class="response-label">Ожидание ответа</span>
    <input class="response-input" id="responseTimeoutInput" value="${settings.responseTimeout}" inputmode="numeric" />
    <div class="segment-control" role="group" aria-label="Единица времени ожидания">
      <button class="${settings.timeoutUnit === "seconds" ? "is-active" : ""}" type="button" data-time-unit="seconds">Секунд</button>
      <button class="${settings.timeoutUnit === "minutes" ? "is-active" : ""}" type="button" data-time-unit="minutes">Минут</button>
    </div>
  </div>`;
}

function renderTransitionDelay(settings) {
  return `<div class="response-row transition-delay-row">
    <span class="response-label">Переход к следующему шагу через</span>
    <input class="response-input" id="transitionDelayInput" value="${settings.transitionDelay}" inputmode="numeric" />
    <div class="segment-control" role="group" aria-label="Единица времени перехода">
      <button class="${settings.timeoutUnit === "seconds" ? "is-active" : ""}" type="button" data-time-unit="seconds">Секунд</button>
      <button class="${settings.timeoutUnit === "minutes" ? "is-active" : ""}" type="button" data-time-unit="minutes">Минут</button>
    </div>
  </div>`;
}

function renderContactWait(settings) {
  return `<div class="response-row contact-wait-row">
    <span class="response-label">Ожидание контактов</span>
    <input class="response-input" id="contactWaitInput" value="${settings.contactWait}" inputmode="numeric" />
    <div class="segment-control" role="group" aria-label="Единица времени ожидания контактов">
      <button class="${settings.timeoutUnit === "seconds" ? "is-active" : ""}" type="button" data-time-unit="seconds">Секунд</button>
      <button class="${settings.timeoutUnit === "minutes" ? "is-active" : ""}" type="button" data-time-unit="minutes">Минут</button>
    </div>
  </div>`;
}

function renderMenuWait(settings) {
  return `<div class="response-row menu-wait-row">
    <span class="response-label">Ожидание нажатия кнопки:</span>
    <input class="response-input" id="menuWaitInput" value="${settings.waitTime}" inputmode="numeric" />
    <div class="segment-control" role="group" aria-label="Единица времени ожидания кнопки">
      <button class="${settings.timeoutUnit === "seconds" ? "is-active" : ""}" type="button" data-time-unit="seconds">Секунд</button>
      <button class="${settings.timeoutUnit === "minutes" ? "is-active" : ""}" type="button" data-time-unit="minutes">Минут</button>
    </div>
  </div>`;
}

function renderDesignSelect(id, label, value, options, isOpen) {
  const selected = options.find(([optionValue]) => optionValue === value) || options[0];
  return `<div class="cmgui-select-container distribution-select">
    <div class="cmgui-select cmgui-select-size-medium">
      <button class="cmgui-select-field ${isOpen ? "cmgui-select-field-active" : ""}" type="button" id="${id}" aria-expanded="${isOpen}">
        <span class="cmgui-select-label cmgui-select-label-active"><span class="cmgui-select-label-text-active">${escapeHtml(label)}</span></span>
        <span class="cmgui-select-field-output">${escapeHtml(selected[1])}</span>
        <span class="cmgui-select-field-suffix">${iconSvg("arrow-list-down", 20)}</span>
      </button>
    </div>
    ${isOpen ? renderSelectPopup(id, options) : ""}
  </div>`;
}

function renderSelectPopup(id, options) {
  return renderDropdownPopup({
    id,
    options: options.map(([value, title]) => ({ value, title })),
    action: null,
    width: "100%",
  });
}

function renderGroupDropdown(settings) {
  if (!settings.groupDropdownOpen) return "";
  return renderDropdownPopup({
    id: "groupDropdown",
    options: GROUP_TRANSFER_GROUPS.map((groupName) => ({ value: groupName, title: groupName })),
    action: { text: "Добавить новую группу", value: "__create_group__" },
    width: "288px",
  });
}

function renderDropdownPopup({ id, options, action, width }) {
  return `<div class="cmgui-dropdown cmgui-dropdown-placement-bottomLeft node-dropdown" style="width:${width}" role="listbox" aria-label="Список">
    <div class="cmgui-dropdown-content">
      <div class="cmgui-dropdown-inner">
        <label class="cmgui-text-field dropdown-search">
          <span class="cmgui-text-field-wrapper">
            <span class="cmgui-icon">${iconSvg("search-20", 20)}</span>
            <input class="cmgui-text-field-input" data-dropdown-search="${id}" placeholder="Найти" />
          </span>
        </label>
        <ul class="cmgui-list cmgui-list-borderless cmgui-dropdown-list">
          ${options
            .map(
              (option) => `<li class="cmgui-list-li" role="option">
                <button type="button" data-dropdown-id="${id}" data-dropdown-value="${escapeAttr(option.value)}">${escapeHtml(option.title)}</button>
              </li>`,
            )
            .join("")}
        </ul>
        ${
          action
            ? `<div class="dropdown-footer-action">
                <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-ghost" type="button" data-dropdown-id="${id}" data-dropdown-value="${escapeAttr(action.value)}">
                  <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
                  <span>${escapeHtml(action.text)}</span>
                </button>
              </div>`
            : ""
        }
      </div>
    </div>
  </div>`;
}

function renderSettingsAlert(text) {
  return `<div class="cmgui-alert cmgui-alert-default settings-alert">
    <span class="cmgui-alert-icon cmgui-icon">${iconSvg("info-20", 20)}</span>
    <span class="cmgui-alert-description">${escapeHtml(text)}</span>
  </div>`;
}

function wireNodeSettingsSidebar(sidebar, nodeItem, settings) {
  sidebar.querySelector("#nodeSettingsClose")?.addEventListener("click", () => cancelNodeSettings(true));
  sidebar.querySelector("#nodeSettingsCancel")?.addEventListener("click", () => cancelNodeSettings(true));
  sidebar.querySelector("#nodeSettingsForm")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && isEditableEventTarget(event.target)) event.preventDefault();
  });
  sidebar.querySelector("#nodeSettingsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextSettings = collectNodeSettings(sidebar, nodeItem, getNodeSettingsDraft(nodeItem));
    const validationErrors = validateNodeSettings(nodeItem, nextSettings);
    if (Object.keys(validationErrors).length) {
      settingsErrors[nodeItem.id] = validationErrors;
      updateNodeSettingsDraft(nodeItem, closeDropdownPatchForNode(nodeItem));
      renderNodeSettingsSidebar();
      return;
    }
    pushHistory();
    saveNodeSettings(nodeItem, nextSettings);
    delete settingsDrafts[nodeItem.id];
    delete settingsErrors[nodeItem.id];
    pendingSettingsNodeIds.delete(nodeItem.id);
    closeNodeSettings(true);
    render();
    schedulePersistState();
  });
  sidebar.querySelector("#addGroupButton")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { groupDropdownOpen: !settings.groupDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector("#changeGroupButton")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { groupDropdownOpen: !settings.groupDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector(".group-picker")?.insertAdjacentHTML("beforeend", renderGroupDropdown(settings));
  sidebar.querySelectorAll("[data-dropdown-id='groupDropdown']").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.dropdownValue;
      const groupName = value === "__create_group__" ? "Новая группа" : value;
      delete settingsErrors[nodeItem.id];
      updateNodeSettingsDraft(nodeItem, { groupName, groupDropdownOpen: false, employees: createEmployeesForGroup(groupName) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#employeeSelect")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { employeeDropdownOpen: !settings.employeeDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-dropdown-id='employeeSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      delete settingsErrors[nodeItem.id];
      updateNodeSettingsDraft(nodeItem, { employeeName: button.dataset.dropdownValue, employeeDropdownOpen: false });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#technicalToggle")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { technicalOpen: !settings.technicalOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector(".technical-settings-card:not(.is-open)")?.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    updateNodeSettingsDraft(nodeItem, { technicalOpen: true });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector("#distributionSelect")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { distributionDropdownOpen: !settings.distributionDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-dropdown-id='distributionSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      updateNodeSettingsDraft(nodeItem, { distribution: button.dataset.dropdownValue, distributionDropdownOpen: false });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-time-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      updateNodeSettingsDraft(nodeItem, { timeoutUnit: button.dataset.timeUnit });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#responseTimeoutInput")?.addEventListener("input", (event) => {
    const responseTimeout = sanitizePositiveInteger(event.target.value, settings.responseTimeout);
    updateNodeSettingsDraft(nodeItem, { responseTimeout });
  });
  sidebar.querySelector("#transitionDelayInput")?.addEventListener("input", (event) => {
    const transitionDelay = sanitizePositiveInteger(event.target.value, settings.transitionDelay);
    updateNodeSettingsDraft(nodeItem, { transitionDelay });
  });
  sidebar.querySelector("#contactWaitInput")?.addEventListener("input", (event) => {
    const contactWait = sanitizePositiveInteger(event.target.value, settings.contactWait);
    updateNodeSettingsDraft(nodeItem, { contactWait });
  });
  sidebar.querySelector("#menuWaitInput")?.addEventListener("input", (event) => {
    const waitTime = sanitizePositiveInteger(event.target.value, settings.waitTime);
    updateNodeSettingsDraft(nodeItem, { waitTime });
  });
  sidebar.querySelector("#menuMessageInput")?.addEventListener("input", (event) => {
    const errors = { ...(settingsErrors[nodeItem.id] || {}) };
    if (event.target.value.trim()) {
      delete errors.messageText;
      settingsErrors[nodeItem.id] = errors;
      event.target.closest(".cmgui-text-field-wrapper")?.classList.remove("is-error");
    }
    updateNodeSettingsDraft(nodeItem, { messageText: event.target.value });
  });
  sidebar.querySelector("#menuMessageInput")?.addEventListener("blur", (event) => {
    if (event.target.value.trim()) return;
    settingsErrors[nodeItem.id] = { ...(settingsErrors[nodeItem.id] || {}), messageText: true };
    event.target.closest(".cmgui-text-field-wrapper")?.classList.add("is-error");
  });
  sidebar.querySelectorAll("[data-menu-button-input]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const id = event.target.dataset.menuButtonInput;
      const text = event.target.value.slice(0, MENU_BUTTON_MAX_LENGTH);
      const draft = getNodeSettingsDraft(nodeItem);
      const buttons = draft.buttons.map((button) => (button.id === id ? { ...button, text } : button));
      const errors = { ...(settingsErrors[nodeItem.id] || {}) };
      if (text.trim() && errors.buttons) {
        delete errors.buttons[id];
        settingsErrors[nodeItem.id] = errors;
        event.target.closest(".cmgui-text-field-wrapper")?.classList.remove("is-error");
      }
      updateNodeSettingsDraft(nodeItem, { buttons });
    });
    input.addEventListener("blur", (event) => {
      if (event.target.value.trim()) return;
      const id = event.target.dataset.menuButtonInput;
      settingsErrors[nodeItem.id] = {
        ...(settingsErrors[nodeItem.id] || {}),
        buttons: { ...((settingsErrors[nodeItem.id] || {}).buttons || {}), [id]: true },
      };
      event.target.closest(".cmgui-text-field-wrapper")?.classList.add("is-error");
    });
  });
  sidebar.querySelector("#addMenuButton")?.addEventListener("click", () => {
    const draft = getNodeSettingsDraft(nodeItem);
    if (draft.buttons.length >= MENU_BUTTON_MAX_COUNT) return;
    updateNodeSettingsDraft(nodeItem, { buttons: [...draft.buttons, createMenuButton(`Кнопка ${draft.buttons.length + 1}`)] });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-menu-button-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = getNodeSettingsDraft(nodeItem);
      if (draft.buttons.length <= 1) return;
      updateNodeSettingsDraft(nodeItem, { buttons: draft.buttons.filter((item) => item.id !== button.dataset.menuButtonRemove) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-menu-button-row]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", row.dataset.menuButtonRow);
      row.classList.add("is-dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("is-dragging"));
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      row.classList.add("is-drop-target");
    });
    row.addEventListener("dragleave", () => row.classList.remove("is-drop-target"));
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("is-drop-target");
      const fromId = event.dataTransfer.getData("text/plain");
      const toId = row.dataset.menuButtonRow;
      if (!fromId || !toId || fromId === toId) return;
      const draft = getNodeSettingsDraft(nodeItem);
      const fromIndex = draft.buttons.findIndex((button) => button.id === fromId);
      const toIndex = draft.buttons.findIndex((button) => button.id === toId);
      if (fromIndex < 0 || toIndex < 0) return;
      updateNodeSettingsDraft(nodeItem, { buttons: moveArrayItem(draft.buttons, fromIndex, toIndex) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[id^='scheduleSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const scheduleId = button.id.replace("scheduleSelect-", "");
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, {
        schedules: draft.schedules.map((schedule) => (schedule.id === scheduleId ? { ...schedule, dropdownOpen: !schedule.dropdownOpen } : { ...schedule, dropdownOpen: false })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-dropdown-id^='scheduleSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const scheduleId = button.dataset.dropdownId.replace("scheduleSelect-", "");
      const value = button.dataset.dropdownValue;
      const errors = { ...(settingsErrors[nodeItem.id] || {}) };
      if (errors.schedules) {
        delete errors.schedules[scheduleId];
        settingsErrors[nodeItem.id] = errors;
      }
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, {
        schedules: draft.schedules.map((schedule) => (schedule.id === scheduleId ? { ...schedule, name: value, dropdownOpen: false } : { ...schedule, dropdownOpen: false })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#addScheduleButton")?.addEventListener("click", () => {
    const draft = getNodeSettingsDraft(nodeItem);
    if (draft.schedules.length >= SCHEDULE_MAX_COUNT) return;
    const nextScheduleName = AVAILABLE_SCHEDULES.find((name) => !draft.schedules.some((schedule) => schedule.name === name)) || AVAILABLE_SCHEDULES[0];
    updateNodeSettingsDraft(nodeItem, { schedules: [...draft.schedules, createScheduleItem(nextScheduleName)] });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-schedule-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = getNodeSettingsDraft(nodeItem);
      if (draft.schedules.length <= 1) return;
      updateNodeSettingsDraft(nodeItem, { schedules: draft.schedules.filter((item) => item.id !== button.dataset.scheduleRemove) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-schedule-row]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", row.dataset.scheduleRow);
      row.classList.add("is-dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("is-dragging"));
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      row.classList.add("is-drop-target");
    });
    row.addEventListener("dragleave", () => row.classList.remove("is-drop-target"));
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("is-drop-target");
      const fromId = event.dataTransfer.getData("text/plain");
      const toId = row.dataset.scheduleRow;
      if (!fromId || !toId || fromId === toId) return;
      const draft = getNodeSettingsDraft(nodeItem);
      const fromIndex = draft.schedules.findIndex((schedule) => schedule.id === fromId);
      const toIndex = draft.schedules.findIndex((schedule) => schedule.id === toId);
      if (fromIndex < 0 || toIndex < 0) return;
      updateNodeSettingsDraft(nodeItem, { schedules: moveArrayItem(draft.schedules, fromIndex, toIndex) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#messageTextInput")?.addEventListener("input", (event) => {
    const errors = { ...(settingsErrors[nodeItem.id] || {}) };
    if (event.target.value.trim()) {
      delete errors.messageText;
      settingsErrors[nodeItem.id] = errors;
      event.target.closest(".cmgui-text-field-wrapper")?.classList.remove("is-error");
    }
    updateNodeSettingsDraft(nodeItem, { messageText: event.target.value });
  });
  sidebar.querySelector("#messageTextInput")?.addEventListener("blur", (event) => {
    if (event.target.value.trim()) return;
    settingsErrors[nodeItem.id] = { ...(settingsErrors[nodeItem.id] || {}), messageText: true };
    event.target.closest(".cmgui-text-field-wrapper")?.classList.add("is-error");
  });
  sidebar.querySelector("#cycleLimitInput")?.addEventListener("input", (event) => {
    if (/^\d*(?:\.\d*)?$/.test(event.target.value)) {
      const cycleLimit = sanitizePositiveInteger(event.target.value, settings.cycleLimit);
      updateNodeSettingsDraft(nodeItem, { cycleLimit });
      return;
    }
    event.target.value = settings.cycleLimit;
  });
  sidebar.querySelectorAll("[data-cycle-step]").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      if (button.disabled || event.button !== 0) return;
      event.preventDefault();
      const draft = getNodeSettingsDraft(nodeItem);
      const next = Math.max(1, draft.cycleLimit + Number(button.dataset.cycleStep));
      updateNodeSettingsDraft(nodeItem, { cycleLimit: next });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-employee-timeout-index]").forEach((control) => {
    if (control.matches("input")) {
      control.addEventListener("input", (event) => {
        const draft = getNodeSettingsDraft(nodeItem);
        const currentEmployee = draft.employees[Number(event.target.dataset.employeeTimeoutIndex)];
        if (!/^\d*(?:\.\d*)?$/.test(event.target.value)) {
          event.target.value = currentEmployee?.timeout || 1;
          return;
        }
        const index = Number(event.target.dataset.employeeTimeoutIndex);
        const employees = draft.employees.map((employee, employeeIndex) =>
          employeeIndex === index ? { ...employee, timeout: sanitizePositiveInteger(event.target.value, employee.timeout) } : employee,
        );
        updateNodeSettingsDraft(nodeItem, { employees });
      });
      return;
    }
    control.addEventListener("mousedown", (event) => {
      if (control.disabled || event.button !== 0) return;
      event.preventDefault();
      const draft = getNodeSettingsDraft(nodeItem);
      const index = Number(control.dataset.employeeTimeoutIndex);
      const step = Number(control.dataset.employeeTimeoutStep);
      const employees = draft.employees.map((employee, employeeIndex) =>
        employeeIndex === index ? { ...employee, timeout: Math.max(1, employee.timeout + step) } : employee,
      );
      updateNodeSettingsDraft(nodeItem, { employees });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-drag-index]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", row.dataset.dragIndex);
      row.classList.add("is-dragging");
    });
    row.addEventListener("dragend", () => {
      row.classList.remove("is-dragging");
    });
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      row.classList.add("is-drop-target");
    });
    row.addEventListener("dragleave", () => {
      row.classList.remove("is-drop-target");
    });
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("is-drop-target");
      const fromIndex = Number(event.dataTransfer.getData("text/plain"));
      const toIndex = Number(row.dataset.dragIndex);
      if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex) || fromIndex === toIndex) return;
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, { employees: moveArrayItem(draft.employees, fromIndex, toIndex) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-employee-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = getNodeSettingsDraft(nodeItem);
      const index = Number(button.dataset.employeeIndex);
      const employees = draft.employees.map((employee, employeeIndex) => (employeeIndex === index ? { ...employee, enabled: !employee.enabled } : employee));
      updateNodeSettingsDraft(nodeItem, { employees });
      renderNodeSettingsSidebar();
    });
  });
}

function collectGroupTransferSettings(sidebar, settings) {
  return {
    ...settings,
    distribution: sidebar.querySelector("#distributionSelect")?.value || settings.distribution,
    responseTimeout: sanitizePositiveInteger(sidebar.querySelector("#responseTimeoutInput")?.value, settings.responseTimeout),
    cycleLimit: sanitizePositiveInteger(sidebar.querySelector("#cycleLimitInput")?.value, settings.cycleLimit),
  };
}

function collectNodeSettings(sidebar, nodeItem, settings) {
  if (isGroupTransferNode(nodeItem)) return collectGroupTransferSettings(sidebar, settings);
  if (isInfoMessageNode(nodeItem)) return collectInfoMessageSettings(sidebar, settings);
  if (isContactFormNode(nodeItem)) return collectContactFormSettings(sidebar, settings);
  if (isMenuNode(nodeItem)) return collectMenuSettings(sidebar, settings);
  if (isScheduleNode(nodeItem)) return collectScheduleSettings(settings);
  return collectSimpleTransferSettings(sidebar, nodeItem, settings);
}

function collectSimpleTransferSettings(sidebar, nodeItem, settings) {
  return createSimpleTransferSettings(nodeItem.operationType, {
    ...settings,
    responseTimeout: sanitizePositiveInteger(sidebar.querySelector("#responseTimeoutInput")?.value, settings.responseTimeout),
    cycleLimit: sanitizePositiveInteger(sidebar.querySelector("#cycleLimitInput")?.value, settings.cycleLimit),
  });
}

function collectInfoMessageSettings(sidebar, settings) {
  return createInfoMessageSettings({
    ...settings,
    messageText: sidebar.querySelector("#messageTextInput")?.value || "",
    transitionDelay: sanitizePositiveInteger(sidebar.querySelector("#transitionDelayInput")?.value, settings.transitionDelay),
    cycleLimit: sanitizePositiveInteger(sidebar.querySelector("#cycleLimitInput")?.value, settings.cycleLimit),
  });
}

function collectContactFormSettings(sidebar, settings) {
  return createContactFormSettings({
    ...settings,
    contactWait: sanitizePositiveInteger(sidebar.querySelector("#contactWaitInput")?.value, settings.contactWait),
    cycleLimit: sanitizePositiveInteger(sidebar.querySelector("#cycleLimitInput")?.value, settings.cycleLimit),
  });
}

function collectMenuSettings(sidebar, settings) {
  return createMenuSettings({
    ...settings,
    messageText: sidebar.querySelector("#menuMessageInput")?.value || "",
    waitTime: sanitizePositiveInteger(sidebar.querySelector("#menuWaitInput")?.value, settings.waitTime),
    cycleLimit: sanitizePositiveInteger(sidebar.querySelector("#cycleLimitInput")?.value, settings.cycleLimit),
    buttons: settings.buttons.map((button) => ({
      ...button,
      text: (sidebar.querySelector(`[data-menu-button-input="${cssEscape(button.id)}"]`)?.value || button.text).slice(0, MENU_BUTTON_MAX_LENGTH),
    })),
  });
}

function collectScheduleSettings(settings) {
  return createScheduleSettings(settings);
}

function validateNodeSettings(nodeItem, settings) {
  if (isGroupTransferNode(nodeItem)) return settings.groupName ? {} : { groupName: "Выберите отдел" };
  if (isInfoMessageNode(nodeItem)) return settings.messageText.trim() ? {} : { messageText: true };
  if (isContactFormNode(nodeItem)) return {};
  if (isMenuNode(nodeItem)) return validateMenuSettings(settings);
  if (isScheduleNode(nodeItem)) return validateScheduleSettings(settings);
  const config = SIMPLE_TRANSFER_CONFIG[nodeItem.operationType];
  if (config?.requiredField === "employeeName" && !settings.employeeName) return { employeeName: config.requiredError };
  return {};
}

function closeDropdownPatchForNode(nodeItem) {
  if (isGroupTransferNode(nodeItem)) return { groupDropdownOpen: false, distributionDropdownOpen: false };
  if (isInfoMessageNode(nodeItem)) return {};
  if (isContactFormNode(nodeItem)) return {};
  if (isMenuNode(nodeItem)) return {};
  if (isScheduleNode(nodeItem)) return {};
  return { employeeDropdownOpen: false };
}

function validateMenuSettings(settings) {
  const errors = {};
  if (!settings.messageText.trim()) errors.messageText = true;
  const buttonErrors = {};
  settings.buttons.forEach((button) => {
    if (!button.text.trim()) buttonErrors[button.id] = true;
  });
  if (Object.keys(buttonErrors).length) errors.buttons = buttonErrors;
  return errors;
}

function validateScheduleSettings(settings) {
  const scheduleErrors = {};
  settings.schedules.forEach((schedule) => {
    if (!schedule.name) scheduleErrors[schedule.id] = true;
  });
  return Object.keys(scheduleErrors).length ? { schedules: scheduleErrors } : {};
}

function createGroupTransferSettings(overrides = {}) {
  const defaults = {
    groupName: "",
    distribution: "all",
    responseTimeout: 60,
    timeoutUnit: "seconds",
    cycleLimit: 1,
    technicalOpen: false,
    groupDropdownOpen: false,
    distributionDropdownOpen: false,
    employees: createEmployeesForGroup(overrides.groupName || "Отдел продаж"),
  };
  const settings = {
    ...defaults,
    ...overrides,
  };
  if (!Array.isArray(settings.employees) || !settings.employees.length) settings.employees = defaults.employees;
  return settings;
}

function createSimpleTransferSettings(operationType, overrides = {}) {
  const defaults = {
    operationType,
    employeeName: "",
    responseTimeout: 60,
    timeoutUnit: "seconds",
    cycleLimit: 1,
    technicalOpen: false,
    employeeDropdownOpen: false,
  };
  return { ...defaults, ...overrides, operationType };
}

function createInfoMessageSettings(overrides = {}) {
  const defaults = {
    messageText: "",
    transitionDelay: 1,
    timeoutUnit: "seconds",
    cycleLimit: 1,
    technicalOpen: false,
  };
  return { ...defaults, ...overrides };
}

function createContactFormSettings(overrides = {}) {
  const defaults = {
    messageText: "Заполните ваши контактные данные и мы свяжемся с вами в течение 15 минут",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "Ваш телефон",
    emailPlaceholder: "Ваш Email",
    contactWait: 60,
    timeoutUnit: "seconds",
    cycleLimit: 1,
    technicalOpen: false,
  };
  return { ...defaults, ...overrides };
}

function createMenuSettings(overrides = {}) {
  const defaultButtons = [createMenuButton("Кнопка 1")];
  const settings = {
    messageText: "",
    waitTime: 20,
    timeoutUnit: "seconds",
    cycleLimit: 1,
    technicalOpen: false,
    buttons: defaultButtons,
    ...overrides,
  };
  const buttons = Array.isArray(settings.buttons) && settings.buttons.length ? settings.buttons : defaultButtons;
  return {
    ...settings,
    buttons: buttons.slice(0, MENU_BUTTON_MAX_COUNT).map((button, index) => ({
      id: button.id || `menu-button-${Date.now().toString(36)}-${index}`,
      text: String(button.text || `Кнопка ${index + 1}`).slice(0, MENU_BUTTON_MAX_LENGTH),
    })),
  };
}

function createMenuButton(text = "") {
  return {
    id: `menu-button-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    text: String(text).slice(0, MENU_BUTTON_MAX_LENGTH),
  };
}

function createScheduleSettings(overrides = {}) {
  const defaultSchedules = [createScheduleItem(AVAILABLE_SCHEDULES[0])];
  const settings = {
    cycleLimit: 1,
    technicalOpen: false,
    schedules: defaultSchedules,
    ...overrides,
  };
  const schedules = Array.isArray(settings.schedules) && settings.schedules.length ? settings.schedules : defaultSchedules;
  return {
    ...settings,
    schedules: schedules.slice(0, SCHEDULE_MAX_COUNT).map((schedule, index) => ({
      id: schedule.id || `schedule-${Date.now().toString(36)}-${index}`,
      name: AVAILABLE_SCHEDULES.includes(schedule.name) ? schedule.name : schedule.name || (index === 0 ? AVAILABLE_SCHEDULES[0] : ""),
      dropdownOpen: Boolean(schedule.dropdownOpen),
    })),
  };
}

function createScheduleItem(name = "") {
  return {
    id: `schedule-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    name,
    dropdownOpen: false,
  };
}

function createEmployeesForGroup(groupName) {
  const names = GROUP_TRANSFER_EMPLOYEES_BY_GROUP[groupName] || GROUP_TRANSFER_EMPLOYEES_BY_GROUP["Отдел продаж"];
  return names.map((name, index) => ({ name, enabled: true, timeout: index === names.length - 1 && names.length > 2 ? 1500 : 15 }));
}

function formatScheduleCount(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "график";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "графика";
  return "графиков";
}

function formatEmployeeCount(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "сотрудник";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "сотрудника";
  return "сотрудников";
}

function getGroupTransferSettings(nodeItem) {
  const existing = nodeItem.settings?.groupTransfer || {};
  const inferredGroupName = existing.groupName ?? inferGroupName(nodeItem.title);
  return createGroupTransferSettings({
    ...existing,
    groupName: inferredGroupName,
    technicalOpen: existing.technicalOpen ?? false,
    employees: Array.isArray(existing.employees) && existing.employees.length ? existing.employees : undefined,
  });
}

function getSimpleTransferSettings(nodeItem) {
  const existing = nodeItem.settings?.simpleTransfer || {};
  const inferredEmployeeName = existing.employeeName ?? inferEmployeeName(nodeItem.title);
  return createSimpleTransferSettings(nodeItem.operationType, {
    ...existing,
    employeeName: inferredEmployeeName,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getInfoMessageSettings(nodeItem) {
  const existing = nodeItem.settings?.infoMessage || {};
  return createInfoMessageSettings({
    ...existing,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getContactFormSettings(nodeItem) {
  const existing = nodeItem.settings?.contactForm || {};
  return createContactFormSettings({
    ...existing,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getMenuSettings(nodeItem) {
  const existing = nodeItem.settings?.menu || {};
  return createMenuSettings({
    ...existing,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getScheduleSettings(nodeItem) {
  const existing = nodeItem.settings?.schedule || {};
  return createScheduleSettings({
    ...existing,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getNodeSettings(nodeItem) {
  if (isGroupTransferNode(nodeItem)) return getGroupTransferSettings(nodeItem);
  if (isInfoMessageNode(nodeItem)) return getInfoMessageSettings(nodeItem);
  if (isContactFormNode(nodeItem)) return getContactFormSettings(nodeItem);
  if (isMenuNode(nodeItem)) return getMenuSettings(nodeItem);
  if (isScheduleNode(nodeItem)) return getScheduleSettings(nodeItem);
  return getSimpleTransferSettings(nodeItem);
}

function getNodeSettingsDraft(nodeItem) {
  if (!settingsDrafts[nodeItem.id]) settingsDrafts[nodeItem.id] = clone(getNodeSettings(nodeItem));
  return settingsDrafts[nodeItem.id];
}

function updateNodeSettingsDraft(nodeItem, patch) {
  const next = { ...getNodeSettingsDraft(nodeItem), ...patch };
  if (isGroupTransferNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createGroupTransferSettings(next);
    return;
  }
  if (isInfoMessageNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createInfoMessageSettings(next);
    return;
  }
  if (isContactFormNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createContactFormSettings(next);
    return;
  }
  if (isMenuNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createMenuSettings(next);
    return;
  }
  if (isScheduleNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createScheduleSettings(next);
    return;
  }
  settingsDrafts[nodeItem.id] = createSimpleTransferSettings(nodeItem.operationType, next);
}

function saveNodeSettings(nodeItem, settings) {
  if (isScheduleNode(nodeItem)) {
    saveScheduleSettings(nodeItem, settings);
    return;
  }
  if (isMenuNode(nodeItem)) {
    saveMenuSettings(nodeItem, settings);
    return;
  }
  if (isContactFormNode(nodeItem)) {
    saveContactFormSettings(nodeItem, settings);
    return;
  }
  if (isInfoMessageNode(nodeItem)) {
    saveInfoMessageSettings(nodeItem, settings);
    return;
  }
  if (!isGroupTransferNode(nodeItem)) {
    saveSimpleTransferSettings(nodeItem, settings);
    return;
  }
  nodeItem.settings = { ...(nodeItem.settings || {}), groupTransfer: createGroupTransferSettings(settings) };
  applyGroupTransferTitle(nodeItem, nodeItem.settings.groupTransfer);
}

function saveSimpleTransferSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), simpleTransfer: createSimpleTransferSettings(nodeItem.operationType, settings) };
  applySimpleTransferTitle(nodeItem, nodeItem.settings.simpleTransfer);
}

function saveInfoMessageSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), infoMessage: createInfoMessageSettings(settings) };
  applyInfoMessageTitle(nodeItem, nodeItem.settings.infoMessage);
}

function saveContactFormSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), contactForm: createContactFormSettings(settings) };
  applyContactFormTitle(nodeItem, nodeItem.settings.contactForm);
}

function saveMenuSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), menu: createMenuSettings(settings) };
  applyMenuTitle(nodeItem, nodeItem.settings.menu);
  syncDynamicOutputEdges(nodeItem);
}

function saveScheduleSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), schedule: createScheduleSettings(settings) };
  applyScheduleTitle(nodeItem, nodeItem.settings.schedule);
  syncDynamicOutputEdges(nodeItem);
}

function applyGroupTransferTitle(nodeItem, settings) {
  nodeItem.title = settings.groupName ? `На группу: ${settings.groupName}` : "На группу";
  nodeItem.subtitle = settings.groupName ? `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}` : "Группа не выбрана";
}

function isGroupTransferNode(nodeItem) {
  return nodeItem?.kind === "transfer" && (!nodeItem.operationType || nodeItem.operationType === "group-transfer");
}

function isSimpleTransferNode(nodeItem) {
  return Boolean(nodeItem?.kind === "transfer" && SIMPLE_TRANSFER_CONFIG[nodeItem.operationType]);
}

function isInfoMessageNode(nodeItem) {
  return nodeItem?.kind === "message" && nodeItem.operationType === INFO_MESSAGE_OPERATION;
}

function isContactFormNode(nodeItem) {
  return nodeItem?.kind === "form" && nodeItem.operationType === CONTACT_FORM_OPERATION;
}

function isMenuNode(nodeItem) {
  return nodeItem?.kind === "menuNode" && nodeItem.operationType === MENU_OPERATION;
}

function isScheduleNode(nodeItem) {
  return nodeItem?.kind === "schedule" && nodeItem.operationType === SCHEDULE_OPERATION;
}

function isConfigurableTransferNode(nodeItem) {
  return isGroupTransferNode(nodeItem) || isSimpleTransferNode(nodeItem);
}

function isConfigurableNode(nodeItem) {
  return isConfigurableTransferNode(nodeItem) || isInfoMessageNode(nodeItem) || isContactFormNode(nodeItem) || isMenuNode(nodeItem) || isScheduleNode(nodeItem);
}

function isTransferWithFallbackNode(nodeItem) {
  return isConfigurableTransferNode(nodeItem);
}

function settingsTitleForNode(nodeItem) {
  if (isContactFormNode(nodeItem)) return "Форма сбора контактов";
  if (isMenuNode(nodeItem)) return "Меню";
  if (isScheduleNode(nodeItem)) return "Распределение по графику";
  if (isInfoMessageNode(nodeItem)) return "Информационное сообщение";
  if (isGroupTransferNode(nodeItem)) return "На группу";
  return SIMPLE_TRANSFER_CONFIG[nodeItem.operationType]?.title || nodeItem.title;
}

function applySimpleTransferTitle(nodeItem, settings) {
  const config = SIMPLE_TRANSFER_CONFIG[nodeItem.operationType];
  if (nodeItem.operationType === "employee-transfer") {
    nodeItem.title = settings.employeeName ? `${config.title}: ${settings.employeeName}` : config.title;
    nodeItem.subtitle = settings.employeeName ? `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}` : config.emptySubtitle;
    return;
  }
  nodeItem.title = config.title;
  nodeItem.subtitle = `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}`;
}

function applyInfoMessageTitle(nodeItem, settings) {
  nodeItem.title = "Информационное сообщение";
  nodeItem.subtitle = `Следующая операция через: ${formatTimeout(settings.transitionDelay, settings.timeoutUnit)}`;
}

function applyContactFormTitle(nodeItem, settings) {
  nodeItem.title = "Форма сбора контактов";
  nodeItem.subtitle = `Ожидание контактов: ${formatTimeout(settings.contactWait, settings.timeoutUnit)}`;
}

function applyMenuTitle(nodeItem, settings) {
  nodeItem.title = "Меню";
  nodeItem.subtitle = `Ожидание нажатия кнопки: ${formatTimeout(settings.waitTime, settings.timeoutUnit)}`;
}

function applyScheduleTitle(nodeItem, settings) {
  const count = settings.schedules.length;
  nodeItem.title = "Распределение по графику";
  nodeItem.subtitle = `${count} ${formatScheduleCount(count)}`;
}

function normalizeComparableSimpleTransferSettings(operationType, settings) {
  const normalized = createSimpleTransferSettings(operationType, settings);
  return {
    operationType,
    employeeName: normalized.employeeName || "",
    responseTimeout: sanitizePositiveInteger(normalized.responseTimeout, 60),
    timeoutUnit: normalized.timeoutUnit,
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
  };
}

function normalizeComparableInfoMessageSettings(settings) {
  const normalized = createInfoMessageSettings(settings);
  return {
    messageText: normalized.messageText || "",
    transitionDelay: sanitizePositiveInteger(normalized.transitionDelay, 1),
    timeoutUnit: normalized.timeoutUnit,
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
  };
}

function normalizeComparableContactFormSettings(settings) {
  const normalized = createContactFormSettings(settings);
  return {
    messageText: normalized.messageText || "",
    namePlaceholder: normalized.namePlaceholder || "",
    phonePlaceholder: normalized.phonePlaceholder || "",
    emailPlaceholder: normalized.emailPlaceholder || "",
    contactWait: sanitizePositiveInteger(normalized.contactWait, 60),
    timeoutUnit: normalized.timeoutUnit,
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
  };
}

function normalizeComparableMenuSettings(settings) {
  const normalized = createMenuSettings(settings);
  return {
    messageText: normalized.messageText || "",
    waitTime: sanitizePositiveInteger(normalized.waitTime, 20),
    timeoutUnit: normalized.timeoutUnit,
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
    buttons: normalized.buttons.map((button) => ({ id: button.id, text: button.text || "" })),
  };
}

function normalizeComparableScheduleSettings(settings) {
  const normalized = createScheduleSettings(settings);
  return {
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
    schedules: normalized.schedules.map((schedule) => ({ id: schedule.id, name: schedule.name || "" })),
  };
}

function syncDynamicOutputEdges(nodeItem) {
  const outputs = nodeOutputs(nodeItem).filter((output) => output.placeholder);
  const outputIds = new Set(outputs.map((output) => output.key));
  const removedPlaceholderTargets = state.edges
    .filter((edgeItem) => edgeItem.source === nodeItem.id && !outputIds.has(edgeItem.outputKey))
    .map((edgeItem) => edgeItem.target)
    .filter((targetId) => isPlaceholderNode(getNode(targetId)));
  if (removedPlaceholderTargets.length) {
    const removedIds = new Set(removedPlaceholderTargets);
    state.nodes = state.nodes.filter((item) => !removedIds.has(item.id));
    state.edges = state.edges.filter((edgeItem) => !removedIds.has(edgeItem.source) && !removedIds.has(edgeItem.target));
  }
  state.edges = state.edges.filter((edgeItem) => edgeItem.source !== nodeItem.id || outputIds.has(edgeItem.outputKey));
  state.edges.forEach((edgeItem) => {
    if (edgeItem.source !== nodeItem.id) return;
    const output = outputs.find((item) => item.key === edgeItem.outputKey);
    if (output) edgeItem.label = output.label;
  });
  createOutputPlaceholdersFor(nodeItem);
}

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replace(/"/g, '\\"');
}

function inferGroupName(title = "") {
  const match = String(title).match(/^На группу:\s*(.+)$/);
  return match ? match[1] : "";
}

function inferEmployeeName(title = "") {
  const match = String(title).match(/^На сотрудника:\s*(.+)$/);
  return match ? match[1] : "";
}

function alertForDistribution(distribution) {
  if (distribution === "queued") return "Сначала сообщение поступит первому сотруднику в списке. Если он не ответит – второму и так далее. Если за время ожидания никто не возьмет чат в работу, сценарий перейдет к следующей операции. Если ее нет, сработает общее правило завершения сценария.";
  if (distribution === "balanced") return "Каждый сотрудник получает равное количество обращений. Если за время ожидания никто не возьмет чат в работу, сценарий перейдет к следующей операции. Если ее нет, сработает общее правило завершения сценария.";
  return "Сообщение поступит всем сотрудникам группы. Если за время ожидания никто не возьмет чат в работу, сценарий перейдет к следующей операции. Если ее нет, сработает общее правило завершения сценария.";
}

function formatTimeout(value, unit) {
  const timeout = sanitizePositiveInteger(value, 60);
  if (unit === "minutes") return `${timeout} мин.`;
  if (timeout === 60) return "1 мин.";
  return `${timeout} сек.`;
}

function sanitizePositiveInteger(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function moveArrayItem(items, fromIndex, toIndex) {
  const next = items.slice();
  const [item] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, item);
  return next;
}

function isEditableEventTarget(target) {
  const element = target instanceof Element ? target : null;
  if (!element) return false;
  return Boolean(element.closest("input, textarea, select, [contenteditable='true']"));
}

function openScenarioCreateModal() {
  document.querySelector("#scenarioNameInput").value = `Сценарий обработки чатов №${appState.scenarios.length + 1}`;
  document.body.classList.add("is-scenario-create-open");
  document.querySelector("#scenarioCreateModal").setAttribute("aria-hidden", "false");
  document.querySelector("#scenarioNameInput").focus();
}

function closeScenarioCreateModal() {
  document.body.classList.remove("is-scenario-create-open");
  document.querySelector("#scenarioCreateModal").setAttribute("aria-hidden", "true");
}

function createScenarioFromForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const name = document.querySelector("#scenarioNameInput").value.trim() || `Сценарий обработки чатов №${appState.scenarios.length + 1}`;
  const channels = [...form.querySelectorAll('input[name="channels"]:checked')].map((input) => input.value);
  const scenarioItem = createScenario({ name, channels });
  appState.scenarios.unshift(scenarioItem);
  appState.currentScenarioId = scenarioItem.id;
  state = scenarioItem.board;
  selectedId = null;
  hoveredId = null;
  pendingSourceId = null;
  operationSourceId = null;
  operationReplaceId = null;
  operationOutputKey = null;
  closeOutcomeMenu();
  settingsNodeId = null;
  history = [];
  future = [];
  persistAppState();
  closeScenarioCreateModal();
  renderAppShell();
  render();
  restoreViewport();
}

function openScenario(scenarioId) {
  const scenarioItem = appState.scenarios.find((item) => item.id === scenarioId);
  if (!scenarioItem) return;
  syncCurrentScenario();
  appState.currentScenarioId = scenarioId;
  state = scenarioItem.board;
  selectedId = null;
  hoveredId = null;
  pendingSourceId = null;
  operationSourceId = null;
  operationReplaceId = null;
  operationOutputKey = null;
  closeOutcomeMenu();
  settingsNodeId = null;
  history = [];
  future = [];
  persistAppState();
  renderAppShell();
  render();
  restoreViewport();
}

function showScenarioList() {
  syncCurrentScenario();
  appState.currentScenarioId = null;
  selectedId = null;
  hoveredId = null;
  pendingSourceId = null;
  operationSourceId = null;
  operationReplaceId = null;
  operationOutputKey = null;
  closeOutcomeMenu();
  settingsNodeId = null;
  persistAppState();
  renderAppShell();
}

function updateSelected(patch) {
  const selected = getNode(selectedId);
  if (!selected) return;
  Object.assign(selected, patch);
  render();
  schedulePersistState();
}

function removeSelected() {
  if (!selectedId) return;
  removeNodeById(selectedId);
}

function removeNodeById(nodeId) {
  if (!nodeId) return;
  pushHistory();
  const nodeIdsToRemove = collectNodeIdsForRemoval(nodeId);
  state.nodes = state.nodes.filter((nodeItem) => !nodeIdsToRemove.has(nodeItem.id));
  state.edges = state.edges.filter((edgeItem) => !nodeIdsToRemove.has(edgeItem.source) && !nodeIdsToRemove.has(edgeItem.target));
  nodeIdsToRemove.forEach((removedId) => delete settingsDrafts[removedId]);
  nodeIdsToRemove.forEach((removedId) => delete settingsErrors[removedId]);
  nodeIdsToRemove.forEach((removedId) => pendingSettingsNodeIds.delete(removedId));
  if (settingsNodeId && nodeIdsToRemove.has(settingsNodeId)) closeNodeSettings(false);
  if (operationSourceId && nodeIdsToRemove.has(operationSourceId)) {
    operationSourceId = null;
    operationOutputKey = null;
  }
  if (operationReplaceId && nodeIdsToRemove.has(operationReplaceId)) {
    operationReplaceId = null;
    operationOutputKey = null;
  }
  if (outcomeMenuSourceId && nodeIdsToRemove.has(outcomeMenuSourceId)) closeOutcomeMenu();
  if (contextMenuNodeId && nodeIdsToRemove.has(contextMenuNodeId)) closeNodeContextMenu();
  if (titleEditingNodeId && nodeIdsToRemove.has(titleEditingNodeId)) closeNodeTitleEditor(false);
  selectedId = null;
  hoveredId = null;
  render();
  schedulePersistState();
}

function collectNodeIdsForRemoval(rootNodeId) {
  const idsToRemove = new Set([rootNodeId]);
  let changed = true;
  while (changed) {
    changed = false;
    state.edges.forEach((edgeItem) => {
      if (!idsToRemove.has(edgeItem.source) || idsToRemove.has(edgeItem.target)) return;
      const targetNode = getNode(edgeItem.target);
      if (!isPlaceholderNode(targetNode)) return;
      idsToRemove.add(edgeItem.target);
      changed = true;
    });
  }
  return idsToRemove;
}

function saveState() {
  const savedAt = new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  state.savedAt = savedAt;
  persistState();
  const button = document.querySelector("#saveButton");
  button.classList.add("is-ready");
  button.textContent = `Сохранено ${savedAt}`;
}

function persistState() {
  syncCurrentScenario();
  persistAppState();
}

function schedulePersistState() {
  window.clearTimeout(persistTimer);
  persistTimer = window.setTimeout(persistState, 120);
}

function persistAppState() {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
}

function syncCurrentScenario() {
  const currentScenario = getCurrentScenario();
  if (!currentScenario) return;
  currentScenario.board = state;
  currentScenario.updatedAt = Date.now();
}

function loadAppState() {
  try {
    const raw = localStorage.getItem(APP_STORAGE_KEY);
    if (raw) return normalizeAppState(JSON.parse(raw));
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) {
      const legacyBoard = normalizeLoadedState(JSON.parse(legacyRaw));
      const migratedScenario = createScenario({ name: "Сценарий обработки чатов №1", channels: ["Telegram", "Email"], board: legacyBoard });
      return { scenarios: [migratedScenario], currentScenarioId: migratedScenario.id };
    }
  } catch {
    return { scenarios: [], currentScenarioId: null };
  }
  return { scenarios: [], currentScenarioId: null };
}

function normalizeAppState(value) {
  return {
    scenarios: Array.isArray(value.scenarios)
      ? value.scenarios.map((scenarioItem) => ({
          ...scenarioItem,
          channels: Array.isArray(scenarioItem.channels) ? scenarioItem.channels : [],
          board: normalizeLoadedState(scenarioItem.board || createInitialBoard([])),
        }))
      : [],
    currentScenarioId: value.currentScenarioId || null,
  };
}

function getCurrentScenario() {
  return appState.scenarios.find((scenarioItem) => scenarioItem.id === appState.currentScenarioId) || null;
}

function createScenario({ name, channels, board }) {
  return {
    id: `scenario-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    name,
    channels,
    settings: {},
    board: board ? normalizeLoadedState(board) : createInitialBoard(channels),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

function createInitialBoard(channels) {
  const board = {
    nodes: [node("incoming", "start", 40, 349)],
    edges: [],
    viewport: { x: 0, y: 0, k: 1 },
  };
  board.nodes[0].subtitle = channels.length ? `Каналы: ${channels.join(", ")}` : "Каналы не выбраны";
  return board;
}

function normalizeLoadedState(loadedState) {
  loadedState.nodes = Array.isArray(loadedState.nodes) ? loadedState.nodes : [];
  loadedState.edges = Array.isArray(loadedState.edges) ? loadedState.edges : [];
  loadedState.edges = loadedState.edges.map((edgeItem) => ({
    ...edgeItem,
    outputKey: edgeItem.outputKey || "main",
    label: edgeItem.outputKey === "failed" && edgeItem.label === "Переадресация не удалась" ? "Никто не ответил" : edgeItem.label,
  }));
  loadedState.nodes = loadedState.nodes.map((nodeItem) => {
    const catalogItem = catalog[nodeItem.kind];
    if (!catalogItem) return nodeItem;
    const normalizedNode = { ...nodeItem, color: catalogItem.color, icon: catalogItem.icon };
    if (normalizedNode.kind === "form" && !normalizedNode.operationType) {
      normalizedNode.operationType = CONTACT_FORM_OPERATION;
      normalizedNode.settings = { ...(normalizedNode.settings || {}), contactForm: createContactFormSettings(normalizedNode.settings?.contactForm) };
    }
    if (isScheduleNode(normalizedNode)) {
      normalizedNode.settings = { ...(normalizedNode.settings || {}), schedule: createScheduleSettings(normalizedNode.settings?.schedule) };
      applyScheduleTitle(normalizedNode, normalizedNode.settings.schedule);
    }
    if (isMenuNode(normalizedNode)) {
      normalizedNode.settings = { ...(normalizedNode.settings || {}), menu: createMenuSettings(normalizedNode.settings?.menu) };
      applyMenuTitle(normalizedNode, normalizedNode.settings.menu);
    }
    return normalizedNode;
  });
  loadedState.edges = loadedState.edges.map((edgeItem) => {
    const sourceNode = loadedState.nodes.find((nodeItem) => nodeItem.id === edgeItem.source);
    if (!isContactFormNode(sourceNode)) return edgeItem;
    if (edgeItem.label === "Форма заполнена") return { ...edgeItem, outputKey: "completed" };
    if (edgeItem.label === "Форма не заполнена") return { ...edgeItem, outputKey: "expired" };
    return edgeItem;
  });
  return loadedState;
}

function pushHistory() {
  history.push(clone(state));
  history = history.slice(-30);
  future = [];
  updateHistoryButtons();
}

function undo() {
  const prev = history.pop();
  if (!prev) return;
  future.unshift(clone(state));
  state = prev;
  selectedId = null;
  hoveredId = null;
  render();
  schedulePersistState();
}

function redo() {
  const next = future.shift();
  if (!next) return;
  history.push(clone(state));
  state = next;
  selectedId = null;
  hoveredId = null;
  render();
  schedulePersistState();
}

function restoreViewport() {
  if (!state.viewport) {
    fitToContent();
    return;
  }
  const { x = 0, y = 0, k = 1 } = state.viewport;
  svg.call(zoom.transform, d3.zoomIdentity.translate(x, y).scale(Math.min(1, Math.max(0.25, k))));
}

function updateHistoryButtons() {
  document.querySelector("#undoButton").disabled = history.length === 0;
  document.querySelector("#redoButton").disabled = future.length === 0;
}

function fitToContent() {
  const bounds = {
    minX: Math.min(...state.nodes.map((d) => d.x)),
    minY: Math.min(...state.nodes.map((d) => d.y)),
    maxX: Math.max(...state.nodes.map((d) => d.x + NODE_W)),
    maxY: Math.max(...state.nodes.map((d) => d.y + NODE_H)),
  };
  const rect = svg.node().getBoundingClientRect();
  const scale = Math.min(1, (rect.width - 160) / (bounds.maxX - bounds.minX), (rect.height - 160) / (bounds.maxY - bounds.minY));
  const tx = (rect.width - (bounds.maxX + bounds.minX) * scale) / 2;
  const ty = (rect.height - (bounds.maxY + bounds.minY) * scale) / 2;
  svg.transition().duration(280).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

function setZoom100() {
  const rect = svg.node().getBoundingClientRect();
  svg.transition().duration(180).call(zoom.scaleTo, 1, [rect.width / 2, rect.height / 2]);
}

function stepZoom(direction) {
  const rect = svg.node().getBoundingClientRect();
  const transform = d3.zoomTransform(svg.node());
  const nextScale = direction > 0 ? transform.k * 1.18 : transform.k * 0.84;
  const targetScale = crossesZoom100(transform.k, nextScale) ? 1 : nextScale;
  svg.transition().duration(180).call(zoom.scaleTo, targetScale, [rect.width / 2, rect.height / 2]);
}

function crossesZoom100(currentScale, nextScale) {
  return (currentScale < 1 && nextScale > 1) || (currentScale > 1 && nextScale < 1);
}

function getNode(id) {
  return state.nodes.find((nodeItem) => nodeItem.id === id);
}

function colorForTone() {
  return "var(--cmgui-color-special-21)";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function escapeAttr(value = "") {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function normalizeColorValue(value = "") {
  if (/^#[0-9a-f]{6}$/i.test(value)) return value;
  if (value.includes("special-15")) return "#fe6ea2";
  if (value.includes("special-2")) return "#a67eff";
  if (value.includes("special-21")) return "#8f8f8f";
  if (value.includes("gray-dark")) return "#d6d6d6";
  return "#49b880";
}
