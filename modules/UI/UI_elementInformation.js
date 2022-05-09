/*
export --> app.js
*/


import { F_UI_elementInformation_updateInformation } from "../Functionality/F_UI_information.js";
import { F_UI_elementInformation_colorInput } from "../Functionality/F_UI_information.js";


/*
Read me

We make our form here because we don't know how we want to handle
categories of attributes. We just added a form with a input (and its label)
for color and add functionality for it. 
F. We have two addEventListener. 
    1. for showing information related to selected element in div#web-preview, (read more in F_UI_information_updateInformation.js)
    2. for changing input value of color to add rule to USER_CSS. (read more in F_UI_information_colorInput.js)
*/


export function UI_elementInformation_Load() {

    const UI_elementInformation_div = document.getElementById("UI-elementInformation-div");

    // build form
    let UI_information_form = document.createElement("form");

    // config form
    UI_information_form.id = "UI-elementInformation-form";

    // append form
    UI_elementInformation_div.appendChild(UI_information_form);


    // add items to form
    let UI_information_colorLabel = document.createElement("label");
    let UI_information_colorInput = document.createElement("input");

    UI_information_colorLabel.for = "color"; UI_information_colorLabel.innerText = "color";
    UI_information_colorInput.name = "color"; UI_information_colorInput.className = "input-margin"

    UI_information_form.appendChild(UI_information_colorLabel);
    UI_information_form.appendChild(UI_information_colorInput);

    UI_information_form.addEventListener('select', F_UI_elementInformation_updateInformation)
    UI_information_colorInput.addEventListener('change', F_UI_elementInformation_colorInput)
}