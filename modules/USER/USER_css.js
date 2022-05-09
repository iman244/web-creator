/*
export --> 
    callback.js
    F_UI_information.js
*/


/*
Read me

We are making a CSSStyleSheet object to save user css in USER_CSS
and adopt it in Style Sheets.

!! This file will be moved to jsonServer_loadData.
*/


export let USER_CSS = new CSSStyleSheet();

export function USER_CSS_Load() {
    document.adoptedStyleSheets = [USER_CSS]
}