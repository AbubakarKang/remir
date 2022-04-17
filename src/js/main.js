//----------------------------\\ DOM ELEMENTS //----------------------------\\

const closeBtn = document.querySelector("[data-close-btn]");
const minimizeBtn = document.querySelector("[data-minimize-btn]");
const maximizeBtn = document.querySelector("[data-maximize-btn]");

//-------------------------------\\ OTHERS //-------------------------------\\

const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

//-----------------------------\\ FUNCTIONS //------------------------------\\

closeBtn.addEventListener("click", () => ipc.send("closeApp"));
minimizeBtn.addEventListener("click", () => ipc.send("minimizeApp"));
maximizeBtn.addEventListener("click", () => ipc.send("maximizeApp"));
