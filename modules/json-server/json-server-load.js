// We define documentBuilder() that can build nested tags from ../res-data/data.json.


export const jsonServer_attachData = async (_callback) => {

    const webPreview = document.getElementById("web-preview")

    const uri = 'http://localhost:3000/HTMLtags';

    const res = await fetch(uri);
    const post = await res.json();

    webPreview.innerHTML = post[0].webPreview_innerHTML

    _callback.forEach(callback => { callback.task() })
}