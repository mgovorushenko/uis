const asset = (name) => `./assets/icons/${name}`;

const menuTop = [
  ["Избранное", "star_20.svg"],
  ["Отчеты", "analytic-report_20.svg"],
  ["Дашборды", "dashboard_20.svg"],
  ["Сообщения", "message_20.svg"],
  ["Настройки", "settings_20.svg", "settings"],
  ["Интеграции", "integrations_20.svg"],
];

const menuBottom = [
  ["Уведомления", "notification_20.svg"],
  ["Информация", "menu-info_20.svg"],
  ["Профиль", "menu-user_20.svg"],
];

const colorOptions = [
  ["green", "Зеленый", "#bfefd2"],
  ["yellow", "Желтый", "#ffeaae"],
  ["orange", "Оранжевый", "#ffd8b0"],
  ["red", "Красный", "#ffc3c3"],
  ["lime", "Лаймовый", "#ecff9d"],
  ["blue", "Синий", "#bfe6fd"],
  ["pink", "Розовый", "#fee1ff"],
  ["aqua", "Голубой", "#b3f2e7"],
  ["brown", "Коричневый", "#ebd2b8"],
];

const conditionFields = [
  "Client ID Google Analytics", "Client ID Яндекс.Метрика", "e-mail", "Emails посетителя",
  "ID группы объявлений", "ID интегрированной рекламной кампании", "ID ключевого слова", "ID обращения",
  "ID объявления", "IP", "Os-метка ad-id", "Os-метка campaign-id", "Os-метка service-name", "Os-метка source-id",
  "UTM-метка Campaign", "UTM-метка Content", "UTM-метка Expid", "UTM-метка Medium", "UTM-метка Referrer",
  "UTM-метка Source", "UTM-метка Term", "Адрес такси", "Блок интеграции", "Браузер", "Версия браузера",
  "Версия ОС", "Вид обращения", "Виртуальный номер", "Город", "Группа источников", "Дата посещения",
  "Источник", "Канал", "Комментарий", "Номер абонента", "Сайт", "Сотрудник", "Статус звонка", "Теги",
  "Тип обращения", "ФИО контакта", "Форма на сайте", "Язык локализации",
];
const conditionOperators = [
  "равно", "не равно", "строго включает", "включает", "строго исключает", "исключает",
  "не содержит данные", "содержит данные", "соответствует списку", "не соответствует списку",
];

