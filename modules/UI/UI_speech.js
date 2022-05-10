/*
export --> app.js
*/


import { HTML_addElement_P } from "../../app.js";
import { HTML_Speech_Button } from "../../app.js";


/*
Read me

We say that we need SpeechRecognition. Then we define our grammar.
Then make instance of SpeechRecognition and another object for .grammar.
Then we config our object. UI_Speech_Load will make button#UI_Speech_Load
work. Result will handle in a switch.
*/

// say that we want Speech Recognition
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var Speech_grammar_addElement_P_text = '#JSGF V1.0; grammar addP; public <HTML_addElement_P> = add p'

var Speech_addElement_P = new SpeechRecognition()
var Speach_grammar_addElement_P = new SpeechGrammarList(); Speach_grammar_addElement_P.addFromString(Speech_grammar_addElement_P_text, 1);

// config Speech_addElement_P
Speech_addElement_P.grammars = Speach_grammar_addElement_P;
Speech_addElement_P.continuous = false;
Speech_addElement_P.lang = 'en-US';
Speech_addElement_P.interimResults = false;
Speech_addElement_P.maxAlternatives = 1;


// run speech; it will be run as a callback in jsonServer_attachData
export function UI_Speech_Load() {
    event.target.classList.toggle("speech-is-running");
    if (HTML_Speech_Button.classList.contains("speech-is-running")) { Speech_addElement_P.start() }
    else { Speech_addElement_P.stop() }
}

// manage result
Speech_addElement_P.onresult = function () {
    var result = event.results[0][0].transcript;
    console.log("before switch " + result)
    switch (result) {
        case "add p":
            HTML_addElement_P.click()
    }
}