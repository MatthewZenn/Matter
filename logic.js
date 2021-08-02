const { ipcRenderer } = require('electron');
var maximize = document.getElementById("maximize");
var minimize = document.getElementById("minimize");

maximize.addEventListener("click", Maximize);
minimize.addEventListener("click", Minimize);

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
    }
    else {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
    }
}

function Minimize() {
    ipcRenderer.send('minimize');
}