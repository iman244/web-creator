const attachData = async () => {

    const webPreview = document.getElementById("web-preview")

    const uri ='http://localhost:3000/HTMLtags';

    const res = await fetch(uri);
    const post = await res.json();

    let DataWebPreview = ""

    post.sort(function(a,b){a-b}).forEach(element => {
        
        DataWebPreview += 

        `<${element.tag}
            ${element.attribute}>
            ${element.inner}
         </${element.tag}>`

    });

    webPreview.innerHTML = DataWebPreview;
}

window.addEventListener('DOMContentLoaded', () => attachData())