/*
All roads lead to ROME!
*/

import { UI_TEST_Load } from "./modules/test.js"
import { jsonServer_loadData } from "./modules/json-server/json-server-load.js";
import { UI_addElement_P } from "./modules/UI/UI_DOM_Manipulation.js";
import { callbacks } from "./modules/callback.js"
import { jsonServer_saveData } from "./modules/json-server/json-server-save.js";
import { UI_Speech_Load } from "./modules/UI/UI_speech.js";
import { UI_elementInformation_Load } from "./modules/UI/UI_elementInformation.js";

/*
Read me

We add functionality to four button that we have for interactivity of user.
Then, USER_data.json will loaded to div#web-preview. Functionalities that need
USER data to run have added to callbacks (in callback.js) to run after USER data
is loaded. 
 */


// add functionality to add p button (cmd-butt-p)
export let HTML_addElement_P = document.getElementById('UI_addElement_P'); HTML_addElement_P.addEventListener('click', UI_addElement_P);
let HTML_jsonServer_saveData = document.getElementById('jsonServer_saveData'); HTML_jsonServer_saveData.addEventListener('click', jsonServer_saveData);
let HTML_Test_Load = document.getElementById('UI_TEST_Load'); HTML_Test_Load.addEventListener('click', UI_TEST_Load);
export let HTML_Speech_Button = document.getElementById('UI_Speech_Load'); HTML_Speech_Button.addEventListener('click', UI_Speech_Load);

UI_elementInformation_Load()

// Load data to web-preview and then UX_Load will be execute (_callback of jsonServer_attachData)
window.addEventListener('DOMContentLoaded', () => jsonServer_loadData(callbacks))