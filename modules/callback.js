import { USER_CSS_Load } from "./USER/USER_css.js";
import { UX_Load } from "./UX/UX.js";

export let callbacks = []

// class define
class callback { constructor(task, queue) { this.task = task, this.queue = queue } addQueue() { callbacks.push(this) } }

// add your callback here
const USER_CSS_Load_c = new callback(USER_CSS_Load, 200); USER_CSS_Load_c.addQueue();
const UX_Load_c = new callback(UX_Load, 500); UX_Load_c.addQueue();


callbacks.sort((a, b) => { return a.queue - b.queue });