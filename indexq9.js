const eventEmitter=require('node:events');
const data=function(){
    console.log("Thanks for subscribing to college wallah");   
}
const emitter=new eventEmitter();
emitter.on("subscribe",data);
emitter.emit("subscribe");
emitter.off("subscribe",data);
emitter.emit("subscribe");