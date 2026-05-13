const APP_STORAGE_KEY = "chat-scenarios-app-v1";
const LEGACY_STORAGE_KEY = "chat-scenario-board-d3-v1";
const ICON_ASSET_VERSION = "2026-05-12-4";
const NODE_W = 300;
const NODE_H = 60;
const NODE_HOVER_H = 62;
const NODE_TEXT_DEFAULT_WIDTH = 216;
const NODE_TEXT_COMPACT_WIDTH = 192;
const NODE_PORT_LEFT_X = -14;
const NODE_PORT_RIGHT_X = NODE_W + 51;
const NODE_PORT_RIGHT_COMPACT_X = NODE_W + 11;
const NODE_PORT_R = 3;
const NODE_PORT_EDGE_GAP = 8;
const NODE_PORT_ARROW_GAP = 2;
const NODE_CREATE_GAP_X = 80;
const NODE_DRAG_GRID_STEP = 4;
const EDGE_LABEL_SIDE_GAP = 60;
const EDGE_LABEL_PADDING_X = 10;
const EDGE_LABEL_HOVER_RESERVE_X = 64;
const OUTPUT_STACK_GAP_Y = 112;
const CHANNEL_OPTIONS = ["Email", "Max", "Telegram", "WhatsApp"];
const CHANNEL_ICON_BY_CHANNEL = {
  Email: "source-email-20",
  Max: "source-max-20",
  Telegram: "source-telegram-20",
  WhatsApp: "source-whatsapp-20",
};
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
    alert: "Чат будет направлен сразу на выбранного сотрудника. Если за время ожидания он не возьмет чат в работу, сценарий перейдет к следующей операции. Если ее нет, сработает общее правило завершения сценария.",
    icon: "user-20",
  },
  "personal-manager-transfer": {
    title: "На персонального менеджера",
    alert: "Сообщение будет направлено на менеджера, закрепленного за клиентом в разделе Контакты. Если за время ожидания он не возьмет чат в работу, сценарий перейдет к следующей операции. Если ее нет, сработает общее правило завершения сценария.",
    icon: "last-manager",
  },
  "last-manager-transfer": {
    title: "На последнего менеджера",
    alert: "Сообщение будет направлено на последнего менеджера, который общался с клиентом. Если за время ожидания он не возьмет чат в работу, сценарий перейдет к следующей операции. Если ее нет, сработает общее правило завершения сценария.",
    icon: "last-manager",
  },
};
const INFO_MESSAGE_OPERATION = "info-message";
const CONTACT_FORM_OPERATION = "contact-form";
const MENU_OPERATION = "menu-operation";
const SCHEDULE_OPERATION = "schedule-distribution";
const SEGMENT_OPERATION = "segment-distribution";
const CONDITION_OPERATION = "condition-distribution";
const MENU_BUTTON_MAX_LENGTH = 128;
const MENU_BUTTON_MAX_COUNT = 15;
const SCHEDULE_MAX_COUNT = 20;
const SEGMENT_MAX_COUNT = 20;
const CONDITION_MAX_COUNT = 20;
const EDGE_LABEL_MAX_WIDTH = 160;
const AVAILABLE_SCHEDULES = [
  "Будние дни",
  "Праздники",
  "Рабочее время",
  "Нерабочее время",
  "Выходные дни",
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
const AVAILABLE_SEGMENT_GROUPS = [
  "Сегмент 1",
  "Сегмент 2",
  "Сегмент 3",
  "Сегмент 4",
  "Сегмент 5",
  "Сегмент 6",
  "Сегмент 7",
  "Сегмент 8",
  "Сегмент 9",
  "Сегмент 10",
  "Сегмент 11",
  "Сегмент 12",
  "Сегмент 13",
  "Сегмент 14",
  "Сегмент 15",
  "Сегмент 16",
  "Сегмент 17",
  "Сегмент 18",
  "Сегмент 19",
  "Сегмент 20",
];
const CONDITION_PARAMETERS = ["Город", "Канал", "Статус клиента", "Источник", "Тип клиента", "Тариф", "Регион", "Язык"];
const CONDITION_OPERATORS = [
  ["equals", "равно"],
  ["notEquals", "не равно"],
];
const CONDITION_VALUES_BY_PARAMETER = {
  Город: ["Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Екатеринбург"],
  Канал: CHANNEL_OPTIONS,
  "Статус клиента": ["Новый", "Постоянный", "VIP", "Спящий", "Проблемный"],
  Источник: ["Сайт", "Реклама", "Рассылка", "Маркетплейс", "Партнер"],
  "Тип клиента": ["Физическое лицо", "Компания", "Партнер", "Дилер"],
  Тариф: ["Старт", "Бизнес", "Профи", "Enterprise"],
  Регион: ["Центр", "Северо-Запад", "Юг", "Урал", "Сибирь"],
  Язык: ["Русский", "Английский", "Казахский", "Узбекский"],
};
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
  "fullscreen-20": "./assets/icons/fullscreen_20.svg",
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
  "settings-20": "./assets/icons/settings_20.svg",
  delete: "./assets/icons/delete_20.svg",
  "delete-20": "./assets/icons/delete_20.svg",
  "warning-message-filled-20": "./assets/icons/warning-message-filled_20.svg",
  "menu-search-16": "./assets/icons/search_16.svg",
  "menu-star-20": "./assets/icons/star_20.svg",
  "menu-analytic-report-20": "./assets/icons/analytic-report_20.svg",
  "menu-dashboard-20": "./assets/icons/dashboard_20.svg",
  "menu-message-20": "./assets/icons/message_20.svg",
  "menu-settings-20": "./assets/icons/settings_20.svg",
  "menu-integrations-20": "./assets/icons/integrations_20.svg",
  "menu-notification-20": "./assets/icons/notification_20.svg",
  "menu-info-20": "./assets/icons/menu-info_20.svg",
  "menu-user-20": "./assets/icons/menu-user_20.svg",
  "message-16": "./assets/icons/message_20.svg",
  "source-email-20": "./assets/icons/source-email_20.svg",
  "source-max-20": "./assets/icons/source-max_20.svg",
  "source-telegram-20": "./assets/icons/source-telegram_20.svg",
  "source-whatsapp-20": "./assets/icons/source-whatsapp_20.svg",
};
const designSystemIcons = {};

const catalog = {
  start: { title: "Входящее сообщение", subtitle: "Каналы: Email, Telegram", color: "var(--cmgui-color-special-1)", icon: "start" },
  form: { title: "Форма сбора контактов", subtitle: "Ожидание контактов: 1 мин.", color: "var(--cmgui-color-special-15)", icon: "form" },
  transfer: { title: "На группу: Отдел продаж", subtitle: "Ожидание ответа: 1 мин.", color: "var(--cmgui-color-special-2)", icon: "last-manager" },
  success: { title: "Чат взят в работу", subtitle: "", color: "var(--cmgui-color-special-1)", icon: "success" },
  message: { title: "Информационное сообщение", subtitle: "Следующая операция через: 1 сек.", color: "var(--cmgui-color-special-15)", icon: "info-message" },
  menuNode: { title: "Меню", subtitle: "Ожидание нажатия кнопки: 20 сек.", color: "var(--cmgui-color-special-13)", icon: "menu" },
  schedule: { title: "Распределение по графику", subtitle: "График: Будние дни", color: "var(--cmgui-color-special-13)", icon: "time-20" },
  segment: { title: "Распределение по сегментам", subtitle: "Группа сегментов: Сегмент 1, Сегмент 2", color: "var(--cmgui-color-special-13)", icon: "distribution" },
  condition: { title: "Распределение по условиям", subtitle: "Условие: Город равно Москва", color: "var(--cmgui-color-special-13)", icon: "row-data" },
  empty: { title: "Добавить операцию", subtitle: "", color: "var(--cmgui-color-bg-main-gray-dark)", icon: "attention", muted: true },
  finish: { title: "Закрытие чата", subtitle: "", color: "var(--cmgui-color-special-15)", icon: "finish" },
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
let state = getCurrentScenario()?.board || createInitialBoard(["Email", "Telegram"]);
let selectedId = null;
let hoveredId = null;
let selectedEdgeId = null;
let hoveredEdgeId = null;
let edgeLabelPlacements = new Map();
let draggedNodeId = null;
let connectionDrag = null;
let pendingSourceId = null;
let operationSourceId = null;
let operationReplaceId = null;
let operationOutputKey = null;
let outcomeMenuSourceId = null;
let outcomeMenuTargetId = null;
let contextMenuNodeId = null;
let titleEditingNodeId = null;
let settingsNodeId = null;
let settingsDrafts = {};
let settingsErrors = {};
let pendingSettingsNodeIds = new Set();
let pendingPlaceholderBackups = new Map();
let bulkSelectedNodeIds = new Set();
let bulkSelectedEdgeIds = new Set();
let selectionDrag = null;
let suppressNextBoardClick = false;
let isSettingsCloseConfirmOpen = false;
let isScenarioTitleEditing = false;
let scenarioTitleBeforeEdit = "";
let scenarioSearchQuery = "";
let scenarioCreateSettings = createStartSettings({ channels: [] });
let holdingSettingsDraft = null;
let holdingSettingsErrors = {};
let holdingMessageDragId = null;
let history = [];
let future = [];
let persistTimer = null;
let hasUnsavedScenarioChanges = false;

const svg = d3.select("#scenarioSvg");
const viewport = d3.select("#viewport");
const gridLayer = d3.select("#gridLayer");
const edgeLayer = d3.select("#edgeLayer");
const connectionPreviewLayer = d3.select("#connectionPreviewLayer");
const labelLayer = d3.select("#labelLayer");
const nodeLayer = d3.select("#nodeLayer");
const selectionLayer = d3.select("#selectionLayer");
const zoom = d3
  .zoom()
  .scaleExtent([0.25, 1])
  .filter((event) => {
    if (event.type === "wheel") return false;
    if (event.type === "mousedown") return event.button === 1 || event.button === 2;
    if (event.type === "touchstart" || event.type === "touchmove") return event.touches?.length === 2;
    return false;
  })
  .on("start", (event) => {
    closeOutcomeMenu();
    if (event.sourceEvent?.button === 1 || event.sourceEvent?.button === 2 || event.sourceEvent?.touches?.length === 2) {
      document.body.classList.add("is-board-panning");
    }
  })
  .on("zoom", (event) => {
    viewport.attr("transform", event.transform);
    document.querySelector("#zoomLabel").textContent = `${Math.round(event.transform.k * 100)}%`;
    state.viewport = { x: event.transform.x, y: event.transform.y, k: event.transform.k };
    updateNodeTitleEditorPosition(event.transform);
    updateZoomControls(event.transform.k);
    schedulePersistState({ markDirty: false });
  })
  .on("end", () => {
    document.body.classList.remove("is-board-panning");
  });

svg.call(zoom).on("dblclick.zoom", null);
svg.on("contextmenu", (event) => event.preventDefault());
svg.on("wheel.board", handleTrackpadWheel, { passive: false });
svg.on("mousedown.selection", startBoardSelection);
setupIcons();
renderMenu();
wireControls();
window.addEventListener("beforeunload", flushPendingPersist);
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
  const top = ["menu-star-20", "menu-analytic-report-20", "menu-dashboard-20", "menu-message-20", "menu-settings-20", "menu-integrations-20"];
  const bottom = ["menu-notification-20", "menu-info-20", "menu-user-20"];
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
      scheduleNodeSettingsDropdownClose(event.target);
      if (outcomeMenuSourceId && !event.target.closest("#outcomeMenu") && !event.target.closest(".node-add-button")) closeOutcomeMenu();
      if (contextMenuNodeId && !event.target.closest("#nodeContextMenu") && !event.target.closest(".node-more-icon")) closeNodeContextMenu();
      if (isScenarioTitleEditing && !event.target.closest(".top-title-wrap")) commitScenarioTitleEdit();
      if (
        document.body.classList.contains("is-scenario-create-open") &&
        !event.target.closest(".scenario-create-channel-select, #scenarioCreateFinishToggle, .scenario-create-finish-settings")
      ) {
        closeScenarioCreateDropdowns();
      }
      if (titleEditingNodeId && !event.target.closest("#nodeTitleEditor")) commitNodeTitleEdit();
      if (!document.body.classList.contains("is-node-settings-open") || isSettingsCloseConfirmOpen) return;
      if (event.target.closest("#nodeSettingsSidebar") || event.target.closest("#nodeSettingsCloseConfirm")) return;
      requestNodeSettingsClose();
    },
    true,
  );
  document.querySelector(".top-back-button").addEventListener("click", showScenarioList);
  document.querySelector("#scenarioTitleText").addEventListener("click", startScenarioTitleEdit);
  document.querySelector(".top-title-edit").addEventListener("click", startScenarioTitleEdit);
  document.querySelector("#scenarioTitleText").addEventListener("mouseenter", showScenarioTitleTooltip);
  document.querySelector("#scenarioTitleText").addEventListener("mousemove", moveScenarioTitleTooltip);
  document.querySelector("#scenarioTitleText").addEventListener("mouseleave", hideEdgeTooltip);
  document.querySelector("#scenarioTitleInput").addEventListener("blur", commitScenarioTitleEdit);
  document.querySelector("#scenarioTitleInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeScenarioTitleEdit();
    }
  });
  document.querySelector("#createScenarioButton").addEventListener("click", openScenarioCreateModal);
  document.querySelector("#createScenarioEmptyButton").addEventListener("click", openScenarioCreateModal);
  document.querySelector("#scenarioSearchInput").addEventListener("input", (event) => {
    scenarioSearchQuery = event.target.value;
    updateScenarioSearchClear();
    renderScenarioList();
  });
  document.querySelector("#scenarioSearchClear").addEventListener("click", () => {
    const input = document.querySelector("#scenarioSearchInput");
    scenarioSearchQuery = "";
    input.value = "";
    updateScenarioSearchClear();
    renderScenarioList();
    input.focus();
  });
  document.querySelector("#scenarioCreateModal").addEventListener("click", (event) => {
    if (event.target.id === "scenarioCreateModal") closeScenarioCreateModal();
  });
  document.querySelector("#scenarioCreateClose").addEventListener("click", closeScenarioCreateModal);
  document.querySelector("#scenarioCreateCancel").addEventListener("click", closeScenarioCreateModal);
  document.querySelector("#scenarioCreateForm").addEventListener("submit", createScenarioFromForm);
  document.querySelector("#scenarioNameInput").addEventListener("input", updateScenarioCreateNameState);
  document.querySelector("#scenarioNameInput").addEventListener("blur", () => updateScenarioCreateNameState({ showError: true }));
  document.querySelector("#scenarioCreateChannelsSelect").addEventListener("click", toggleScenarioCreateChannelsDropdown);
  document.querySelector("#scenarioCreateFinishToggle").addEventListener("click", () => {
    closeScenarioCreateChannelsDropdown();
    scenarioCreateSettings = createStartSettings({
      ...collectScenarioCreateFinishSettings(),
      finishOpen: !scenarioCreateSettings.finishOpen,
    });
    renderScenarioCreateFinishSettings();
  });
  document.querySelectorAll("#scenarioCreateChannelsDropdown input[name='channels']").forEach((input) => {
    input.addEventListener("change", updateScenarioCreateChannelsValue);
  });
  document.querySelector("#saveButton").addEventListener("click", saveState);
  document.querySelector("#holdingMessagesButton").addEventListener("click", () => {
    if (!transferOperationOptions().length) return;
    openHoldingSettings();
  });
  document.querySelector("#scenarioSettingsButton").addEventListener("click", openScenarioSettings);
  document.querySelector("#holdingSettingsBackdrop").addEventListener("click", closeHoldingSettings);
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
    const targetId = outcomeMenuTargetId;
    const outputKey = button.dataset.outcomeKey;
    closeOutcomeMenu();
    if (sourceId && targetId) {
      connectNodesManually(sourceId, targetId, outputKey);
      return;
    }
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
    if (event.key === "Escape" && document.body.classList.contains("is-holding-settings-open")) {
      closeHoldingSettings();
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
    if ((event.key === "Backspace" || event.key === "Delete") && (bulkSelectedNodeIds.size || bulkSelectedEdgeIds.size)) {
      event.preventDefault();
      deleteBulkSelection();
      return;
    }
    if ((event.key === "Backspace" || event.key === "Delete") && selectedEdgeId) {
      event.preventDefault();
      removeEdgeById(selectedEdgeId);
      return;
    }
    if ((event.key === "Backspace" || event.key === "Delete") && selectedId) {
      event.preventDefault();
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

  if (event.ctrlKey || isMouseWheelZoom(event)) {
    const factor = Math.pow(2, -delta.y * (event.ctrlKey ? 0.012 : 0.0025));
    svg.call(zoom.scaleBy, factor, pointer);
    return;
  }

  const current = d3.zoomTransform(svg.node());
  const next = current.translate(-delta.x / current.k, -delta.y / current.k);
  svg.call(zoom.transform, next);
}

function isMouseWheelZoom(event) {
  return Math.abs(event.deltaX) < 1 && (event.deltaMode !== 0 || Math.abs(event.deltaY) >= 40);
}

function startBoardSelection(event) {
  if (event.button !== 0 || connectionDrag || document.body.classList.contains("is-node-settings-open") || document.body.classList.contains("is-operation-modal-open")) return;
  if (event.target.closest?.(".scenario-node-svg, .scenario-edge-group, .edge-label-svg, .bulk-selection-menu")) return;
  event.preventDefault();
  closeOutcomeMenu();
  closeNodeContextMenu();
  selectedId = null;
  selectedEdgeId = null;
  hoveredEdgeId = null;
  const start = boardPointFromEvent(event);
  selectionDrag = { start, current: start, singleEdgeCandidateId: null };
  bulkSelectedNodeIds = new Set();
  bulkSelectedEdgeIds = new Set();
  render();
  window.addEventListener("mousemove", updateBoardSelection);
  window.addEventListener("mouseup", endBoardSelection, { once: true });
}

function updateBoardSelection(event) {
  if (!selectionDrag) return;
  selectionDrag.current = boardPointFromEvent(event);
  updateBulkSelection(rectFromPoints(selectionDrag.start, selectionDrag.current));
  rememberSingleEdgeSelectionCandidate();
  renderEdges();
  renderNodes();
  renderSelectionOverlay();
}

function endBoardSelection(event) {
  window.removeEventListener("mousemove", updateBoardSelection);
  if (!selectionDrag) return;
  const finishedSelection = selectionDrag;
  const rect = rectFromPoints(finishedSelection.start, finishedSelection.current);
  selectionDrag = null;
  if (rect.width < 4 && rect.height < 4) {
    clearBulkSelection();
    render();
    return;
  }
  updateBulkSelection(rect);
  restoreSingleEdgeSelectionCandidate(finishedSelection);
  normalizeSingleEdgeBulkSelection();
  suppressNextBoardClick = true;
  window.setTimeout(() => {
    suppressNextBoardClick = false;
  }, 0);
  render();
}

function rememberSingleEdgeSelectionCandidate() {
  if (!selectionDrag || bulkSelectedNodeIds.size || bulkSelectedEdgeIds.size !== 1) return;
  selectionDrag.singleEdgeCandidateId = [...bulkSelectedEdgeIds][0];
}

function restoreSingleEdgeSelectionCandidate(finishedSelection) {
  if (!finishedSelection?.singleEdgeCandidateId || bulkSelectedNodeIds.size || bulkSelectedEdgeIds.size) return;
  if (!state.edges.some((edgeItem) => edgeItem.id === finishedSelection.singleEdgeCandidateId)) return;
  bulkSelectedEdgeIds = new Set([finishedSelection.singleEdgeCandidateId]);
}

function normalizeSingleEdgeBulkSelection() {
  if (bulkSelectedNodeIds.size || bulkSelectedEdgeIds.size !== 1) return;
  selectedEdgeId = [...bulkSelectedEdgeIds][0];
  selectedId = null;
  bulkSelectedEdgeIds = new Set();
  hoveredEdgeId = null;
  closeNodeContextMenu();
  closeOutcomeMenu();
}

function boardPointFromEvent(event) {
  const transform = d3.zoomTransform(svg.node());
  const [x, y] = transform.invert(d3.pointer(event, svg.node()));
  return { x, y };
}

function rectFromPoints(a, b) {
  const x = Math.min(a.x, b.x);
  const y = Math.min(a.y, b.y);
  return { x, y, width: Math.abs(a.x - b.x), height: Math.abs(a.y - b.y) };
}

function updateBulkSelection(selectionRect) {
  bulkSelectedNodeIds = new Set(
    state.nodes
      .filter((nodeItem) => !isStartNode(nodeItem) && rectsOverlap(selectionRect, nodeBounds(nodeItem), 0))
      .map((nodeItem) => nodeItem.id),
  );
  bulkSelectedEdgeIds = new Set(
    state.edges
      .filter((edgeItem) => edgeIntersectsSelection(edgeItem, selectionRect))
      .map((edgeItem) => edgeItem.id),
  );
}

function clearBulkSelection() {
  bulkSelectedNodeIds = new Set();
  bulkSelectedEdgeIds = new Set();
  selectionDrag = null;
}

function nodeBounds(nodeItem) {
  return { x: nodeItem.x, y: nodeItem.y, width: NODE_W, height: NODE_H };
}

function edgeIntersectsSelection(edgeItem, selectionRect) {
  const source = getNode(edgeItem.source);
  const target = getNode(edgeItem.target);
  if (!source || !target) return false;
  const points = edgeVisualPoints(edgeItem);
  if (!points.length) return false;
  if (polylineIntersectsRect(points, selectionRect)) return true;
  const labelPlacement = edgeLabelPlacements.get(edgeItem.id);
  return labelPlacement ? rectsOverlap(selectionRect, labelPlacement, 0) : false;
}

function polylineIntersectsRect(points, rect) {
  return points.some((point, index) => {
    if (pointInRect(point, rect)) return true;
    if (index === 0) return false;
    return segmentIntersectsRect(points[index - 1], point, rect);
  });
}

function pointInRect(point, rect) {
  return point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y <= rect.y + rect.height;
}

function segmentIntersectsRect(a, b, rect) {
  const left = rect.x;
  const right = rect.x + rect.width;
  const top = rect.y;
  const bottom = rect.y + rect.height;
  if (a.x === b.x) {
    const x = a.x;
    return x >= left && x <= right && rangesOverlap(a.y, b.y, top, bottom);
  }
  if (a.y === b.y) {
    const y = a.y;
    return y >= top && y <= bottom && rangesOverlap(a.x, b.x, left, right);
  }
  return lineSegmentsIntersect(a, b, { x: left, y: top }, { x: right, y: top }) || lineSegmentsIntersect(a, b, { x: right, y: top }, { x: right, y: bottom }) || lineSegmentsIntersect(a, b, { x: right, y: bottom }, { x: left, y: bottom }) || lineSegmentsIntersect(a, b, { x: left, y: bottom }, { x: left, y: top });
}

function rangesOverlap(a, b, min, max) {
  return Math.max(Math.min(a, b), min) <= Math.min(Math.max(a, b), max);
}

function lineSegmentsIntersect(a, b, c, d) {
  const det = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
  const d1 = det(a, b, c);
  const d2 = det(a, b, d);
  const d3 = det(c, d, a);
  const d4 = det(c, d, b);
  return d1 * d2 <= 0 && d3 * d4 <= 0;
}

function edgeBounds(edgeItem) {
  const points = edgeVisualPoints(edgeItem);
  if (!points.length) return null;
  const labelPlacement = edgeLabelPlacements.get(edgeItem.id);
  if (labelPlacement) {
    points.push({ x: labelPlacement.x, y: labelPlacement.y });
    points.push({ x: labelPlacement.x + labelPlacement.width, y: labelPlacement.y + labelPlacement.height });
  }
  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
}

function routeToPoints(route) {
  if (Math.abs(route.y2 - route.y1) < 1) return [{ x: route.x1, y: route.y1 }, { x: route.x2, y: route.y2 }];
  return [
    { x: route.x1, y: route.y1 },
    { x: route.midX, y: route.y1 },
    { x: route.midX, y: route.y2 },
    { x: route.x2, y: route.y2 },
  ];
}

function normalizeWheel(event) {
  const mode = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
  return {
    x: event.deltaX * mode,
    y: event.deltaY * mode,
  };
}

function drawGrid() {
  const minX = -2600;
  const minY = -1800;
  const maxX = 4200;
  const maxY = 2600;
  const step = 32;
  const dots = [];
  for (let x = minX; x <= maxX; x += step) {
    for (let y = minY; y <= maxY; y += step) dots.push({ x, y });
  }
  gridLayer
    .selectAll("circle")
    .data(dots)
    .join("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 1.2)
    .attr("fill", "#8F8F8F")
    .attr("opacity", 0.78);
}

function render() {
  renderEdges();
  renderNodes();
  renderSelectionOverlay();
  renderProperties();
  renderNodeSettingsSidebar();
  renderHoldingSettingsSidebar();
  updateHoldingMessagesCount();
  updateHistoryButtons();
}

function renderAppShell() {
  const hasScenarios = appState.scenarios.length > 0;
  const currentScenario = getCurrentScenario();
  document.body.classList.toggle("is-scenario-list", !currentScenario);
  document.querySelector("#scenarioListToolbar").style.display = hasScenarios ? "flex" : "none";
  document.querySelector("#scenarioEmptyState").style.display = hasScenarios ? "none" : "grid";
  document.querySelector("#scenarioListTableWrap").style.display = hasScenarios ? "block" : "none";
  renderScenarioList();
  if (currentScenario) {
    syncScenarioStartNode(currentScenario);
    document.querySelector("#scenarioTitleText").textContent = currentScenario.name;
    if (!isScenarioTitleEditing) document.querySelector("#scenarioTitleInput").value = currentScenario.name;
  }
  updateHoldingMessagesCount();
  updateSaveButton();
  updateZoomControls(d3.zoomTransform(svg.node()).k);
}

function renderScenarioList() {
  const table = document.querySelector("#scenarioListTable");
  const footer = document.querySelector("#scenarioTableFooter");
  updateScenarioSearchClear();
  const search = scenarioSearchQuery.trim().toLowerCase();
  const scenarios = search ? appState.scenarios.filter((scenarioItem) => scenarioItem.name.toLowerCase().includes(search)) : appState.scenarios;
  table.innerHTML = `<thead>
    <tr>
      <th>Название</th>
      <th>Группы</th>
      <th>Каналы</th>
      <th aria-label="Действия"></th>
    </tr>
  </thead>
  <tbody>
    ${
      scenarios.length
        ? scenarios.map((scenarioItem) => renderScenarioTableRow(scenarioItem)).join("")
        : `<tr><td class="scenario-table-empty" colspan="4">Ничего не найдено</td></tr>`
    }
  </tbody>`;
  if (footer) footer.innerHTML = "";
  table.querySelectorAll("[data-scenario-row]").forEach((row) => {
    row.addEventListener("click", () => openScenario(row.dataset.scenarioRow));
  });
  table.querySelectorAll("[data-scenario-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      handleScenarioTableAction(button.dataset.scenarioAction, button.dataset.scenarioId);
    });
  });
}

