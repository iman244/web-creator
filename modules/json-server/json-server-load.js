/*
export --> app.js
*/


/*
import

_callback will be callbacks list in callback.js.
*/
import { USER_CSS } from "../USER/USER_css.js";

/*
Read me

We are getting data from USER_data.json and then added to div#web-preview.
Then we run callbacks (in callback.js).
*/


export const jsonServer_loadData = async (_callback) => {

    const uriHTMLtags = 'http://localhost:3000/HTMLtags';

    const resHTMLtags = await fetch(uriHTMLtags);
    const postHTMLtags = await resHTMLtags.json();

    const webPreview = document.getElementById("web-preview");
    webPreview.innerHTML = postHTMLtags[0].webPreview_innerHTML;

    const uriCSSrules = 'http://localhost:3000/CSSrules';

    const resCSSrules = await fetch(uriCSSrules);
    const postCSSrules_Object = await resCSSrules.json();

    postCSSrules_Object[0].CSSrules_List.forEach(element => { USER_CSS.insertRule(element.cssText, USER_CSS.cssRules.length) });


    _callback.forEach(callback => { callback.task() });
}