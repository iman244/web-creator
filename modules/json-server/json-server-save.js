export async function postTag() {
    console.log("PostTag ran!");
    const uri = 'http://localhost:3000/HTMLtags/1'

    const webPreview_innerHTML = { webPreview_innerHTML: document.getElementById('web-preview').innerHTML }

    let a = await fetch(uri, { method: 'PATCH', body: JSON.stringify(webPreview_innerHTML), headers: { 'content-Type': 'application/json' } })

}