function updateScenarioSearchClear() {
  const clearButton = document.querySelector("#scenarioSearchClear");
  const input = document.querySelector("#scenarioSearchInput");
  if (!clearButton || !input) return;
  clearButton.hidden = !input.value;
}

function renderScenarioTableRow(scenarioItem) {
  const groups = scenarioGroups(scenarioItem);
  const channels = scenarioItem.channels?.length ? scenarioItem.channels.join(", ") : "";
  return `<tr data-scenario-row="${escapeAttr(scenarioItem.id)}">
    <td><span class="scenario-cell-title">${escapeHtml(scenarioItem.name)}</span></td>
    <td><span>${escapeHtml(groups || "Не выбраны")}</span></td>
    <td>${channels ? `<span>${escapeHtml(channels)}</span>` : `<span class="scenario-channel-add">${iconSvg("plus", 16)}</span>`}</td>
    <td>
      <div class="scenario-row-actions">
        <button type="button" data-scenario-action="open" data-scenario-id="${escapeAttr(scenarioItem.id)}" title="Настроить" aria-label="Настроить">${iconSvg("settings-20", 20)}</button>
        <button type="button" data-scenario-action="copy" data-scenario-id="${escapeAttr(scenarioItem.id)}" title="Копировать" aria-label="Копировать">${iconSvg("copy-20", 20)}</button>
        <button type="button" data-scenario-action="delete" data-scenario-id="${escapeAttr(scenarioItem.id)}" title="Удалить" aria-label="Удалить">${iconSvg("delete-20", 20)}</button>
      </div>
    </td>
  </tr>`;
}

function handleScenarioTableAction(action, scenarioId) {
  if (action === "open") {
    openScenario(scenarioId);
    return;
  }
  if (action === "copy") {
    copyScenario(scenarioId);
    return;
  }
  if (action === "delete") deleteScenario(scenarioId);
}

function scenarioGroups(scenarioItem) {
  const groups = new Set();
  scenarioItem.board?.nodes?.forEach((nodeItem) => {
    const groupName = nodeItem.settings?.groupTransfer?.groupName || (nodeItem.title?.startsWith("На группу:") ? nodeItem.title.replace("На группу:", "").trim() : "");
    if (groupName) groups.add(groupName);
  });
  return Array.from(groups).join(", ");
}

