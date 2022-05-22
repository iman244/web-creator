/*
export --> app.js
*/


import { USER_CSS } from "../USER/USER_css.js";


/*
Read me

We save div#web-preview.innerHTML in USER_data.json
*/


export async function jsonServer_saveData() {

    // remove selected and selected_hard style first. we don't app class saved in user data.
    let allElements = document.querySelectorAll("*"); allElements.forEach(element => { element.classList.remove("selected"); element.classList.remove("selected_hard"); })


    const uriHTMLtags = 'http://localhost:3000/HTMLtags/1';
    const webPreview = document.getElementById('web-preview');

    const webPreview_innerHTML = { webPreview_innerHTML: webPreview.innerHTML };

    await fetch(uriHTMLtags, { method: 'PATCH', body: JSON.stringify(webPreview_innerHTML), headers: { 'content-Type': 'application/json' } });


    const uriCSSrules = 'http://localhost:3000/CSSrules/1'

    let CSSrules_List = [];
    Array.from(USER_CSS.cssRules).forEach(element => { let CSSrule = {}; CSSrule.cssText = element.cssText; CSSrules_List.push(CSSrule); });

    let CSSrules_Object = { CSSrules_List }
    await fetch(uriCSSrules, { method: 'PATCH', body: JSON.stringify(CSSrules_Object), headers: { 'content-Type': 'application/json' } });

}