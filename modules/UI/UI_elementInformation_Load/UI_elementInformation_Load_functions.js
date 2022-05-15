/*

1.  UI_elementInformation_button_fShow
2.  UI_elementInformation_updateInformation
3.  addFormItem
4.  transferHTMLValue

*/


/*
export --> UI_elementInformation_Load

Read me

f to show selected form attributes
*/

export function UI_elementInformation_button_fShow() {

    let UI_elementInformation_form_HTML = document.getElementById("UI_elementInformation_form_HTML");
    let UI_elementInformation_form_CSS = document.getElementById("UI_elementInformation_form_CSS");

    switch (event.target.innerText) {

        case "HTML":
            if (UI_elementInformation_form_HTML.classList.contains("dont_show")) {

                // function core
                UI_elementInformation_form_HTML.classList.toggle("dont_show");
                UI_elementInformation_form_CSS.classList.toggle("dont_show");
            };
            break;

        case "CSS":
            if (UI_elementInformation_form_CSS.classList.contains("dont_show")) {

                // function core
                UI_elementInformation_form_CSS.classList.toggle("dont_show");
                UI_elementInformation_form_HTML.classList.toggle("dont_show");
            };
            break;
    }
}


/*
export -->
    UI_elementInformation_Load_HTML
    UI_elementInformation_Load_CSS
*/

/*
Read me

UI_elementInformation_updateInformation
    If any element was selected it will be run. It will run for every attributes
    in UI_information_form and look at its corsponding style/attribute in USER_css.js/elementObject
    to update its form input.
*/
import { USER_CSS } from "../../USER/USER_css.js";

export function UI_elementInformation_updateInformation(formName) {

    if (document.querySelectorAll(".selected")[0]) {

        const selected = document.querySelectorAll(".selected")[0];
        const UI_elementInformation_form = document.getElementById(`UI_elementInformation_form_${formName}`);

        Array.from(UI_elementInformation_form.elements).forEach(element => {
            let name = element.name;
            let value;

            switch (formName) {

                case "CSS":
                    Array.from(USER_CSS.cssRules).forEach(element => {
                        if (element.selectorText == `#${selected.id}`) {

                            // function core
                            value = element.style[name]
                        };
                    })
                    element.value = value;
                    break;

                case "HTML":
                    if (element.type == "text") {
                        if (name != "style") {

                            // function core
                            value = selected[name];
                            element.value = value; // expected value: string
                        }
                        else {

                            // function core
                            value = selected["style"].cssText;
                            element.value = value; // expected value: css style
                        }
                    }
                    else if (element.type == "checkbox") {

                        // function core
                        value = selected[name];
                        element.checked = value; // expected value: true | false
                    }
                    break;
            }

        })
    }
}


/*
export -->
                UI_elementInformation_Load_HTML
*/

export function addFormItem(form, item, type, transferValue) {
    let formItemLable = document.createElement("label");
    let formItem = document.createElement("input"); formItem.type = type;

    formItemLable.for = item; formItemLable.innerText = item;
    formItem.name = item; formItem.classList.add("input-margin");

    form.appendChild(formItemLable);
    form.appendChild(formItem);

    formItem.addEventListener('change', () => { transferValue(item) });
}


/*
export -->
                UI_elementInformation_Load_HTML
*/

export function transferHTMLValue(item) {
    let selected = document.getElementsByClassName('selected')[0];
    if (!item == "style") {
        selected[item] = event.target.value;
    }
    else {
        selected.style.cssText = event.target.value;
    }
}