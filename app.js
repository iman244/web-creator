import {jsonServer_attachData} from "./modules/json-server.js";
import {UI_addP} from "./modules/cmd-butt.js";


// Load data to web-preview
window.addEventListener('DOMContentLoaded', () => jsonServer_attachData())


// add functionality to add p button (cmd-butt-p)
var cmdButtP = document.getElementById('cmd-butt-p');

cmdButtP.addEventListener("click", UI_addP);


// add some interactivity (selecting view)
// document.querySelectorAll("#web-preview > *")[0].childNodes.forEach(element => {element.addEventListener('click', UX_selecting())})