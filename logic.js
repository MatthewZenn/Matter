const { ipcRenderer } = require('electron');
const { shell } = require('@electron/remote');
var maximize = document.getElementById("maximize");
var minimize = document.getElementById("minimize");
var google = document.getElementById("google");
var about = document.getElementById("about");
var panel = document.getElementById("panel");
var logo = document.getElementById("logo");
var title = document.getElementById("title");

maximize.addEventListener("click", Maximize);
minimize.addEventListener("click", Minimize);

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
    }
    else {
        ipcRenderer.send('maximize')
    }
}

function Minimize() {
    ipcRenderer.send('minimize');
}

function submitForm() {
    shell.openExternal('https://www.google.com/search?q='+document.getElementById('search').value);
}

function help() {
    shell.openExternal('https://github.com/MatthewZenn/Matter');
}

function Move() {
    if (panel.style.left == '-20%') {
        panel.style.left = '0';
    }

    else {
        panel.style.left = '-20%';
    }
}