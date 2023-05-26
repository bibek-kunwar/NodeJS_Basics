//register for event to be fired only one time using once
const EventEmitter = require('events')
const event = new EventEmitter();
event.on('sayMyName', () => {
  console.log("your name is bibek")
})
event.on('sayMyName', () => {
  console.log("your name is jung")
})

event.on('sayMyName', () => {
  console.log("your name is kunwar")
})

event.emit('sayMyName');


event.on("checkPage", (sc, msg) => {
  console.log(`status code is $(sc) and the message is ${msg}`)
})
event.emit("checkPage",200,"ok")