const eventEmitter = require('node:events');

const emitter= new eventEmitter();

console.log("The default maximum number of event listeners are:",emitter.getMaxListeners());
emitter.setMaxListeners(5);
console.log("The updated maximum number of event listeners are:",emitter.getMaxListeners());
