/*
export --> app.js
*/


import { UX_Load_indv } from "../UX/UX.js"


/*
Read me

we are adding functionality to button#UI_addElement_P to add a paragraph
in div#web-preview.
*/

let webPreview = document.getElementById('web-preview');


export function UI_addElement_div() {

    let newDIV = document.createElement('div');
    newDIV.id = newElement_ID("div");
    newDIV.innerText = `new Div Element id = ${newDIV.id}`
    webPreview.appendChild(newDIV);
    UX_Load_indv(newDIV);
}




export function UI_addElement_p() {

    let newP = document.createElement("p");
    newP.id = newElement_ID("p");
    newP.innerText = `new Pragraph Element id = ${newP.id}`;
    webPreview.appendChild(newP);
    UX_Load_indv(newP);
}


function newElement_ID(HTMLElement) {

    var ID;
    var IDnumber = 0;
    let HTMLElement_length = HTMLElement.length;

    document.querySelectorAll(HTMLElement).forEach(element => {
        // if USER didn't changed the ID
        if (element.id.substring(0, HTMLElement_length + 1) == HTMLElement + "_") {
            if (IDnumber <= Number(element.id.substring(HTMLElement_length + 1))) {
                IDnumber = Number(element.id.substring(HTMLElement_length + 1));
            }
        }
    });
    ID = HTMLElement + "_" + (IDnumber + 1);
    return ID;
}