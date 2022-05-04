import { jsonServer_attachData } from "./modules/json-server.js";
import { UI_addP } from "./modules/UI_cmd-butt.js";
import { callbacks } from "./modules/callback.js"

// Load data to web-preview and then UX_Load will be execute (_callback of jsonServer_attachData)
window.addEventListener('DOMContentLoaded', () => jsonServer_attachData(callbacks))

// add functionality to add p button (cmd-butt-p)
var cmdButtP = document.getElementById('cmd-butt-p');
cmdButtP.addEventListener("click", UI_addP);