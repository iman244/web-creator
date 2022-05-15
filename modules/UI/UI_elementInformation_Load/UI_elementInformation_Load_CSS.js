/*
export --> UI_elementInformation_Load
*/


import { UI_CSSOM_colorInput } from "../UI_CSSOM_Manipulation.js";
import { UI_elementInformation_updateInformation } from "./UI_elementInformation_Load_functions.js";


/*
Read me

building CSS form to modify CSS attributes
*/


export function UI_elementInformation_CSS_Load() {

    const UI_elementInformation_div = document.getElementById("UI_elementInformation_div");

    // build CSS form
    let UI_elementInformation_form_CSS = document.createElement("form");

    // config CSS form
    UI_elementInformation_form_CSS.id = "UI_elementInformation_form_CSS";
    UI_elementInformation_form_CSS.classList.add("dont_show");

    // append CSS form
    UI_elementInformation_div.appendChild(UI_elementInformation_form_CSS);

    // add items to CSS form
    let UI_elementInformation_CSS_colorLabel = document.createElement("label");
    let UI_elementInformation_CSS_colorInput = document.createElement("input");

    UI_elementInformation_CSS_colorLabel.for = "color"; UI_elementInformation_CSS_colorLabel.innerText = "color";
    UI_elementInformation_CSS_colorInput.name = "color"; UI_elementInformation_CSS_colorInput.className = "input-margin";

    UI_elementInformation_form_CSS.appendChild(UI_elementInformation_CSS_colorLabel);
    UI_elementInformation_form_CSS.appendChild(UI_elementInformation_CSS_colorInput);

    UI_elementInformation_form_CSS.addEventListener('select', () => { UI_elementInformation_updateInformation('CSS') });
    UI_elementInformation_CSS_colorInput.addEventListener('change', UI_CSSOM_colorInput);
}