// we are adding functionality to button#cmd-butt-p to add a paragraph in div#res.
// feature: list of all p tag store in lengthP and when new p tag is adding
// we manually add 1 to lengthP to update its value in adding time. then
// we update length value.

export function UI_addP() {

    let webPreview = document.getElementById("web-preview")
    let lengthP = document.querySelectorAll('p').length; // we must think of do we need both lengthP and document.getElementById("web-preview").childElementCount?
    console.log(webPreview.querySelectorAll('p'))


    function newP_ID() {
        var ID = 0;
        document.querySelectorAll('p').forEach(element => {
            // if USER didn't changed the ID
            if (element.id.substring(0, 2) == 'P_') {
                if (ID < Number(element.id.substring(2))) {
                    console.log("Number(element.id.substring(2)):", true)
                    ID = Number(element.id.substring(2))
                }
            }
        })
        return `P_${ID + 1}`;
    }


    let newP = document.createElement("p")
    newP.id = newP_ID()
    newP.innerText = `new Pragraph Element id = ${newP.id}`
    webPreview.appendChild(newP)
}