const tagSeeds = [
  ["weddwe", "e-mail строго включает eeee", "30.06.2026", "Не работает", "lime"],
  ["уацуацуа", "Client ID Google Analytics строго включает уцуцвцвцвцв", "30.06.2026", "Не работает", "red"],
  ["👾", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["💫", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["💯", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["🥸", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["😎", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["🤐", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["🥰", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["🙀", "-", "20.10.2025", "Проставляется вручную", "mint"],
  ["тест_1234", "UTM-метка Source строго включает цццц", "05.08.2025", "Не работает", "pink"],
  ["кааам", "-", "04.08.2025", "Проставляется вручную", "mint"],
  ["9", "-", "01.08.2025", "Проставляется вручную", "mint"],
  ["8", "-", "01.08.2025", "Проставляется вручную", "mint"],
  ["7", "-", "01.08.2025", "Проставляется вручную", "mint"],
  ["6", "-", "01.08.2025", "Проставляется вручную", "mint"],
  ["5", "-", "01.08.2025", "Проставляется вручную", "mint"],
  ["аааа", "-", "02.06.2025", "Проставляется вручную", "mint"],
  ["dwsdswsd", "-", "15.05.2025", "Проставляется вручную", "mint"],
  ["asdasd", "-", "14.05.2025", "Проставляется вручную", "mint"],
  ["фывфывфывфывфывфыв", "-", "25.03.2025", "Проставляется вручную", "mint"],
  ["фывфывфыв", "-", "25.03.2025", "Проставляется вручную", "mint"],
  ["бьтить", "-", "20.03.2025", "Проставляется вручную", "mint"],
  ["длолд", "-", "20.03.2025", "Проставляется вручную", "mint"],
  ["лтоирпм", "-", "20.03.2025", "Проставляется вручную", "mint"],
];

const fillerNames = [
  "q", "test", "Колл-центр", "Новый клиент", "VIP", "Повторный звонок", "Заявка", "Лид",
  "Заказ", "Консультация", "Реклама", "Партнер", "Не обработано", "Обработано", "Нецелевой контакт",
  "Продажи", "Техподдержка", "Сайт", "Почта", "Telegram", "WhatsApp", "Офис", "Рекомендация",
  "Входящий", "Исходящий", "Мобильный", "Москва", "Регион", "Кампания", "Тестовый", "Архив", "Другое", "Старый тег",
];

let tags = tagSeeds.map((row, index) => ({ id: 555287 - index, name: row[0], condition: row[1], date: row[2], status: row[3], color: row[4] }));
tags = tags.concat(fillerNames.map((name, index) => ({
  id: 550000 - index,
  name,
  condition: index % 4 === 0 ? "Источник строго включает test" : "-",
  date: `${String((index % 27) + 1).padStart(2, "0")}.02.2025`,
  status: index % 4 === 0 ? "Работает" : "Проставляется вручную",
  color: ["yellow", "violet", "mint", "pink"][index % 4],
})));

const historyRows = [
  ["01.09.2026 13:01:40", "Обработано", "5740044112", "Звонки", "—", "Да"],
  ["01.09.2026 13:01:40", "Обработано", "5966392243", "Звонки", "—", "Да"],
  ["01.09.2026 10:41:07", "Не обработано", "5739513872", "Звонки", "—", "Да"],
  ["01.09.2026 10:41:07", "Нецелевой контакт", "5739513872", "Звонки", "—", "Да"],
  ["01.09.2026 08:22:37", "Нецелевой контакт", "5599482085", "Звонки", "—", "Да"],
  ["01.09.2026 08:22:37", "Не обработано", "5599482085", "Звонки", "—", "Да"],
  ["01.09.2026 06:58:26", "Обработано", "5592465610", "Звонки", "—", "Да"],
  ["31.08.2026 21:22:35", "Нецелевой контакт", "5599372745", "Звонки", "—", "Да"],
  ["31.08.2026 21:22:35", "Не обработано", "5599372745", "Звонки", "—", "Да"],
  ["31.08.2026 20:42:09", "Нецелевой контакт", "5965516803", "Звонки", "—", "Да"],
  ["31.08.2026 20:42:09", "Не обработано", "5965516803", "Звонки", "—", "Да"],
  ["31.08.2026 19:58:51", "Не обработано", "5814719836", "Звонки", "—", "Да"],
  ["31.08.2026 19:49:52", "Нецелевой контакт", "5814776911", "Звонки", "—", "Да"],
  ["31.08.2026 19:49:52", "Не обработано", "5814776911", "Звонки", "—", "Да"],
  ["31.08.2026 18:49:05", "Не обработано", "5599248235", "Звонки", "—", "Да"],
  ["31.08.2026 18:36:59", "Нецелевой контакт", "6048144619", "Звонки", "—", "Да"],
  ["31.08.2026 18:36:59", "Не обработано", "6048144619", "Звонки", "—", "Да"],
  ["31.08.2026 18:36:36", "Не обработано", "5738927227", "Звонки", "—", "Да"],
  ["31.08.2026 18:33:25", "Не обработано", "5814679671", "Звонки", "—", "Да"],
  ["31.08.2026 18:32:23", "Не обработано", "5814623561", "Звонки", "—", "Да"],
  ["31.08.2026 18:26:56", "Нецелевой контакт", "5965373653", "Звонки", "—", "Да"],
  ["31.08.2026 18:26:56", "Не обработано", "5965373653", "Звонки", "—", "Да"],
  ["31.08.2026 18:09:04", "Не обработано", "5599235745", "Звонки", "—", "Да"],
  ["31.08.2026 17:20:57", "Не обработано", "5814467271", "Звонки", "—", "Да"],
  ["31.08.2026 17:20:52", "💫", "5814467271", "Звонки", "NatashaQA", "Нет"],
  ["31.08.2026 17:06:52", "Не обработано", "6047847889", "Звонки", "—", "Да"],
  ["31.08.2026 17:06:45", "Не обработано", "6047905439", "Звонки", "—", "Да"],
];

const state = {
  page: 1,
  pageSize: 25,
  query: "",
  status: "Все",
  statusOpen: false,
  sortDesc: true,
  deleteId: null,
  period: "Неделя",
};

const app = document.querySelector("#app");
const overlayRoot = document.querySelector("#overlay-root");
const toastRoot = document.querySelector("#toast-root");

const esc = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function icon(name, alt = "") {
  return `<img class="icon-img" src="${asset(name)}" alt="${alt}">`;
}

function colorMeta(value) {
  return colorOptions.find(([id]) => id === value) || colorOptions[3];
}

function selectField({ key, name, value = "", placeholder, label = "", options, width, disabled = false, color = false }) {
  const selected = color ? colorMeta(value) : options.find((option) => option === value);
  const text = color ? selected[1] : (selected || placeholder);
  const dot = color ? `<span class="tag-color-dot" style="background:${selected[2]}"></span>` : "";
  return `
    <div class="cmgui-select-container ui-select" data-select-container="${key}" style="width:${width}px">
      <button class="cmgui-select-field ${disabled ? "cmgui-select-field-disabled" : ""} ${selected ? "" : "is-empty"}" type="button" data-select="${key}" ${disabled ? "disabled" : ""}>
        <span class="cmgui-select-field-output ${selected ? "" : "is-placeholder"}">${dot}<span class="select-value">${esc(text)}</span></span>
        ${label ? `<span class="cmgui-select-label cmgui-select-label-active">${esc(label)}<span aria-hidden="true">*</span></span>` : ""}
        <span class="cmgui-select-field-suffix">${icon("arrow-list-down_20.svg")}</span>
      </button>
      <input type="hidden" name="${name}" value="${esc(value)}">
    </div>`;
}

function tableHeadCell(title, sortable = false) {
  return `<div class="table-head-cell">
    <div class="table-head-title"><span>${esc(title)}</span></div>
    <div class="table-head-footer">${sortable ? `<button class="table-sort-button" type="button" data-action="sort" aria-label="Сортировать по дате">${icon("sort-desc_20.svg")}</button>` : ""}</div>
  </div>`;
}

function menuIcon(file, fallback = "") {
  return file
    ? `<span class="rail-glyph" style="--rail-icon: url('${asset(file)}')" aria-hidden="true"></span>`
    : `<span class="fallback-icon">${fallback}</span>`;
}

function viewName() {
  const raw = location.hash.replace(/^#/, "");
  return raw || "tags";
}

function sidebar(view) {
  const active = "settings";
  const items = (list) => list.map(([label, file, key]) => `
    <button class="rail-button ${key === active ? "is-active" : ""}" type="button" title="${esc(label)}" aria-label="${esc(label)}">
      ${menuIcon(file)}
    </button>`).join("");

  return `
    <aside class="side-menu" aria-label="Навигация">
      <div class="menu-top">
        <div class="logo-mark"><img src="${asset("logo-uis_32.svg")}" alt="UIS"></div>
        <button class="rail-search-button" type="button" title="Поиск" aria-label="Поиск">${menuIcon("search_16.svg")}</button>
        <div class="menu-stack">${items(menuTop)}</div>
      </div>
      <div class="menu-stack">${items(menuBottom)}</div>
    </aside>`;
}

function layout(content, view = viewName()) {
  app.innerHTML = `
    <div class="app-shell">
      ${sidebar(view)}
      <main class="workspace">
        <div class="page">${content}</div>
      </main>
    </div>`;
}

function statusClass(status) {
  if (status === "Не работает") return "status-broken";
  if (status === "Работает") return "status-working";
  return "status-manual";
}

function filteredTags() {
  const query = state.query.trim().toLocaleLowerCase("ru");
  const result = tags.filter((tag) => {
    const queryMatch = !query || `${tag.name} ${tag.condition}`.toLocaleLowerCase("ru").includes(query);
    const statusMatch = state.status === "Все" || tag.status === state.status;
    return queryMatch && statusMatch;
  });
  return result.sort((a, b) => {
    const date = (value) => value.split(".").reverse().join("");
    const resultDate = date(a.date).localeCompare(date(b.date));
    return state.sortDesc ? -resultDate : resultDate;
  });
}

function tagRows(rows) {
  return rows.map((tag) => `
    <tr>
      <td><span class="tag-chip tag-${tag.color}" title="${esc(tag.name)}">${esc(tag.name)}</span></td>
      <td><div class="cell-ellipsis" title="${esc(tag.condition)}">${esc(tag.condition)}</div></td>
      <td>${esc(tag.date)}</td>
      <td><span class="status-chip ${statusClass(tag.status)}">${esc(tag.status)}</span></td>
      <td>
        <div class="actions">
          <button class="icon-btn" data-action="edit" data-id="${tag.id}" title="Редактировать">${icon("settings-20.svg", "Редактировать")}</button>
          <button class="icon-btn" data-action="delete" data-id="${tag.id}" title="Удалить">${icon("delete-20.svg", "Удалить")}</button>
        </div>
      </td>
    </tr>`).join("");
}

function pagination(total) {
  const pages = Math.max(1, Math.ceil(total / state.pageSize));
  if (state.page > pages) state.page = pages;
  const pageButtons = Array.from({ length: pages }, (_, index) => index + 1).slice(0, 4)
    .map((page) => `<button class="pager-btn ${page === state.page ? "active" : ""}" data-page="${page}">${page}</button>`).join("");
  return `
    <div class="table-footer">
      <div class="pager">
        <button class="round-btn" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>${icon("arrow-left-20.svg", "Назад")}</button>
        <div class="pager-pages">${pageButtons}</div>
        <button class="round-btn" data-page="${state.page + 1}" ${state.page === pages ? "disabled" : ""}>${icon("arrow-right-20.svg", "Вперед")}</button>
      </div>
      <div class="rows-count">${total} строк</div>
      <div class="page-size">
        <input class="page-number" value="${state.page}" aria-label="Номер страницы">
        <button class="page-size-select cmgui-select-field" type="button" data-page-size-control aria-label="Строк на странице"><span>${state.pageSize}</span><span class="cmgui-select-field-suffix">${icon("arrow-list-down_20.svg")}</span></button>
      </div>
    </div>`;
}

function renderTags() {
  const result = filteredTags();
  const start = (state.page - 1) * state.pageSize;
  const rows = result.slice(start, start + state.pageSize);
  layout(`
    <div class="page-title-row"><h1 class="page-title">Теги</h1></div>
    <div class="toolbar">
      <label class="field search-field">
        ${icon("search-20.svg")}
        <input id="tag-search" type="search" placeholder="Найти тег" value="${esc(state.query)}">
        <button class="search-clear" type="button" data-action="clear-search" aria-label="Очистить поиск" ${state.query ? "" : "hidden"}>${icon("cancel_20.svg")}</button>
      </label>
      <button class="select-control cmgui-select-field ${state.status === "Все" ? "is-empty" : ""}" id="status-control" aria-haspopup="listbox" aria-expanded="${state.statusOpen}">
        <span class="cmgui-select-field-output ${state.status === "Все" ? "is-placeholder" : ""}">${state.status === "Все" ? "Статус тегов" : esc(state.status)}</span>
        <span class="cmgui-select-field-suffix" ${state.status === "Все" ? "" : `data-action="clear-status" role="button" aria-label="Очистить статус"`}>${icon(state.status === "Все" ? "arrow-list-down_20.svg" : "cancel_20.svg")}</span>
      </button>
      <div class="btn btn-secondary history-btn" aria-disabled="true">${icon("history-list_20.svg")}История простановки тегов</div>
      <span class="toolbar-spacer"></span>
      <button class="btn btn-primary create-btn" data-route="create">${icon("add-20.svg")}Создать тег</button>
    </div>
    <section class="table-card">
      <div class="table-scroll">
        <table class="data-table">
          <colgroup><col class="col-name"><col class="col-condition"><col class="col-date"><col class="col-status"><col class="col-actions"></colgroup>
          <thead>
            <tr>
              <th>${tableHeadCell("Название")}</th>
              <th>${tableHeadCell("Условия")}</th>
              <th>${tableHeadCell("Дата создания", true)}</th>
              <th>${tableHeadCell("Статус")}</th>
              <th>${tableHeadCell("")}</th>
            </tr>
          </thead>
          <tbody>${rows.length ? tagRows(rows) : `<tr><td colspan="5"><div class="empty-state">Теги не найдены</div></td></tr>`}</tbody>
        </table>
      </div>
      ${pagination(result.length)}
    </section>
  `, "tags");

  if (state.statusOpen) renderStatusDropdown();
}

function renderStatusDropdown() {
  const control = document.querySelector("#status-control");
  const rect = control.getBoundingClientRect();
  const statuses = ["Работает", "Не работает", "Проставляется вручную"];
  overlayRoot.innerHTML = `<div class="dropdown" style="top:${rect.bottom + 8}px;left:${rect.left}px;width:${rect.width}px" role="listbox">
    ${statuses.map((status) => `<button class="dropdown-item ${state.status === status ? "selected" : ""}" data-status="${status}">${status}</button>`).join("")}
  </div>`;
}

function renderPageSizeDropdown(control, history = false) {
  const rect = control.getBoundingClientRect();
  const selected = history ? 50 : state.pageSize;
  const values = [10, 25, 50, 100];
  const popupHeight = 176;
  overlayRoot.innerHTML = `<div class="dropdown page-size-dropdown" style="top:${rect.top + 8 - popupHeight}px;left:${rect.left}px;width:${rect.width}px" role="listbox">
    ${values.map((value) => `<button class="dropdown-item ${selected === value ? "selected" : ""}" type="button" data-page-size-option="${value}" data-history-size="${history}">${value}</button>`).join("")}
  </div>`;
}

function renderSelectDropdown(control, key) {
  const container = control.closest("[data-select-container]");
  const selected = container.querySelector('input[type="hidden"]').value;
  const rect = control.getBoundingClientRect();
  const options = key === "color" ? colorOptions : key === "field" ? conditionFields : conditionOperators;
  const search = key === "field" ? `<label class="dropdown-search-field">${icon("search-20.svg")}<input type="search" placeholder="Найти" data-action="filter-select-options"></label>` : "";
  overlayRoot.innerHTML = `<div class="dropdown ui-dropdown ${key === "color" ? "color-dropdown" : ""} ${key === "field" ? "field-dropdown" : ""}" style="top:${rect.bottom + 8}px;left:${rect.left}px;width:${rect.width}px" role="listbox">
    ${search}
    <div class="dropdown-list">
      ${options.map((option) => {
        const value = key === "color" ? option[0] : option;
        const label = key === "color" ? option[1] : option;
        const dot = key === "color" ? `<span class="tag-color-dot" style="background:${option[2]}"></span>` : "";
        return `<button class="dropdown-item ${selected === value ? "selected" : ""}" type="button" data-select-option="${key}" data-value="${esc(value)}">${dot}<span>${esc(label)}</span></button>`;
      }).join("")}
    </div>
  </div>`;
  control.setAttribute("aria-expanded", "true");
}

function applySelectOption(key, value) {
  const container = document.querySelector(`[data-select-container="${key}"]`);
  if (!container) return;
  const hidden = container.querySelector('input[type="hidden"]');
  const control = container.querySelector(".cmgui-select-field");
  hidden.value = value;
  control.classList.remove("is-empty");
  control.querySelector(".cmgui-select-field-output")?.classList.remove("is-placeholder");
  if (key === "color") {
    const option = colorMeta(value);
    control.querySelector(".tag-color-dot").style.background = option[2];
    control.querySelector(".select-value").textContent = option[1];
  } else {
    control.querySelector(".select-value").textContent = value;
  }
  control.setAttribute("aria-expanded", "false");
  overlayRoot.innerHTML = "";

  if (key === "field") {
    const operatorControl = document.querySelector('[data-select="operator"]');
    const valueInput = document.querySelector('.condition-value-field input[name="value"]');
    operatorControl?.removeAttribute("disabled");
    operatorControl?.classList.remove("cmgui-select-field-disabled");
    valueInput?.removeAttribute("disabled");
    valueInput?.closest(".condition-value-field")?.classList.remove("is-disabled");
  }
}

function conditionEditor(value = "", field = "", operator = "") {
  const enabled = Boolean(field);
  return `
    <div id="conditions">
      <div class="condition-row">
        ${selectField({ key: "field", name: "field", value: field, placeholder: "Параметр*", options: conditionFields, width: 340 })}
        ${selectField({ key: "operator", name: "operator", value: operator, placeholder: "Условие*", options: conditionOperators, width: 208, disabled: !enabled })}
        <div class="cmgui-text-field condition-value-field ${enabled ? "" : "is-disabled"}" style="width:356px">
          <div class="cmgui-text-field-wrapper">
            <input class="cmgui-text-field-input" name="value" placeholder="Значение*" value="${esc(value)}" ${enabled ? "" : "disabled"}>
            <button class="condition-value-clear" type="button" data-action="clear-condition-value" aria-label="Очистить значение" ${value ? "" : "hidden"}>${icon("cancel_20.svg")}</button>
          </div>
        </div>
        <button class="condition-remove" type="button" data-action="remove-condition" aria-label="Удалить условие">${icon("cancel_20.svg")}</button>
      </div>
    </div>
    <button class="btn btn-outline condition-and" type="button" data-action="add-condition">и</button>`;
}

function formView(mode, id) {
  const editing = mode === "edit";
  const current = editing ? tags.find((tag) => tag.id === Number(id)) : null;
  const title = editing ? "Редактирование тега" : "Создание тега";
  const condition = current && current.condition !== "-" ? current.condition : "";
  const conditionValue = condition ? condition.split(" ").at(-1) : "";
  const conditionField = conditionFields.find((item) => condition.startsWith(`${item} `)) || "";
  const conditionOperator = conditionField
    ? conditionOperators.find((item) => condition.slice(conditionField.length + 1).startsWith(`${item} `)) || ""
    : "";
  const currentColor = current?.color === "mint" ? "green" : current?.color === "violet" ? "blue" : (current?.color || "red");
  const nameValue = current?.name || "";
  layout(`
    <div class="page-title-row back-title">
      <button class="round-btn back-button" data-route="tags">${icon("arrow-left-20.svg", "Назад")}</button>
      <h1 class="page-title">${title}</h1>
    </div>
    <form id="tag-form" onsubmit="return false">
      <section class="form-card">
        <div class="form-grid">
          <div class="cmgui-text-field" style="width:340px">
            <div class="cmgui-text-field-wrapper ${nameValue ? "" : "is-empty"}">
              <input class="cmgui-text-field-input" id="tag-name" name="name" placeholder="Введите название" value="${esc(nameValue)}" maxlength="255" required>
              <label class="cmgui-text-field-label ${nameValue ? "cmgui-text-field-label-active" : ""}" for="tag-name">Название*</label>
            </div>
          </div>
          ${selectField({ key: "color", name: "color", value: currentColor, label: "Цвет тега", options: colorOptions, width: 340, color: true })}
          <div class="switch-row">
            <span>Автотегирование</span>${icon("info_20.svg")}
            <button class="cmgui-switch ${condition ? "is-checked" : ""}" id="autotag-switch" type="button" role="switch" aria-checked="${condition ? "true" : "false"}"></button>
            <input id="autotag" type="checkbox" ${condition ? "checked" : ""} hidden>
          </div>
        </div>
      </section>
      <section class="form-card compact" id="conditions-card">
        ${condition ? conditionEditor(conditionValue, conditionField, conditionOperator) : `<button class="btn btn-outline add-condition-btn" type="button" data-action="add-first-condition">${icon("add-20.svg")}Добавить условие</button>`}
      </section>
      <div class="form-actions">
        <button class="btn btn-primary" type="button" data-action="save-tag">${editing ? "Сохранить" : "Создать"}</button>
        <button class="btn btn-outline" type="button" data-route="tags">Отменить</button>
      </div>
      <input type="hidden" name="id" value="${current?.id || ""}">
    </form>
  `, "form");
}

function historyView() {
  layout(`
    <div class="page-title-row back-title history-head">
      <div style="display:flex;align-items:center;gap:12px">
        <button class="round-btn back-button" data-route="tags">${icon("arrow-left-20.svg", "Назад")}</button>
        <h1 class="page-title">История простановки тегов</h1>
      </div>
      <div class="history-actions">
        <button class="round-btn" title="Экспорт">${icon("doc-20.svg")}</button>
        <button class="round-btn" title="Другие действия">${icon("more-horisontal-20.svg")}</button>
      </div>
    </div>
    <div class="history-toolbar">
      <div class="period-tabs">
        ${["Сегодня", "Вчера", "Неделя", "Месяц", "26.08.26 - 01.09.26"].map((period) => `<button class="period-tab ${period === state.period ? "active" : ""}" data-period="${period}">${period}</button>`).join("")}
      </div>
      <div class="history-tools">
        <button class="round-btn" title="Фильтры">${icon("filter-20.svg")}</button>
        <button class="btn btn-secondary">${icon("columns-20.svg")}Столбцы</button>
      </div>
    </div>
    <section class="table-card">
      <div class="table-scroll">
        <table class="data-table history-table">
          <colgroup><col><col><col><col><col><col><col></colgroup>
          <thead><tr>
            <th>${tableHeadCell("Дата простановки тега", true)}</th>
            <th>${tableHeadCell("Тег")}</th><th>${tableHeadCell("Идентификатор обращения")}</th><th>${tableHeadCell("Тип обращения")}</th><th>${tableHeadCell("Пользователь")}</th><th>${tableHeadCell("Системный")}</th><th>${tableHeadCell("")}</th>
          </tr></thead>
          <tbody>
            ${historyRows.map((row) => `<tr>
              <td>${row[0]}</td><td><span class="tag-chip tag-violet">${esc(row[1])}</span></td><td>${row[2]}</td>
              <td><span class="call-type"><span class="call-dot">☎</span>${row[3]}</span></td><td>${row[4]}</td><td><span class="status-chip status-working">${row[5]}</span></td><td></td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        <div class="pager"><button class="round-btn" disabled>${icon("arrow-left-20.svg")}</button><div class="pager-pages"><button class="pager-btn active">1</button><button class="pager-btn">2</button><button class="pager-btn">3</button><button class="pager-btn">4</button></div><button class="round-btn">${icon("arrow-right-20.svg")}</button></div>
        <div class="rows-count">154 строки</div>
        <div class="page-size"><input class="page-number" value="1"><button class="page-size-select cmgui-select-field" type="button" data-page-size-control data-history-size="true"><span>50</span><span class="cmgui-select-field-suffix">${icon("arrow-list-down_20.svg")}</span></button></div>
      </div>
    </section>
  `, "history");
}

function deleteModal(id) {
  const tag = tags.find((item) => item.id === id);
  if (!tag) return;
  overlayRoot.innerHTML = `
    <div class="modal-backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="delete-title">
        <header class="modal-header"><h2 class="modal-title" id="delete-title">Удаление тега</h2><button class="modal-close" type="button" data-action="cancel-delete" aria-label="Закрыть">${icon("cancel_20.svg")}</button></header>
        <div class="modal-body">Тег «${esc(tag.name)}» будет удален. Внимание: тег исчезнет из всех отчетов без возможности восстановления.</div>
        <footer class="modal-footer"><button class="btn btn-danger" data-action="confirm-delete" data-id="${tag.id}">Удалить</button><button class="btn btn-outline" data-action="cancel-delete">Отменить</button></footer>
      </section>
    </div>`;
}

function toast(message) {
  toastRoot.innerHTML = `<div class="toast">${esc(message)}</div>`;
  window.setTimeout(() => { toastRoot.innerHTML = ""; }, 2200);
}

function saveTag() {
  const form = document.querySelector("#tag-form");
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const id = Number(data.get("id"));
  const name = String(data.get("name") || "").trim();
  const color = String(data.get("color") || "red");
  const autotag = document.querySelector("#autotag").checked;
  const firstCondition = document.querySelector(".condition-row");
  const condition = autotag && firstCondition
    ? `${firstCondition.querySelector('[name="field"]').value} ${firstCondition.querySelector('[name="operator"]').value} ${firstCondition.querySelector('[name="value"]').value}`.trim()
    : "-";
  if (id) {
    const tag = tags.find((item) => item.id === id);
    if (tag) Object.assign(tag, { name, color, condition, status: autotag ? "Работает" : "Проставляется вручную" });
    toast("Изменения сохранены");
  } else {
    tags.unshift({ id: Date.now(), name, color, condition, date: "01.09.2026", status: autotag ? "Работает" : "Проставляется вручную" });
    toast("Тег создан");
  }
  location.hash = "tags";
}

function render() {
  overlayRoot.innerHTML = "";
  const view = viewName();
  if (view === "history") return historyView();
  if (view === "create") return formView("create");
  if (view.startsWith("edit/")) return formView("edit", view.split("/")[1]);
  renderTags();
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]");
  if (route) {
    location.hash = route.dataset.route;
    return;
  }

  if (event.target.closest('[data-action="clear-search"]')) {
    state.query = "";
    state.page = 1;
    renderTags();
    document.querySelector("#tag-search")?.focus();
    return;
  }

  if (event.target.closest('[data-action="clear-status"]')) {
    state.status = "Все";
    state.statusOpen = false;
    state.page = 1;
    overlayRoot.innerHTML = "";
    renderTags();
    return;
  }

  const pageSizeControl = event.target.closest("[data-page-size-control]");
  if (pageSizeControl) {
    renderPageSizeDropdown(pageSizeControl, pageSizeControl.dataset.historySize === "true");
    return;
  }

  const pageSizeOption = event.target.closest("[data-page-size-option]");
  if (pageSizeOption) {
    if (pageSizeOption.dataset.historySize !== "true") {
      state.pageSize = Number(pageSizeOption.dataset.pageSizeOption);
      state.page = 1;
      renderTags();
    } else {
      overlayRoot.innerHTML = "";
    }
    return;
  }

  const uiSelect = event.target.closest("[data-select]");
  if (uiSelect && !uiSelect.disabled) {
    renderSelectDropdown(uiSelect, uiSelect.dataset.select);
    return;
  }

  const selectOption = event.target.closest("[data-select-option]");
  if (selectOption) {
    applySelectOption(selectOption.dataset.selectOption, selectOption.dataset.value);
    return;
  }

  if (event.target.closest("#autotag-switch")) {
    const checkbox = document.querySelector("#autotag");
    const visual = document.querySelector("#autotag-switch");
    checkbox.checked = !checkbox.checked;
    visual.classList.toggle("is-checked", checkbox.checked);
    visual.setAttribute("aria-checked", String(checkbox.checked));
    const card = document.querySelector("#conditions-card");
    card.innerHTML = checkbox.checked
      ? conditionEditor()
      : `<button class="btn btn-outline add-condition-btn" type="button" data-action="add-first-condition">${icon("add-20.svg")}Добавить условие</button>`;
    return;
  }

  const statusControl = event.target.closest("#status-control");
  if (statusControl) {
    state.statusOpen = !state.statusOpen;
    if (state.statusOpen) renderStatusDropdown(); else overlayRoot.innerHTML = "";
    statusControl.setAttribute("aria-expanded", String(state.statusOpen));
    return;
  }

  const statusOption = event.target.closest("[data-status]");
  if (statusOption) {
    state.status = statusOption.dataset.status;
    state.statusOpen = false;
    state.page = 1;
    renderTags();
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton && !pageButton.disabled) {
    state.page = Number(pageButton.dataset.page);
    renderTags();
    return;
  }

  const edit = event.target.closest('[data-action="edit"]');
  if (edit) {
    location.hash = `edit/${edit.dataset.id}`;
    return;
  }

  const remove = event.target.closest('[data-action="delete"]');
  if (remove) {
    state.deleteId = Number(remove.dataset.id);
    deleteModal(state.deleteId);
    return;
  }

  if (event.target.closest('[data-action="cancel-delete"]')) {
    state.deleteId = null;
    overlayRoot.innerHTML = "";
    return;
  }

  const confirm = event.target.closest('[data-action="confirm-delete"]');
  if (confirm) {
    const id = Number(confirm.dataset.id);
    const tag = tags.find((item) => item.id === id);
    tags = tags.filter((item) => item.id !== id);
    state.deleteId = null;
    overlayRoot.innerHTML = "";
    renderTags();
    toast(`Тег «${tag?.name || ""}» удален`);
    return;
  }

  if (event.target.closest('[data-action="sort"]')) {
    state.sortDesc = !state.sortDesc;
    renderTags();
    return;
  }

  const period = event.target.closest("[data-period]");
  if (period) {
    state.period = period.dataset.period;
    historyView();
    return;
  }

  const removeCondition = event.target.closest('[data-action="remove-condition"]');
  if (removeCondition) {
    const row = removeCondition.closest(".condition-row");
    const container = document.querySelector("#conditions");
    if (container.children.length > 1) {
      row.remove();
    } else {
      document.querySelector("#conditions-card").innerHTML = `<button class="btn btn-outline add-condition-btn" type="button" data-action="add-first-condition">${icon("add-20.svg")}Добавить условие</button>`;
      document.querySelector("#autotag").checked = false;
      document.querySelector("#autotag-switch")?.classList.remove("is-checked");
      document.querySelector("#autotag-switch")?.setAttribute("aria-checked", "false");
    }
    return;
  }

  if (event.target.closest('[data-action="clear-condition-value"]')) {
    const input = document.querySelector('.condition-value-field input[name="value"]');
    input.value = "";
    event.target.closest("button").hidden = true;
    input.focus();
    return;
  }

  if (event.target.closest('[data-action="add-first-condition"]')) {
    document.querySelector("#conditions-card").innerHTML = conditionEditor();
    document.querySelector("#autotag").checked = true;
    document.querySelector("#autotag-switch")?.classList.add("is-checked");
    document.querySelector("#autotag-switch")?.setAttribute("aria-checked", "true");
    return;
  }

  if (event.target.closest('[data-action="add-condition"]')) {
    const first = document.querySelector(".condition-row");
    const clone = first.cloneNode(true);
    clone.querySelector('input[name="value"]').value = "";
    document.querySelector("#conditions").append(clone);
    return;
  }

  if (event.target.closest('[data-action="save-tag"]')) {
    saveTag();
    return;
  }

  if (state.statusOpen && !event.target.closest(".dropdown")) {
    state.statusOpen = false;
    overlayRoot.innerHTML = "";
    document.querySelector("#status-control")?.setAttribute("aria-expanded", "false");
  }

  if (document.querySelector(".ui-dropdown") && !event.target.closest(".ui-dropdown, [data-select]")) {
    overlayRoot.innerHTML = "";
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches('[data-action="filter-select-options"]')) {
    const query = event.target.value.trim().toLocaleLowerCase("ru");
    document.querySelectorAll(".field-dropdown .dropdown-item").forEach((item) => {
      item.hidden = query && !item.innerText.toLocaleLowerCase("ru").includes(query);
    });
    return;
  }
  if (event.target.id === "tag-search") {
    state.query = event.target.value;
    state.page = 1;
    const cursor = event.target.selectionStart;
    renderTags();
    const input = document.querySelector("#tag-search");
    input.focus();
    input.setSelectionRange(cursor, cursor);
  }
  if (event.target.id === "tag-name") {
    const wrapper = event.target.closest(".cmgui-text-field-wrapper");
    const label = wrapper.querySelector(".cmgui-text-field-label");
    wrapper.classList.toggle("is-empty", !event.target.value);
    label.classList.toggle("cmgui-text-field-label-active", Boolean(event.target.value));
  }
  if (event.target.matches('.condition-value-field input[name="value"]')) {
    const clear = event.target.closest(".cmgui-text-field-wrapper").querySelector(".condition-value-clear");
    clear.hidden = !event.target.value;
  }
});

document.addEventListener("change", (event) => {
  if (event.target.classList.contains("page-size-select")) {
    state.pageSize = Number(event.target.value);
    state.page = 1;
    renderTags();
  }
  if (event.target.id === "autotag") {
    const card = document.querySelector("#conditions-card");
    if (event.target.checked && !card.querySelector(".condition-row")) card.innerHTML = conditionEditor();
    if (!event.target.checked) card.innerHTML = `<button class="btn btn-outline add-condition-btn" type="button" data-action="add-first-condition">${icon("add-20.svg")}Добавить условие</button>`;
  }
});

window.addEventListener("hashchange", render);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    state.statusOpen = false;
    state.deleteId = null;
    overlayRoot.innerHTML = "";
  }
});

if (!location.hash) location.hash = "tags";
render();
