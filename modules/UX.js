// UX_Load will be _callback of jsonServer_attachData() in app.js.
// it will loaded our ux to app. In this commit our UX is just selecting tag.

export function UX_Load() {

    const webPreview = document.querySelectorAll("#web-preview")[0]
    let selected;

    function UX_selecting(event) {
        if (selected && !event.target.classList.contains("selected")) { selected.forEach(element => element.classList.toggle("selected")) };
        event.target.classList.toggle("selected");
        selected = document.querySelectorAll(".selected");
    }

    webPreview.childNodes.forEach(element => element.addEventListener('click', UX_selecting))
}