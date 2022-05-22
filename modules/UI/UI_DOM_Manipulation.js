/*
export --> app.js
*/


import { UX_Load_indv } from "../UX/UX.js"


/*
Read me

we are adding functionality to buttons that adding element to document
in div#web-preview.
*/

let webPreview = document.getElementById('web-preview');


export function UI_addHTMLElement(HTMLElement) {

    // function core
    let newElement = document.createElement(HTMLElement);

    newElement.id = newElement_ID(HTMLElement);
    newElement.innerText = `new ${HTMLElement} Element id = ${newElement.id}`;

    // !! if parent element have addEvenetLisetener it will applied to its children too. Thats why UX_Load_indv is not added in selected_hard.
    let selected = document.querySelectorAll(".selected");
    let selected_hard = document.querySelectorAll(".selected_hard");
    if (selected.length) {
        // function core II
        selected[0].after(newElement);
        UX_Load_indv(newElement);
    }
    else if (selected_hard.length) {
        // function core II
        selected_hard[0].appendChild(newElement);
    }
    else {
        // function core II
        webPreview.appendChild(newElement);
        UX_Load_indv(newElement);
    }
}


function newElement_ID(HTMLElement) {

    var ID;
    var IDnumber = 0;
    let HTMLElement_length = HTMLElement.length;

    document.querySelectorAll(HTMLElement).forEach(element => {
        // if USER didn't changed the ID
        if (element.id.substring(0, HTMLElement_length + 1) == HTMLElement + "_") {
            if (IDnumber <= Number(element.id.substring(HTMLElement_length + 1))) {

                // function core
                IDnumber = Number(element.id.substring(HTMLElement_length + 1));
            }
        }
    });
    ID = HTMLElement + "_" + (IDnumber + 1);
    return ID;
}