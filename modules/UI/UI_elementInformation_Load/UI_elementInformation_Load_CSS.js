/*
export --> UI_elementInformation_Load
*/


import { addFormItem } from "./UI_elementInformation_Load_functions.js";
import { UI_CSSOM } from "../UI_CSSOM_Manipulation.js";
import { UI_elementInformation_updateInformation } from "./UI_elementInformation_Load_functions.js";


/*
Read me

building CSS form to modify CSS attributes
*/


export function UI_elementInformation_CSS_Load() {

    const UI_elementInformation_forms = document.getElementById("UI_elementInformation_forms");

    // build CSS form
    let UI_elementInformation_divform_CSS = document.createElement("div");
    let UI_elementInformation_form_CSS = document.createElement("form");

    UI_elementInformation_divform_CSS.appendChild(UI_elementInformation_form_CSS)


    // config CSS form
    UI_elementInformation_form_CSS.id = "UI_elementInformation_form_CSS";
    UI_elementInformation_form_CSS.classList.add("UI_elementInformation_form");

    UI_elementInformation_divform_CSS.id = "UI_elementInformation_divform_CSS";


    // append CSS form
    UI_elementInformation_forms.appendChild(UI_elementInformation_divform_CSS);

    // add items to CSS form
    addFormItem("CSS", "color", "text", UI_CSSOM);
    addFormItem("CSS", "text-align", "radio", UI_CSSOM);
    addFormItem("CSS", "text-decoration-line", "text", UI_CSSOM)

    /*
    other attributes needed to add

    addFormItem("CSS", "vertical-align", "radio", UI_CSSOM);
    */

    UI_elementInformation_form_CSS.addEventListener('select', () => { UI_elementInformation_updateInformation('CSS'); });
}