/*
export --> UI_elementInformation_Load_CSS.js 
*/


import { USER_CSS } from "../USER/USER_css.js";


/*
Read me

UI_CSSOM_colorInput
    If atleast one element was selected it will be run. It will insert a rule for 
    color to USER_css.
*/


export function UI_CSSOM(attribute) {

    let selected = document.querySelectorAll('.selected')[0] || document.querySelectorAll('.selected_hard')[0];
    const selected_id = selected.id;

    let CSSrule_attribute_Exist = false;
    Array.from(USER_CSS.cssRules).forEach(element => {
        if (element.selectorText == `#${selected.id}`) {
            if (element.style[attribute]) { element.style[attribute] = event.target.value; CSSrule_attribute_Exist = true; }
        }
    })
    if (!CSSrule_attribute_Exist) { USER_CSS.insertRule(`#${selected_id} {${attribute}: ${event.target.value}}`, USER_CSS.cssRules.length); };
}