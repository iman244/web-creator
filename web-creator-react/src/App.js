import './App.css';

function App() {

  window.onload = () => {

    let USER_document_iframe = document.getElementById("USER_document_iframe");

    let USER_document = document.implementation.createHTMLDocument("USER document");
    let p = USER_document.createElement("p");
    p.innerText = "No Document Is Loaded Yet";
    USER_document.body.appendChild(p);

    let importedNode = USER_document_iframe.contentDocument.importNode(USER_document.documentElement, true);
    USER_document_iframe.contentDocument.replaceChild(importedNode, USER_document_iframe.contentDocument.documentElement);

  }


  return (
    <div className="App">

      <p>information tab</p>
      <iframe id="USER_document_iframe" src="about:blank" />

    </div >
  );
}

export default App;