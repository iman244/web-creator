// We define documentBuilder() that can build nested tags from ../res-data/data.json.


function documentBuilder(element, post) {

    let document = "";
    let innerDocument = "";

    if (element.tag) {
        if (Array.isArray(element.child)) { element.child.sort(function (a, b) { return a.siblingIndex - b.siblingIndex }).forEach(element => { innerDocument += documentBuilder(post[element.id - 1], post) }); }
        else { innerDocument += element.child; }

        document += `<${element.tag} ${element.attribute}>${innerDocument}</${element.tag}>`

        return document;
    }

    else {
        document = element.child
        return document;
    }

}


export const jsonServer_attachData = async (_callback) => {

    const webPreview = document.getElementById("web-preview")

    const uri = 'http://localhost:3000/HTMLtags';

    const res = await fetch(uri);
    const post = await res.json();

    post.sort(function (a, b) { return a.id - b.id })

    let DataWebPreview = ""

    let roots = [];

    post.forEach(element => { if (element.parent === 0) { roots.push(element) } })

    roots.sort(function (a, b) { return a.siblingIndex - b.siblingIndex }).forEach(element => {

        DataWebPreview += documentBuilder(element, post)

    });

    webPreview.innerHTML = DataWebPreview;

    _callback()
}