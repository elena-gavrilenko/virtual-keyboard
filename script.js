let digits = [
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
];
let letters = [
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
];
let functional = [
  "Backquote",
  "Backspace",
  "Tab",
  "CapsLock",
  "Enter",
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ControlRight",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
];
let objKeys = {
  Backquote: {
    ru: "ё",
    en: "`",
  },
  Digit1: {
    ru: "1",
    en: "1",
  },
  Digit2: {
    ru: "2",
    en: "2",
  },
  Digit3: {
    ru: "3",
    en: "3",
  },
  Digit4: {
    ru: "4",
    en: "4",
  },
  Digit5: {
    ru: "5",
    en: "5",
  },
  Digit6: {
    ru: "6",
    en: "6",
  },
  Digit7: {
    ru: "7",
    en: "7",
  },
  Digit8: {
    ru: "8",
    en: "8",
  },
  Digit9: {
    ru: "9",
    en: "9",
  },
  Digit0: {
    ru: "0",
    en: "0",
  },
  Minus: {
    ru: "-",
    en: "-",
  },
  Equal: {
    ru: "=",
    en: "=",
  },
  Backspace: {
    ru: "Backspace",
    en: "Backspace",
  },
  Tab: {
    ru: "Tab",
    en: "Tab",
  },
  KeyQ: {
    ru: "й",
    en: "q",
  },
  KeyW: {
    ru: "ц",
    en: "w",
  },
  KeyE: {
    ru: "у",
    en: "e",
  },
  KeyR: {
    ru: "к",
    en: "r",
  },
  KeyT: {
    ru: "е",
    en: "t",
  },
  KeyY: {
    ru: "н",
    en: "y",
  },
  KeyU: {
    ru: "г",
    en: "u",
  },
  KeyI: {
    ru: "ш",
    en: "i",
  },
  KeyO: {
    ru: "щ",
    en: "o",
  },
  KeyP: {
    ru: "з",
    en: "p",
  },
  BracketLeft: {
    ru: "х",
    en: "[",
  },
  BracketRight: {
    ru: "ъ",
    en: "]",
  },
  Backslash: {
    ru: "\\",
    en: "\\",
  },
  NumpadDecimal: {
    ru: "Del",
    en: "Del",
  },
  CapsLock: {
    ru: "CapsLock",
    en: "CapsLock",
  },
  KeyA: {
    ru: "ф",
    en: "a",
  },
  KeyS: {
    ru: "ы",
    en: "s",
  },
  KeyD: {
    ru: "в",
    en: "d",
  },
  KeyF: {
    ru: "а",
    en: "f",
  },
  KeyG: {
    ru: "п",
    en: "g",
  },
  KeyH: {
    ru: "р",
    en: "h",
  },
  KeyJ: {
    ru: "о",
    en: "j",
  },
  KeyK: {
    ru: "л",
    en: "k",
  },
  KeyL: {
    ru: "д",
    en: "l",
  },
  Semicolon: {
    ru: "ж",
    en: ";",
  },
  Quote: {
    ru: "э",
    en: "'",
  },
  Enter: {
    ru: "Enter",
    en: "Enter",
  },
  ShiftLeft: {
    ru: "Shift",
    en: "Shift",
  },
  KeyZ: {
    ru: "я",
    en: "z",
  },
  KeyX: {
    ru: "ч",
    en: "x",
  },
  KeyC: {
    ru: "с",
    en: "c",
  },
  KeyV: {
    ru: "м",
    en: "v",
  },
  KeyB: {
    ru: "и",
    en: "b",
  },
  KeyN: {
    ru: "т",
    en: "n",
  },
  KeyM: {
    ru: "ь",
    en: "m",
  },
  Comma: {
    ru: "б",
    en: ",",
  },
  Period: {
    ru: "ю",
    en: ".",
  },
  Slash: {
    ru: ".",
    en: "/",
  },
  ArrowUp: {
    ru: "🠉",
    en: "🠉",
  },
  ShiftRight: {
    ru: "Shift",
    en: "Shift",
  },
  ControlLeft: {
    ru: "Ctrl",
    en: "Ctrl",
  },
  MetaLeft: {
    ru: "Win",
    en: "Win",
  },
  AltLeft: {
    ru: "Alt",
    en: "Alt",
  },
  Space: {
    ru: " ",
    en: " ",
  },

  AltRight: {
    ru: "Alt",
    en: "Alt",
  },

  ArrowLeft: {
    ru: "🠈",
    en: "🠈",
  },

  ArrowDown: {
    ru: "🠋",
    en: "🠋",
  },
  ArrowRight: {
    ru: "🠊",
    en: "🠊",
  },
  ControlRight: {
    ru: "Ctrl",
    en: "Ctrl",
  },
};

const body = document.querySelector("body");
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
body.append(wrapper);

const title = document.createElement("h1");
title.classList.add("title");
title.innerHTML = "Virtual keyboard";
wrapper.append(title);

