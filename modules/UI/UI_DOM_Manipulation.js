/*
export --> app.js
*/


import { UX_Load_indv } from "../UX/UX.js"


/*
Read me

we are adding functionality to button#UI_addElement_P to add a paragraph
in div#web-preview.
*/


export function UI_addElement_P() {

    let webPreview = document.getElementById('web-preview')

    let newP = document.createElement("p")
    newP.id = newP_ID()
    newP.innerText = `new Pragraph Element id = ${newP.id}`
    webPreview.appendChild(newP)
    UX_Load_indv(newP);
}


function newP_ID() {
    var ID = 0;
    document.querySelectorAll('p').forEach(element => {
        // if USER didn't changed the ID
        if (element.id.substring(0, 2) == 'P_') {
            if (ID < Number(element.id.substring(2))) {
                ID = Number(element.id.substring(2));
            }
        }
    });
    return `P_${ID + 1}`;
}