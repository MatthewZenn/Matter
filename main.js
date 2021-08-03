const electron = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron');
require('@electron/remote/main').initialize();

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 1280, height: 720, resizable: true, frame: false, webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
    }, icon: "Static/MatterProject_Logo.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});

ipcMain.on('minimize', () => {
    mainWindow.minimize();
    //win.hide();
  });

  ipcMain.on('maximize', () => {
    mainWindow.maximize();
  })