function renderNodes() {
  const reachableNodeIds = getReachableScenarioNodeIds();
  const nodes = nodeLayer.selectAll(".scenario-node-svg").data(state.nodes, (d) => d.id);
  nodes.exit().remove();
  const enter = nodes
    .enter()
    .append("g")
    .attr("class", "scenario-node-svg")
    .call(
      d3
        .drag()
        .filter((event) => event.button === 0 && !event.target.closest?.(".node-hover-port, .node-add-button, .node-more-icon"))
        .on("start", function (event, d) {
          event.sourceEvent?.stopPropagation();
          const transform = d3.zoomTransform(svg.node());
          const [pointerX, pointerY] = transform.invert(d3.pointer(event, svg.node()));
          const dragIds = bulkSelectedNodeIds.has(d.id) ? [...bulkSelectedNodeIds] : [d.id];
          if (!bulkSelectedNodeIds.has(d.id)) clearBulkSelection();
          dragIds.forEach((nodeId) => {
            const nodeItem = getNode(nodeId);
            if (!nodeItem || isStartNode(nodeItem)) return;
            nodeItem.dragStartX = nodeItem.x;
            nodeItem.dragStartY = nodeItem.y;
          });
          d.dragStartPointerX = pointerX;
          d.dragStartPointerY = pointerY;
          d.dragNodeIds = dragIds;
          d.dragMoved = false;
          draggedNodeId = d.id;
          selectedId = bulkSelectedNodeIds.has(d.id) ? null : d.id;
          pushHistory();
          renderProperties();
          nodeLayer.selectAll(".scenario-node-svg").classed("is-selected", (nodeItem) => nodeItem.id === selectedId);
        })
        .on("drag", function (event, d) {
          event.sourceEvent?.stopPropagation();
          const transform = d3.zoomTransform(svg.node());
          const [pointerX, pointerY] = transform.invert(d3.pointer(event, svg.node()));
          const dx = pointerX - (d.dragStartPointerX || pointerX);
          const dy = pointerY - (d.dragStartPointerY || pointerY);
          (d.dragNodeIds || [d.id]).forEach((nodeId) => {
            const nodeItem = getNode(nodeId);
            if (!nodeItem || isStartNode(nodeItem)) return;
            nodeItem.x = snapToDragGrid((nodeItem.dragStartX ?? nodeItem.x) + dx);
            nodeItem.y = snapToDragGrid((nodeItem.dragStartY ?? nodeItem.y) + dy);
          });
          d.dragMoved = true;
          nodeLayer.selectAll(".scenario-node-svg").attr("transform", (nodeItem) => `translate(${nodeItem.x},${nodeItem.y})`);
          renderEdges();
          renderSelectionOverlay();
        })
        .on("end", function (event, d) {
          const wasMoved = Boolean(d.dragMoved);
          (d.dragNodeIds || [d.id]).forEach((nodeId) => {
            const nodeItem = getNode(nodeId);
            if (!nodeItem) return;
            delete nodeItem.dragStartX;
            delete nodeItem.dragStartY;
          });
          delete d.dragStartPointerX;
          delete d.dragStartPointerY;
          delete d.dragNodeIds;
          delete d.dragMoved;
          draggedNodeId = null;
          const isStillHovered = isPointerOverNode(event, d);
          hoveredId = isStillHovered ? d.id : null;
          if (wasMoved && selectedId === d.id) selectedId = null;
          d3.select(this).classed("is-selected", d.id === selectedId);
          updateNodeText(this, d, d.id === selectedId || d.id === hoveredId);
          renderEdges();
          renderSelectionOverlay();
          schedulePersistState();
        }),
    );

  enter.append("rect").attr("class", "node-hover-zone").attr("x", NODE_PORT_LEFT_X - NODE_PORT_R).attr("y", -1).attr("width", NODE_PORT_RIGHT_X + NODE_PORT_R - (NODE_PORT_LEFT_X - NODE_PORT_R)).attr("height", NODE_HOVER_H).attr("rx", 12);
  enter.append("rect").attr("class", "node-hover-card").attr("x", 0).attr("y", -1).attr("width", NODE_W).attr("height", NODE_HOVER_H).attr("rx", 12);
  enter.append("rect").attr("class", "node-card").attr("width", NODE_W).attr("height", NODE_H).attr("rx", 12);
  enter.append("rect").attr("class", "node-icon-bg").attr("x", 16).attr("y", 14).attr("width", 32).attr("height", 32).attr("rx", 8);
  enter.append("g").attr("class", "node-icon-svg").attr("transform", "translate(22,20)");
  enter.append("g").attr("class", "node-holding-indicator").attr("transform", `translate(${NODE_W - 14},-8)`);
  const textGroup = enter.append("g").attr("class", "node-text-group");
  textGroup.append("text").attr("class", "node-title-svg").attr("x", 60).attr("y", 27);
  textGroup.append("text").attr("class", "node-subtitle-svg").attr("x", 60).attr("y", 44);
  const leftPort = enter.append("g").attr("class", "node-hover-port node-hover-port-left");
  leftPort.append("circle").attr("class", "node-hover-dot-hitarea").attr("cx", NODE_PORT_LEFT_X).attr("cy", 30).attr("r", 9);
  leftPort.append("circle").attr("class", "node-hover-dot-ring").attr("cx", NODE_PORT_LEFT_X).attr("cy", 30).attr("r", 9);
  leftPort.append("circle").attr("class", "node-hover-dot node-hover-dot-left").attr("cx", NODE_PORT_LEFT_X).attr("cy", 30).attr("r", NODE_PORT_R);
  const rightPort = enter.append("g").attr("class", "node-hover-port node-hover-port-right");
  rightPort.append("circle").attr("class", "node-hover-dot-hitarea").attr("cx", NODE_PORT_RIGHT_X).attr("cy", 30).attr("r", 9);
  rightPort.append("circle").attr("class", "node-hover-dot-ring").attr("cx", NODE_PORT_RIGHT_X).attr("cy", 30).attr("r", 9);
  rightPort.append("circle").attr("class", "node-hover-dot node-hover-dot-right").attr("cx", NODE_PORT_RIGHT_X).attr("cy", 30).attr("r", NODE_PORT_R);
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
    .classed("is-bulk-selected", (d) => bulkSelectedNodeIds.has(d.id))
    .classed("is-hovered", (d) => d.id === hoveredId)
    .classed("is-connection-muted", (d) => isNodeMutedDuringConnection(d))
    .classed("is-connection-available", (d) => Boolean(connectionDrag && isValidConnectionTarget(d, connectionDrag)))
    .classed("is-connection-target-node", (d) => Boolean(connectionDrag?.targetId === d.id))
    .classed("is-muted", (d) => d.muted)
    .classed("is-placeholder", (d) => isPlaceholderNode(d))
    .classed("is-outside-scenario", (d) => !reachableNodeIds.has(d.id))
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
      clearBulkSelection();
      selectedEdgeId = null;
      hoveredEdgeId = null;
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

  merged.select(".node-icon-bg").attr("fill", (d) => (reachableNodeIds.has(d.id) ? d.color : "var(--cmgui-color-bg-main-gray-dark)"));
  merged.select(".node-icon-bg").attr("x", (d) => (isPlaceholderNode(d) ? 16 : 16)).attr("y", (d) => (isPlaceholderNode(d) ? 14 : 14));
  merged.select(".node-icon-svg").html((d) => iconSvg(isPlaceholderNode(d) ? "add-20" : d.icon, 20));
  merged.select(".node-icon-svg").attr("transform", (d) => (isPlaceholderNode(d) ? "translate(22,20)" : "translate(22,20)"));
  merged.select(".node-holding-indicator").html(() => iconSvg("warning-message-filled-20", 20));
  merged.select(".node-holding-indicator").style("display", (d) => (isHoldingEnabledForTransfer(d.id) ? null : "none"));
  merged.select(".node-add-icon").html(() => iconSvg("add", 16));
  merged.select(".node-more-graphic").html((d) => iconSvg(isPlaceholderNode(d) ? "delete" : "more", 20));
  merged.select(".node-more-icon").attr("transform", (d) => (isPlaceholderNode(d) ? `translate(${NODE_W - 36},20)` : `translate(${NODE_W - 48},8)`));
  merged.select(".node-more-hitarea").attr("width", (d) => (isPlaceholderNode(d) ? 20 : 44)).attr("height", (d) => (isPlaceholderNode(d) ? 20 : 44)).attr("rx", (d) => (isPlaceholderNode(d) ? 10 : 22));
  merged.select(".node-more-graphic").attr("transform", (d) => (isPlaceholderNode(d) ? "translate(0,0)" : "translate(12,12)"));
  merged.select(".node-title-svg").attr("x", (d) => (isPlaceholderNode(d) ? 60 : 60)).attr("y", (d) => (isPlaceholderNode(d) || !d.subtitle ? 35 : 27));
  merged.select(".node-subtitle-svg").attr("x", (d) => (isPlaceholderNode(d) ? 60 : 60)).attr("y", (d) => (isPlaceholderNode(d) ? 44 : 44));
  merged.select(".node-hover-zone").attr("width", (d) => {
    const rightEdge = shouldShowRightPort(d) || isConnectionRightPortTarget(d) ? nodeRightPortX(d) + NODE_PORT_R : NODE_W;
    return rightEdge - (NODE_PORT_LEFT_X - NODE_PORT_R);
  });
  merged.select(".node-hover-port-left").style("display", (d) => (canReceiveInput(d) ? null : "none"));
  merged.select(".node-hover-port-right").style("display", (d) => (shouldShowRightPort(d) ? null : "none"));
  merged.select(".node-hover-port-right .node-hover-dot-hitarea").attr("cx", (d) => nodeRightPortX(d));
  merged.select(".node-hover-port-right .node-hover-dot-ring").attr("cx", (d) => nodeRightPortX(d));
  merged.select(".node-hover-dot-right").attr("cx", (d) => nodeRightPortX(d));
  merged.select(".node-hover-port-left").classed("is-connect-target", (d) => Boolean(connectionDrag?.direction === "output" && canReceiveInput(d)));
  merged.select(".node-hover-port-right").classed("is-connect-target", (d) => Boolean(connectionDrag?.direction === "input" && hasFreeOutputs(d) && !isPlaceholderNode(d)));
  merged.select(".node-hover-port-left").classed("is-connection-source", (d) => Boolean(connectionDrag?.direction === "input" && d.id === connectionDrag.sourceId));
  merged.select(".node-hover-port-right").classed("is-connection-source", (d) => Boolean(connectionDrag?.direction === "output" && d.id === connectionDrag.sourceId));
  merged.selectAll(".node-hover-port").on("click", (event) => {
    event.stopPropagation();
  });
  merged.select(".node-add-button").style("display", (d) => {
    if (!hasFreeOutputs(d) || isPlaceholderNode(d)) return "none";
    if (!connectionDrag) return null;
    return d.id === connectionDrag.sourceId && connectionDrag.direction === "output" ? null : "none";
  });
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
  merged.select(".node-hover-port-right").call(
    d3
      .drag()
      .filter((event, d) => event.button === 0 && hasFreeOutputs(d) && !isPlaceholderNode(d))
      .on("start", (event, d) => startConnectionDrag(event, d, "output"))
      .on("drag", updateConnectionDrag)
      .on("end", endConnectionDrag),
  );
  merged.select(".node-hover-port-left").call(
    d3
      .drag()
      .filter((event, d) => event.button === 0 && canReceiveInput(d))
      .on("start", (event, d) => startConnectionDrag(event, d, "input"))
      .on("drag", updateConnectionDrag)
      .on("end", endConnectionDrag),
  );

  svg.on("click", () => {
    if (suppressNextBoardClick) {
      suppressNextBoardClick = false;
      return;
    }
    selectedId = null;
    hoveredId = null;
    selectedEdgeId = null;
    hoveredEdgeId = null;
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

function scheduleNodeSettingsDropdownClose(target) {
  window.setTimeout(() => {
    if (!settingsNodeId || isSettingsCloseConfirmOpen) return;
    if (!(target instanceof Element)) return;
    const sidebar = document.querySelector("#nodeSettingsSidebar");
    if (!sidebar || !sidebar.contains(target)) return;
    if (
      target.closest(
        ".node-dropdown, #startChannelsSelect, #groupSelect, #employeeSelect, #distributionSelect, [id^='scheduleSelect-'], [id^='segmentSelect-'], [id^='conditionParameterSelect-'], [id^='conditionOperatorSelect-'], [id^='conditionValueSelect-'], #startEmployeeSelect, #startGroupSelect",
      )
    ) {
      return;
    }
    closeOpenNodeSettingsDropdowns();
  }, 0);
}

function closeOpenNodeSettingsDropdowns() {
  const nodeItem = getNode(settingsNodeId);
  if (!nodeItem || !isConfigurableNode(nodeItem)) return;
  const draft = getNodeSettingsDraft(nodeItem);
  let patch = null;
  if (isStartNode(nodeItem)) {
    if (!draft.channelsDropdownOpen && !draft.employeeDropdownOpen && !draft.groupDropdownOpen) return;
    patch = { channelsDropdownOpen: false, employeeDropdownOpen: false, groupDropdownOpen: false };
  } else if (isGroupTransferNode(nodeItem)) {
    if (!draft.groupDropdownOpen && !draft.distributionDropdownOpen) return;
    patch = { groupDropdownOpen: false, distributionDropdownOpen: false };
  } else if (isSimpleTransferNode(nodeItem)) {
    if (!draft.employeeDropdownOpen) return;
    patch = { employeeDropdownOpen: false };
  } else if (isScheduleNode(nodeItem)) {
    if (!draft.schedules.some((schedule) => schedule.dropdownOpen)) return;
    patch = { schedules: draft.schedules.map((schedule) => ({ ...schedule, dropdownOpen: false })) };
  } else if (isSegmentNode(nodeItem)) {
    if (!draft.groups.some((group) => group.dropdownOpen)) return;
    patch = { groups: draft.groups.map((group) => ({ ...group, dropdownOpen: false })) };
  } else if (isConditionNode(nodeItem)) {
    if (!draft.groups.some((group) => group.conditions.some((condition) => condition.parameterDropdownOpen || condition.operatorDropdownOpen || condition.valueDropdownOpen))) return;
    patch = {
      groups: draft.groups.map((group) => ({
        ...group,
        conditions: group.conditions.map((condition) => ({
          ...condition,
          parameterDropdownOpen: false,
          operatorDropdownOpen: false,
          valueDropdownOpen: false,
        })),
      })),
    };
  }
  if (!patch) return;
  updateNodeSettingsDraft(nodeItem, patch);
  renderNodeSettingsSidebar();
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
  input.value = nodeItem.title || "";
  updateNodeTitleEditorPosition();
  nodeLayer.selectAll(".scenario-node-svg").classed("is-title-editing", (d) => d.id === nodeId);
  input.classList.add("is-open");
  input.focus();
  input.select();
}

function updateNodeTitleEditorPosition(transform = d3.zoomTransform(svg.node())) {
  if (!titleEditingNodeId) return;
  const nodeItem = getNode(titleEditingNodeId);
  const input = document.querySelector("#nodeTitleEditor");
  if (!nodeItem || !input) return;
  const [x, y] = transform.apply([nodeItem.x + 60, nodeItem.y + 13]);
  const svgRect = svg.node().getBoundingClientRect();
  const width = isPlaceholderNode(nodeItem) ? 176 : NODE_TEXT_DEFAULT_WIDTH;
  const scale = transform.k;
  input.style.left = `${Math.round(svgRect.left + x)}px`;
  input.style.top = `${Math.round(svgRect.top + y)}px`;
  input.style.width = `${Math.round(width * scale)}px`;
  input.style.height = `${20 * scale}px`;
  input.style.fontSize = `${14 * scale}px`;
  input.style.lineHeight = `${20 * scale}px`;
  input.style.transform = "";
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
  const title = input.value.trim();
  if (title) {
    nodeItem.title = title;
    nodeItem.customTitle = true;
  } else {
    nodeItem.customTitle = false;
    applyCurrentAutoTitle(nodeItem);
  }
  closeNodeTitleEditor(false);
  selectedId = nodeItem.id;
  render();
  schedulePersistState();
}

function applyCurrentAutoTitle(nodeItem) {
  if (isStartNode(nodeItem)) return applyStartTitle(nodeItem, getStartSettings(nodeItem));
  if (isGroupTransferNode(nodeItem)) return applyGroupTransferTitle(nodeItem, getGroupTransferSettings(nodeItem));
  if (isSimpleTransferNode(nodeItem)) return applySimpleTransferTitle(nodeItem, getSimpleTransferSettings(nodeItem));
  if (isInfoMessageNode(nodeItem)) return applyInfoMessageTitle(nodeItem, getInfoMessageSettings(nodeItem));
  if (isContactFormNode(nodeItem)) return applyContactFormTitle(nodeItem, getContactFormSettings(nodeItem));
  if (isMenuNode(nodeItem)) return applyMenuTitle(nodeItem, getMenuSettings(nodeItem));
  if (isScheduleNode(nodeItem)) return applyScheduleTitle(nodeItem, getScheduleSettings(nodeItem));
  if (isSegmentNode(nodeItem)) return applySegmentTitle(nodeItem, getSegmentSettings(nodeItem));
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
  input.style.transform = "";
  input.style.height = "";
  input.style.fontSize = "";
  input.style.lineHeight = "";
  nodeLayer.selectAll(".scenario-node-svg").classed("is-title-editing", false);
}

function defaultTitleForNode(nodeItem) {
  if (!nodeItem) return "Операция";
  if (isFinishNode(nodeItem)) return "Закрытие чата";
  if (nodeItem.operationType === "group-transfer") return "На группу";
  if (SIMPLE_TRANSFER_CONFIG[nodeItem.operationType]) return SIMPLE_TRANSFER_CONFIG[nodeItem.operationType].title;
  if (nodeItem.operationType === INFO_MESSAGE_OPERATION) return "Информационное сообщение";
  if (nodeItem.operationType === CONTACT_FORM_OPERATION) return "Форма сбора контактов";
  if (nodeItem.operationType === MENU_OPERATION) return "Меню";
  if (nodeItem.operationType === SCHEDULE_OPERATION) return "Распределение по графику";
  if (nodeItem.operationType === SEGMENT_OPERATION) return "Распределение по сегментам";
  return catalog[nodeItem.kind]?.title || "Операция";
}

function copyNodeWithoutLinks(nodeId) {
  const sourceNode = getNode(nodeId);
  if (!sourceNode) return;
  pushHistory();
  const copy = clone(sourceNode);
  copy.id = `${sourceNode.kind}-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`;
  copy.x = sourceNode.x;
  copy.y = snapToDragGrid(sourceNode.y + NODE_H + 80);
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
  return isPointOverNode(pointerX, pointerY, nodeItem);
}

function isPointOverNode(pointerX, pointerY, nodeItem) {
  const left = nodeItem.x + NODE_PORT_LEFT_X - NODE_PORT_R;
  const rightEdge = hasVisibleRightPort(nodeItem) ? nodeRightPortX(nodeItem) + NODE_PORT_R : NODE_W;
  const right = nodeItem.x + rightEdge;
  const top = nodeItem.y - 1;
  const bottom = nodeItem.y + NODE_HOVER_H - 1;
  return pointerX >= left && pointerX <= right && pointerY >= top && pointerY <= bottom;
}

function startConnectionDrag(event, sourceNode, direction = "output") {
  event.sourceEvent?.stopPropagation();
  closeOutcomeMenu();
  closeNodeContextMenu();
  selectedEdgeId = null;
  hoveredEdgeId = null;
  const start = direction === "input" ? inputPortPoint(sourceNode) : outputPortPoint(sourceNode);
  connectionDrag = {
    sourceId: sourceNode.id,
    direction,
    start,
    current: { ...start },
    targetId: null,
  };
  selectedId = sourceNode.id;
  hoveredId = sourceNode.id;
  renderConnectionPreview();
}

function updateConnectionDrag(event) {
  if (!connectionDrag) return;
  event.sourceEvent?.stopPropagation();
  const transform = d3.zoomTransform(svg.node());
  const [x, y] = transform.invert(d3.pointer(event, svg.node()));
  const targetNode = findConnectionTarget(x, y, connectionDrag);
  connectionDrag.targetId = targetNode?.id || null;
  connectionDrag.current = targetNode ? connectionTargetPortPoint(targetNode, connectionDrag.direction) : { x, y };
  hoveredId = connectionDrag.targetId || connectionDrag.sourceId;
  renderEdges();
  renderConnectionPreview();
  renderNodes();
}

function endConnectionDrag(event) {
  if (!connectionDrag) return;
  event.sourceEvent?.stopPropagation();
  const { sourceId, targetId, direction, current } = connectionDrag;
  const menuPoint = current ? d3.zoomTransform(svg.node()).apply([current.x, current.y]) : null;
  connectionDrag = null;
  clearConnectionPreview();
  if (targetId) {
    if (direction === "input") connectNodesManually(targetId, sourceId, null, { menuPoint });
    else connectNodesManually(sourceId, targetId, null, { menuPoint });
    return;
  }
  hoveredId = nodeIdUnderPointer(event);
  render();
}

function nodeIdUnderPointer(event) {
  return state.nodes.find((nodeItem) => isPointerOverNode(event, nodeItem))?.id || null;
}

function renderConnectionPreview() {
  if (!connectionDrag) {
    clearConnectionPreview();
    return;
  }
  const preview = connectionPreviewLayer.selectAll(".connection-preview-edge").data([connectionDrag]);
  preview
    .enter()
    .append("path")
    .attr("class", "connection-preview-edge")
    .merge(preview)
    .attr("d", connectionDrag.direction === "input" ? connectionPreviewPath(connectionDrag.current, connectionDrag.start) : connectionPreviewPath(connectionDrag.start, connectionDrag.current))
    .attr("marker-end", "url(#arrowPlain)");
}

function clearConnectionPreview() {
  connectionPreviewLayer.selectAll(".connection-preview-edge").remove();
}

function connectionPreviewPath(start, end) {
  if (Math.abs(end.y - start.y) < 1) return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
  if (end.x <= start.x + 48) {
    const outwardX = start.x + 64;
    const bridgeX = end.x - 64;
    const midY = start.y + (end.y - start.y) / 2;
    return roundedPolylinePath(
      [
        { x: start.x, y: start.y },
        { x: outwardX, y: start.y },
        { x: outwardX, y: midY },
        { x: bridgeX, y: midY },
        { x: bridgeX, y: end.y },
        { x: end.x, y: end.y },
      ],
      18,
    );
  }
  const midX = start.x + (end.x - start.x) / 2;
  const radius = Math.min(18, Math.abs(midX - start.x) / 2, Math.abs(end.x - midX) / 2, Math.abs(end.y - start.y) / 2);
  if (radius < 1) return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
  const directionY = end.y > start.y ? 1 : -1;
  return [
    `M ${start.x} ${start.y}`,
    `L ${midX - radius} ${start.y}`,
    `Q ${midX} ${start.y} ${midX} ${start.y + directionY * radius}`,
    `L ${midX} ${end.y - directionY * radius}`,
    `Q ${midX} ${end.y} ${midX + radius} ${end.y}`,
    `L ${end.x} ${end.y}`,
  ].join(" ");
}

function outputPortPoint(nodeItem) {
  return {
    x: nodeItem.x + nodeRightPortX(nodeItem) + NODE_PORT_R + NODE_PORT_ARROW_GAP,
    y: nodeItem.y + NODE_H / 2,
  };
}

function inputPortPoint(nodeItem) {
  return {
    x: nodeItem.x + NODE_PORT_LEFT_X - NODE_PORT_R - NODE_PORT_ARROW_GAP,
    y: nodeItem.y + NODE_H / 2,
  };
}

function connectionTargetPortPoint(nodeItem, direction) {
  return direction === "input" ? outputPortPoint(nodeItem) : inputPortPoint(nodeItem);
}

function isValidConnectionTarget(nodeItem, dragState = connectionDrag) {
  if (!nodeItem || !dragState) return false;
  if (dragState.direction === "input") return hasFreeOutputs(nodeItem) && !isPlaceholderNode(nodeItem);
  return canReceiveInput(nodeItem);
}

function isNodeMutedDuringConnection(nodeItem) {
  if (!connectionDrag || nodeItem.id === connectionDrag.sourceId) return false;
  return !isValidConnectionTarget(nodeItem, connectionDrag);
}

function findConnectionTarget(x, y, dragState) {
  const hitRadius = 12;
  const portTarget = state.nodes.find((nodeItem) => {
    if (!isValidConnectionTarget(nodeItem, dragState)) return false;
    const port = dragState.direction === "input" ? { x: nodeItem.x + nodeRightPortX(nodeItem), y: nodeItem.y + NODE_H / 2 } : { x: nodeItem.x + NODE_PORT_LEFT_X, y: nodeItem.y + NODE_H / 2 };
    return Math.hypot(x - port.x, y - port.y) <= hitRadius;
  });
  if (portTarget) return portTarget;
  return state.nodes.find((nodeItem) => isValidConnectionTarget(nodeItem, dragState) && isPointOverNode(x, y, nodeItem)) || null;
}

function connectNodesManually(sourceId, targetId, outputKey = null, options = {}) {
  const sourceNode = getNode(sourceId);
  const targetNode = getNode(targetId);
  if (!sourceNode || !targetNode || !canReceiveInput(targetNode)) {
    render();
    return;
  }
  const outputs = freeOutputs(sourceNode);
  if (!outputKey && outputs.length > 1) {
    openOutcomeMenu(sourceId, { targetId, anchor: options.menuPoint });
    render();
    return;
  }
  const output = outputKey ? nodeOutputs(sourceNode).find((item) => item.key === outputKey && outputs.some((freeOutput) => freeOutput.key === item.key)) : outputs[0];
  if (!output) {
    render();
    return;
  }
  pushHistory();
  state.edges = state.edges.filter((edgeItem) => !(edgeItem.source === sourceId && edgeItem.outputKey === output.key && isPlaceholderNode(getNode(edgeItem.target))));
  removeDetachedPlaceholderTargets(new Set(state.nodes.filter(isPlaceholderNode).map((nodeItem) => nodeItem.id)));
  state.edges.push(createOutputEdge(sourceNode, targetId, output.key));
  selectedId = null;
  hoveredId = null;
  render();
  schedulePersistState();
}

function snapToDragGrid(value) {
  return Math.round(value / NODE_DRAG_GRID_STEP) * NODE_DRAG_GRID_STEP;
}

function renderEdges() {
  edgeLabelPlacements = buildEdgeLabelPlacements();
  const edgeGroups = edgeLayer.selectAll(".scenario-edge-group").data(state.edges, (d) => d.id);
  edgeGroups.exit().remove();
  const edgeGroupsEnter = edgeGroups.enter().append("g").attr("class", "scenario-edge-group");
  edgeGroupsEnter.append("path").attr("class", "scenario-edge-hitarea").attr("marker-end", null);
  edgeGroupsEnter.append("path").attr("class", "scenario-edge");
  edgeGroupsEnter.merge(edgeGroups).each(function (d) {
    const group = d3.select(this);
    const path = edgePath(d);
    group
      .select(".scenario-edge-hitarea")
      .attr("d", path)
      .attr("marker-end", null)
      .on("mouseenter", (event) => {
        hoveredEdgeId = d.id;
        renderEdges();
      })
      .on("mouseleave", (event) => {
        if (hoveredEdgeId === d.id) hoveredEdgeId = null;
        renderEdges();
      })
      .on("click", (event) => {
        event.stopPropagation();
        clearBulkSelection();
        selectedEdgeId = d.id;
        selectedId = null;
        hoveredEdgeId = d.id;
        closeNodeContextMenu();
        closeOutcomeMenu();
        render();
      });
    group
      .select(".scenario-edge")
      .attr("d", path)
      .attr("stroke", edgeColor(d))
      .attr("marker-end", isEdgeActive(d) ? "url(#arrowAccent)" : "url(#arrowPlain)");
  });

  const labels = labelLayer.selectAll(".edge-label-svg").data(state.edges.filter((d) => d.label), (d) => d.id);
  labels.exit().remove();
  const enter = labels.enter().append("g").attr("class", "edge-label-svg");
  enter.append("rect").attr("rx", 4);
  enter.append("text").attr("x", EDGE_LABEL_PADDING_X).attr("y", 12);
  const labelSelection = enter.merge(labels);
  labelSelection.each(function (d) {
    const group = d3.select(this);
    const text = group.select("text").text(d.label);
    const placement = edgeLabelPlacements.get(d.id);
    const width = placement?.width || estimateEdgeLabelWidth(d.label);
    const maxTextWidth = EDGE_LABEL_MAX_WIDTH - EDGE_LABEL_PADDING_X * 2;
    fitSvgText(text, d.label, maxTextWidth);
    d.__labelClipped = text.text() !== (d.label || "");
    d.__labelWidth = width;
  });
  labelSelection.each(function (d) {
    const group = d3.select(this);
    const text = group.select("text");
    const width = d.__labelWidth || EDGE_LABEL_MAX_WIDTH;
    const placement = edgeLabelPlacements.get(d.id) || edgeLabelRect(d, width);
    group.attr("transform", `translate(${placement.x},${placement.y})`).attr("class", "edge-label-svg");
    group.select("rect").attr("width", width).attr("height", 24).attr("fill", edgeColor(d));
    text.attr("x", EDGE_LABEL_PADDING_X).attr("y", 12).attr("fill", "white").attr("font", "var(--cmgui-font-caption)");
    group
      .on("mouseenter", (event) => {
        hoveredEdgeId = d.id;
        renderEdges();
        if (d.__labelClipped) showEdgeTooltip(event, d.label);
      })
      .on("mouseleave", (event) => {
        if (hoveredEdgeId === d.id) hoveredEdgeId = null;
        hideEdgeTooltip();
        renderEdges();
      })
      .on("click", (event) => {
        event.stopPropagation();
        clearBulkSelection();
        selectedEdgeId = d.id;
        selectedId = null;
        hoveredEdgeId = d.id;
        render();
      });
    delete d.__labelWidth;
  });
}

function renderSelectionOverlay() {
  selectionLayer.selectAll("*").remove();
  if (selectionDrag) {
    const rect = rectFromPoints(selectionDrag.start, selectionDrag.current);
    selectionLayer
      .append("rect")
      .attr("class", "bulk-selection-rect")
      .attr("x", rect.x)
      .attr("y", rect.y)
      .attr("width", rect.width)
      .attr("height", rect.height);
  }
  if (!selectionDrag && (bulkSelectedNodeIds.size || bulkSelectedEdgeIds.size)) renderBulkSelectionMenu();
  if (!selectionDrag && !bulkSelectedNodeIds.size && !bulkSelectedEdgeIds.size && selectedEdgeId) renderSelectedEdgeMenu();
}

function renderBulkSelectionMenu() {
  const bounds = bulkSelectionBounds();
  if (!bounds) return;
  const menuWidth = 96;
  const menuHeight = 44;
  const menuX = bounds.x + bounds.width / 2 - menuWidth / 2;
  const menuY = bounds.y - 58;
  const menu = selectionLayer.append("g").attr("class", "bulk-selection-menu").attr("transform", `translate(${menuX},${menuY})`);
  menu.append("rect").attr("class", "bulk-selection-menu-bg").attr("width", menuWidth).attr("height", menuHeight).attr("rx", 12);
  const copyButton = menu.append("g").attr("class", "bulk-selection-menu-button").attr("transform", "translate(8,0)").on("click", (event) => {
    event.stopPropagation();
    copyBulkSelection();
  });
  copyButton.append("rect").attr("width", 40).attr("height", 44).attr("rx", 20);
  copyButton.append("g").attr("transform", "translate(10,12)").html(iconSvg("copy-20", 20));
  const deleteButton = menu.append("g").attr("class", "bulk-selection-menu-button").attr("transform", "translate(48,0)").on("click", (event) => {
    event.stopPropagation();
    deleteBulkSelection();
  });
  deleteButton.append("rect").attr("width", 40).attr("height", 44).attr("rx", 20);
  deleteButton.append("g").attr("transform", "translate(10,12)").html(iconSvg("delete-20", 20));
}

function renderSelectedEdgeMenu() {
  const edgeItem = state.edges.find((item) => item.id === selectedEdgeId);
  if (!edgeItem) return;
  const point = edgeMenuPoint(edgeItem);
  if (!point) return;
  const menuWidth = 44;
  const menuHeight = 44;
  const menuX = point.x - menuWidth / 2;
  const menuY = point.y - menuHeight / 2;
  const menu = selectionLayer.append("g").attr("class", "bulk-selection-menu edge-selection-menu").attr("transform", `translate(${menuX},${menuY})`);
  menu.append("rect").attr("class", "bulk-selection-menu-bg").attr("width", menuWidth).attr("height", menuHeight).attr("rx", 12);
  const deleteButton = menu.append("g").attr("class", "bulk-selection-menu-button").on("click", (event) => {
    event.stopPropagation();
    removeEdgeById(edgeItem.id);
  });
  deleteButton.append("rect").attr("width", 44).attr("height", 44).attr("rx", 12);
  deleteButton.append("g").attr("transform", "translate(12,12)").html(iconSvg("delete-20", 20));
}

function edgeMenuPoint(edgeItem) {
  return polylineMidpoint(edgeVisualPoints(edgeItem));
}

function edgeVisualPoints(edgeItem) {
  const source = getNode(edgeItem.source);
  const target = getNode(edgeItem.target);
  if (!source || !target) return [];
  const route = edgeRoute(source, target, edgeItem);
  if (!route) return [];
  if (route.isBackRoute && route.points) return [...route.points];
  const labelPlacement = edgeItem.label && edgeItem.source !== edgeItem.target ? edgeLabelPlacements.get(edgeItem.id) : null;
  if (labelPlacement) return edgePointsThroughLabel(route, labelPlacement);
  return route.points ? [...route.points] : routeToPoints(route);
}

function edgePointsThroughLabel(route, labelPlacement) {
  const labelY = labelPlacement.y + labelPlacement.height / 2;
  const labelLeft = labelPlacement.x;
  const labelRight = labelPlacement.x + labelPlacement.width;
  const approachX = labelPlacement.approachX ?? labelLeft - 56;
  if (route.points) {
    const outwardX = route.outwardX ?? Math.max(route.layoutX1 + 64, route.x1 + 64);
    const bridgeX = Math.min(route.bridgeX ?? approachX, approachX);
    const midY = route.midY ?? route.y1 + (route.y2 - route.y1) / 2;
    const afterLabelX = labelExitX(labelRight, route.x2);
    const points = [
      { x: route.x1, y: route.y1 },
      { x: route.layoutX1, y: route.y1 },
      { x: outwardX, y: route.y1 },
      { x: outwardX, y: midY },
      { x: bridgeX, y: midY },
      { x: bridgeX, y: labelY },
      { x: labelLeft, y: labelY },
      { x: labelRight, y: labelY },
    ];
    if (Math.abs(labelY - route.y2) > 1) {
      points.push({ x: afterLabelX, y: labelY }, { x: afterLabelX, y: route.y2 });
    }
    points.push({ x: route.x2, y: route.y2 });
    return normalizePolylinePoints(points);
  }
  const beforeLabelX = labelApproachX(route, labelLeft, approachX);
  const afterLabelX = labelExitX(labelRight, route.x2);
  if (beforeLabelX < route.x1 - 1 && Math.abs(route.y1 - labelY) > 80) {
    const sourceLaneX = Math.max(route.x1 + 64, route.layoutX1 + 64);
    const midY = route.y1 + (labelY - route.y1) / 2;
    const points = [
      { x: route.x1, y: route.y1 },
      { x: sourceLaneX, y: route.y1 },
      { x: sourceLaneX, y: midY },
      { x: beforeLabelX, y: midY },
      { x: beforeLabelX, y: labelY },
      { x: labelLeft, y: labelY },
      { x: labelRight, y: labelY },
    ];
    if (Math.abs(labelY - route.y2) > 1) {
      points.push({ x: afterLabelX, y: labelY }, { x: afterLabelX, y: route.y2 });
    }
    points.push({ x: route.x2, y: route.y2 });
    return normalizePolylinePoints(points);
  }
  const points = [
    { x: route.x1, y: route.y1 },
    { x: beforeLabelX, y: route.y1 },
    { x: beforeLabelX, y: labelY },
    { x: labelLeft, y: labelY },
    { x: labelRight, y: labelY },
  ];
  if (Math.abs(labelY - route.y2) > 1) {
    points.push({ x: afterLabelX, y: labelY }, { x: afterLabelX, y: route.y2 });
  }
  points.push({ x: route.x2, y: route.y2 });
  return normalizePolylinePoints(points);
}

function polylineMidpoint(points) {
  if (!points.length) return null;
  if (points.length === 1) return points[0];
  const lengths = [];
  let total = 0;
  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const current = points[index];
    const length = Math.hypot(current.x - prev.x, current.y - prev.y);
    lengths.push(length);
    total += length;
  }
  let distance = total / 2;
  for (let index = 1; index < points.length; index += 1) {
    const prev = points[index - 1];
    const current = points[index];
    const length = lengths[index - 1];
    if (distance > length) {
      distance -= length;
      continue;
    }
    const ratio = length ? distance / length : 0;
    return { x: prev.x + (current.x - prev.x) * ratio, y: prev.y + (current.y - prev.y) * ratio };
  }
  return points[points.length - 1];
}

function bulkSelectionBounds() {
  const rects = [
    ...state.nodes.filter((nodeItem) => bulkSelectedNodeIds.has(nodeItem.id)).map(nodeBounds),
    ...state.edges.filter((edgeItem) => bulkSelectedEdgeIds.has(edgeItem.id)).map(edgeBounds).filter(Boolean),
  ];
  if (!rects.length) return null;
  const minX = Math.min(...rects.map((rect) => rect.x));
  const minY = Math.min(...rects.map((rect) => rect.y));
  const maxX = Math.max(...rects.map((rect) => rect.x + rect.width));
  const maxY = Math.max(...rects.map((rect) => rect.y + rect.height));
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
}

function buildEdgeLabelPlacements() {
  const result = new Map();
  const labelItems = state.edges
    .filter((edgeItem) => edgeItem.label)
    .map((edgeItem) => {
      const width = estimateEdgeLabelWidth(edgeItem.label);
      return { edge: edgeItem, edgeIndex: state.edges.indexOf(edgeItem), orderY: edgeLabelOrderY(edgeItem), ...edgeLabelRect(edgeItem, width) };
    });
  const regularItems = [];
  labelItems.forEach((item) => {
    if (item.edge.source === item.edge.target) {
      result.set(item.id, item);
      return;
    }
    regularItems.push(item);
  });
  layoutEdgeLabelPlacements(regularItems).forEach((value, key) => result.set(key, value));
  return result;
}

function edgeLabelRect(edgeItem, width) {
  const p = edgeLabelPoint(edgeItem, width);
  return { id: edgeItem.id, x: p.x - width / 2, y: p.y - 12, width, height: 24 };
}

function edgeLabelOrderY(edgeItem) {
  const source = getNode(edgeItem.source);
  const target = getNode(edgeItem.target);
  if (!source || !target) return 0;
  const route = edgeRoute(source, target, edgeItem);
  if (!route) return target.y;
  return route.labelY ?? route.loopY ?? route.y2;
}

function layoutEdgeLabelPlacements(items) {
  const placements = [];
  const result = new Map();
  const groupOffsets = [0, 28, -28, 56, -56, 84, -84, 112, -112];
  const groups = new Map();
  items.forEach((item) => {
    const key = item.edge.target || item.id;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  [...groups.values()]
    .sort((a, b) => Math.min(...a.map((item) => item.y)) - Math.min(...b.map((item) => item.y)) || Math.min(...a.map((item) => item.x)) - Math.min(...b.map((item) => item.x)))
    .forEach((group) => {
      const orderedGroup = group.slice().sort((a, b) => a.orderY - b.orderY || a.edgeIndex - b.edgeIndex);
      const centerOffset = (orderedGroup.length - 1) / 2;
      const baseCandidates = orderedGroup.map((item, index) => ({
        ...item,
        y: item.y + Math.round((index - centerOffset) * 28),
      }));
      let placedGroup = null;
      for (const offset of groupOffsets) {
        const candidates = baseCandidates.map((item) => ({ ...item, y: item.y + offset }));
        if (!candidates.some((candidate) => placements.some((other) => rectsOverlap(candidate, other)))) {
          placedGroup = candidates;
          break;
        }
      }
      placedGroup ||= baseCandidates.map((item) => ({ ...item, y: item.y + groupOffsets[groupOffsets.length - 1] }));
      const approachX = Math.min(...placedGroup.map((placed) => placed.x)) - 56;
      placedGroup.forEach((placed) => {
        const placedWithLane = { ...placed, approachX };
        placements.push(placedWithLane);
        result.set(placed.id, placedWithLane);
      });
    });
  return result;
}

function rectsOverlap(a, b, gap = 4) {
  return a.x < b.x + b.width + gap && a.x + a.width + gap > b.x && a.y < b.y + b.height + gap && a.y + a.height + gap > b.y;
}

function isEdgeActive(edgeItem) {
  return edgeItem.id === selectedEdgeId || edgeItem.id === hoveredEdgeId || bulkSelectedEdgeIds.has(edgeItem.id);
}

function edgeColor(edgeItem) {
  return isEdgeActive(edgeItem) ? "var(--cmgui-color-special-13)" : colorForTone(edgeItem);
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

function showScenarioTitleTooltip(event) {
  const title = event.currentTarget;
  if (!(title instanceof HTMLElement) || title.scrollWidth <= title.clientWidth + 1) return;
  showEdgeTooltip(event, title.textContent || "");
}

function moveScenarioTitleTooltip(event) {
  const tooltip = document.querySelector("#edgeTooltip");
  if (!tooltip?.classList.contains("is-open")) return;
  tooltip.style.left = `${event.clientX + 12}px`;
  tooltip.style.top = `${event.clientY + 12}px`;
}

function startScenarioTitleEdit(event) {
  event?.stopPropagation();
  const currentScenario = getCurrentScenario();
  const input = document.querySelector("#scenarioTitleInput");
  if (!currentScenario || !input) return;
  hideEdgeTooltip();
  isScenarioTitleEditing = true;
  scenarioTitleBeforeEdit = currentScenario.name;
  document.querySelector(".top-title-wrap")?.classList.add("is-editing");
  input.value = currentScenario.name;
  input.focus();
  input.select();
}

function commitScenarioTitleEdit() {
  if (!isScenarioTitleEditing) return;
  const currentScenario = getCurrentScenario();
  const input = document.querySelector("#scenarioTitleInput");
  if (!currentScenario || !input) {
    closeScenarioTitleEdit();
    return;
  }
  const nextName = input.value.trim();
  if (nextName && nextName !== currentScenario.name) {
    currentScenario.name = nextName;
    document.querySelector("#scenarioTitleText").textContent = nextName;
    schedulePersistState();
    renderScenarioList();
  }
  closeScenarioTitleEdit();
}

function closeScenarioTitleEdit() {
  isScenarioTitleEditing = false;
  const input = document.querySelector("#scenarioTitleInput");
  if (input) input.value = getCurrentScenario()?.name || scenarioTitleBeforeEdit;
  document.querySelector(".top-title-wrap")?.classList.remove("is-editing");
  scenarioTitleBeforeEdit = "";
}

function updateNodeText(groupElement, nodeData, compact) {
  const group = d3.select(groupElement);
  const shouldCompactText = compact && !isStartNode(nodeData);
  const titleWidth = isPlaceholderNode(nodeData) ? 176 : shouldCompactText ? NODE_TEXT_COMPACT_WIDTH : NODE_TEXT_DEFAULT_WIDTH;
  fitSvgText(group.select(".node-title-svg"), nodeData.title, titleWidth);
  fitNodeSubtitle(group.select(".node-subtitle-svg"), isPlaceholderNode(nodeData) ? "" : nodeData.subtitle, shouldCompactText ? NODE_TEXT_COMPACT_WIDTH : NODE_TEXT_DEFAULT_WIDTH);
}

function fitNodeSubtitle(textSelection, value, maxWidth) {
  fitSvgText(textSelection, value, maxWidth);
  const fittedValue = textSelection.text();
  const colonIndex = fittedValue.indexOf(":");
  if (colonIndex < 0 || !fittedValue.slice(colonIndex + 1).trim()) return;
  const labelPart = fittedValue.slice(0, colonIndex + 1);
  const valuePart = fittedValue.slice(colonIndex + 1);
  textSelection.text(null);
  textSelection.append("tspan").attr("class", "node-subtitle-label").text(labelPart);
  textSelection.append("tspan").attr("class", "node-subtitle-value").text(valuePart);
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
  if (route.isBackRoute && route.points) return roundedPolylinePath(route.points, route.radius);
  const labelPlacement = d.label && d.source !== d.target ? edgeLabelPlacements.get(d.id) : null;
  if (labelPlacement) return edgePathThroughLabel(route, labelPlacement);
  if (route.points) return roundedPolylinePath(route.points, route.radius);

  const { x1, y1, x2, y2, layoutX1, layoutX2, midX, radius } = route;
  if (Math.abs(y2 - y1) < 1) return `M ${x1} ${y1} L ${x2} ${y2}`;

  const directionY = y2 > y1 ? 1 : -1;
  const commands = [`M ${x1} ${y1}`];
  if (layoutX1 > x1 + 0.5) commands.push(`L ${layoutX1} ${y1}`);
  commands.push(
    `L ${midX - radius} ${y1}`,
    `Q ${midX} ${y1} ${midX} ${y1 + directionY * radius}`,
    `L ${midX} ${y2 - directionY * radius}`,
    `Q ${midX} ${y2} ${midX + radius} ${y2}`,
    `L ${x2} ${y2}`,
  );
  return commands.join(" ");
}

function edgePathThroughLabel(route, labelPlacement) {
  const labelY = labelPlacement.y + labelPlacement.height / 2;
  const labelLeft = labelPlacement.x;
  const labelRight = labelPlacement.x + labelPlacement.width;
  const approachX = labelPlacement.approachX ?? labelLeft - 56;
  if (route.points) {
    const outwardX = route.outwardX ?? Math.max(route.layoutX1 + 64, route.x1 + 64);
    const bridgeX = Math.min(route.bridgeX ?? approachX, approachX);
    const midY = route.midY ?? route.y1 + (route.y2 - route.y1) / 2;
    const afterLabelX = labelExitX(labelRight, route.x2);
    const points = [
      { x: route.x1, y: route.y1 },
      { x: route.layoutX1, y: route.y1 },
      { x: outwardX, y: route.y1 },
      { x: outwardX, y: midY },
      { x: bridgeX, y: midY },
      { x: bridgeX, y: labelY },
      { x: labelLeft, y: labelY },
      { x: labelRight, y: labelY },
    ];
    if (Math.abs(labelY - route.y2) > 1) {
      points.push({ x: afterLabelX, y: labelY }, { x: afterLabelX, y: route.y2 });
    }
    points.push({ x: route.x2, y: route.y2 });
    return roundedPolylinePath(normalizePolylinePoints(points), route.radius || 18);
  }
  const beforeLabelX = labelApproachX(route, labelLeft, approachX);
  const afterLabelX = labelExitX(labelRight, route.x2);
  if (beforeLabelX < route.x1 - 1 && Math.abs(route.y1 - labelY) > 80) {
    const sourceLaneX = Math.max(route.x1 + 64, route.layoutX1 + 64);
    const midY = route.y1 + (labelY - route.y1) / 2;
    const points = [
      { x: route.x1, y: route.y1 },
      { x: sourceLaneX, y: route.y1 },
      { x: sourceLaneX, y: midY },
      { x: beforeLabelX, y: midY },
      { x: beforeLabelX, y: labelY },
      { x: labelLeft, y: labelY },
      { x: labelRight, y: labelY },
    ];
    if (Math.abs(labelY - route.y2) > 1) {
      points.push({ x: afterLabelX, y: labelY }, { x: afterLabelX, y: route.y2 });
    }
    points.push({ x: route.x2, y: route.y2 });
    return roundedPolylinePath(normalizePolylinePoints(points), route.radius || 18);
  }
  const points = [
    { x: route.x1, y: route.y1 },
    { x: beforeLabelX, y: route.y1 },
    { x: beforeLabelX, y: labelY },
    { x: labelLeft, y: labelY },
    { x: labelRight, y: labelY },
  ];
  if (Math.abs(labelY - route.y2) > 1) {
    points.push({ x: afterLabelX, y: labelY }, { x: afterLabelX, y: route.y2 });
  }
  points.push({ x: route.x2, y: route.y2 });
  return roundedPolylinePath(points, route.radius || 18);
}

function labelExitX(labelRight, targetX) {
  const minExitX = labelRight + 40;
  const maxExitX = targetX - 40;
  if (maxExitX < minExitX) return minExitX;
  return Math.min(maxExitX, labelRight + 72);
}

function labelApproachX(route, labelLeft, preferredX) {
  if (labelLeft <= route.x1 + 24) return Math.min(preferredX, labelLeft - 40);
  const minX = route.x1 + 24;
  const maxX = labelLeft - 16;
  return Math.max(minX, Math.min(preferredX, maxX));
}

function normalizePolylinePoints(points) {
  return points.filter((point, index) => {
    const prev = points[index - 1];
    return !prev || Math.abs(prev.x - point.x) > 0.5 || Math.abs(prev.y - point.y) > 0.5;
  });
}

function edgeLabelPoint(d, labelWidth = EDGE_LABEL_MAX_WIDTH) {
  const a = getNode(d.source);
  const b = getNode(d.target);
  if (!a || !b) return { x: 0, y: 0 };
  if (a.id === b.id) {
    const route = selfLoopRoute(a, d);
    return { x: a.x + NODE_W / 2, y: route.loopY };
  }
  const route = edgeRoute(a, b, d);
  if (!route) return { x: 0, y: 0 };
  return { x: b.x - EDGE_LABEL_SIDE_GAP - labelWidth / 2, y: route.y2 };
}

function edgeRoute(sourceNode, targetNode, edgeItem = null) {
  if (sourceNode.id === targetNode.id) return selfLoopRoute(sourceNode, edgeItem);
  const sourcePortVisible = isNodePortVisible(sourceNode.id) && hasVisibleRightPort(sourceNode);
  const targetPortVisible = isNodePortVisible(targetNode.id) && canReceiveInput(targetNode);
  const layoutX1 = sourceNode.x + NODE_W + NODE_PORT_EDGE_GAP;
  const layoutX2 = targetNode.x - NODE_PORT_EDGE_GAP;
  const x1 = sourcePortVisible ? sourceNode.x + nodeRightPortX(sourceNode) + NODE_PORT_R + NODE_PORT_ARROW_GAP : layoutX1;
  const y1 = sourceNode.y + NODE_H / 2;
  const x2 = targetNode.x + (targetPortVisible ? NODE_PORT_LEFT_X - NODE_PORT_R - NODE_PORT_ARROW_GAP : -NODE_PORT_EDGE_GAP);
  const y2 = targetNode.y + NODE_H / 2;
  if (targetNode.x < sourceNode.x) {
    const backIndex = backEdgeIndex(sourceNode.id, targetNode.id, edgeItem);
    const startsFromBottom = isInfoMessageNode(sourceNode);
    const direction = backIndex % 2 === 0 ? (startsFromBottom ? 1 : -1) : startsFromBottom ? -1 : 1;
    const ring = Math.floor(backIndex / 2);
    const outerY =
      direction < 0
        ? Math.min(sourceNode.y, targetNode.y) - 56 - ring * 40
        : Math.max(sourceNode.y + NODE_H, targetNode.y + NODE_H) + 56 + ring * 40;
    const rightX = Math.max(x1 + 56, sourceNode.x + NODE_W + 56);
    const leftX = Math.min(x2 - 56, targetNode.x - 56);
    return {
      x1,
      y1,
      x2,
      y2,
      layoutX1,
      layoutX2,
      radius: 18,
      isBackRoute: true,
      labelX: targetNode.x - EDGE_LABEL_SIDE_GAP - (edgeItem?.label ? estimateEdgeLabelWidth(edgeItem.label) : EDGE_LABEL_MAX_WIDTH) / 2,
      labelY: outerY,
      points: [
        { x: x1, y: y1 },
        { x: rightX, y: y1 },
        { x: rightX, y: outerY },
        { x: leftX, y: outerY },
        { x: leftX, y: y2 },
        { x: x2, y: y2 },
      ],
    };
  }
  if (layoutX2 <= layoutX1 + 48 && Math.abs(y2 - y1) > 1) {
    const labelWidth = edgeItem?.label ? estimateEdgeLabelWidth(edgeItem.label) : 0;
    const outwardX = layoutX1 + 64;
    const labelLeftX = targetNode.x - EDGE_LABEL_SIDE_GAP * 2 - labelWidth;
    const bridgeX = Math.min(layoutX2 - 64, labelLeftX - 40);
    const midY = y1 + (y2 - y1) / 2;
    const points = [{ x: x1, y: y1 }];
    if (layoutX1 > x1 + 0.5) points.push({ x: layoutX1, y: y1 });
    points.push(
      { x: outwardX, y: y1 },
      { x: outwardX, y: midY },
      { x: bridgeX, y: midY },
      { x: bridgeX, y: y2 },
      { x: x2, y: y2 },
    );
    return {
      x1,
      y1,
      x2,
      y2,
      layoutX1,
      layoutX2,
      outwardX,
      bridgeX,
      midY,
      radius: 18,
      points,
    };
  }
  const midX = layoutX2 > layoutX1 ? layoutX1 + (layoutX2 - layoutX1) / 2 : Math.max(layoutX1 + 56, targetNode.x + NODE_W + 56);
  const radius = Math.min(18, Math.abs(midX - layoutX1) / 2, Math.abs(layoutX2 - midX) / 2, Math.abs(y2 - y1) / 2);
  return { x1, y1, x2, y2, layoutX1, layoutX2, midX, radius };
}

function backEdgeIndex(sourceId, targetId, edgeItem) {
  const backEdges = state.edges.filter((item) => {
    const sourceNode = getNode(item.source);
    const targetNode = getNode(item.target);
    return sourceNode && targetNode && item.source !== item.target && targetNode.x < sourceNode.x;
  });
  return Math.max(0, edgeItem ? backEdges.findIndex((item) => item.id === edgeItem.id) : backEdges.length - 1);
}

function selfLoopRoute(nodeItem, edgeItem = null) {
  const y1 = nodeItem.y + NODE_H / 2;
  const portVisible = isNodePortVisible(nodeItem.id);
  const x1 = portVisible && hasVisibleRightPort(nodeItem) ? nodeItem.x + nodeRightPortX(nodeItem) + NODE_PORT_R + NODE_PORT_ARROW_GAP : nodeItem.x + NODE_W + NODE_PORT_EDGE_GAP;
  const x2 = portVisible && canReceiveInput(nodeItem) ? nodeItem.x + NODE_PORT_LEFT_X - NODE_PORT_R - NODE_PORT_ARROW_GAP : nodeItem.x - NODE_PORT_EDGE_GAP;
  const loopIndex = selfLoopIndex(nodeItem.id, edgeItem);
  const direction = loopIndex % 2 === 0 ? -1 : 1;
  const ring = Math.floor(loopIndex / 2);
  const verticalGap = 52 + ring * 40;
  const loopY = nodeItem.y + NODE_H / 2 + direction * verticalGap;
  const rightX = Math.max(nodeItem.x + NODE_W + 44 + ring * 16, x1 + 36);
  const leftX = Math.min(nodeItem.x - 44 - ring * 16, x2 - 36);
  return {
    x1,
    y1,
    x2,
    y2: y1,
    radius: 18,
    points: [
      { x: x1, y: y1 },
      { x: rightX, y: y1 },
      { x: rightX, y: loopY },
      { x: leftX, y: loopY },
      { x: leftX, y: y1 },
      { x: x2, y: y1 },
    ],
    loopY,
  };
}

function selfLoopIndex(nodeId, edgeItem) {
  const loops = state.edges.filter((item) => item.source === nodeId && item.target === nodeId);
  return Math.max(0, edgeItem ? loops.findIndex((item) => item.id === edgeItem.id) : loops.length - 1);
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
  if (nodeId === selectedId || nodeId === hoveredId) return true;
  if (!connectionDrag) return false;
  const nodeItem = getNode(nodeId);
  return isValidConnectionTarget(nodeItem, connectionDrag);
}

function nodeRightPortX(nodeItem) {
  if (isConnectionRightPortTarget(nodeItem)) return NODE_PORT_RIGHT_COMPACT_X;
  return hasVisibleRightPort(nodeItem) ? NODE_PORT_RIGHT_X : NODE_W;
}

function isConnectionRightPortTarget(nodeItem) {
  return Boolean(connectionDrag?.direction === "input" && connectionDrag.sourceId !== nodeItem?.id && hasFreeOutputs(nodeItem) && !isPlaceholderNode(nodeItem));
}

function hasVisibleRightPort(nodeItem) {
  return hasFreeOutputs(nodeItem) && !isPlaceholderNode(nodeItem);
}

function shouldShowRightPort(nodeItem) {
  if (!hasVisibleRightPort(nodeItem)) return false;
  if (!connectionDrag) return true;
  if (connectionDrag.direction === "output") return nodeItem.id === connectionDrag.sourceId;
  return true;
}

function canReceiveInput(nodeItem) {
  if (!nodeItem || nodeItem.kind === "start") return false;
  if (isTransferOperationNode(nodeItem)) return true;
  return !state.edges.some((edgeItem) => edgeItem.target === nodeItem.id);
}

function isTransferOperationNode(nodeItem) {
  return isGroupTransferNode(nodeItem) || isSimpleTransferNode(nodeItem);
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
  if (!pendingPlaceholderBackups.has(replaceId)) pendingPlaceholderBackups.set(replaceId, clone(target));
  Object.assign(target, node(replaceId, kind, target.x, target.y));
  target.muted = Boolean(catalog[kind]?.muted);
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
  target.muted = Boolean(catalog[kind]?.muted);
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
    const settings = createScheduleSettings();
    nodeItem.title = "Распределение по графику";
    nodeItem.color = "var(--cmgui-color-special-13)";
    nodeItem.icon = "time-20";
    nodeItem.settings = { schedule: settings };
    applyScheduleTitle(nodeItem, settings);
  }
  if (operationType === SEGMENT_OPERATION) {
    const settings = createSegmentSettings();
    nodeItem.title = "Распределение по сегментам";
    nodeItem.color = "var(--cmgui-color-special-13)";
    nodeItem.icon = "distribution";
    nodeItem.settings = { segment: settings };
    applySegmentTitle(nodeItem, settings);
  }
  if (operationType === CONDITION_OPERATION) {
    const settings = createConditionSettings();
    nodeItem.title = "Распределение по условиям";
    nodeItem.color = "var(--cmgui-color-special-13)";
    nodeItem.icon = "row-data";
    nodeItem.settings = { condition: settings };
    applyConditionTitle(nodeItem, settings);
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
    const position = snappedNodePosition(sourceNode.x + NODE_W + gap, sourceNode.y + (output.offsetY || 0));
    targetNode.x = position.x;
    targetNode.y = position.y;
  });
}

function centerNodePosition() {
  const transform = d3.zoomTransform(svg.node());
  const rect = svg.node().getBoundingClientRect();
  const [x, y] = transform.invert([rect.width / 2, rect.height / 2]);
  return snappedNodePosition(x - NODE_W / 2, y - NODE_H / 2);
}

function nextNodePosition(sourceNode, outputKey = null) {
  const output = outputKey ? nodeOutputs(sourceNode).find((item) => item.key === outputKey) : firstFreeOutput(sourceNode);
  const gap = output?.placeholder ? placeholderCreateGap(sourceNode) : NODE_CREATE_GAP_X;
  const offsetY = output?.offsetY || 0;
  return snappedNodePosition(sourceNode.x + NODE_W + gap, sourceNode.y + offsetY);
}

function snappedNodePosition(x, y) {
  return { x: snapToDragGrid(x), y: snapToDragGrid(y) };
}

function placeholderCreateGap(sourceNode) {
  const placeholderOutputs = nodeOutputs(sourceNode).filter((output) => output.placeholder);
  const widestLabel = placeholderOutputs.reduce((maxWidth, output) => Math.max(maxWidth, estimateEdgeLabelWidth(output.label || "")), 0);
  const hoverReserve = placeholderOutputs.length > 1 ? EDGE_LABEL_HOVER_RESERVE_X : 0;
  return widestLabel + EDGE_LABEL_SIDE_GAP * 2 + hoverReserve;
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
  if (isFinishNode(nodeItem)) return [];
  if (nodeItem.kind === "start") return [{ key: "main", label: "" }];
  if (isInfoMessageNode(nodeItem)) return [{ key: "delivered", label: "Сообщение доставлено", tone: "success", placeholder: true }];
  if (isContactFormNode(nodeItem)) {
    return [
      { key: "completed", label: "Форма заполнена", tone: "plain", placeholder: true, offsetY: -OUTPUT_STACK_GAP_Y },
      { key: "expired", label: "Форма не заполнена", tone: "plain", placeholder: true, offsetY: OUTPUT_STACK_GAP_Y },
    ];
  }
  if (isMenuNode(nodeItem)) return menuOutputs(nodeItem);
  if (isScheduleNode(nodeItem)) return scheduleOutputs(nodeItem);
  if (isSegmentNode(nodeItem)) return segmentOutputs(nodeItem);
  if (isConditionNode(nodeItem)) return conditionOutputs(nodeItem);
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
    offsetY: Math.round((index - center) * OUTPUT_STACK_GAP_Y),
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
    offsetY: Math.round((index - center) * OUTPUT_STACK_GAP_Y),
  }));
}

