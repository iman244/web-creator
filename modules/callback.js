import { UX_Load } from "./UX.js";
import { Speech_Load } from "./UI/UI_speech.js";

export let callbacks = []

// class define
class callback { constructor(task, queue) { this.task = task, this.queue = queue } addQueue() { callbacks.push(this) } }

// add your callback here
const UX_Load_c = new callback(UX_Load, 0); UX_Load_c.addQueue();
const Speech_Load_c = new callback(Speech_Load, 1); Speech_Load_c.addQueue();

callbacks.sort((a, b) => { return a - b })