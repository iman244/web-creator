// we are adding functionality to button#cmd-butt-p to add a paragraph in div#res.
// feature: list of all p tag store in lengthP and when new p tag is adding
// we manually add 1 to lengthP to update its value in adding time. then
// we update length value.

import {attachData} from "./json-server.js"

async function postTag (tag) {

    const uri = 'http://localhost:3000/HTMLtags'

    await fetch(uri, {method: 'POST', body: JSON.stringify(tag), headers: {'content-Type': 'application/json'}})

}

export function addP() {
    
    let lengthP = document.querySelectorAll('p').length; // we must think of do we need both lengthP and document.getElementById("web-preview").childElementCount?

    let tag = {
        parent: 0,
        siblingIndex: document.getElementById("web-preview").childElementCount + 1,
        child: `new P, ${lengthP + 1}`,
        index: "",
        tag: "p",
        attribute : ""
    }

    postTag(tag)

    lengthP = document.querySelectorAll('p').length

    attachData();
}