/*
export --> app.js
*/


/*
Read me

We save div#web-preview.innerHTML in USER_data.json
*/


export async function jsonServer_saveData() {

    const uri = 'http://localhost:3000/HTMLtags/1'
    const webPreview = document.getElementById('web-preview')

    const webPreview_innerHTML = { webPreview_innerHTML: webPreview.innerHTML }

    await fetch(uri, { method: 'PATCH', body: JSON.stringify(webPreview_innerHTML), headers: { 'content-Type': 'application/json' } })

}