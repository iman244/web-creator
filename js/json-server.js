// We define documentBuilder() that can convert nested tags in ../res-data/data.json to html document.


function documentBuilder(element) {

    let document = "";
    let innerDocument = "";

    if(element.tag) {
        if(Array.isArray(element.child)){element.child.forEach(element => {innerDocument += documentBuilder(element)});}
        else{innerDocument += element.child;}   
    
            document += `<${element.tag} ${element.attribute}>${innerDocument}</${element.tag}>`
    
        return document;    
    }

    else{
        document = element.child
        return document;
    }
    
}


const attachData = async () => {

    const webPreview = document.getElementById("web-preview")

    const uri ='http://localhost:3000/HTMLtags';

    const res = await fetch(uri);
    const post = await res.json();

    let DataWebPreview = ""

    post.forEach(element => {

        DataWebPreview += documentBuilder(element)

    });

    webPreview.innerHTML = DataWebPreview;
}

window.addEventListener('DOMContentLoaded', () => attachData())