/*
export --> app.js
*/


import { UI_elementInformation_HTML_Load } from "./UI_elementInformation_Load_HTML.js";
import { UI_elementInformation_CSS_Load } from "./UI_elementInformation_Load_CSS.js";
import { UI_elementInformation_button_fShow } from "./UI_elementInformation_Load_functions.js";


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

    UI_elementInformation_HTML_Load();
    UI_elementInformation_CSS_Load();


    // add buttons for showing HTML or CSS attributes functionality
    let UI_elementInformation_button_CSS = document.getElementById("UI_elementInformation_button_CSS");
    let UI_elementInformation_button_HTML = document.getElementById("UI_elementInformation_button_HTML");

    UI_elementInformation_button_CSS.addEventListener('click', UI_elementInformation_button_fShow);
    UI_elementInformation_button_HTML.addEventListener('click', UI_elementInformation_button_fShow);
}