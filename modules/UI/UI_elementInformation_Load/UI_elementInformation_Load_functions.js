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

export function UI_elementInformation_buttons_fShow() {

    let UI_elementInformation_divform_HTML = document.getElementById("UI_elementInformation_divform_HTML");
    let UI_elementInformation_divform_CSS = document.getElementById("UI_elementInformation_divform_CSS");

    switch (event.target.innerText) {

        case "HTML":
            if (UI_elementInformation_divform_HTML.classList.contains("dont_show")) {

                // function core
                UI_elementInformation_divform_HTML.classList.toggle("dont_show");
                UI_elementInformation_divform_CSS.classList.toggle("dont_show");
            };
            break;

        case "CSS":
            if (UI_elementInformation_divform_CSS.classList.contains("dont_show")) {

                // function core
                UI_elementInformation_divform_CSS.classList.toggle("dont_show");
                UI_elementInformation_divform_HTML.classList.toggle("dont_show");
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

    if (document.querySelectorAll(".selected")[0] || document.querySelectorAll('.selected_hard')[0]) {

        const selected = document.querySelectorAll(".selected")[0] || document.querySelectorAll('.selected_hard')[0];
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
                    if (element.type != "radio") {
                        element.value = value;
                    }
                    else {
                        element.value == value ? element.checked = true : element.checked = false;
                    }

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

                    else if (element.type == "radio") {
                        element.value == selected[name] ? element.checked = true : element.checked = false;
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

import { attributes_object } from "./attributes_object.js";

export function addFormItem(HTMLorCSS, attribute, type, transferValue) {

    let form = document.getElementById(`UI_elementInformation_form_${HTMLorCSS}`);

    let div = document.createElement("div");
    div.id = `UI_elementInformation_form_${HTMLorCSS}_${attribute}`
    let form_Attribute_Lable = document.createElement("label"); form_Attribute_Lable.innerText = attribute + ": "; form_Attribute_Lable.classList.add("adm-input-label");
    div.appendChild(form_Attribute_Lable);

    attributes_object[HTMLorCSS][attribute].forEach(element => {

        if (element) {
            let form_AttributeElement_Lable = document.createElement("label");
            form_AttributeElement_Lable.for = attribute; form_AttributeElement_Lable.innerText = element;
            div.appendChild(form_AttributeElement_Lable);
        }

        let form_AttributeElement = document.createElement("input"); form_AttributeElement.type = type;

        form_AttributeElement.name = attribute; form_AttributeElement.value = element;

        form_AttributeElement.classList.add("adm-input-margin", `adm-input-${type}`);
        form_AttributeElement.addEventListener('change', () => { transferValue(attribute, type) });

        div.appendChild(form_AttributeElement);
    })

    form.appendChild(div);

}


/*
export -->
                UI_elementInformation_Load_HTML
*/

export function transferHTMLValue(item, type) {
    let selected = document.querySelectorAll('.selected')[0] || document.querySelectorAll('.selected_hard')[0];
    if (item != "style" & type != "checkbox") {
        selected[item] = event.target.value;
    }
    else if (type == "checkbox") {
        switch (event.target.value) {
            case "on":
                selected[item] = true;
                break;
            case "off":
                selected[item] = false;
                break;
        }
    }
    else if (item == "style") {
        selected.style.cssText = event.target.value;
    }
}