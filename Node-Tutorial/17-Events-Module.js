const EventEmitter = require('events'); //event emitter module

const customEmitter = new EventEmitter(); //create a new instance of the event emitter
//we can use the event emitter to create our own events and listen for them

//cusom Emitter is an instance of the EventEmitter class
//we can use the on method to listen for events
//that is, we can use the on method to register a callback function
//that will be called when the event is emitted

//First we need to register an event listener
//we can use the on method to listen for events, then we can use the emit method to emit the event
//we can use the on method to register a callback function 
// that will be called when the event
customEmitter.on('response',(name, id)=>{
    console.log(`Data received username: ${name}, id: ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`Some other logic here `);
})
//we can register multiple callback functions for the same event

customEmitter.emit('response', 'john', 34); //emit the event
//emit the event means to trigger the event

//Notes----------------------------------------------------------------------
//Event Driven Programming ->
// The event loop is a mechanism that allows js to perform non-blocking operations
// => meaning it can skip tasks that are not ready yet
// and continue executing other code when the task is complete,
// the browser or nodejs will notify js when the task is complete

//Events vs Event Driven Programming
//Events are actions that occur in the browser or nodejs
//Event Driven Programming is a programming paradigm that uses events to trigger actions
//In js, we can use events to trigger actions when a user interacts with the page
//For example, when a user clicks a button, we can trigger an action to 
// change the text of the button
//In nodejs, we can use events to trigger actions when a user makes a request to the server
// For example, when a user makes a request to the server, we can trigger an action to
// read a file and send the contents of the file back to the user
//Wheras in the browser, we can use events to trigger actions when a user interacts with the page
// For example, when a user clicks a button, we can trigger an action to 
// change the text of the button

//Event Driven Programming example:
// In nodejs, we can use events to trigger actions when a user makes a request to the server
// For example, when a user makes a request to the server, we can trigger an action
// to read a file and send the contents of the file back to the user
