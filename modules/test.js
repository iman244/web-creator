import { USER_CSS } from "./USER/USER_css.js";

export function TEST_Load() {
    console.log("I'm test!");

    const UI_information_div = document.getElementById("UI-information-div");

    // build form
    let UI_information_form = document.createElement("form");

    // config form
    UI_information_form.id = "UI-information-form";

    // append form
    UI_information_div.appendChild(UI_information_form);


    // add items to form
    let UI_information_colorLabel = document.createElement("label");
    let UI_information_colorInput = document.createElement("input");

    UI_information_colorLabel.for = "color"; UI_information_colorLabel.innerText = "color";
    UI_information_colorInput.name = "color"; UI_information_colorInput.className = "input-margin"

    UI_information_form.appendChild(UI_information_colorLabel);
    UI_information_form.appendChild(UI_information_colorInput);


    // add functionality
    UI_information_colorInput.value = "red"

    console.log(USER_CSS)

    let color = document.forms;
    //console.log(color);
}