/*
export

UX_Load -->
    callback.js

UX_Load_indv -->
    UI_DOM_Manipulation.js
*/


import { Event_select } from "../Event/Event.js";


/*
Read me

when DOMContentLoaded, UX_Load will add selecting capibility to div#web-preview to interact with us.
when we add element UX_Load_indv will done this.
We also dispatch event in case of atleast one element was selected.
*/


export function UX_Load() {

    // selecting elements in web-preview
    const webPreview = document.querySelectorAll("#web-preview")[0];

    webPreview.childNodes.forEach(element => element.addEventListener('click', UX_selecting))
}

export function UX_Load_indv(element) {
    element.addEventListener('click', UX_selecting)
}


function UX_selecting() {

    let selected = document.querySelectorAll(".selected");
    const UI_elementInformation_form = document.getElementById('UI-elementInformation-form');

    if (selected && !event.target.classList.contains("selected")) { selected.forEach(element => element.classList.toggle("selected")) };
    event.target.classList.toggle("selected");
    selected = document.querySelectorAll(".selected");
    if (selected) { UI_elementInformation_form.dispatchEvent(Event_select); }
}