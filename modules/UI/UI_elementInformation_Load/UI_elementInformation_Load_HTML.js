/*
export --> UI_elementInformation_Load
*/


import { addFormItem } from "./UI_elementInformation_Load_functions.js";
import { transferHTMLValue } from "./UI_elementInformation_Load_functions.js";
import { UI_elementInformation_updateInformation } from "./UI_elementInformation_Load_functions.js";


/*
Read me

building HTML form to modify HTML attributes
*/

export function UI_elementInformation_HTML_Load() {

    const UI_elementInformation_div = document.getElementById("UI_elementInformation_div");

    // build HTML form
    let UI_elementInformation_form_HTML = document.createElement("form");

    // config HTML form
    UI_elementInformation_form_HTML.id = "UI_elementInformation_form_HTML";

    // append HTML form
    UI_elementInformation_div.appendChild(UI_elementInformation_form_HTML);

    // add items to HTML form
    addFormItem(UI_elementInformation_form_HTML, "id", "text", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "class", "text", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "style", "text", transferHTMLValue);

    addFormItem(UI_elementInformation_form_HTML, "title", "text", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "lang", "text", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "dir", "text", transferHTMLValue);

    addFormItem(UI_elementInformation_form_HTML, "accesskey", "text", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "tabindex", "number", transferHTMLValue);

    addFormItem(UI_elementInformation_form_HTML, "hidden", "checkbox", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "contenteditable", "checkbox", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "spellcheck", "checkbox", transferHTMLValue);
    addFormItem(UI_elementInformation_form_HTML, "translate", "checkbox", transferHTMLValue);


    /*
    addFormItem(UI_elementInformation_form_HTML, "data-*", "text");
    addFormItem(UI_elementInformation_form_HTML, "daragable", "checkbox");
    */

    UI_elementInformation_form_HTML.addEventListener('select', () => { UI_elementInformation_updateInformation('HTML') });
    // UI_elementInformation_HTML_id.addEventListener('change', () => { });
}