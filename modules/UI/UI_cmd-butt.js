// we are adding functionality to button#cmd-butt-p to add a paragraph in div#res.
// feature: list of all p tag store in lengthP and when new p tag is adding
// we manually add 1 to lengthP to update its value in adding time. then
// we update length value.

export function UI_addP() {

    let webPreview = document.getElementById("web-preview")
    let lengthP = document.querySelectorAll('p').length; // we must think of do we need both lengthP and document.getElementById("web-preview").childElementCount?

    let newP = document.createElement("p")
    newP.innerText = `new Pragraph Element ${lengthP + 1}`
    webPreview.appendChild(newP)

}