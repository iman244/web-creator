/*
export --> app.js
*/


/*
import

_callback will be callbacks list in callback.js.
*/


/*
Read me

We are getting data from USER_data.json and then added to div#web-preview.
Then we run callbacks (in callback.js).
*/


export const jsonServer_loadData = async (_callback) => {

    const uri = 'http://localhost:3000/HTMLtags';

    const res = await fetch(uri);
    const post = await res.json();

    const webPreview = document.getElementById("web-preview");
    webPreview.innerHTML = post[0].webPreview_innerHTML;


    _callback.forEach(callback => { callback.task() });
}