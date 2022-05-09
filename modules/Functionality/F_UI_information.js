/*
export --> UI_elementInformation.js 
*/


import { USER_CSS } from "../USER/USER_css.js";


/*
Read me

F_UI_information_updateInformation
    If any element was selected it will be run. It will run for every attributes
    in UI_information_form and look at its corsponding style in USER_css.js
    to update its form input.

F_UI_information_colorInput
    If atleast one element was selected it will be run. It will insert a rule for 
    color to USER_css.
*/


export function F_UI_elementInformation_updateInformation() {

    if (document.querySelectorAll(".selected")[0]) {

        const selected = document.querySelectorAll(".selected")[0];
        const UI_elementInformation_form = document.getElementById('UI-elementInformation-form');

        Array.from(UI_elementInformation_form.elements).forEach(element => {
            let StyleName = element.name;
            let value;
            Array.from(USER_CSS.cssRules).forEach(element => {
                if (element.selectorText == `#${selected.id}`) { value = element.style[StyleName] };
            })
            element.value = value;
        })
    }
}


export function F_UI_elementInformation_colorInput() {

    if (document.getElementsByClassName('selected').length) {

        const selected = document.getElementsByClassName('selected')[0].id;
        USER_CSS.insertRule(`#${selected} {color: ${event.target.value}}`, USER_CSS.cssRules.length);

    }
}