function segmentOutputs(nodeItem) {
  const settings = getSegmentSettings(nodeItem);
  const count = Math.max(1, settings.groups.length);
  const center = (count - 1) / 2;
  return settings.groups.map((group, index) => ({
    key: group.id,
    label: group.name || `Группа сегментов ${index + 1}`,
    tone: "plain",
    placeholder: true,
    offsetY: Math.round((index - center) * OUTPUT_STACK_GAP_Y),
  }));
}

function conditionOutputs(nodeItem) {
  const settings = getConditionSettings(nodeItem);
  const count = Math.max(1, settings.groups.length);
  const center = (count - 1) / 2;
  return settings.groups.map((group, index) => ({
    key: group.id,
    label: group.name || `Группа условий ${index + 1}`,
    tone: "plain",
    placeholder: true,
    offsetY: Math.round((index - center) * OUTPUT_STACK_GAP_Y),
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

function getReachableScenarioNodeIds() {
  const startNode = state.nodes.find((nodeItem) => isStartNode(nodeItem)) || state.nodes[0];
  const reachable = new Set();
  if (!startNode) return reachable;
  const queue = [startNode.id];
  while (queue.length) {
    const nodeId = queue.shift();
    if (reachable.has(nodeId)) continue;
    reachable.add(nodeId);
    state.edges.forEach((edgeItem) => {
      if (edgeItem.source === nodeId && !reachable.has(edgeItem.target)) queue.push(edgeItem.target);
    });
  }
  return reachable;
}

function getCycleNodeIds() {
  const nodesById = new Map(state.nodes.map((nodeItem) => [nodeItem.id, nodeItem]));
  const adjacency = new Map(state.nodes.map((nodeItem) => [nodeItem.id, []]));
  state.edges.forEach((edgeItem) => {
    if (!nodesById.has(edgeItem.source) || !nodesById.has(edgeItem.target)) return;
    adjacency.get(edgeItem.source)?.push(edgeItem.target);
  });

  const visited = new Set();
  const stack = [];
  const onStack = new Set();
  const cycleIds = new Set();

  function visit(nodeId) {
    visited.add(nodeId);
    stack.push(nodeId);
    onStack.add(nodeId);
    (adjacency.get(nodeId) || []).forEach((nextId) => {
      if (!visited.has(nextId)) {
        visit(nextId);
        return;
      }
      if (!onStack.has(nextId)) return;
      const startIndex = stack.indexOf(nextId);
      if (startIndex >= 0) stack.slice(startIndex).forEach((cycleNodeId) => cycleIds.add(cycleNodeId));
    });
    stack.pop();
    onStack.delete(nodeId);
  }

  state.nodes.forEach((nodeItem) => {
    if (!visited.has(nodeItem.id)) visit(nodeItem.id);
  });
  return cycleIds;
}

function isStartNode(nodeItem) {
  return nodeItem?.kind === "start";
}

function isFinishNode(nodeItem) {
  return nodeItem?.kind === "finish";
}

function openOutcomeMenu(sourceId, options = {}) {
  const sourceNode = getNode(sourceId);
  const outputs = freeOutputs(sourceNode);
  if (!sourceNode || !outputs.length) return;
  if (!options.targetId && outputs.length === 1 && !outputs[0].label) {
    openOperationModal(sourceId, null, outputs[0].key);
    return;
  }
  closeNodeContextMenu();
  outcomeMenuSourceId = sourceId;
  outcomeMenuTargetId = options.targetId || null;
  const menu = document.querySelector("#outcomeMenu");
  menu.innerHTML = outputs.map((output) => renderOutcomeMenuItem(output, sourceNode)).join("");
  const transform = d3.zoomTransform(svg.node());
  const screen = options.anchor || transform.apply([sourceNode.x + NODE_W + 8, sourceNode.y + NODE_H / 2]);
  menu.style.visibility = "hidden";
  menu.classList.add("is-open");
  const menuHeight = menu.offsetHeight;
  const menuWidth = menu.offsetWidth;
  const leftOffset = options.anchor ? 16 : 56;
  menu.style.left = `${Math.round(screen[0] + leftOffset)}px`;
  menu.style.top = `${Math.round(Math.max(16, Math.min(screen[1] - menuHeight / 2, window.innerHeight - menuHeight - 16)))}px`;
  if (screen[0] + leftOffset + menuWidth > window.innerWidth - 16) menu.style.left = `${Math.round(window.innerWidth - menuWidth - 16)}px`;
  menu.style.visibility = "";
  menu.setAttribute("aria-hidden", "false");
}

function closeOutcomeMenu() {
  outcomeMenuSourceId = null;
  outcomeMenuTargetId = null;
  const menu = document.querySelector("#outcomeMenu");
  if (!menu) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menu.innerHTML = "";
}

function renderOutcomeMenuItem(output, sourceNode) {
  const iconName = outcomeIconName(output, sourceNode);
  const label = output.label || "Основной выход";
  return `<button class="node-context-menu-item outcome-menu-item" type="button" data-outcome-key="${escapeAttr(output.key)}">
    <span class="cmgui-icon">${iconSvg(iconName, 20)}</span>
    <span>${escapeHtml(label)}</span>
  </button>`;
}

function outcomeIconName(output, sourceNode) {
  if (isDistributionOperationNode(sourceNode)) return sourceNode.icon || "menu";
  if (output.tone === "danger" || output.key === "failed" || output.key === "expired" || /(^|\s)не\s/i.test(output.label || "")) return "fail";
  if (output.tone === "success" || output.key === "completed" || output.key === "delivered") return "success";
  return "menu";
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

function openScenarioSettings() {
  const startNode = state.nodes.find((nodeItem) => isStartNode(nodeItem));
  if (!startNode) return;
  openNodeSettings(startNode.id);
}

function closeNodeSettings(clearSelection = true) {
  closeSettingsCloseConfirm();
  if (settingsNodeId) delete settingsDrafts[settingsNodeId];
  if (settingsNodeId) delete settingsErrors[settingsNodeId];
  settingsNodeId = null;
  document.body.classList.remove("is-node-settings-open");
  document.querySelector("#nodeSettingsSidebar").setAttribute("aria-hidden", "true");
  hoveredId = null;
  if (clearSelection) {
    selectedId = null;
  }
  renderNodeSettingsSidebar();
  renderEdges();
  renderNodes();
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
  hoveredId = null;
  if (pendingPlaceholderBackups.has(nodeId)) {
    restorePendingPlaceholder(nodeId);
    if (clearSelection) {
      selectedId = null;
    }
    renderNodeSettingsSidebar();
    render();
    schedulePersistState();
    return;
  }
  removeNodeById(nodeId);
}

function restorePendingPlaceholder(nodeId) {
  const backup = pendingPlaceholderBackups.get(nodeId);
  const nodeItem = getNode(nodeId);
  if (!backup || !nodeItem) return;
  pushHistory();
  const outgoingPlaceholderIds = new Set(
    state.edges
      .filter((edgeItem) => edgeItem.source === nodeId)
      .map((edgeItem) => edgeItem.target)
      .filter((targetId) => isPlaceholderNode(getNode(targetId))),
  );
  state.edges = state.edges.filter((edgeItem) => edgeItem.source !== nodeId && !outgoingPlaceholderIds.has(edgeItem.source) && !outgoingPlaceholderIds.has(edgeItem.target));
  state.nodes = state.nodes.filter((item) => !outgoingPlaceholderIds.has(item.id));
  Object.keys(nodeItem).forEach((key) => delete nodeItem[key]);
  Object.assign(nodeItem, clone(backup));
  pendingPlaceholderBackups.delete(nodeId);
  outgoingPlaceholderIds.forEach((id) => {
    delete settingsDrafts[id];
    delete settingsErrors[id];
    pendingSettingsNodeIds.delete(id);
    pendingPlaceholderBackups.delete(id);
  });
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
  if (isStartNode(nodeItem)) return JSON.stringify(normalizeComparableStartSettings(settings));
  if (isFinishNode(nodeItem)) return JSON.stringify({});
  if (isGroupTransferNode(nodeItem)) return JSON.stringify(normalizeComparableGroupTransferSettings(settings));
  if (isInfoMessageNode(nodeItem)) return JSON.stringify(normalizeComparableInfoMessageSettings(settings));
  if (isContactFormNode(nodeItem)) return JSON.stringify(normalizeComparableContactFormSettings(settings));
  if (isMenuNode(nodeItem)) return JSON.stringify(normalizeComparableMenuSettings(settings));
  if (isScheduleNode(nodeItem)) return JSON.stringify(normalizeComparableScheduleSettings(settings));
  if (isSegmentNode(nodeItem)) return JSON.stringify(normalizeComparableSegmentSettings(settings));
  if (isConditionNode(nodeItem)) return JSON.stringify(normalizeComparableConditionSettings(settings));
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
  const showCycleSettings = isTransferOperationNode(nodeItem) && getCycleNodeIds().has(nodeItem.id);
  const showPrimarySettingsHead = showCycleSettings || isMenuNode(nodeItem);
  sidebar.classList.toggle("is-wide", isConditionNode(nodeItem));
  sidebar.innerHTML = `<form class="node-settings-form ${isConditionNode(nodeItem) ? "is-condition-settings" : ""}" id="nodeSettingsForm">
    <header class="node-settings-header">
      <h2>${escapeHtml(title)}</h2>
      <button class="node-settings-close" type="button" id="nodeSettingsClose" title="Закрыть" aria-label="Закрыть">
        <span class="cmgui-icon">${iconSvg("cancel", 20)}</span>
      </button>
    </header>
    <div class="node-settings-body">
      ${renderPrimarySettingsCard(nodeItem, settings, errors, showPrimarySettingsHead)}
      ${
        !showCycleSettings
          ? ""
          : `<section class="node-settings-card technical-settings-card is-open">
        <div class="node-settings-card-head is-static">
          <span>Настройки цикла</span>
        </div>
        <div class="node-settings-card-content">
          <div class="cycle-row">
            <span>Число циклов, если операция будет зациклена</span>
            ${renderCounter("cycleLimitInput", settings.cycleLimit, { min: 1, max: 9999999 })}
          </div>
          ${renderSettingsAlert("После прохождения максимального количества циклов, сценарий остановится и будет завершен спустя время, установленное в операции «Входящее сообщение»")}
        </div>
      </section>`
      }
    </div>
    <footer class="node-settings-footer">
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-primary cmgui-button-fill" type="submit">Сохранить</button>
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline" type="button" id="nodeSettingsCancel">Отменить</button>
    </footer>
  </form>`;

  wireNodeSettingsSidebar(sidebar, nodeItem, settings);
  const body = sidebar.querySelector(".node-settings-body");
  if (body) body.scrollTop = bodyScrollTop;
  positionOpenDropdowns(sidebar);
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

function renderHoldingSettingsSidebar() {
  const sidebar = document.querySelector("#holdingSettingsSidebar");
  if (!sidebar || !document.body.classList.contains("is-holding-settings-open")) {
    if (sidebar) sidebar.innerHTML = "";
    return;
  }
  const settings = createHoldingSettings(holdingSettingsDraft || getScenarioHoldingSettings());
  const transferOptions = transferOperationOptions();
  const selectedTitles = settings.transferNodeIds
    .map((id) => transferOptions.find((option) => option.id === id)?.title)
    .filter(Boolean);
  const transferOutput = selectedTitles.length ? selectedTitles.join(", ") : "Операции переадресации";

  sidebar.innerHTML = `<form class="node-settings-form holding-settings-form" id="holdingSettingsForm">
    <header class="node-settings-header">
      <h2>Удерживающие сообщения</h2>
      <button class="node-settings-close" type="button" id="holdingSettingsClose" title="Закрыть" aria-label="Закрыть">
        <span class="cmgui-icon">${iconSvg("cancel", 20)}</span>
      </button>
    </header>
    <div class="node-settings-body holding-settings-body">
      <section class="node-settings-card holding-settings-card">
        <div class="node-settings-card-head is-static">
          <span>Основные параметры</span>
        </div>
        ${renderSettingsAlert("Удерживающие сообщения будут отправляться клиенту, пока он ждет переадресацию чата. Сообщения идут по порядку, друг за другом через выбранное время.")}
        <div class="cmgui-select-container holding-transfer-select ${holdingSettingsErrors.transferNodeIds ? "is-error" : ""}">
          <div class="cmgui-select cmgui-select-size-medium">
            <button class="cmgui-select-field ${settings.transferDropdownOpen ? "cmgui-select-field-active" : ""} ${selectedTitles.length ? "" : "is-empty"}" type="button" id="holdingTransferSelect" aria-expanded="${settings.transferDropdownOpen}">
              ${selectedTitles.length ? `<span class="cmgui-select-label cmgui-select-label-active"><span class="cmgui-select-label-text-active">Операции переадресации</span></span>` : ""}
              <span class="cmgui-select-field-output ${selectedTitles.length ? "" : "is-placeholder"}">${escapeHtml(transferOutput)}</span>
              <span class="cmgui-select-field-suffix">${iconSvg("arrow-list-down", 20)}</span>
            </button>
          </div>
          ${settings.transferDropdownOpen ? renderHoldingTransferDropdown(settings, transferOptions) : ""}
        </div>
      </section>
      ${settings.messages.map((message, index) => renderHoldingMessageCard(message, index, settings.messages.length)).join("")}
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline holding-add-message" type="button" id="holdingAddMessage">
        <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
        <span>Добавить сообщения</span>
      </button>
    </div>
    <footer class="node-settings-footer">
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-primary cmgui-button-fill" type="submit">Сохранить</button>
      <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline" type="button" id="holdingSettingsCancel">Отменить</button>
    </footer>
  </form>`;

  wireHoldingSettingsSidebar(sidebar, settings);
  positionOpenDropdowns(sidebar);
}

function renderHoldingTransferDropdown(settings, options) {
  return `<div class="cmgui-dropdown cmgui-dropdown-placement-bottomLeft node-dropdown holding-transfer-dropdown" data-dropdown-popup-for="holdingTransferSelect" data-dropdown-width="100%" role="listbox" aria-label="Операции переадресации">
    <div class="cmgui-dropdown-content">
      <div class="cmgui-dropdown-inner">
        <ul class="cmgui-list cmgui-list-borderless cmgui-dropdown-list">
          ${
            options.length
              ? options
                  .map(
                    (option) => `<li class="cmgui-list-li" role="option">
              <label class="start-channel-option">
                <input type="checkbox" value="${escapeAttr(option.id)}" data-holding-transfer="${escapeAttr(option.id)}" ${settings.transferNodeIds.includes(option.id) ? "checked" : ""} />
                <span class="start-channel-checkmark" aria-hidden="true"></span>
                <span>${escapeHtml(option.title)}</span>
              </label>
            </li>`,
                  )
                  .join("")
              : `<li class="cmgui-list-li"><span class="holding-empty-option">На доске нет операций переадресации</span></li>`
          }
        </ul>
      </div>
    </div>
  </div>`;
}

function renderHoldingMessageCard(message, index, count) {
  const error = holdingSettingsErrors.messages?.[message.id] || {};
  return `<section class="node-settings-card holding-message-card" draggable="true" data-holding-message-id="${escapeAttr(message.id)}">
    <div class="holding-message-head">
      <span class="holding-message-drag">${iconSvg("drag-and-drop", 20)}</span>
      <span class="order-badge">${index + 1}</span>
      <strong>Сообщение ${index + 1}</strong>
      <button class="holding-message-delete" type="button" data-holding-delete="${escapeAttr(message.id)}" title="Удалить" aria-label="Удалить">${iconSvg("delete", 20)}</button>
    </div>
    <label class="cmgui-text-field holding-message-textarea">
      <span class="cmgui-text-field-wrapper is-textarea ${error.text ? "is-error" : ""}">
        <textarea class="cmgui-text-field-input" data-holding-text="${escapeAttr(message.id)}" placeholder="Текст сообщения*">${escapeHtml(message.text || "")}</textarea>
      </span>
    </label>
    <div class="response-row holding-delay-row">
      <span class="response-label">Отправить через</span>
      <input class="response-input" data-holding-delay="${escapeAttr(message.id)}" value="${escapeAttr(message.delay)}" inputmode="numeric" />
      <div class="segment-control" role="group" aria-label="Единица времени отправки">
        <button class="${message.unit === "seconds" ? "is-active" : ""}" type="button" data-holding-unit="${escapeAttr(message.id)}" data-holding-unit-value="seconds">Секунд</button>
        <button class="${message.unit === "minutes" ? "is-active" : ""}" type="button" data-holding-unit="${escapeAttr(message.id)}" data-holding-unit-value="minutes">Минут</button>
      </div>
    </div>
  </section>`;
}

function wireHoldingSettingsSidebar(sidebar, settings) {
  sidebar.onclick = (event) => {
    if (!settings.transferDropdownOpen) return;
    if (event.target.closest("#holdingTransferSelect, .holding-transfer-dropdown")) return;
    window.setTimeout(() => {
      const current = createHoldingSettings(holdingSettingsDraft || getScenarioHoldingSettings());
      if (!current.transferDropdownOpen) return;
      holdingSettingsDraft = createHoldingSettings({ ...collectHoldingSettingsDraft(), transferDropdownOpen: false });
      renderHoldingSettingsSidebar();
    }, 0);
  };
  sidebar.querySelector("#holdingSettingsClose")?.addEventListener("click", closeHoldingSettings);
  sidebar.querySelector("#holdingSettingsCancel")?.addEventListener("click", closeHoldingSettings);
  sidebar.querySelector("#holdingSettingsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveHoldingSettingsFromSidebar();
  });
  sidebar.querySelector("#holdingTransferSelect")?.addEventListener("click", () => {
    holdingSettingsDraft = createHoldingSettings({ ...collectHoldingSettingsDraft(), transferDropdownOpen: !settings.transferDropdownOpen });
    renderHoldingSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-holding-transfer]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const draft = collectHoldingSettingsDraft();
      const id = checkbox.value;
      const transferNodeIds = checkbox.checked ? [...new Set([...draft.transferNodeIds, id])] : draft.transferNodeIds.filter((item) => item !== id);
      holdingSettingsDraft = createHoldingSettings({ ...draft, transferNodeIds, transferDropdownOpen: true });
      if (transferNodeIds.length) delete holdingSettingsErrors.transferNodeIds;
      renderHoldingSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-holding-text]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      holdingSettingsDraft = createHoldingSettings(collectHoldingSettingsDraft());
      delete holdingSettingsErrors.messages?.[textarea.dataset.holdingText]?.text;
    });
  });
  sidebar.querySelectorAll("[data-holding-delay]").forEach((input) => {
    input.addEventListener("input", () => {
      holdingSettingsDraft = createHoldingSettings(collectHoldingSettingsDraft());
    });
    input.addEventListener("blur", () => {
      holdingSettingsDraft = createHoldingSettings(collectHoldingSettingsDraft());
      renderHoldingSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-holding-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = collectHoldingSettingsDraft();
      holdingSettingsDraft = createHoldingSettings({
        ...draft,
        messages: draft.messages.map((message) => (message.id === button.dataset.holdingUnit ? { ...message, unit: button.dataset.holdingUnitValue } : message)),
      });
      renderHoldingSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-holding-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = collectHoldingSettingsDraft();
      holdingSettingsDraft = createHoldingSettings({ ...draft, messages: draft.messages.filter((message) => message.id !== button.dataset.holdingDelete) });
      renderHoldingSettingsSidebar();
    });
  });
  sidebar.querySelector("#holdingAddMessage")?.addEventListener("click", () => {
    const draft = collectHoldingSettingsDraft();
    holdingSettingsDraft = createHoldingSettings({ ...draft, messages: [...draft.messages, createHoldingMessage(draft.messages.length + 1)] });
    renderHoldingSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-holding-message-id]").forEach((card) => {
    card.addEventListener("dragstart", () => {
      holdingMessageDragId = card.dataset.holdingMessageId;
    });
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      reorderHoldingMessage(card.dataset.holdingMessageId);
    });
    card.addEventListener("dragend", () => {
      holdingMessageDragId = null;
    });
  });
}

