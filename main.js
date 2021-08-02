const electron = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron');

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 1200, height: 720, resizable: true, frame: false, webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
    }, icon: "Static/Icon.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});

ipcMain.on('minimize', () => {
    mainWindow.minimize();
    //win.hide();
  })