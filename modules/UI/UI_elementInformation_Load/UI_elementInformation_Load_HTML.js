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

    const UI_elementInformation_forms = document.getElementById("UI_elementInformation_forms");

    // build HTML form
    let UI_elementInformation_divform_HTML = document.createElement("div");
    let UI_elementInformation_form_HTML = document.createElement("form");

    UI_elementInformation_divform_HTML.appendChild(UI_elementInformation_form_HTML);


    // config HTML form
    UI_elementInformation_form_HTML.id = "UI_elementInformation_form_HTML";
    UI_elementInformation_form_HTML.classList.add("UI_elementInformation_form");

    UI_elementInformation_divform_HTML.id = "UI_elementInformation_divform_HTML";
    UI_elementInformation_divform_HTML.classList.add("dont_show");


    // append HTML form
    UI_elementInformation_forms.appendChild(UI_elementInformation_divform_HTML);


    // add items to HTML form
    addFormItem("HTML", "id", "text", transferHTMLValue);
    addFormItem("HTML", "class", "text", transferHTMLValue);
    addFormItem("HTML", "style", "text", transferHTMLValue);

    addFormItem("HTML", "title", "text", transferHTMLValue);
    addFormItem("HTML", "lang", "text", transferHTMLValue);
    addFormItem("HTML", "dir", "radio", transferHTMLValue);

    addFormItem("HTML", "accesskey", "text", transferHTMLValue);
    addFormItem("HTML", "tabindex", "number", transferHTMLValue);

    addFormItem("HTML", "hidden", "checkbox", transferHTMLValue);
    addFormItem("HTML", "contentEditable", "checkbox", transferHTMLValue);
    addFormItem("HTML", "spellcheck", "checkbox", transferHTMLValue);
    addFormItem("HTML", "translate", "checkbox", transferHTMLValue);


    /*
    other attributes needed to add

    addFormItem(UI_elementInformation_form_HTML, "data-*", "text");
    addFormItem(UI_elementInformation_form_HTML, "daragable", "checkbox");
    */

    UI_elementInformation_form_HTML.addEventListener('select', () => { UI_elementInformation_updateInformation('HTML'); });
}