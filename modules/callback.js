import { UX_Load } from "./UX.js"

export let callbacks = []

class callback { constructor(task, queue) { this.task = task, this.queue = queue } addQueue() { callbacks.push(this) } }

const UX_Load_c = new callback(UX_Load, 0); UX_Load_c.addQueue()

callbacks.sort((a, b) => { return a - b })