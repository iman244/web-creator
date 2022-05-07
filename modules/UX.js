// UX_Load will be _callback of jsonServer_attachData() in app.js.
// it will loaded our ux to app. In this commit our UX is just selecting tag.

export function UX_Load() {

    // selecting elements in web-preview
    const webPreview = document.querySelectorAll("#web-preview")[0]
    let selected;

    function UX_selecting() {
        if (selected && !event.target.classList.contains("selected")) { selected.forEach(element => element.classList.toggle("selected")) };
        event.target.classList.toggle("selected");
        selected = document.querySelectorAll(".selected");
    }

    webPreview.childNodes.forEach(element => element.addEventListener('click', UX_selecting))

    // speech button
    const UI_Speech = document.getElementById("UI_Speech");
    UI_Speech.addEventListener('click', function (event) { event.target.classList.toggle("speech-is-running") })
}