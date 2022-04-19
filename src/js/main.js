//----------------------------\\ DOM ELEMENTS //----------------------------\\

const closeBtn = document.querySelector("[data-close-btn]");
const addButton = document.querySelector("[data-add-button]");
const todosList = document.querySelector("[data-todos-list]");
const minimizeBtn = document.querySelector("[data-minimize-btn]");
const maximizeBtn = document.querySelector("[data-maximize-btn]");
const additionInput = document.querySelector("[data-addition-input]");

//-------------------------------\\ OTHERS //-------------------------------\\

const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

//-----------------------------\\ FUNCTIONS //------------------------------\\

closeBtn.addEventListener("click", () => ipc.send("closeApp"));
minimizeBtn.addEventListener("click", () => ipc.send("minimizeApp"));
maximizeBtn.addEventListener("click", () => ipc.send("maximizeApp"));

addButton.addEventListener("click", () => {
	let todoText = additionInput.value;
	todosList.innerHTML += `<div class="todo">
    <div class="todo-detail">
        <div class="todo-text">${todoText}</div>
        <div class="todo-time"></div>
    </div>
    <div class="todo-delete">
        <i class="fa-solid fa-trash"></i>
    </div>
</div>`;
});
