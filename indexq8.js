const eventEmitter=require('node:events');

const emitter=new eventEmitter();
emitter.on("subscribe",function(){
    console.log("Thanks for subscribing to college wallah");
})
emitter.emit("subscribe")