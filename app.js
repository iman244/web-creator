import { TEST_Load } from "./modules/test.js"
import { jsonServer_attachData } from "./modules/json-server/json-server-load.js";
import { UI_addP } from "./modules/UI/UI_cmd-butt.js";
import { callbacks } from "./modules/callback.js"
import { postTag } from "./modules/json-server/json-server-save.js";


// add functionality to add p button (cmd-butt-p)
export let UI_cmdButtP = document.getElementById('cmd-butt-p');
let UI_save_webPreview = document.getElementById('save-webPreview')
let UI_TEST_Load = document.getElementById('UI_TEST_Load')

UI_cmdButtP.addEventListener("click", UI_addP);
UI_save_webPreview.addEventListener("click", postTag);
UI_TEST_Load.addEventListener("click", TEST_Load);

// Load data to web-preview and then UX_Load will be execute (_callback of jsonServer_attachData)
window.addEventListener('DOMContentLoaded', () => jsonServer_attachData(callbacks))