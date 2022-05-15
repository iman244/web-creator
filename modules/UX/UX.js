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


const webPreview = document.querySelectorAll("#web-preview")[0];


export function UX_Load() {

    webPreview.childNodes.forEach(element => {
        element.addEventListener('click', UX_selecting);
        element.addEventListener('dblclick', UX_selectingHard);
    })
}

export function UX_Load_indv(element) {

    element.addEventListener('click', UX_selecting);
    element.addEventListener('dblclick', UX_selectingHard);
}


function UX_selecting() {

    let selected = document.querySelectorAll(".selected");
    let selected_hard = document.querySelectorAll(".selected_hard");
    const UI_elementInformation_form_HTML = document.getElementById('UI_elementInformation_form_HTML');
    const UI_elementInformation_form_CSS = document.getElementById('UI_elementInformation_form_CSS');

    // removing previous selected elements
    if (selected_hard.length) { selected_hard.forEach(element => element.classList.toggle("selected_hard")) };
    if (selected && !event.target.classList.contains("selected")) { selected.forEach(element => element.classList.toggle("selected")) };

    // function core
    event.target.classList.toggle("selected");

    selected = document.querySelectorAll(".selected");
    if (selected) { UI_elementInformation_form_HTML.dispatchEvent(Event_select); UI_elementInformation_form_CSS.dispatchEvent(Event_select); }
}


function UX_selectingHard() {

    let selected = document.querySelectorAll(".selected");
    let selected_hard = document.querySelectorAll(".selected_hard");
    const UI_elementInformation_form = document.getElementById('UI-elementInformation-form');

    // removing previous selected elements
    if (selected.length) { selected.forEach(element => element.classList.toggle("selected")) };
    if (selected_hard && !event.target.classList.contains("selected_hard")) { selected_hard.forEach(element => element.classList.toggle("selected_hard")) };

    // function core
    event.target.classList.toggle("selected_hard");

    selected_hard = document.querySelectorAll(".selected_hard");
    if (selected_hard) { UI_elementInformation_form_HTML.dispatchEvent(Event_select); UI_elementInformation_form_CSS.dispatchEvent(Event_select); }
}