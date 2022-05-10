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


export function UI_CSSOM_colorInput() {

    if (document.getElementsByClassName('selected').length) {

        const selected = document.getElementsByClassName('selected')[0]
        const selected_id = selected.id;
        const UI_elementInformation_form = document.getElementById('UI-elementInformation-form');

        console.dir(UI_elementInformation_form.elements.color)

        let CSSrule_color_Exist = false;
        Array.from(USER_CSS.cssRules).forEach(element => {
            if (element.selectorText == `#${selected.id}`) {
                if (element.style['color']) { element.style['color'] = event.target.value; CSSrule_color_Exist = true; }
            }
        })
        if (!CSSrule_color_Exist) { USER_CSS.insertRule(`#${selected_id} {color: ${event.target.value}}`, USER_CSS.cssRules.length); };
    }
}