function openHoldingSettings() {
  if (!transferOperationOptions().length) return;
  cancelNodeSettings(false);
  if (document.body.classList.contains("is-operation-modal-open")) closeOperationModal();
  closeOutcomeMenu();
  holdingSettingsDraft = createHoldingSettings(getScenarioHoldingSettings());
  holdingSettingsErrors = {};
  document.body.classList.add("is-holding-settings-open");
  document.querySelector("#holdingSettingsSidebar")?.setAttribute("aria-hidden", "false");
  document.querySelector("#holdingSettingsBackdrop")?.setAttribute("aria-hidden", "false");
  renderHoldingSettingsSidebar();
}

function closeHoldingSettings() {
  holdingSettingsDraft = null;
  holdingSettingsErrors = {};
  holdingMessageDragId = null;
  document.body.classList.remove("is-holding-settings-open");
  document.querySelector("#holdingSettingsSidebar")?.setAttribute("aria-hidden", "true");
  document.querySelector("#holdingSettingsBackdrop")?.setAttribute("aria-hidden", "true");
  renderHoldingSettingsSidebar();
}

function collectHoldingSettingsDraft() {
  const sidebar = document.querySelector("#holdingSettingsSidebar");
  const base = createHoldingSettings(holdingSettingsDraft || getScenarioHoldingSettings());
  if (!sidebar) return base;
  const messages = base.messages.map((message) => ({
    ...message,
    text: getHoldingMessageField(sidebar, "text", message.id)?.value ?? message.text,
    delay: sanitizePositiveInteger(getHoldingMessageField(sidebar, "delay", message.id)?.value, message.delay || 15),
  }));
  return createHoldingSettings({ ...base, messages });
}

function getHoldingMessageField(sidebar, type, id) {
  const selector = type === "delay" ? "[data-holding-delay]" : "[data-holding-text]";
  const datasetKey = type === "delay" ? "holdingDelay" : "holdingText";
  return [...sidebar.querySelectorAll(selector)].find((field) => field.dataset[datasetKey] === id) || null;
}

function saveHoldingSettingsFromSidebar() {
  const settings = createHoldingSettings(collectHoldingSettingsDraft());
  const errors = validateHoldingSettings(settings);
  if (Object.keys(errors).length) {
    holdingSettingsErrors = errors;
    holdingSettingsDraft = settings;
    renderHoldingSettingsSidebar();
    return;
  }
  const currentScenario = getCurrentScenario();
  if (currentScenario) {
    currentScenario.settings = {
      ...(currentScenario.settings || {}),
      holding: normalizeComparableHoldingSettings(settings),
    };
    currentScenario.updatedAt = Date.now();
  }
  hasUnsavedScenarioChanges = true;
  updateSaveButton();
  schedulePersistState();
  closeHoldingSettings();
  updateHoldingMessagesCount();
  renderNodes();
}

function validateHoldingSettings(settings) {
  const errors = {};
  if (settings.messages.length && !settings.transferNodeIds.length) errors.transferNodeIds = true;
  const messageErrors = {};
  settings.messages.forEach((message) => {
    if (!message.text.trim()) messageErrors[message.id] = { text: true };
  });
  if (Object.keys(messageErrors).length) errors.messages = messageErrors;
  return errors;
}

function reorderHoldingMessage(targetId) {
  if (!holdingMessageDragId || holdingMessageDragId === targetId) return;
  const draft = collectHoldingSettingsDraft();
  const messages = [...draft.messages];
  const fromIndex = messages.findIndex((message) => message.id === holdingMessageDragId);
  const toIndex = messages.findIndex((message) => message.id === targetId);
  if (fromIndex < 0 || toIndex < 0) return;
  const [moved] = messages.splice(fromIndex, 1);
  messages.splice(toIndex, 0, moved);
  holdingSettingsDraft = createHoldingSettings({ ...draft, messages });
  holdingMessageDragId = null;
  renderHoldingSettingsSidebar();
}

function getScenarioHoldingSettings() {
  return createHoldingSettings(normalizeLoadedHoldingSettings(getCurrentScenario()?.settings?.holding || {}));
}

function updateHoldingMessagesCount() {
  const count = document.querySelector("#holdingMessagesCount");
  const button = document.querySelector("#holdingMessagesButton");
  const transferCount = transferOperationOptions().length;
  const messageCount = getScenarioHoldingSettings().messages.length;
  if (count) {
    count.textContent = String(messageCount);
    count.hidden = messageCount === 0;
  }
  if (!button) return;
  button.disabled = transferCount === 0;
  button.classList.toggle("is-disabled", transferCount === 0);
  button.classList.toggle("is-empty", messageCount === 0);
  button.setAttribute("aria-disabled", String(transferCount === 0));
  if (transferCount === 0 && document.body.classList.contains("is-holding-settings-open")) closeHoldingSettings();
}

function transferOperationOptions() {
  return state.nodes
    .filter((nodeItem) => isTransferOperationNode(nodeItem))
    .map((nodeItem) => ({ id: nodeItem.id, title: nodeItem.title || settingsTitleForNode(nodeItem) }));
}

function createHoldingSettings(overrides = {}) {
  const messages = Array.isArray(overrides.messages) ? overrides.messages : [];
  return {
    transferNodeIds: Array.isArray(overrides.transferNodeIds) ? [...new Set(overrides.transferNodeIds)] : [],
    transferDropdownOpen: Boolean(overrides.transferDropdownOpen),
    messages: messages.map((message, index) => createHoldingMessage(index + 1, message)),
  };
}

function createHoldingMessage(index = 1, overrides = {}) {
  const unit = ["seconds", "minutes"].includes(overrides.unit) ? overrides.unit : "seconds";
  return {
    id: overrides.id || `holding-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}-${index}`,
    text: overrides.text || "",
    delay: sanitizePositiveInteger(overrides.delay ?? 15, 15),
    unit,
  };
}

function normalizeLoadedHoldingSettings(settings = {}) {
  const normalized = createHoldingSettings(settings);
  return {
    ...normalized,
    messages: normalized.messages.filter((message) => message.text.trim()),
  };
}

function normalizeComparableHoldingSettings(settings) {
  const normalized = createHoldingSettings(settings);
  const availableIds = new Set(transferOperationOptions().map((option) => option.id));
  return {
    transferNodeIds: normalized.transferNodeIds.filter((id) => availableIds.has(id)),
    messages: normalized.messages.map((message) => ({
      id: message.id,
      text: message.text.trim(),
      delay: sanitizePositiveInteger(message.delay, 15),
      unit: message.unit,
    })),
  };
}

function isHoldingEnabledForTransfer(nodeId) {
  const settings = getScenarioHoldingSettings();
  return settings.messages.length > 0 && settings.transferNodeIds.includes(nodeId);
}

