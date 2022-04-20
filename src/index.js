//---------------------------\\ IMPORTS //---------------------------\\

const { app, BrowserWindow, ipcMain } = require("electron");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const ipc = ipcMain;

//--------------------------\\ FUNCTIONS //--------------------------\\

// Creating browser window
const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 400,
		height: 500,
		minWidth: 400,
		minHeight: 500,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadURL(path.join(__dirname, "views/index.html"));

	ipc.on("closeApp", () => mainWindow.close());
	ipc.on("minimizeApp", () => mainWindow.minimize());
	ipc.on("maximizeApp", () => {
		if (mainWindow.isMaximized()) {
			mainWindow.restore();
		} else {
			mainWindow.maximize();
		}
	});

	mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
	const db = mongoose.connection;

	db.on("error", () => console.error("Error connecting to database"));
	db.once("open", () => console.log("Connected to database"));
};

//------------------------\\ APP FUNCTIONS //------------------------\\

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
