// we are adding functionality to button#cmd-butt-p to add a paragraph in div#res.
// feature: list of all p tag store in lengthP and when new p tag is adding
// we manually add 1 to lengthP to update its value in adding time. then
// we update length value.

var cmdButtP = document.getElementById('cmd-butt-p');

cmdButtP.addEventListener("click", addP);

lengthP = document.querySelectorAll('p').length;

function addP() {
    
    document.getElementById("web-preview").innerHTML += `<p>new P, ${lengthP + 1}</p>`;

    lengthP = document.querySelectorAll('p').length
}