function cssEscape(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

function renderPrimarySettingsCard(nodeItem, settings, errors, showHeader = true) {
  if (isStartNode(nodeItem)) return renderStartSettingsCards(settings, errors);
  if (isFinishNode(nodeItem)) return renderFinishCard();
  if (isGroupTransferNode(nodeItem)) return renderGroupTransferCard(settings, errors, showHeader);
  if (isInfoMessageNode(nodeItem)) return renderInfoMessageCard(settings, errors, showHeader);
  if (isContactFormNode(nodeItem)) return renderContactFormCard(settings, showHeader);
  if (isMenuNode(nodeItem)) return renderMenuCard(settings, errors, showHeader);
  if (isScheduleNode(nodeItem)) return renderScheduleCard(settings, errors, showHeader);
  if (isSegmentNode(nodeItem)) return renderSegmentCard(settings, errors, showHeader);
  if (isConditionNode(nodeItem)) return renderConditionCard(settings, errors, showHeader);
  return renderSimpleTransferCard(nodeItem, settings, errors, showHeader);
}

function renderSettingsCardHead(title, showHeader = true) {
  return showHeader ? `<div class="node-settings-card-head is-static"><span>${escapeHtml(title)}</span></div>` : "";
}

function renderFinishCard() {
  return `<section class="node-settings-card finish-settings-card">
    ${renderSettingsAlert("Как только обращение дойдет до данной операции, оно будет закрыто и отобразится для пользователя только в отчетах.")}
  </section>`;
}

function renderStartSettingsCards(settings, errors = {}) {
  const selectedChannels = settings.channels.length ? settings.channels.join(", ") : "Каналы для приема сообщений";
  const hasSelectedChannels = settings.channels.length > 0;
  const hasStartName = Boolean(settings.name?.trim());
  return `<section class="node-settings-card start-settings-card">
    <div class="node-settings-card-head is-static">
      <span>Основные параметры</span>
    </div>
    <label class="cmgui-text-field">
      <span class="cmgui-text-field-wrapper ${errors.name ? "is-error" : ""} ${hasStartName ? "" : "is-empty"}">
        <span class="cmgui-text-field-label ${hasStartName ? "cmgui-text-field-label-active" : ""}">Название*</span>
        <input class="cmgui-text-field-input" id="startScenarioNameInput" value="${escapeAttr(settings.name)}" />
      </span>
    </label>
    <div class="cmgui-select-container start-channel-select">
      <div class="cmgui-select cmgui-select-size-medium">
        <button class="cmgui-select-field ${settings.channelsDropdownOpen ? "cmgui-select-field-active" : ""} ${hasSelectedChannels ? "" : "is-empty"}" type="button" id="startChannelsSelect" aria-expanded="${settings.channelsDropdownOpen}">
          ${hasSelectedChannels ? `<span class="cmgui-select-label cmgui-select-label-active"><span class="cmgui-select-label-text-active">Каналы для приема сообщений</span></span>` : ""}
          <span class="cmgui-select-field-output ${hasSelectedChannels ? "" : "is-placeholder"}">${escapeHtml(selectedChannels)}</span>
          <span class="cmgui-select-field-suffix">${iconSvg("arrow-list-down", 20)}</span>
        </button>
      </div>
      ${settings.channelsDropdownOpen ? renderStartChannelsDropdown(settings) : ""}
    </div>
  </section>
  <section class="node-settings-card technical-settings-card start-finish-card is-open">
    <div class="node-settings-card-head is-static">
      <span>Правило завершения сценария</span>
    </div>
    <div class="node-settings-card-content">
      ${renderSettingsAlert(startFinishAlertText(settings))}
      <div class="start-finish-time-row">
        <span>Завершать сценарий через</span>
        <span class="cmgui-text-field-wrapper start-hours-field ${errors.finishAfterHours ? "is-error" : ""}">
          <input class="cmgui-text-field-input" id="startFinishHoursInput" value="${settings.finishAfterHours}" inputmode="numeric" />
        </span>
        <div class="segment-control start-finish-unit-control" role="group" aria-label="Единица времени завершения сценария">
          <button class="${settings.finishAfterUnit === "hours" ? "is-active" : ""}" type="button" data-start-finish-unit="hours">Часов</button>
          <button class="${settings.finishAfterUnit === "days" ? "is-active" : ""}" type="button" data-start-finish-unit="days">Дней</button>
        </div>
      </div>
      <div class="start-finish-label">После завершения отправить чат</div>
      <div class="start-radio-group" role="radiogroup" aria-label="После завершения отправить чат">
        ${renderStartRadio("all", "Всем сотрудникам в новые сообщения", settings.completionTarget)}
        ${renderStartRadio("employee", "Сотруднику в новые сообщения", settings.completionTarget)}
        ${renderStartRadio("group", "Группе в новые сообщения", settings.completionTarget)}
      </div>
      ${settings.completionTarget === "employee" ? renderSimpleSelect("startEmployeeSelect", "Сотрудник*", settings.employeeName, TRANSFER_EMPLOYEES.map((name) => [name, name]), settings.employeeDropdownOpen) : ""}
      ${settings.completionTarget === "group" ? renderSimpleSelect("startGroupSelect", "Отдел*", settings.groupName, GROUP_TRANSFER_GROUPS.map((name) => [name, name]), settings.groupDropdownOpen) : ""}
    </div>
  </section>`;
}

function renderStartChannelsDropdown(settings) {
  return `<div class="cmgui-dropdown cmgui-dropdown-placement-bottomLeft node-dropdown start-channel-dropdown" data-dropdown-popup-for="startChannelsSelect" data-dropdown-width="100%" role="listbox" aria-label="Каналы">
    <div class="cmgui-dropdown-content">
      <div class="cmgui-dropdown-inner">
        <ul class="cmgui-list cmgui-list-borderless cmgui-dropdown-list">
          ${CHANNEL_OPTIONS.map(
            (channel) => `<li class="cmgui-list-li" role="option">
              <label class="start-channel-option">
                <input type="checkbox" value="${escapeAttr(channel)}" data-start-channel="${escapeAttr(channel)}" ${settings.channels.includes(channel) ? "checked" : ""} />
                <span class="start-channel-checkmark" aria-hidden="true"></span>
                <span class="start-channel-source-icon cmgui-icon" aria-hidden="true">${iconSvg(CHANNEL_ICON_BY_CHANNEL[channel], 20)}</span>
                <span>${escapeHtml(channel)}</span>
              </label>
            </li>`,
          ).join("")}
        </ul>
      </div>
    </div>
  </div>`;
}

function renderStartRadio(value, label, selectedValue) {
  return `<label class="cmgui-radio">
    <input type="radio" name="startCompletionTarget" value="${escapeAttr(value)}" ${selectedValue === value ? "checked" : ""} />
    <span class="cmgui-radio-mark"></span>
    <span>${escapeHtml(label)}</span>
  </label>`;
}

function renderGroupTransferCard(settings, errors = {}, showHeader = true) {
  return `<section class="node-settings-card group-transfer-card">
    ${renderSettingsCardHead("Основные параметры", showHeader)}
    <div class="group-picker">
      <div class="group-select ${errors.groupName ? "is-error" : ""}">
        ${renderSimpleSelect("groupSelect", "Группа*", settings.groupName || "", GROUP_TRANSFER_GROUPS.map((name) => [name, name]), settings.groupDropdownOpen)}
      </div>
    </div>
    ${
      settings.groupName
        ? `<div class="distribution-row">
            ${renderDesignSelect("distributionSelect", "Порядок распределения сообщений*", settings.distribution, [
              ["all", "Всем сразу"],
              ["queued", "По очереди"],
              ["balanced", "Равномерно"],
            ], settings.distributionDropdownOpen)}
            <span class="group-count">Участвуют ${settings.employees.length} ${formatEmployeeCount(settings.employees.length)}</span>
          </div>
          ${renderEmployeesTable(settings)}
          ${renderResponseTimeout(settings)}
          ${renderSettingsAlert(alertForDistribution(settings.distribution))}`
        : ""
    }
  </section>`;
}

function renderSimpleTransferCard(nodeItem, settings, errors = {}, showHeader = true) {
  const config = SIMPLE_TRANSFER_CONFIG[nodeItem.operationType];
  return `<section class="node-settings-card simple-transfer-card">
    ${renderSettingsCardHead("Основные параметры", showHeader)}
    ${renderSettingsAlert(config.alert)}
    ${
      config.requiredField === "employeeName"
        ? `<div class="employee-picker">
            <div class="employee-select ${errors.employeeName ? "is-error" : ""}">
              ${renderSimpleSelect("employeeSelect", "Сотрудник*", settings.employeeName || "", TRANSFER_EMPLOYEES.map((name) => [name, name]), settings.employeeDropdownOpen)}
            </div>
          </div>`
        : ""
    }
    ${renderResponseTimeout(settings)}
  </section>`;
}

function renderInfoMessageCard(settings, errors = {}, showHeader = true) {
  return `<section class="node-settings-card info-message-card">
    ${renderSettingsCardHead("Основные параметры", showHeader)}
    ${renderSettingsAlert("Клиент получит сообщение, а затем сценарий перейдет к следующей операции (через указанное ниже время)")}
    <label class="cmgui-text-field info-message-textarea">
      <span class="cmgui-text-field-wrapper is-textarea ${errors.messageText ? "is-error" : ""}">
        <textarea class="cmgui-text-field-input" id="messageTextInput" placeholder="Текст сообщения*">${escapeHtml(settings.messageText || "")}</textarea>
      </span>
    </label>
    ${renderTransitionDelay(settings)}
  </section>`;
}

function renderContactFormCard(settings, showHeader = true) {
  return `<section class="node-settings-card contact-form-card">
    ${renderSettingsCardHead("Основные параметры", showHeader)}
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

function renderMenuCard(settings, errors = {}, showHeader = true) {
  return `<section class="node-settings-card menu-settings-card">
    ${renderSettingsCardHead("Основные параметры", showHeader)}
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

function renderScheduleCard(settings, errors = {}, showHeader = true) {
  return `<section class="node-settings-card schedule-settings-card">
    ${renderSettingsCardHead("График работы", showHeader)}
    ${renderSettingsAlert("Чат будет обработан в зависимости от активного графика работы. Если активно сразу несколько графиков, то приоритетным будет тот, который находится выше")}
    <div class="menu-buttons-list schedule-list">
      ${settings.schedules.map((schedule, index) => renderScheduleRow(schedule, index, settings.schedules.length, errors)).join("")}
    </div>
    <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline menu-add-button" type="button" id="addScheduleButton" ${settings.schedules.length >= SCHEDULE_MAX_COUNT ? "disabled" : ""}>
      <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
      <span>Добавить график работы</span>
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

function renderSegmentCard(settings, errors = {}, showHeader = true) {
  return `<section class="node-settings-card segment-settings-card">
    ${renderSettingsCardHead("Группы сегментов", showHeader)}
    ${renderSettingsAlert("Чат будет обработан в зависимости от сегмента посетителя, написавшего сообщение. Если посетитель попадет в несколько групп сегментов одновременно, то приоритетным будет тот, который находится выше")}
    <div class="menu-buttons-list segment-list">
      ${settings.groups.map((group, index) => renderSegmentRow(group, index, settings.groups.length, errors)).join("")}
    </div>
    <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline menu-add-button" type="button" id="addSegmentButton" ${settings.groups.length >= SEGMENT_MAX_COUNT ? "disabled" : ""}>
      <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
      <span>Добавить группу сегментов</span>
    </button>
  </section>`;
}

function renderSegmentRow(group, index, total, errors = {}) {
  const selectId = `segmentSelect-${group.id}`;
  const hasError = errors.groups?.[group.id];
  return `<div class="menu-button-row segment-row" data-segment-row="${escapeAttr(group.id)}" draggable="true">
    <div class="menu-button-order">
      <button class="drag-icon" type="button" data-segment-drag-handle="${escapeAttr(group.id)}" title="Перетащить" aria-label="Перетащить">${iconSvg("drag-and-drop", 20)}</button>
      <span class="order-badge">${index + 1}</span>
    </div>
    <div class="segment-select ${hasError ? "is-error" : ""}">
      ${renderSimpleSelect(selectId, "Группа сегментов*", group.name || "", AVAILABLE_SEGMENT_GROUPS.map((name) => [name, name]), group.dropdownOpen)}
    </div>
    <button class="menu-button-remove" type="button" data-segment-remove="${escapeAttr(group.id)}" title="Удалить" aria-label="Удалить" ${total <= 1 ? "disabled" : ""}>${iconSvg("cancel", 20)}</button>
  </div>`;
}

function renderConditionCard(settings, errors = {}, showHeader = true) {
  return `<section class="node-settings-card condition-settings-card">
    ${renderSettingsCardHead("Группы условий", showHeader)}
    <div class="condition-groups-list">
      ${settings.groups.map((group, index) => renderConditionGroup(group, index, settings.groups.length, errors)).join("")}
    </div>
    <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline condition-add-group-button" type="button" id="addConditionGroupButton" ${settings.groups.length >= CONDITION_MAX_COUNT ? "disabled" : ""}>
      <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
      <span>Добавить группу условий</span>
    </button>
  </section>`;
}

function renderConditionGroup(group, index, totalGroups, errors = {}) {
  const groupErrors = errors.groups?.[group.id] || {};
  const isOpen = group.open !== false;
  return `<div class="condition-group ${isOpen ? "is-open" : ""}" data-condition-group="${escapeAttr(group.id)}">
    <button class="condition-group-head" type="button" data-condition-group-toggle="${escapeAttr(group.id)}">
      <span>${escapeHtml(group.name || `Группа условий ${index + 1}`)}</span>
      <span class="cmgui-icon condition-group-arrow ${isOpen ? "is-open" : ""}">${iconSvg("arrow-list-down", 20)}</span>
    </button>
    ${
      isOpen
        ? `<div class="condition-group-content">
            <label class="cmgui-text-field condition-group-name">
              <span class="cmgui-text-field-wrapper ${groupErrors.name ? "is-error" : ""} ${group.name?.trim() ? "" : "is-empty"}">
                <span class="cmgui-text-field-label ${group.name?.trim() ? "cmgui-text-field-label-active" : ""}">Название*</span>
                <input class="cmgui-text-field-input" data-condition-group-name="${escapeAttr(group.id)}" value="${escapeAttr(group.name || "")}" />
              </span>
            </label>
            <div class="condition-list">
              ${group.conditions.map((condition, conditionIndex) => renderConditionRow(group, condition, conditionIndex, group.conditions.length, totalGroups, groupErrors)).join("")}
            </div>
            <button class="cmgui-button cmgui-button-size-medium cmgui-button-secondary cmgui-button-outline condition-add-button" type="button" data-condition-add="${escapeAttr(group.id)}">
              <span class="cmgui-icon">${iconSvg("add-20", 20)}</span>
              <span>Добавить условие</span>
            </button>
          </div>`
        : ""
    }
  </div>`;
}

function renderConditionRow(group, condition, index, total, totalGroups, errors = {}) {
  const parameterId = `conditionParameterSelect-${condition.id}`;
  const operatorId = `conditionOperatorSelect-${condition.id}`;
  const valueId = `conditionValueSelect-${condition.id}`;
  const hasError = errors.conditions?.[condition.id];
  const valueOptions = conditionValuesForParameter(condition.parameter);
  return `<div class="condition-row" data-condition-row="${escapeAttr(condition.id)}" data-condition-group-row="${escapeAttr(group.id)}">
    <div class="condition-fields ${hasError ? "is-error" : ""}">
      <div class="condition-select condition-parameter-select">
        ${renderSimpleSelect(parameterId, "Параметр*", condition.parameter || "", CONDITION_PARAMETERS.map((name) => [name, name]), condition.parameterDropdownOpen)}
      </div>
      <div class="condition-select condition-operator-select">
        ${renderSimpleSelect(operatorId, "Условие*", condition.operator || "", CONDITION_OPERATORS, condition.operatorDropdownOpen)}
      </div>
      <div class="condition-select condition-value-select">
        ${renderSimpleSelect(valueId, "Значение*", condition.value || "", valueOptions.map((name) => [name, name]), condition.valueDropdownOpen)}
      </div>
    </div>
    <button class="menu-button-remove" type="button" data-condition-remove="${escapeAttr(condition.id)}" data-condition-remove-group="${escapeAttr(group.id)}" title="Удалить" aria-label="Удалить" ${total <= 1 && totalGroups <= 1 ? "disabled" : ""}>${iconSvg("cancel", 20)}</button>
  </div>`;
}

function renderSimpleSelect(id, placeholder, value, options, isOpen) {
  const selected = options.find(([optionValue]) => optionValue === value);
  return `<div class="cmgui-select-container simple-select">
    <div class="cmgui-select cmgui-select-size-medium">
      <button class="cmgui-select-field ${isOpen ? "cmgui-select-field-active" : ""} ${selected ? "" : "is-empty"}" type="button" id="${id}" aria-expanded="${isOpen}">
        ${selected ? `<span class="cmgui-select-label cmgui-select-label-active"><span class="cmgui-select-label-text-active">${escapeHtml(placeholder)}</span></span>` : ""}
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

function renderDropdownPopup({ id, options, action, width }) {
  return `<div class="cmgui-dropdown cmgui-dropdown-placement-bottomLeft node-dropdown" data-dropdown-popup-for="${escapeAttr(id)}" data-dropdown-width="${escapeAttr(width)}" style="width:${width}" role="listbox" aria-label="Список">
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

function startFinishAlertText(settings) {
  return `Сценарий завершится, если чат не возьмут в работу в\u00A0течение ${formatStartFinishDuration(settings.finishAfterHours, settings.finishAfterUnit)} после окончания всех операций`;
}

function formatStartFinishDuration(value, unit) {
  const normalized = sanitizeStartFinishValue(value, 72, unit);
  const word = unit === "days" ? (normalized === 1 ? "дня" : "дней") : normalized === 1 ? "часа" : "часов";
  return `${normalized} ${word}`;
}

function positionOpenDropdowns(root = document) {
  if (!root) return;
  const rootRect = root.getBoundingClientRect?.() || { top: 0, bottom: window.innerHeight, left: 0 };
  const footerRect = root.querySelector?.(".node-settings-footer, .scenario-create-footer")?.getBoundingClientRect();
  const boundaryTop = Math.max(8, rootRect.top || 0);
  const boundaryBottom = Math.min(window.innerHeight - 8, footerRect?.top ?? rootRect.bottom ?? window.innerHeight);
  root.querySelectorAll(".node-dropdown[data-dropdown-popup-for]").forEach((dropdown) => {
    const trigger = root.querySelector(`#${cssEscape(dropdown.dataset.dropdownPopupFor)}`) || document.querySelector(`#${cssEscape(dropdown.dataset.dropdownPopupFor)}`);
    if (!trigger) return;
    const triggerRect = trigger.getBoundingClientRect();
    const widthValue = dropdown.dataset.dropdownWidth || "100%";
    const width = widthValue.endsWith("%") ? triggerRect.width : Number.parseFloat(widthValue) || triggerRect.width;
    dropdown.style.position = "fixed";
    dropdown.style.left = `${Math.max(rootRect.left || 0, Math.min(triggerRect.left, window.innerWidth - width - 8))}px`;
    dropdown.style.width = `${width}px`;
    dropdown.style.zIndex = "1000";
    dropdown.style.top = `${triggerRect.bottom + 4}px`;
    const dropdownHeight = dropdown.getBoundingClientRect().height;
    const belowSpace = boundaryBottom - triggerRect.bottom - 4;
    const aboveSpace = triggerRect.top - boundaryTop - 4;
    const shouldOpenUp = dropdownHeight > belowSpace && aboveSpace > belowSpace;
    dropdown.classList.toggle("is-open-up", shouldOpenUp);
    dropdown.style.top = shouldOpenUp ? `${Math.max(boundaryTop, triggerRect.top - dropdownHeight - 4)}px` : `${triggerRect.bottom + 4}px`;
  });
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
    pendingPlaceholderBackups.delete(nodeItem.id);
    closeNodeSettings(true);
    render();
    schedulePersistState();
  });
  sidebar.querySelector("#startScenarioNameInput")?.addEventListener("input", (event) => {
    const errors = { ...(settingsErrors[nodeItem.id] || {}) };
    const wrapper = event.target.closest(".cmgui-text-field-wrapper");
    const label = wrapper?.querySelector(".cmgui-text-field-label");
    if (event.target.value.trim()) {
      delete errors.name;
      settingsErrors[nodeItem.id] = errors;
      wrapper?.classList.remove("is-error", "is-empty");
      label?.classList.add("cmgui-text-field-label-active");
    } else {
      wrapper?.classList.add("is-empty");
      label?.classList.remove("cmgui-text-field-label-active");
    }
    updateNodeSettingsDraft(nodeItem, { name: event.target.value });
  });
  sidebar.querySelector("#startScenarioNameInput")?.addEventListener("blur", (event) => {
    if (event.target.value.trim()) return;
    settingsErrors[nodeItem.id] = { ...(settingsErrors[nodeItem.id] || {}), name: true };
    event.target.closest(".cmgui-text-field-wrapper")?.classList.add("is-error", "is-empty");
  });
  sidebar.querySelector("#startChannelsSelect")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { channelsDropdownOpen: !settings.channelsDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-start-channel]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const draft = getNodeSettingsDraft(nodeItem);
      const channel = checkbox.dataset.startChannel;
      const channels = checkbox.checked ? [...new Set([...draft.channels, channel])] : draft.channels.filter((item) => item !== channel);
      updateNodeSettingsDraft(nodeItem, { channels });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#startFinishHoursInput")?.addEventListener("input", (event) => {
    updateNodeSettingsDraft(nodeItem, { finishAfterHours: event.target.value });
  });
  sidebar.querySelector("#startFinishHoursInput")?.addEventListener("blur", (event) => {
    const unit = getNodeSettingsDraft(nodeItem).finishAfterUnit;
    const value = sanitizeStartFinishValue(event.target.value, settings.finishAfterHours, unit);
    event.target.value = value;
    updateNodeSettingsDraft(nodeItem, { finishAfterHours: value });
  });
  sidebar.querySelectorAll("[data-start-finish-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      const unit = button.dataset.startFinishUnit;
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, {
        finishAfterUnit: unit,
        finishAfterHours: sanitizeStartFinishValue(draft.finishAfterHours, draft.finishAfterHours, unit),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll('input[name="startCompletionTarget"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      updateNodeSettingsDraft(nodeItem, {
        completionTarget: radio.value,
        employeeDropdownOpen: false,
        groupDropdownOpen: false,
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#startEmployeeSelect")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { employeeDropdownOpen: !settings.employeeDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-dropdown-id='startEmployeeSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      updateNodeSettingsDraft(nodeItem, { employeeName: button.dataset.dropdownValue, employeeDropdownOpen: false });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#startGroupSelect")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { groupDropdownOpen: !settings.groupDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-dropdown-id='startGroupSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      updateNodeSettingsDraft(nodeItem, { groupName: button.dataset.dropdownValue, groupDropdownOpen: false });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#groupSelect")?.addEventListener("click", () => {
    updateNodeSettingsDraft(nodeItem, { groupDropdownOpen: !settings.groupDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-dropdown-id='groupSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      const groupName = button.dataset.dropdownValue;
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
  sidebar.querySelectorAll("[id^='segmentSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.id.replace("segmentSelect-", "");
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, {
        groups: draft.groups.map((group) => (group.id === groupId ? { ...group, dropdownOpen: !group.dropdownOpen } : { ...group, dropdownOpen: false })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-dropdown-id^='segmentSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.dropdownId.replace("segmentSelect-", "");
      const value = button.dataset.dropdownValue;
      const errors = { ...(settingsErrors[nodeItem.id] || {}) };
      if (errors.groups) {
        delete errors.groups[groupId];
        settingsErrors[nodeItem.id] = errors;
      }
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, {
        groups: draft.groups.map((group) => (group.id === groupId ? { ...group, name: value, dropdownOpen: false } : { ...group, dropdownOpen: false })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#addSegmentButton")?.addEventListener("click", () => {
    const draft = getNodeSettingsDraft(nodeItem);
    if (draft.groups.length >= SEGMENT_MAX_COUNT) return;
    const nextGroupName = AVAILABLE_SEGMENT_GROUPS.find((name) => !draft.groups.some((group) => group.name === name)) || AVAILABLE_SEGMENT_GROUPS[0];
    updateNodeSettingsDraft(nodeItem, { groups: [...draft.groups, createSegmentGroup(nextGroupName)] });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-segment-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = getNodeSettingsDraft(nodeItem);
      if (draft.groups.length <= 1) return;
      updateNodeSettingsDraft(nodeItem, { groups: draft.groups.filter((item) => item.id !== button.dataset.segmentRemove) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-segment-row]").forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", row.dataset.segmentRow);
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
      const toId = row.dataset.segmentRow;
      if (!fromId || !toId || fromId === toId) return;
      const draft = getNodeSettingsDraft(nodeItem);
      const fromIndex = draft.groups.findIndex((group) => group.id === fromId);
      const toIndex = draft.groups.findIndex((group) => group.id === toId);
      if (fromIndex < 0 || toIndex < 0) return;
      updateNodeSettingsDraft(nodeItem, { groups: moveArrayItem(draft.groups, fromIndex, toIndex) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-condition-group-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.conditionGroupToggle;
      const draft = getNodeSettingsDraft(nodeItem);
      updateNodeSettingsDraft(nodeItem, {
        groups: draft.groups.map((group) => (group.id === groupId ? { ...group, open: group.open === false } : group)),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-condition-group-name]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const groupId = event.target.dataset.conditionGroupName;
      const name = event.target.value;
      const errors = { ...(settingsErrors[nodeItem.id] || {}) };
      if (name.trim() && errors.groups?.[groupId]) {
        delete errors.groups[groupId].name;
        settingsErrors[nodeItem.id] = errors;
        event.target.closest(".cmgui-text-field-wrapper")?.classList.remove("is-error", "is-empty");
        event.target.closest(".cmgui-text-field-wrapper")?.querySelector(".cmgui-text-field-label")?.classList.add("cmgui-text-field-label-active");
      } else if (!name.trim()) {
        event.target.closest(".cmgui-text-field-wrapper")?.classList.add("is-empty");
        event.target.closest(".cmgui-text-field-wrapper")?.querySelector(".cmgui-text-field-label")?.classList.remove("cmgui-text-field-label-active");
      }
      updateNodeSettingsDraft(nodeItem, {
        groups: getNodeSettingsDraft(nodeItem).groups.map((group) => (group.id === groupId ? { ...group, name } : group)),
      });
    });
    input.addEventListener("blur", (event) => {
      if (event.target.value.trim()) return;
      const groupId = event.target.dataset.conditionGroupName;
      settingsErrors[nodeItem.id] = {
        ...(settingsErrors[nodeItem.id] || {}),
        groups: {
          ...((settingsErrors[nodeItem.id] || {}).groups || {}),
          [groupId]: { ...(((settingsErrors[nodeItem.id] || {}).groups || {})[groupId] || {}), name: true },
        },
      };
      event.target.closest(".cmgui-text-field-wrapper")?.classList.add("is-error", "is-empty");
    });
  });
  sidebar.querySelectorAll("[id^='conditionParameterSelect-'], [id^='conditionOperatorSelect-'], [id^='conditionValueSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const selectKind = button.id.startsWith("conditionParameterSelect-") ? "parameter" : button.id.startsWith("conditionOperatorSelect-") ? "operator" : "value";
      const conditionId = button.id.replace(/^condition(?:Parameter|Operator|Value)Select-/, "");
      updateNodeSettingsDraft(nodeItem, {
        groups: updateConditionInGroups(getNodeSettingsDraft(nodeItem).groups, conditionId, (condition) => ({
          ...condition,
          parameterDropdownOpen: selectKind === "parameter" ? !condition.parameterDropdownOpen : false,
          operatorDropdownOpen: selectKind === "operator" ? !condition.operatorDropdownOpen : false,
          valueDropdownOpen: selectKind === "value" ? !condition.valueDropdownOpen : false,
        })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-dropdown-id^='conditionParameterSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const conditionId = button.dataset.dropdownId.replace("conditionParameterSelect-", "");
      const parameter = button.dataset.dropdownValue;
      const valueOptions = conditionValuesForParameter(parameter);
      clearConditionError(nodeItem, conditionId);
      updateNodeSettingsDraft(nodeItem, {
        groups: updateConditionInGroups(getNodeSettingsDraft(nodeItem).groups, conditionId, (condition) => ({
          ...condition,
          parameter,
          value: valueOptions.includes(condition.value) ? condition.value : valueOptions[0],
          parameterDropdownOpen: false,
          operatorDropdownOpen: false,
          valueDropdownOpen: false,
        })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-dropdown-id^='conditionOperatorSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const conditionId = button.dataset.dropdownId.replace("conditionOperatorSelect-", "");
      clearConditionError(nodeItem, conditionId);
      updateNodeSettingsDraft(nodeItem, {
        groups: updateConditionInGroups(getNodeSettingsDraft(nodeItem).groups, conditionId, (condition) => ({
          ...condition,
          operator: button.dataset.dropdownValue,
          parameterDropdownOpen: false,
          operatorDropdownOpen: false,
          valueDropdownOpen: false,
        })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-dropdown-id^='conditionValueSelect-']").forEach((button) => {
    button.addEventListener("click", () => {
      const conditionId = button.dataset.dropdownId.replace("conditionValueSelect-", "");
      clearConditionError(nodeItem, conditionId);
      updateNodeSettingsDraft(nodeItem, {
        groups: updateConditionInGroups(getNodeSettingsDraft(nodeItem).groups, conditionId, (condition) => ({
          ...condition,
          value: button.dataset.dropdownValue,
          parameterDropdownOpen: false,
          operatorDropdownOpen: false,
          valueDropdownOpen: false,
        })),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-condition-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.conditionAdd;
      updateNodeSettingsDraft(nodeItem, {
        groups: getNodeSettingsDraft(nodeItem).groups.map((group) =>
          group.id === groupId ? { ...group, conditions: [...group.conditions, createConditionItem()] } : group,
        ),
      });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#addConditionGroupButton")?.addEventListener("click", () => {
    const draft = getNodeSettingsDraft(nodeItem);
    if (draft.groups.length >= CONDITION_MAX_COUNT) return;
    updateNodeSettingsDraft(nodeItem, { groups: [...draft.groups, createConditionGroup(draft.groups.length + 1)] });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-condition-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = getNodeSettingsDraft(nodeItem);
      const conditionId = button.dataset.conditionRemove;
      const groupId = button.dataset.conditionRemoveGroup;
      const groups = draft.groups
        .map((group) => {
          if (group.id !== groupId) return group;
          const conditions = group.conditions.filter((item) => item.id !== conditionId);
          return { ...group, conditions };
        })
        .filter((group) => group.conditions.length || draft.groups.length <= 1);
      updateNodeSettingsDraft(nodeItem, { groups: groups.length ? groups : [createConditionGroup(1)] });
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
  if (isStartNode(nodeItem)) return collectStartSettings(sidebar, settings);
  if (isFinishNode(nodeItem)) return {};
  if (isGroupTransferNode(nodeItem)) return collectGroupTransferSettings(sidebar, settings);
  if (isInfoMessageNode(nodeItem)) return collectInfoMessageSettings(sidebar, settings);
  if (isContactFormNode(nodeItem)) return collectContactFormSettings(sidebar, settings);
  if (isMenuNode(nodeItem)) return collectMenuSettings(sidebar, settings);
  if (isScheduleNode(nodeItem)) return collectScheduleSettings(settings);
  if (isSegmentNode(nodeItem)) return collectSegmentSettings(settings);
  if (isConditionNode(nodeItem)) return collectConditionSettings(settings);
  return collectSimpleTransferSettings(sidebar, nodeItem, settings);
}

function collectStartSettings(sidebar, settings) {
  const nameInput = sidebar.querySelector("#startScenarioNameInput");
  return createStartSettings({
    ...settings,
    name: nameInput ? nameInput.value : settings.name,
    finishAfterHours: sanitizeStartFinishValue(sidebar.querySelector("#startFinishHoursInput")?.value, settings.finishAfterHours, settings.finishAfterUnit),
    finishAfterUnit: settings.finishAfterUnit,
  });
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

function collectSegmentSettings(settings) {
  return createSegmentSettings(settings);
}

function collectConditionSettings(settings) {
  return createConditionSettings(settings);
}

function validateNodeSettings(nodeItem, settings) {
  if (isStartNode(nodeItem)) return settings.name.trim() ? {} : { name: true };
  if (isFinishNode(nodeItem)) return {};
  if (isGroupTransferNode(nodeItem)) return settings.groupName ? {} : { groupName: "Выберите отдел" };
  if (isInfoMessageNode(nodeItem)) return settings.messageText.trim() ? {} : { messageText: true };
  if (isContactFormNode(nodeItem)) return {};
  if (isMenuNode(nodeItem)) return validateMenuSettings(settings);
  if (isScheduleNode(nodeItem)) return validateScheduleSettings(settings);
  if (isSegmentNode(nodeItem)) return validateSegmentSettings(settings);
  if (isConditionNode(nodeItem)) return validateConditionSettings(settings);
  const config = SIMPLE_TRANSFER_CONFIG[nodeItem.operationType];
  if (config?.requiredField === "employeeName" && !settings.employeeName) return { employeeName: config.requiredError };
  return {};
}

function closeDropdownPatchForNode(nodeItem) {
  if (isStartNode(nodeItem)) return { channelsDropdownOpen: false, employeeDropdownOpen: false, groupDropdownOpen: false };
  if (isFinishNode(nodeItem)) return {};
  if (isGroupTransferNode(nodeItem)) return { groupDropdownOpen: false, distributionDropdownOpen: false };
  if (isInfoMessageNode(nodeItem)) return {};
  if (isContactFormNode(nodeItem)) return {};
  if (isMenuNode(nodeItem)) return {};
  if (isScheduleNode(nodeItem)) return {};
  if (isSegmentNode(nodeItem)) return {};
  if (isConditionNode(nodeItem)) return {};
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

function validateSegmentSettings(settings) {
  const groupErrors = {};
  settings.groups.forEach((group) => {
    if (!group.name) groupErrors[group.id] = true;
  });
  return Object.keys(groupErrors).length ? { groups: groupErrors } : {};
}

function validateConditionSettings(settings) {
  const groupErrors = {};
  settings.groups.forEach((group) => {
    const groupError = {};
    if (!group.name.trim()) groupError.name = true;
    const conditionErrors = {};
    group.conditions.forEach((condition) => {
      if (!condition.parameter || !condition.operator || !condition.value) conditionErrors[condition.id] = true;
    });
    if (Object.keys(conditionErrors).length) groupError.conditions = conditionErrors;
    if (Object.keys(groupError).length) groupErrors[group.id] = groupError;
  });
  return Object.keys(groupErrors).length ? { groups: groupErrors } : {};
}

function createStartSettings(overrides = {}) {
  const sourceChannels = Array.isArray(overrides.channels) ? overrides.channels : [];
  const completionTarget = overrides.completionTarget ?? "all";
  const finishAfterUnit = ["hours", "days"].includes(overrides.finishAfterUnit) ? overrides.finishAfterUnit : "hours";
  return {
    name: overrides.name || "Сценарий обработки чатов №1",
    channels: sourceChannels,
    finishAfterHours: 72,
    finishAfterUnit: "hours",
    completionTarget: "all",
    employeeName: "",
    groupName: "",
    channelsDropdownOpen: false,
    employeeDropdownOpen: false,
    groupDropdownOpen: false,
    finishOpen: false,
    ...overrides,
    channels: CHANNEL_OPTIONS.filter((channel) => sourceChannels.includes(channel)),
    finishAfterUnit,
    finishAfterHours: sanitizeStartFinishValue(overrides.finishAfterHours ?? 72, 72, finishAfterUnit),
    completionTarget: ["all", "employee", "group"].includes(completionTarget) ? completionTarget : "all",
  };
}

function normalizeComparableStartSettings(settings) {
  const normalized = createStartSettings(settings);
  return {
    name: normalized.name.trim(),
    channels: normalized.channels,
    finishAfterHours: sanitizeStartFinishValue(normalized.finishAfterHours, 72, normalized.finishAfterUnit),
    finishAfterUnit: normalized.finishAfterUnit,
    completionTarget: normalized.completionTarget,
    employeeName: normalized.completionTarget === "employee" ? normalized.employeeName || "" : "",
    groupName: normalized.completionTarget === "group" ? normalized.groupName || "" : "",
  };
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

function createSegmentSettings(overrides = {}) {
  const defaultGroups = [createSegmentGroup(AVAILABLE_SEGMENT_GROUPS[0])];
  const settings = {
    cycleLimit: 1,
    technicalOpen: false,
    groups: defaultGroups,
    ...overrides,
  };
  const groups = Array.isArray(settings.groups) && settings.groups.length ? settings.groups : defaultGroups;
  return {
    ...settings,
    groups: groups.slice(0, SEGMENT_MAX_COUNT).map((group, index) => ({
      id: group.id || `segment-group-${Date.now().toString(36)}-${index}`,
      name: AVAILABLE_SEGMENT_GROUPS.includes(group.name) ? group.name : group.name || (index === 0 ? AVAILABLE_SEGMENT_GROUPS[0] : ""),
      dropdownOpen: Boolean(group.dropdownOpen),
    })),
  };
}

function createSegmentGroup(name = "") {
  return {
    id: `segment-group-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    name,
    dropdownOpen: false,
  };
}

function createConditionSettings(overrides = {}) {
  const migratedGroups = Array.isArray(overrides.groups) ? overrides.groups : Array.isArray(overrides.conditions) ? [{ name: "Группа условий 1", open: true, conditions: overrides.conditions }] : null;
  const defaultGroups = [createConditionGroup(1)];
  const settings = {
    cycleLimit: 1,
    technicalOpen: false,
    groups: defaultGroups,
    ...overrides,
    groups: migratedGroups || defaultGroups,
  };
  const groups = Array.isArray(settings.groups) && settings.groups.length ? settings.groups : defaultGroups;
  return {
    ...settings,
    groups: groups.slice(0, CONDITION_MAX_COUNT).map((group, index) => createConditionGroup(index + 1, group)),
  };
}

function createConditionGroup(index = 1, overrides = {}) {
  const conditions = Array.isArray(overrides.conditions) && overrides.conditions.length ? overrides.conditions : [createConditionItem()];
  return {
    id: overrides.id || `condition-group-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    name: overrides.name || `Группа условий ${index}`,
    open: overrides.open !== false,
    conditions: conditions.map((condition, conditionIndex) => createConditionItem({ ...condition, id: condition.id || undefined, index: conditionIndex })),
  };
}

function createConditionItem(overrides = {}) {
  const parameter = CONDITION_PARAMETERS.includes(overrides.parameter) ? overrides.parameter : "";
  const valueOptions = conditionValuesForParameter(parameter);
  return {
    id: overrides.id || `condition-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    parameter,
    operator: CONDITION_OPERATORS.some(([operator]) => operator === overrides.operator) ? overrides.operator : "",
    value: valueOptions.includes(overrides.value) ? overrides.value : "",
    parameterDropdownOpen: Boolean(overrides.parameterDropdownOpen),
    operatorDropdownOpen: Boolean(overrides.operatorDropdownOpen),
    valueDropdownOpen: Boolean(overrides.valueDropdownOpen),
  };
}

function conditionValuesForParameter(parameter) {
  return CONDITION_VALUES_BY_PARAMETER[parameter] || [];
}

function conditionLabel(condition) {
  const operator = CONDITION_OPERATORS.find(([value]) => value === condition.operator)?.[1] || "равно";
  if (!condition.parameter || !condition.value) return "";
  return `${condition.parameter} ${operator} ${condition.value}`;
}

function updateConditionInGroups(groups, conditionId, updater) {
  return groups.map((group) => ({
    ...group,
    conditions: group.conditions.map((condition) =>
      condition.id === conditionId
        ? updater(condition)
        : {
            ...condition,
            parameterDropdownOpen: false,
            operatorDropdownOpen: false,
            valueDropdownOpen: false,
          },
    ),
  }));
}

function clearConditionError(nodeItem, conditionId) {
  const errors = { ...(settingsErrors[nodeItem.id] || {}) };
  if (!errors.groups) return;
  Object.values(errors.groups).forEach((groupError) => {
    if (groupError.conditions) delete groupError.conditions[conditionId];
  });
  settingsErrors[nodeItem.id] = errors;
}

function createEmployeesForGroup(groupName) {
  const names = GROUP_TRANSFER_EMPLOYEES_BY_GROUP[groupName] || GROUP_TRANSFER_EMPLOYEES_BY_GROUP["Отдел продаж"];
  return names.map((name, index) => ({ name, enabled: true, timeout: index === names.length - 1 && names.length > 2 ? 1500 : 15 }));
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

function getStartSettings() {
  const currentScenario = getCurrentScenario();
  return createStartSettings({
    ...(currentScenario?.settings?.start || {}),
    name: currentScenario?.name || "Сценарий обработки чатов №1",
    channels: Array.isArray(currentScenario?.channels) ? currentScenario.channels : [],
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

function getSegmentSettings(nodeItem) {
  const existing = nodeItem.settings?.segment || {};
  return createSegmentSettings({
    ...existing,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getConditionSettings(nodeItem) {
  const existing = nodeItem.settings?.condition || {};
  return createConditionSettings({
    ...existing,
    technicalOpen: existing.technicalOpen ?? false,
  });
}

function getNodeSettings(nodeItem) {
  if (isStartNode(nodeItem)) return getStartSettings(nodeItem);
  if (isFinishNode(nodeItem)) return {};
  if (isGroupTransferNode(nodeItem)) return getGroupTransferSettings(nodeItem);
  if (isInfoMessageNode(nodeItem)) return getInfoMessageSettings(nodeItem);
  if (isContactFormNode(nodeItem)) return getContactFormSettings(nodeItem);
  if (isMenuNode(nodeItem)) return getMenuSettings(nodeItem);
  if (isScheduleNode(nodeItem)) return getScheduleSettings(nodeItem);
  if (isSegmentNode(nodeItem)) return getSegmentSettings(nodeItem);
  if (isConditionNode(nodeItem)) return getConditionSettings(nodeItem);
  return getSimpleTransferSettings(nodeItem);
}

function getNodeSettingsDraft(nodeItem) {
  if (!settingsDrafts[nodeItem.id]) settingsDrafts[nodeItem.id] = clone(getNodeSettings(nodeItem));
  return settingsDrafts[nodeItem.id];
}

function updateNodeSettingsDraft(nodeItem, patch) {
  const next = { ...getNodeSettingsDraft(nodeItem), ...patch };
  if (isStartNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createStartSettings(next);
    return;
  }
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
  if (isSegmentNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createSegmentSettings(next);
    return;
  }
  if (isConditionNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = createConditionSettings(next);
    return;
  }
  if (isFinishNode(nodeItem)) {
    settingsDrafts[nodeItem.id] = {};
    return;
  }
  settingsDrafts[nodeItem.id] = createSimpleTransferSettings(nodeItem.operationType, next);
}

function saveNodeSettings(nodeItem, settings) {
  if (isStartNode(nodeItem)) {
    saveStartSettings(nodeItem, settings);
    return;
  }
  if (isFinishNode(nodeItem)) {
    nodeItem.title = catalog.finish.title;
    nodeItem.subtitle = catalog.finish.subtitle;
    nodeItem.color = catalog.finish.color;
    nodeItem.icon = catalog.finish.icon;
    return;
  }
  if (isSegmentNode(nodeItem)) {
    saveSegmentSettings(nodeItem, settings);
    return;
  }
  if (isScheduleNode(nodeItem)) {
    saveScheduleSettings(nodeItem, settings);
    return;
  }
  if (isConditionNode(nodeItem)) {
    saveConditionSettings(nodeItem, settings);
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

function saveStartSettings(nodeItem, settings) {
  const currentScenario = getCurrentScenario();
  const normalized = createStartSettings(settings);
  if (currentScenario) {
    currentScenario.name = normalized.name.trim();
    currentScenario.channels = normalized.channels;
    currentScenario.settings = {
      ...(currentScenario.settings || {}),
      start: {
        finishAfterHours: normalized.finishAfterHours,
        finishAfterUnit: normalized.finishAfterUnit,
        completionTarget: normalized.completionTarget,
        employeeName: normalized.employeeName,
        groupName: normalized.groupName,
      },
    };
    document.querySelector("#scenarioTitleText").textContent = currentScenario.name;
  }
  nodeItem.settings = { ...(nodeItem.settings || {}), start: currentScenario?.settings?.start || {} };
  applyStartTitle(nodeItem, normalized);
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

function saveSegmentSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), segment: createSegmentSettings(settings) };
  applySegmentTitle(nodeItem, nodeItem.settings.segment);
  syncDynamicOutputEdges(nodeItem);
}

function saveConditionSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), condition: createConditionSettings(settings) };
  applyConditionTitle(nodeItem, nodeItem.settings.condition);
  syncDynamicOutputEdges(nodeItem);
}

function applyGroupTransferTitle(nodeItem, settings) {
  setAutoNodeTitle(nodeItem, settings.groupName ? `На группу: ${settings.groupName}` : "На группу");
  nodeItem.subtitle = settings.groupName ? `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}` : "Группа не выбрана";
}

function applyStartTitle(nodeItem, settings = createStartSettings()) {
  setAutoNodeTitle(nodeItem, "Входящее сообщение");
  nodeItem.subtitle = settings.channels.length ? `Каналы: ${settings.channels.join(", ")}` : "Каналы не выбраны";
}

function setAutoNodeTitle(nodeItem, title) {
  if (!nodeItem?.customTitle) nodeItem.title = title;
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

function isSegmentNode(nodeItem) {
  return nodeItem?.kind === "segment" && nodeItem.operationType === SEGMENT_OPERATION;
}

function isConditionNode(nodeItem) {
  return nodeItem?.kind === "condition" && nodeItem.operationType === CONDITION_OPERATION;
}

function isDistributionOperationNode(nodeItem) {
  return isMenuNode(nodeItem) || isScheduleNode(nodeItem) || isSegmentNode(nodeItem) || isConditionNode(nodeItem);
}

function isFullscreenActionNode(nodeItem) {
  return isScheduleNode(nodeItem) || isSegmentNode(nodeItem) || isConditionNode(nodeItem);
}

function isConfigurableTransferNode(nodeItem) {
  return isGroupTransferNode(nodeItem) || isSimpleTransferNode(nodeItem);
}

function isConfigurableNode(nodeItem) {
  return isStartNode(nodeItem) || isFinishNode(nodeItem) || isConfigurableTransferNode(nodeItem) || isInfoMessageNode(nodeItem) || isContactFormNode(nodeItem) || isMenuNode(nodeItem) || isScheduleNode(nodeItem) || isSegmentNode(nodeItem) || isConditionNode(nodeItem);
}

function isTransferWithFallbackNode(nodeItem) {
  return isConfigurableTransferNode(nodeItem);
}

function settingsTitleForNode(nodeItem) {
  if (isStartNode(nodeItem)) return "Настройки сценария";
  if (isFinishNode(nodeItem)) return "Закрытие чата";
  if (isContactFormNode(nodeItem)) return "Форма сбора контактов";
  if (isMenuNode(nodeItem)) return "Меню";
  if (isScheduleNode(nodeItem)) return "Распределение по графику";
  if (isSegmentNode(nodeItem)) return "Распределение по сегментам";
  if (isConditionNode(nodeItem)) return "Распределение по условиям";
  if (isInfoMessageNode(nodeItem)) return "Информационное сообщение";
  if (isGroupTransferNode(nodeItem)) return "На группу";
  return SIMPLE_TRANSFER_CONFIG[nodeItem.operationType]?.title || nodeItem.title;
}

function applySimpleTransferTitle(nodeItem, settings) {
  const config = SIMPLE_TRANSFER_CONFIG[nodeItem.operationType];
  if (nodeItem.operationType === "employee-transfer") {
    setAutoNodeTitle(nodeItem, settings.employeeName ? `${config.title}: ${settings.employeeName}` : config.title);
    nodeItem.subtitle = settings.employeeName ? `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}` : config.emptySubtitle;
    return;
  }
  setAutoNodeTitle(nodeItem, config.title);
  nodeItem.subtitle = `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}`;
}

function applyInfoMessageTitle(nodeItem, settings) {
  setAutoNodeTitle(nodeItem, "Информационное сообщение");
  nodeItem.subtitle = `Следующая операция через: ${formatTimeout(settings.transitionDelay, settings.timeoutUnit)}`;
}

function applyContactFormTitle(nodeItem, settings) {
  setAutoNodeTitle(nodeItem, "Форма сбора контактов");
  nodeItem.subtitle = `Ожидание контактов: ${formatTimeout(settings.contactWait, settings.timeoutUnit)}`;
}

function applyMenuTitle(nodeItem, settings) {
  setAutoNodeTitle(nodeItem, "Меню");
  nodeItem.subtitle = `Ожидание нажатия кнопки: ${formatTimeout(settings.waitTime, settings.timeoutUnit)}`;
}

function applyScheduleTitle(nodeItem, settings) {
  const names = settings.schedules.map((schedule) => schedule.name).filter(Boolean);
  setAutoNodeTitle(nodeItem, "Распределение по графику");
  nodeItem.subtitle = names.length ? `График: ${names.join(", ")}` : "График не выбран";
}

function applySegmentTitle(nodeItem, settings) {
  const names = settings.groups.map((group) => group.name).filter(Boolean);
  setAutoNodeTitle(nodeItem, "Распределение по сегментам");
  nodeItem.subtitle = names.length ? `Группа сегментов: ${names.join(", ")}` : "Группа сегментов не выбрана";
}

function applyConditionTitle(nodeItem, settings) {
  const labels = settings.groups.map((group) => group.name).filter(Boolean);
  setAutoNodeTitle(nodeItem, "Распределение по условиям");
  nodeItem.subtitle = labels.length ? `Группа условий: ${labels.join(", ")}` : "Группа условий не настроена";
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

function normalizeComparableSegmentSettings(settings) {
  const normalized = createSegmentSettings(settings);
  return {
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
    groups: normalized.groups.map((group) => ({ id: group.id, name: group.name || "" })),
  };
}

function normalizeComparableConditionSettings(settings) {
  const normalized = createConditionSettings(settings);
  return {
    cycleLimit: sanitizePositiveInteger(normalized.cycleLimit, 1),
    groups: normalized.groups.map((group) => ({
      id: group.id,
      name: group.name || "",
      open: group.open !== false,
      conditions: group.conditions.map((condition) => ({
        id: condition.id,
        parameter: condition.parameter || "",
        operator: condition.operator || "",
        value: condition.value || "",
      })),
    })),
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

function sanitizeIntegerInRange(value, fallback, min, max) {
  const parsed = Number.parseInt(value, 10);
  const normalized = Number.isFinite(parsed) ? parsed : fallback;
  return Math.min(max, Math.max(min, normalized));
}

function sanitizeStartFinishValue(value, fallback, unit = "hours") {
  return sanitizeIntegerInRange(value, fallback, 1, unit === "days" ? 3 : 72);
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
  const nameInput = document.querySelector("#scenarioNameInput");
  nameInput.value = `Сценарий обработки чатов №${appState.scenarios.length + 1}`;
  updateScenarioCreateNameState();
  document.querySelectorAll("#scenarioCreateChannelsDropdown input[name='channels']").forEach((input) => {
    input.checked = false;
  });
  updateScenarioCreateChannelsValue();
  scenarioCreateSettings = createStartSettings({
    channels: getScenarioCreateSelectedChannels(),
    finishOpen: false,
  });
  closeScenarioCreateDropdowns();
  renderScenarioCreateFinishSettings();
  document.body.classList.add("is-scenario-create-open");
  document.querySelector("#scenarioCreateModal").setAttribute("aria-hidden", "false");
  nameInput.focus();
}

function closeScenarioCreateModal() {
  closeScenarioCreateDropdowns();
  document.body.classList.remove("is-scenario-create-open");
  document.querySelector("#scenarioCreateModal").setAttribute("aria-hidden", "true");
}

function toggleScenarioCreateChannelsDropdown() {
  const dropdown = document.querySelector("#scenarioCreateChannelsDropdown");
  const button = document.querySelector("#scenarioCreateChannelsSelect");
  const isOpen = dropdown.classList.toggle("is-open");
  button.classList.toggle("cmgui-select-field-active", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) positionOpenDropdowns(document.querySelector("#scenarioCreateModal"));
}

function closeScenarioCreateChannelsDropdown() {
  document.querySelector("#scenarioCreateChannelsDropdown")?.classList.remove("is-open");
  document.querySelector("#scenarioCreateChannelsSelect")?.classList.remove("cmgui-select-field-active");
  document.querySelector("#scenarioCreateChannelsSelect")?.setAttribute("aria-expanded", "false");
}

function closeScenarioCreateDropdowns() {
  closeScenarioCreateChannelsDropdown();
  scenarioCreateSettings = createStartSettings({
    ...scenarioCreateSettings,
    employeeDropdownOpen: false,
    groupDropdownOpen: false,
  });
  renderScenarioCreateFinishSettings();
}

function getScenarioCreateSelectedChannels() {
  return [...document.querySelectorAll("#scenarioCreateChannelsDropdown input[name='channels']:checked")].map((input) => input.value);
}

function updateScenarioCreateChannelsValue() {
  const channels = getScenarioCreateSelectedChannels();
  const output = document.querySelector("#scenarioCreateChannelsValue");
  const button = document.querySelector("#scenarioCreateChannelsSelect");
  output.textContent = channels.length ? channels.join(", ") : "Каналы для приема сообщений";
  output.classList.toggle("is-placeholder", !channels.length);
  button.classList.toggle("is-empty", !channels.length);
  scenarioCreateSettings = createStartSettings({ ...scenarioCreateSettings, channels });
}

function updateScenarioCreateNameState(options = {}) {
  const input = document.querySelector("#scenarioNameInput");
  const wrapper = input?.closest(".cmgui-text-field-wrapper");
  const label = wrapper?.querySelector(".cmgui-text-field-label");
  if (!input || !wrapper || !label) return;
  const hasValue = Boolean(input.value.trim());
  wrapper.classList.toggle("is-empty", !hasValue);
  label.classList.toggle("cmgui-text-field-label-active", hasValue);
  if (hasValue) wrapper.classList.remove("is-error");
  else if (options.showError) wrapper.classList.add("is-error");
}

function renderScenarioCreateFinishSettings() {
  const toggle = document.querySelector("#scenarioCreateFinishToggle");
  const toggleText = document.querySelector("#scenarioCreateFinishToggleText");
  const container = document.querySelector("#scenarioCreateFinishSettings");
  if (!toggle || !container) return;
  const settings = createStartSettings(scenarioCreateSettings);
  toggle.classList.toggle("is-open", settings.finishOpen);
  toggle.setAttribute("aria-expanded", String(settings.finishOpen));
  if (toggleText) toggleText.textContent = settings.finishOpen ? "Скрыть настройки завершения сценария" : "Настройки завершения сценария";
  container.hidden = !settings.finishOpen;
  if (!settings.finishOpen) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `${renderSettingsAlert(startFinishAlertText(settings))}
    <div class="start-finish-time-row scenario-create-finish-time-row">
      <span>Завершать через</span>
      <span class="cmgui-text-field-wrapper start-hours-field">
        <input class="cmgui-text-field-input" id="scenarioCreateFinishHoursInput" value="${escapeAttr(settings.finishAfterHours)}" inputmode="numeric" />
      </span>
      <div class="segment-control start-finish-unit-control" role="group" aria-label="Единица времени завершения сценария">
        <button class="${settings.finishAfterUnit === "hours" ? "is-active" : ""}" type="button" data-scenario-create-finish-unit="hours">Часов</button>
        <button class="${settings.finishAfterUnit === "days" ? "is-active" : ""}" type="button" data-scenario-create-finish-unit="days">Дней</button>
      </div>
    </div>
    <div class="start-finish-label">После завершения отправить чат</div>
    <div class="start-radio-group" role="radiogroup" aria-label="После завершения отправить чат">
      ${renderScenarioCreateRadio("all", "Всем сотрудникам в новые сообщения", settings.completionTarget)}
      ${renderScenarioCreateRadio("employee", "Сотруднику в новые сообщения", settings.completionTarget)}
      ${renderScenarioCreateRadio("group", "Группе в новые сообщения", settings.completionTarget)}
    </div>
    ${settings.completionTarget === "employee" ? renderSimpleSelect("scenarioCreateEmployeeSelect", "Сотрудник*", settings.employeeName, TRANSFER_EMPLOYEES.map((name) => [name, name]), settings.employeeDropdownOpen) : ""}
    ${settings.completionTarget === "group" ? renderSimpleSelect("scenarioCreateGroupSelect", "Группа*", settings.groupName, GROUP_TRANSFER_GROUPS.map((name) => [name, name]), settings.groupDropdownOpen) : ""}`;
  wireScenarioCreateFinishSettings();
  positionOpenDropdowns(document.querySelector("#scenarioCreateModal"));
}

function renderScenarioCreateRadio(value, label, selectedValue) {
  return `<label class="cmgui-radio">
    <input type="radio" name="scenarioCreateCompletionTarget" value="${escapeAttr(value)}" ${selectedValue === value ? "checked" : ""} />
    <span class="cmgui-radio-mark"></span>
    <span>${escapeHtml(label)}</span>
  </label>`;
}

function wireScenarioCreateFinishSettings() {
  const container = document.querySelector("#scenarioCreateFinishSettings");
  if (!container || container.hidden) return;
  container.querySelector("#scenarioCreateFinishHoursInput")?.addEventListener("input", (event) => {
    scenarioCreateSettings = createStartSettings({ ...scenarioCreateSettings, finishAfterHours: event.target.value });
  });
  container.querySelector("#scenarioCreateFinishHoursInput")?.addEventListener("blur", (event) => {
    const value = sanitizeStartFinishValue(event.target.value, scenarioCreateSettings.finishAfterHours, scenarioCreateSettings.finishAfterUnit);
    event.target.value = value;
    scenarioCreateSettings = createStartSettings({ ...scenarioCreateSettings, finishAfterHours: value });
  });
  container.querySelectorAll("[data-scenario-create-finish-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      const unit = button.dataset.scenarioCreateFinishUnit;
      scenarioCreateSettings = createStartSettings({
        ...collectScenarioCreateFinishSettings(),
        finishAfterUnit: unit,
        finishAfterHours: sanitizeStartFinishValue(scenarioCreateSettings.finishAfterHours, scenarioCreateSettings.finishAfterHours, unit),
      });
      renderScenarioCreateFinishSettings();
    });
  });
  container.querySelectorAll('input[name="scenarioCreateCompletionTarget"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      scenarioCreateSettings = createStartSettings({
        ...collectScenarioCreateFinishSettings(),
        completionTarget: radio.value,
        employeeDropdownOpen: false,
        groupDropdownOpen: false,
      });
      renderScenarioCreateFinishSettings();
    });
  });
  container.querySelector("#scenarioCreateEmployeeSelect")?.addEventListener("click", () => {
    scenarioCreateSettings = createStartSettings({
      ...collectScenarioCreateFinishSettings(),
      employeeDropdownOpen: !scenarioCreateSettings.employeeDropdownOpen,
      groupDropdownOpen: false,
    });
    renderScenarioCreateFinishSettings();
  });
  container.querySelectorAll("[data-dropdown-id='scenarioCreateEmployeeSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      scenarioCreateSettings = createStartSettings({ ...collectScenarioCreateFinishSettings(), employeeName: button.dataset.dropdownValue, employeeDropdownOpen: false });
      renderScenarioCreateFinishSettings();
    });
  });
  container.querySelector("#scenarioCreateGroupSelect")?.addEventListener("click", () => {
    scenarioCreateSettings = createStartSettings({
      ...collectScenarioCreateFinishSettings(),
      groupDropdownOpen: !scenarioCreateSettings.groupDropdownOpen,
      employeeDropdownOpen: false,
    });
    renderScenarioCreateFinishSettings();
  });
  container.querySelectorAll("[data-dropdown-id='scenarioCreateGroupSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      scenarioCreateSettings = createStartSettings({ ...collectScenarioCreateFinishSettings(), groupName: button.dataset.dropdownValue, groupDropdownOpen: false });
      renderScenarioCreateFinishSettings();
    });
  });
}

function collectScenarioCreateFinishSettings() {
  const container = document.querySelector("#scenarioCreateFinishSettings");
  const finishAfterHours = container?.querySelector("#scenarioCreateFinishHoursInput")?.value ?? scenarioCreateSettings.finishAfterHours;
  const completionTarget = container?.querySelector('input[name="scenarioCreateCompletionTarget"]:checked')?.value ?? scenarioCreateSettings.completionTarget;
  return createStartSettings({
    ...scenarioCreateSettings,
    channels: getScenarioCreateSelectedChannels(),
    finishAfterHours,
    completionTarget,
    employeeDropdownOpen: false,
    groupDropdownOpen: false,
  });
}

function createScenarioFromForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const nameInput = document.querySelector("#scenarioNameInput");
  const name = nameInput.value.trim();
  if (!name) {
    updateScenarioCreateNameState({ showError: true });
    nameInput.focus();
    return;
  }
  const channels = [...form.querySelectorAll('input[name="channels"]:checked')].map((input) => input.value);
  const startSettings = createStartSettings({
    ...collectScenarioCreateFinishSettings(),
    name,
    channels,
  });
  const scenarioItem = createScenario({ name, channels, startSettings });
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
  pendingPlaceholderBackups = new Map();
  history = [];
  future = [];
  hasUnsavedScenarioChanges = false;
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
  pendingPlaceholderBackups = new Map();
  history = [];
  future = [];
  hasUnsavedScenarioChanges = false;
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
  pendingPlaceholderBackups = new Map();
  persistAppState();
  renderAppShell();
}

function copyScenario(scenarioId) {
  const source = appState.scenarios.find((item) => item.id === scenarioId);
  if (!source) return;
  const copy = clone(source);
  copy.id = `scenario-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`;
  copy.name = `${source.name} копия`;
  copy.createdAt = Date.now();
  copy.updatedAt = Date.now();
  appState.scenarios.splice(appState.scenarios.indexOf(source) + 1, 0, copy);
  persistAppState();
  renderAppShell();
}

function deleteScenario(scenarioId) {
  const index = appState.scenarios.findIndex((item) => item.id === scenarioId);
  if (index < 0) return;
  appState.scenarios.splice(index, 1);
  if (appState.currentScenarioId === scenarioId) appState.currentScenarioId = null;
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

function copyBulkSelection() {
  if (!bulkSelectedNodeIds.size) return;
  const selectedNodes = state.nodes.filter((nodeItem) => bulkSelectedNodeIds.has(nodeItem.id) && !isStartNode(nodeItem));
  const bounds = bulkSelectionBounds();
  if (!selectedNodes.length || !bounds) return;
  pushHistory();
  const idMap = new Map();
  const offsetY = bounds.height + 80;
  const copiedNodes = selectedNodes.map((nodeItem) => {
    const nextId = `${nodeItem.id}-copy-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`;
    idMap.set(nodeItem.id, nextId);
    const copy = clone(nodeItem);
    copy.id = nextId;
    copy.y = snapToDragGrid(copy.y + offsetY);
    delete copy.dragOffsetX;
    delete copy.dragOffsetY;
    delete copy.dragMoved;
    return copy;
  });
  const copiedEdges = state.edges
    .filter((edgeItem) => idMap.has(edgeItem.source) && idMap.has(edgeItem.target))
    .map((edgeItem) => ({
      ...clone(edgeItem),
      id: `${idMap.get(edgeItem.source)}-${idMap.get(edgeItem.target)}-${Math.random().toString(16).slice(2)}`,
      source: idMap.get(edgeItem.source),
      target: idMap.get(edgeItem.target),
    }));
  state.nodes.push(...copiedNodes);
  state.edges.push(...copiedEdges);
  bulkSelectedNodeIds = new Set(copiedNodes.map((nodeItem) => nodeItem.id));
  bulkSelectedEdgeIds = new Set(copiedEdges.map((edgeItem) => edgeItem.id));
  selectedId = null;
  selectedEdgeId = null;
  render();
  schedulePersistState();
}

function deleteBulkSelection() {
  if (!bulkSelectedNodeIds.size && !bulkSelectedEdgeIds.size) return;
  pushHistory();
  const nodeIds = new Set();
  state.nodes
    .filter((nodeItem) => bulkSelectedNodeIds.has(nodeItem.id) && !isStartNode(nodeItem))
    .forEach((nodeItem) => collectNodeIdsForRemoval(nodeItem.id).forEach((id) => nodeIds.add(id)));
  state.edges
    .filter((edgeItem) => bulkSelectedEdgeIds.has(edgeItem.id) && isPlaceholderNode(getNode(edgeItem.target)))
    .forEach((edgeItem) => collectNodeIdsForRemoval(edgeItem.target).forEach((id) => nodeIds.add(id)));
  state.nodes = state.nodes.filter((nodeItem) => !nodeIds.has(nodeItem.id));
  state.edges = state.edges.filter((edgeItem) => !nodeIds.has(edgeItem.source) && !nodeIds.has(edgeItem.target) && !bulkSelectedEdgeIds.has(edgeItem.id));
  nodeIds.forEach((nodeId) => {
    delete settingsDrafts[nodeId];
    delete settingsErrors[nodeId];
    pendingSettingsNodeIds.delete(nodeId);
    pendingPlaceholderBackups.delete(nodeId);
  });
  if (settingsNodeId && nodeIds.has(settingsNodeId)) closeNodeSettings(false);
  selectedId = null;
  selectedEdgeId = null;
  hoveredEdgeId = null;
  clearBulkSelection();
  render();
  schedulePersistState();
}

function removeEdgeById(edgeId) {
  const edgeItem = state.edges.find((item) => item.id === edgeId);
  if (!edgeItem) return;
  pushHistory();
  hideEdgeTooltip();
  const targetNode = getNode(edgeItem.target);
  const placeholderIds = new Set(isPlaceholderNode(targetNode) ? [targetNode.id] : []);
  state.edges = state.edges.filter((item) => item.id !== edgeId && !placeholderIds.has(item.source) && !placeholderIds.has(item.target));
  if (placeholderIds.size) {
    state.nodes = state.nodes.filter((nodeItem) => !placeholderIds.has(nodeItem.id));
    placeholderIds.forEach((id) => {
      delete settingsDrafts[id];
      delete settingsErrors[id];
      pendingSettingsNodeIds.delete(id);
      pendingPlaceholderBackups.delete(id);
    });
  }
  selectedEdgeId = null;
  hoveredEdgeId = null;
  if (placeholderIds.has(selectedId)) selectedId = null;
  if (placeholderIds.has(hoveredId)) hoveredId = null;
  render();
  schedulePersistState();
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
  nodeIdsToRemove.forEach((removedId) => pendingPlaceholderBackups.delete(removedId));
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
  if (selectedEdgeId && !state.edges.some((edgeItem) => edgeItem.id === selectedEdgeId)) selectedEdgeId = null;
  if (hoveredEdgeId && !state.edges.some((edgeItem) => edgeItem.id === hoveredEdgeId)) hoveredEdgeId = null;
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
  persistState();
  hasUnsavedScenarioChanges = false;
  updateSaveButton();
}

function updateSaveButton() {
  const button = document.querySelector("#saveButton");
  if (!button) return;
  button.classList.toggle("is-ready", !hasUnsavedScenarioChanges);
  button.setAttribute("aria-disabled", hasUnsavedScenarioChanges ? "false" : "true");
  button.textContent = hasUnsavedScenarioChanges ? "Сохранить" : "Сохранено";
}

function persistState() {
  syncCurrentScenario();
  persistAppState();
}

function schedulePersistState({ markDirty = true } = {}) {
  if (markDirty) {
    hasUnsavedScenarioChanges = true;
    updateSaveButton();
  }
  window.clearTimeout(persistTimer);
  persistTimer = window.setTimeout(persistState, 120);
}

function flushPendingPersist() {
  window.clearTimeout(persistTimer);
  persistTimer = null;
  persistState();
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
      const migratedScenario = createScenario({ name: "Сценарий обработки чатов №1", channels: ["Email", "Telegram"], board: legacyBoard });
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
      ? value.scenarios.map((scenarioItem) => {
          const normalizedScenario = {
            ...scenarioItem,
            channels: Array.isArray(scenarioItem.channels) ? scenarioItem.channels : [],
            settings: {
              ...(scenarioItem.settings || {}),
              start: createStartSettings({
                ...(scenarioItem.settings?.start || {}),
                name: scenarioItem.name || "Сценарий обработки чатов №1",
                channels: Array.isArray(scenarioItem.channels) ? scenarioItem.channels : [],
              }),
              holding: normalizeLoadedHoldingSettings(scenarioItem.settings?.holding || {}),
            },
            board: normalizeLoadedState(scenarioItem.board || createInitialBoard([])),
          };
          syncScenarioStartNode(normalizedScenario);
          return normalizedScenario;
        })
      : [],
    currentScenarioId: value.currentScenarioId || null,
  };
}

function getCurrentScenario() {
  return appState.scenarios.find((scenarioItem) => scenarioItem.id === appState.currentScenarioId) || null;
}

function createScenario({ name, channels, board, startSettings: providedStartSettings }) {
  const startSettings = createStartSettings({ ...(providedStartSettings || {}), name, channels });
  const scenarioItem = {
    id: `scenario-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`,
    name,
    channels,
    settings: { start: startSettings, holding: createHoldingSettings() },
    board: board ? normalizeLoadedState(board) : createInitialBoard(channels),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  syncScenarioStartNode(scenarioItem);
  return scenarioItem;
}

function createInitialBoard(channels) {
  const board = {
    nodes: [node("incoming", "start", 40, 348)],
    edges: [],
    viewport: { x: 0, y: 0, k: 1 },
  };
  applyStartTitle(board.nodes[0], createStartSettings({ channels }));
  return board;
}

function syncScenarioStartNode(scenarioItem) {
  const startNode = scenarioItem?.board?.nodes?.find((nodeItem) => isStartNode(nodeItem));
  if (!startNode) return;
  startNode.x = snapToDragGrid(startNode.x);
  startNode.y = snapToDragGrid(startNode.y);
  applyStartTitle(
    startNode,
    createStartSettings({
      ...(scenarioItem.settings?.start || {}),
      name: scenarioItem.name || "Сценарий обработки чатов №1",
      channels: Array.isArray(scenarioItem.channels) ? scenarioItem.channels : [],
    }),
  );
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
    const normalizedNode = { ...nodeItem, color: catalogItem.color, icon: catalogItem.icon, muted: Boolean(catalogItem.muted) };
    if (isFinishNode(normalizedNode)) {
      if (!normalizedNode.customTitle) normalizedNode.title = catalog.finish.title;
      normalizedNode.subtitle = catalog.finish.subtitle;
      normalizedNode.settings = {};
    }
    if (normalizedNode.kind === "form" && !normalizedNode.operationType) {
      normalizedNode.operationType = CONTACT_FORM_OPERATION;
      normalizedNode.settings = { ...(normalizedNode.settings || {}), contactForm: createContactFormSettings(normalizedNode.settings?.contactForm) };
    }
    if (isScheduleNode(normalizedNode)) {
      normalizedNode.settings = { ...(normalizedNode.settings || {}), schedule: createScheduleSettings(normalizedNode.settings?.schedule) };
      applyScheduleTitle(normalizedNode, normalizedNode.settings.schedule);
    }
    if (isSegmentNode(normalizedNode)) {
      normalizedNode.settings = { ...(normalizedNode.settings || {}), segment: createSegmentSettings(normalizedNode.settings?.segment) };
      applySegmentTitle(normalizedNode, normalizedNode.settings.segment);
    }
    if (isConditionNode(normalizedNode)) {
      normalizedNode.settings = { ...(normalizedNode.settings || {}), condition: createConditionSettings(normalizedNode.settings?.condition) };
      applyConditionTitle(normalizedNode, normalizedNode.settings.condition);
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
  const currentScale = d3.zoomTransform(svg.node()).k;
  if ((direction > 0 && currentScale >= 0.999) || (direction < 0 && currentScale <= 0.251)) return;
  const rect = svg.node().getBoundingClientRect();
  const transform = d3.zoomTransform(svg.node());
  const nextScale = direction > 0 ? transform.k * 1.18 : transform.k * 0.84;
  const targetScale = crossesZoom100(transform.k, nextScale) ? 1 : nextScale;
  svg.transition().duration(180).call(zoom.scaleTo, targetScale, [rect.width / 2, rect.height / 2]);
}

function updateZoomControls(scale = d3.zoomTransform(svg.node()).k) {
  const zoomInButton = document.querySelector("#zoomInButton");
  const zoomOutButton = document.querySelector("#zoomOutButton");
  if (zoomInButton) zoomInButton.disabled = scale >= 0.999;
  if (zoomOutButton) zoomOutButton.disabled = scale <= 0.251;
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
