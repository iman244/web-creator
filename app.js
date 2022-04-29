import {attachData} from "./modules/json-server.js";
import {addP} from "./modules/cmd-butt.js";

window.addEventListener('DOMContentLoaded', () => attachData())

var cmdButtP = document.getElementById('cmd-butt-p');

cmdButtP.addEventListener("click", addP);