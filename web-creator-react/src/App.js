import './App.css';
import InformationTab from "./components/InformationTab/InformationTab.js"

function App() {

  window.onload = () => {

    let USERdocumentIframe = document.getElementById("USERdocumentIframe");

    let USER_document = document.implementation.createHTMLDocument("USER document");
    let p = USER_document.createElement("p");
    p.innerText = "No Document Is Loaded Yet";
    USER_document.body.appendChild(p);

    let importedNode = USERdocumentIframe.contentDocument.importNode(USER_document.documentElement, true);
    USERdocumentIframe.contentDocument.replaceChild(importedNode, USERdocumentIframe.contentDocument.documentElement);

  }


  return (
    <div className="App">

      <InformationTab />
      <iframe id="USERdocumentIframe" src="about:blank" />

    </div >
  );
}

export default App;