/*
export --> callback.js
*/


import { Event_select } from "../Event/Event.js";


/*
Read me

UX_Load will add selecting capibility to div#web-preview to interact with us.
We also dispatch event in case of atleast one element was selected.
*/


export function UX_Load() {

    // selecting elements in web-preview
    const UI_elementInformation_form = document.getElementById('UI-elementInformation-form');
    const webPreview = document.querySelectorAll("#web-preview")[0];
    let selected;

    function UX_selecting() {
        if (selected && !event.target.classList.contains("selected")) { selected.forEach(element => element.classList.toggle("selected")) };
        event.target.classList.toggle("selected");
        selected = document.querySelectorAll(".selected");
        if (selected) { UI_elementInformation_form.dispatchEvent(Event_select); }
    }

    webPreview.childNodes.forEach(element => element.addEventListener('click', UX_selecting))
}