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
const NODE_CREATE_GAP_X = 120;
const FALLBACK_CREATE_GAP_X = 280;
const GROUP_TRANSFER_EMPLOYEES_BY_GROUP = {
  "Отдел продаж": ["Лемаева Юлия", "Васнецов Николай", "Смирнова Алина", "Орлов Денис"],
  "Служба поддержки": ["Кузнецова Мария", "Павлов Игорь", "Романова Елена", "Фомин Артем", "Громова Дарья", "Соколов Кирилл"],
  "Онлайн-консультанты": ["Мельникова Анна", "Титов Максим"],
  "VIP-клиенты": ["Белова Кристина", "Егоров Михаил", "Зайцева Полина"],
  "Биллинг": ["Тарасова Нина", "Шевцов Олег", "Миронова Юлия", "Галкин Степан", "Руднева Софья"],
  "Новая группа": ["Новый сотрудник 1", "Новый сотрудник 2"],
};
const GROUP_TRANSFER_GROUPS = Object.keys(GROUP_TRANSFER_EMPLOYEES_BY_GROUP).filter((groupName) => groupName !== "Новая группа");
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
  "arrow-down": "./assets/icons/arrow-down_20.svg",
  "arrow-up": "./assets/icons/arrow-up_20.svg",
  "arrow-list-down": "./assets/icons/arrow-list-down_20.svg",
  "info-20": "./assets/icons/info_20.svg",
  "search-20": "./assets/icons/search_20.svg",
  "math-plus-20": "./assets/icons/math-plus_20.svg",
  "math-minus-20": "./assets/icons/math-minus_20.svg",
  "drag-and-drop": "./assets/icons/drag-and-drop_20.svg",
  "arrows-both-ways": "./assets/icons/arrows-both-ways_20.svg",
  delete: "./assets/icons/delete_20.svg",
};
const designSystemIcons = {};