const screen = document.createElement("textarea");
screen.classList.add("screen");
wrapper.append(screen);
screen.focus();

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
wrapper.append(keyboard);

const subtitle = document.createElement("h2");
subtitle.classList.add("subtitle");
subtitle.innerHTML =
  "Клавиатура создана в операционной системе Windows Для переключения языка комбинация: левыe ctrl + alt";
wrapper.append(subtitle);

const langKey = "ln";

function getLocalStorage() {
  if (localStorage.getItem(langKey)) {
    ln = localStorage.getItem(langKey);
  } else ln = "en";
}

getLocalStorage();

let isCapsLock = false;

function addKey() {
  let board = [];
  for (let key in objKeys) {
    board.push(`<div class="key" data-code=${key}>${objKeys[key][ln]}</div>`);
  }
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.classList.add(`row`);
    row.classList.add(`number${i}`);
    keyboard.append(row);
    if (i == 0) {
      for (let j = 0; j < 14; j++) row.innerHTML += board[j];
    }
    if (i == 1) {
      for (let j = 14; j < 29; j++) row.innerHTML += board[j];
    }
    if (i == 2) {
      for (let j = 29; j < 42; j++) row.innerHTML += board[j];
    }
    if (i == 3) {
      for (let j = 42; j < 55; j++) row.innerHTML += board[j];
    }
    if (i == 4) {
      for (let j = 55; j < board.length; j++) row.innerHTML += board[j];
    }
  }
}
addKey();
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (!objKeys.hasOwnProperty(event.code)) return;
  addTextarea(event);
  document.querySelectorAll(".key").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(`[data-code=${event.code}]`).classList.add("active");
});
keyboard.addEventListener("click", (event) => {
  let keyCl = event.target.closest(".key");
  console.log(keyCl);
  if (!keyCl) return;
  document.querySelectorAll(".key").forEach((element) => {
    element.classList.remove("active");
  });

  document
    .querySelector(`[data-code=${keyCl.dataset.code}]`)
    .classList.add("active");
  addTextarea(keyCl.dataset);
});

function setLocalStorage() {
  localStorage.setItem(langKey, ln);
}

function addTextarea(event) {
  if (event.code == "Backspace") {
    let start = screen.selectionStart;
    let end = screen.selectionEnd;
    if (start == end) {
      screen.value =
        screen.value.slice(0, start - 1) +
        screen.value.slice(end, screen.value.length);
    }
    screen.value =
      screen.value.slice(0, start) +
      screen.value.slice(end, screen.value.length);
    screen.setSelectionRange(start, end - 1);
  } else if (
    event.code == "ControlLeft" ||
    event.code == "ControlRight" ||
    event.code == "AltRight"
  ) {
    screen.value = screen.value.slice(0, end);
  } else if (event.altKey && event.ctrlKey) {
    let start = screen.selectionStart;
    let end = screen.selectionEnd;
    if (ln == "en") {
      ln = "ru";
    } else {
      ln = "en";
    }
    document
      .querySelectorAll(".key")
      .forEach(
        (element) => (element.textContent = objKeys[element.dataset.code][ln])
      );
    setLocalStorage();
  } else if (event.code == "Enter") {
    let start = screen.selectionStart;
    let end = screen.selectionEnd;
    let endStr = screen.value.length;
    console.log(start);
    if (end == endStr) {
      screen.value =
        screen.value.slice(0, start) + "\n" + screen.value.slice(start);
    } else {
      screen.value =
        screen.value.slice(0, start) + "\n" + screen.value.slice(end);
    }
  } else if (event.code == "NumpadDecimal") {
    let start = screen.selectionStart;
    let end = screen.selectionEnd;
    if (start == end) {
      screen.value =
        screen.value.slice(0, start) +
        screen.value.slice(end + 1, screen.value.length);
    }
    screen.value =
      screen.value.slice(0, start) +
      screen.value.slice(end, screen.value.length);
    screen.setSelectionRange(start, end);
  } else if (event.code == "Tab") {
    let start = screen.selectionStart;
    let end = screen.selectionEnd;
    screen.value =
      screen.value.slice(0, start) +
      "  " +
      screen.value.slice(end, screen.value.length);
    screen.setSelectionRange(end + 3);
  } else if (event.code == "CapsLock") {
    if (isCapsLock == false) {
      document
        .querySelectorAll(".key")
        .forEach((element) =>
          letters.includes(element.dataset.code)
            ? (element.textContent = element.textContent.toUpperCase())
            : (element.textContent = element.textContent)
        );
      isCapsLock = true;
    } else {
      document
        .querySelectorAll(".key")
        .forEach((element) =>
          letters.includes(element.dataset.code)
            ? (element.textContent = element.textContent.toLowerCase())
            : (element.textContent = element.textContent)
        );
      isCapsLock = false;
    }
  } else {
    screen.value += document.querySelector(
      `[data-code=${event.code}]`
    ).textContent;
  }
  screen.focus();
}
