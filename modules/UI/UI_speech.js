import { UI_cmdButtP } from "../../app.js";

const UI_Speech = document.getElementById("UI_Speech");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var Speech_grammar_addP_text = '#JSGF V1.0; grammar addP; public <addP> = add p'

var Speech_addP = new SpeechRecognition()
var Speach_grammar_addP = new SpeechGrammarList(); Speach_grammar_addP.addFromString(Speech_grammar_addP_text, 1);

// config Speech_addP
Speech_addP.grammars = Speach_grammar_addP;
Speech_addP.continuous = false;
Speech_addP.lang = 'en-US';
Speech_addP.interimResults = false;
Speech_addP.maxAlternatives = 1;

// manage result
Speech_addP.onresult = function (event) {
    var result = event.results[0][0].transcript;
    console.log("before switch " + result)
    switch (result) {
        case "add p":
            UI_cmdButtP.click()
    }
}

// run speech; it will be run as a callback in jsonServer_attachData
export function Speech_Load() {
    UI_Speech.addEventListener('click', function () {
        if (UI_Speech.classList.contains("speech-is-running")) { Speech_addP.start() }
        else { Speech_addP.stop() }
    })
}