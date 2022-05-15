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


export function UI_CSSOM_colorInput() {

    if (document.getElementsByClassName('selected').length) {

        const selected = document.getElementsByClassName('selected')[0]
        const selected_id = selected.id;

        let CSSrule_color_Exist = false;
        Array.from(USER_CSS.cssRules).forEach(element => {
            if (element.selectorText == `#${selected.id}`) {
                if (element.style['color']) { element.style['color'] = event.target.value; CSSrule_color_Exist = true; }
            }
        })
        if (!CSSrule_color_Exist) { USER_CSS.insertRule(`#${selected_id} {color: ${event.target.value}}`, USER_CSS.cssRules.length); };
    }
}