const catalog = {
  start: { title: "Входящее сообщение", subtitle: "Каналы: Telegram, Email", color: "var(--cmgui-color-special-1)", icon: "start" },
  form: { title: "Форма сбора контактов", subtitle: "Ожидание контактов: 1 мин.", color: "var(--cmgui-color-special-15)", icon: "form" },
  transfer: { title: "На группу: Отдел продаж", subtitle: "Ожидание ответа: 1 мин.", color: "var(--cmgui-color-special-2)", icon: "last-manager" },
  success: { title: "Чат взят в работу", subtitle: "", color: "var(--cmgui-color-special-1)", icon: "success" },
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
let pendingSourceId = null;
let operationSourceId = null;
let operationReplaceId = null;
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
      const operationType = card.dataset.operation || null;
      closeOperationModal();
      const nodeId = replaceId ? replacePlaceholderNode(replaceId, card.dataset.kind || "empty", operationType) : addNode(card.dataset.kind || "empty", sourceId, operationType);
      const nodeItem = getNode(nodeId);
      if (nodeItem && isGroupTransferNode(nodeItem)) {
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
          selectedId = d.id;
          pushHistory();
          renderProperties();
          nodeLayer.selectAll(".scenario-node-svg").classed("is-selected", (nodeItem) => nodeItem.id === selectedId);
        })
        .on("drag", function (event, d) {
          event.sourceEvent?.stopPropagation();
          const transform = d3.zoomTransform(svg.node());
          d.x += event.dx / transform.k;
          d.y += event.dy / transform.k;
          d3.select(this).attr("transform", `translate(${d.x},${d.y})`);
          renderEdges();
        })
        .on("end", () => {
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
      if (isGroupTransferNode(d)) {
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
  merged.select(".node-hover-dot-right").attr("cx", (d) => nodeRightPortX(d)).style("display", (d) => (nodeOutputs(d).length ? null : "none"));
  merged.select(".node-add-button").style("display", (d) => (hasFreeOutputs(d) && !isPlaceholderNode(d) ? null : "none"));
  merged.select(".node-more-icon").style("display", (d) => (isPlaceholderNode(d) || !isPlaceholderNode(d) ? null : "none"));
  merged.each(function (d) {
    updateNodeText(this, d, d.id === selectedId || d.id === hoveredId);
  });
  merged.select(".node-add-button").on("click", (event, d) => {
    event.stopPropagation();
    if (!hasFreeOutputs(d)) return;
    openOperationModal(d.id);
  });
  merged.select(".node-more-icon").on("click", (event, d) => {
    event.stopPropagation();
    if (isPlaceholderNode(d)) removeNodeById(d.id);
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
    render();
  });
}

function renderEdges() {
  const edgeLabelPaddingX = 10;
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
  enter.append("text").attr("x", edgeLabelPaddingX).attr("y", 14);
  enter.merge(labels).each(function (d) {
    const group = d3.select(this);
    const p = edgeLabelPoint(d);
    const text = group.select("text").text(d.label);
    const width = Math.ceil(text.node().getComputedTextLength()) + edgeLabelPaddingX * 2;
    group.attr("transform", `translate(${p.x - width / 2},${p.y - 12})`).attr("class", "edge-label-svg");
    group.select("rect").attr("width", width).attr("height", 24).attr("fill", colorForTone);
    text.attr("x", edgeLabelPaddingX).attr("fill", "white").attr("font", "var(--cmgui-font-caption)");
  });
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
  const route = edgeRoute(a, b);
  if (!route) return "";

  const { x1, y1, x2, y2, midX, radius } = route;
  if (Math.abs(y2 - y1) < 1) return `M ${x1} ${y1} L ${x2} ${y2}`;

  const directionY = y2 > y1 ? 1 : -1;
  return [
    `M ${x1} ${y1}`,
    `L ${midX - radius} ${y1}`,
    `Q ${midX} ${y1} ${midX} ${y1 + directionY * radius}`,
    `L ${midX} ${y2 - directionY * radius}`,
    `Q ${midX} ${y2} ${midX + radius} ${y2}`,
    `L ${x2} ${y2}`,
  ].join(" ");
}

function edgeLabelPoint(d) {
  const a = getNode(d.source);
  const b = getNode(d.target);
  if (!a || !b) return { x: 0, y: 0 };
  const route = edgeRoute(a, b);
  if (!route) return { x: 0, y: 0 };
  const horizontalDistance = Math.abs(route.x2 - route.x1);
  if ((d.outputKey || "main") === "failed") {
    return { x: route.x2 - Math.min(112, horizontalDistance / 2), y: route.y2 };
  }
  if (Math.abs(route.y2 - route.y1) < 1 || horizontalDistance > 180) {
    return { x: route.x1 + Math.min(94, horizontalDistance / 2), y: route.y1 };
  }
  return { x: route.midX, y: (route.y1 + route.y2) / 2 };
}

function edgeRoute(sourceNode, targetNode) {
  const x1 = sourceNode.x + (isNodePortVisible(sourceNode.id) ? nodeRightPortX(sourceNode) + NODE_PORT_R + NODE_PORT_EDGE_GAP : NODE_W + NODE_PORT_EDGE_GAP);
  const y1 = sourceNode.y + NODE_H / 2;
  const x2 = targetNode.x + (isNodePortVisible(targetNode.id) && canReceiveInput(targetNode) ? NODE_PORT_LEFT_X - NODE_PORT_R - NODE_PORT_EDGE_GAP : -NODE_PORT_EDGE_GAP);
  const y2 = targetNode.y + NODE_H / 2;
  const midX = x2 > x1 ? x1 + (x2 - x1) / 2 : Math.max(x1 + 56, targetNode.x + NODE_W + 56);
  const radius = Math.min(18, Math.abs(midX - x1) / 2, Math.abs(x2 - midX) / 2, Math.abs(y2 - y1) / 2);
  return { x1, y1, x2, y2, midX, radius };
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

function addNode(kind, sourceId = null, operationType = null) {
  pushHistory();
  const sourceNode = sourceId ? getNode(sourceId) : null;
  const position = sourceNode ? nextNodePosition(sourceNode) : centerNodePosition();
  const id = `${kind}-${Date.now().toString(36)}`;
  const nextNode = node(id, kind, position.x, position.y);
  configureNodeForOperation(nextNode, operationType);
  state.nodes.push(nextNode);
  if (sourceNode) {
    state.edges.push(createOutputEdge(sourceNode, id));
  }
  if (isGroupTransferNode(nextNode)) createFallbackPlaceholderFor(nextNode);
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
  if (isGroupTransferNode(target)) createFallbackPlaceholderFor(target);
  selectedId = replaceId;
  render();
  schedulePersistState();
  return replaceId;
}

function configureNodeForOperation(nodeItem, operationType) {
  if (operationType) nodeItem.operationType = operationType;
  if (operationType === "group-transfer") {
    nodeItem.title = "На группу";
    nodeItem.subtitle = "Группа не выбрана";
    nodeItem.settings = { groupTransfer: createGroupTransferSettings() };
  }
}

function createFallbackPlaceholderFor(sourceNode) {
  if (state.edges.some((edgeItem) => edgeItem.source === sourceNode.id && edgeItem.outputKey === "failed")) return null;
  const id = `empty-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 6)}`;
  const position = nextNodePosition(sourceNode);
  const placeholder = node(id, "empty", position.x, position.y);
  placeholder.operationType = "fallback-placeholder";
  state.nodes.push(placeholder);
  state.edges.push(edge(sourceNode.id, id, "Никто не ответил", "plain", "failed"));
  return placeholder;
}

function createOutputEdge(sourceNode, targetId) {
  const output = firstFreeOutput(sourceNode);
  if (!output) return edge(sourceNode.id, targetId);
  return edge(sourceNode.id, targetId, output.label || "", output.tone || "plain", output.key);
}

function centerNodePosition() {
  const transform = d3.zoomTransform(svg.node());
  const rect = svg.node().getBoundingClientRect();
  const [x, y] = transform.invert([rect.width / 2, rect.height / 2]);
  return { x: x - NODE_W / 2, y: y - NODE_H / 2 };
}

function nextNodePosition(sourceNode) {
  const output = firstFreeOutput(sourceNode);
  const gap = output?.key === "failed" ? FALLBACK_CREATE_GAP_X : NODE_CREATE_GAP_X;
  return { x: sourceNode.x + NODE_W + gap, y: sourceNode.y };
}

function nodeOutputs(nodeItem) {
  if (!nodeItem) return [];
  if (isPlaceholderNode(nodeItem)) return [];
  if (nodeItem.kind === "start") return [{ key: "main", label: "" }];
  if (isGroupTransferNode(nodeItem)) return [{ key: "failed", label: "Никто не ответил", tone: "plain" }];
  return [{ key: "main", label: "" }];
}

function firstFreeOutput(nodeItem) {
  return nodeOutputs(nodeItem).find((output) => !state.edges.some((edgeItem) => edgeItem.source === nodeItem.id && (edgeItem.outputKey || "main") === output.key));
}

function hasFreeOutputs(nodeItem) {
  return Boolean(firstFreeOutput(nodeItem));
}

function isPlaceholderNode(nodeItem) {
  return nodeItem?.kind === "empty";
}

function openOperationModal(sourceId = null, replaceId = null) {
  operationSourceId = sourceId;
  operationReplaceId = replaceId;
  document.body.classList.add("is-operation-modal-open");
  document.querySelector("#operationModal").setAttribute("aria-hidden", "false");
}

function closeOperationModal() {
  document.body.classList.remove("is-operation-modal-open");
  document.querySelector("#operationModal").setAttribute("aria-hidden", "true");
  operationSourceId = null;
  operationReplaceId = null;
  selectedId = null;
  hoveredId = null;
  render();
}

function openNodeSettings(nodeId) {
  closeSettingsCloseConfirm();
  settingsNodeId = nodeId;
  selectedId = nodeId;
  const nodeItem = getNode(nodeId);
  if (nodeItem && !settingsDrafts[nodeId]) settingsDrafts[nodeId] = clone(getGroupTransferSettings(nodeItem));
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
  nodeLayer.selectAll(".scenario-node-svg").classed("is-selected", (nodeItem) => nodeItem.id === selectedId);
}

function cancelNodeSettings(clearSelection = true) {
  closeSettingsCloseConfirm();
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
  if (!nodeItem || !isGroupTransferNode(nodeItem)) return false;
  if (pendingSettingsNodeIds.has(nodeId)) return true;
  const draft = settingsDrafts[nodeId];
  if (!draft) return false;
  return stableStringifySettings(draft) !== stableStringifySettings(getGroupTransferSettings(nodeItem));
}

function stableStringifySettings(settings) {
  return JSON.stringify(normalizeComparableGroupTransferSettings(settings));
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
  if (!nodeItem || !isGroupTransferNode(nodeItem)) {
    sidebar.innerHTML = "";
    return;
  }

  const settings = getGroupTransferDraft(nodeItem);
  const errors = settingsErrors[nodeItem.id] || {};
  const hasGroup = Boolean(settings.groupName);
  const bodyScrollTop = sidebar.querySelector(".node-settings-body")?.scrollTop || 0;
  sidebar.innerHTML = `<form class="node-settings-form" id="groupTransferForm">
    <header class="node-settings-header">
      <h2>На группу</h2>
      <button class="node-settings-close" type="button" id="nodeSettingsClose" title="Закрыть" aria-label="Закрыть">
        <span class="cmgui-icon">${iconSvg("cancel", 20)}</span>
      </button>
    </header>
    <div class="node-settings-body">
      ${hasGroup ? renderGroupTransferCard(settings) : renderEmptyGroupTransferCard(errors)}
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
  if (settings.distribution !== "all") return "";
  return `<div class="response-row">
    <span class="response-label">Ожидание ответа</span>
    <input class="response-input" id="responseTimeoutInput" value="${settings.responseTimeout}" inputmode="numeric" />
    <div class="segment-control" role="group" aria-label="Единица времени ожидания">
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
  sidebar.querySelector("#groupTransferForm")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && isEditableEventTarget(event.target)) event.preventDefault();
  });
  sidebar.querySelector("#groupTransferForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextSettings = collectGroupTransferSettings(sidebar, getGroupTransferDraft(nodeItem));
    if (!nextSettings.groupName) {
      settingsErrors[nodeItem.id] = { groupName: "Выберите отдел" };
      updateGroupTransferDraft(nodeItem, { groupDropdownOpen: false });
      renderNodeSettingsSidebar();
      return;
    }
    pushHistory();
    saveGroupTransferSettings(nodeItem, nextSettings);
    delete settingsDrafts[nodeItem.id];
    delete settingsErrors[nodeItem.id];
    pendingSettingsNodeIds.delete(nodeItem.id);
    closeNodeSettings(true);
    render();
    schedulePersistState();
  });
  sidebar.querySelector("#addGroupButton")?.addEventListener("click", () => {
    updateGroupTransferDraft(nodeItem, { groupDropdownOpen: !settings.groupDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector("#changeGroupButton")?.addEventListener("click", () => {
    updateGroupTransferDraft(nodeItem, { groupDropdownOpen: !settings.groupDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector(".group-picker")?.insertAdjacentHTML("beforeend", renderGroupDropdown(settings));
  sidebar.querySelectorAll("[data-dropdown-id='groupDropdown']").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.dropdownValue;
      const groupName = value === "__create_group__" ? "Новая группа" : value;
      delete settingsErrors[nodeItem.id];
      updateGroupTransferDraft(nodeItem, { groupName, groupDropdownOpen: false, employees: createEmployeesForGroup(groupName) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#technicalToggle")?.addEventListener("click", () => {
    updateGroupTransferDraft(nodeItem, { technicalOpen: !settings.technicalOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector(".technical-settings-card:not(.is-open)")?.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    updateGroupTransferDraft(nodeItem, { technicalOpen: true });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelector("#distributionSelect")?.addEventListener("click", () => {
    updateGroupTransferDraft(nodeItem, { distributionDropdownOpen: !settings.distributionDropdownOpen });
    renderNodeSettingsSidebar();
  });
  sidebar.querySelectorAll("[data-dropdown-id='distributionSelect']").forEach((button) => {
    button.addEventListener("click", () => {
      updateGroupTransferDraft(nodeItem, { distribution: button.dataset.dropdownValue, distributionDropdownOpen: false });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-time-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      updateGroupTransferDraft(nodeItem, { timeoutUnit: button.dataset.timeUnit });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelector("#responseTimeoutInput")?.addEventListener("input", (event) => {
    const responseTimeout = sanitizePositiveInteger(event.target.value, settings.responseTimeout);
    updateGroupTransferDraft(nodeItem, { responseTimeout });
  });
  sidebar.querySelector("#cycleLimitInput")?.addEventListener("input", (event) => {
    if (/^\d*(?:\.\d*)?$/.test(event.target.value)) {
      const cycleLimit = sanitizePositiveInteger(event.target.value, settings.cycleLimit);
      updateGroupTransferDraft(nodeItem, { cycleLimit });
      return;
    }
    event.target.value = settings.cycleLimit;
  });
  sidebar.querySelectorAll("[data-cycle-step]").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      if (button.disabled || event.button !== 0) return;
      event.preventDefault();
      const draft = getGroupTransferDraft(nodeItem);
      const next = Math.max(1, draft.cycleLimit + Number(button.dataset.cycleStep));
      updateGroupTransferDraft(nodeItem, { cycleLimit: next });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-employee-timeout-index]").forEach((control) => {
    if (control.matches("input")) {
      control.addEventListener("input", (event) => {
        const draft = getGroupTransferDraft(nodeItem);
        const currentEmployee = draft.employees[Number(event.target.dataset.employeeTimeoutIndex)];
        if (!/^\d*(?:\.\d*)?$/.test(event.target.value)) {
          event.target.value = currentEmployee?.timeout || 1;
          return;
        }
        const index = Number(event.target.dataset.employeeTimeoutIndex);
        const employees = draft.employees.map((employee, employeeIndex) =>
          employeeIndex === index ? { ...employee, timeout: sanitizePositiveInteger(event.target.value, employee.timeout) } : employee,
        );
        updateGroupTransferDraft(nodeItem, { employees });
      });
      return;
    }
    control.addEventListener("mousedown", (event) => {
      if (control.disabled || event.button !== 0) return;
      event.preventDefault();
      const draft = getGroupTransferDraft(nodeItem);
      const index = Number(control.dataset.employeeTimeoutIndex);
      const step = Number(control.dataset.employeeTimeoutStep);
      const employees = draft.employees.map((employee, employeeIndex) =>
        employeeIndex === index ? { ...employee, timeout: Math.max(1, employee.timeout + step) } : employee,
      );
      updateGroupTransferDraft(nodeItem, { employees });
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
      const draft = getGroupTransferDraft(nodeItem);
      updateGroupTransferDraft(nodeItem, { employees: moveArrayItem(draft.employees, fromIndex, toIndex) });
      renderNodeSettingsSidebar();
    });
  });
  sidebar.querySelectorAll("[data-employee-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const draft = getGroupTransferDraft(nodeItem);
      const index = Number(button.dataset.employeeIndex);
      const employees = draft.employees.map((employee, employeeIndex) => (employeeIndex === index ? { ...employee, enabled: !employee.enabled } : employee));
      updateGroupTransferDraft(nodeItem, { employees });
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

function getGroupTransferDraft(nodeItem) {
  if (!settingsDrafts[nodeItem.id]) settingsDrafts[nodeItem.id] = clone(getGroupTransferSettings(nodeItem));
  return settingsDrafts[nodeItem.id];
}

function updateGroupTransferDraft(nodeItem, patch) {
  settingsDrafts[nodeItem.id] = createGroupTransferSettings({ ...getGroupTransferDraft(nodeItem), ...patch });
}

function saveGroupTransferSettings(nodeItem, settings) {
  nodeItem.settings = { ...(nodeItem.settings || {}), groupTransfer: createGroupTransferSettings(settings) };
  applyGroupTransferTitle(nodeItem, nodeItem.settings.groupTransfer);
}

function applyGroupTransferTitle(nodeItem, settings) {
  nodeItem.title = settings.groupName ? `На группу: ${settings.groupName}` : "На группу";
  nodeItem.subtitle = settings.groupName ? `Ожидание ответа: ${formatTimeout(settings.responseTimeout, settings.timeoutUnit)}` : "Группа не выбрана";
}

function isGroupTransferNode(nodeItem) {
  return nodeItem?.kind === "transfer" && (!nodeItem.operationType || nodeItem.operationType === "group-transfer");
}

function inferGroupName(title = "") {
  const match = String(title).match(/^На группу:\s*(.+)$/);
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
  if (operationSourceId && nodeIdsToRemove.has(operationSourceId)) operationSourceId = null;
  if (operationReplaceId && nodeIdsToRemove.has(operationReplaceId)) operationReplaceId = null;
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
    return { ...nodeItem, color: catalogItem.color, icon: catalogItem.icon };
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
