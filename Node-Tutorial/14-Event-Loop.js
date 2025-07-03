//Event Loop
//Offloading
//-----------------------------------------------------------------------------------------
//Example 1:

const {readFile} = require('fs');
//readFile is asynchronous meaning it will not block the execution of the code
//The event loop is a mechanism that allows js to perform non-blocking operations
// => meaning it can skip tasks that are not ready yet
// and continue executing other code when the task is complete,
console.log("Started a first task");
readFile('./context/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
console.log(result);
console.log("Done with this task");
});
console.log("Starting next task");
//-----------------------------------------------------------------------------------------
//Example 2:

console.log("Started a first task");
setTimeout(()=>{
    console.log("Timer 1 finished"); //it gets executed after 0 milliseconds
    //it gets offloaded to the event loop
},0);
console.log("Starting next task");
//-----------------------------------------------------------------------------------------
//Example 3:

setInterval(() => {
  console.log('hello world');
}, 1000);
console.log('I will run first');

//keep the event loop running
//since the setInterval is asynchronous, it will not block the execution of the code
//the event loop will keep running and executing the setInterval callback every 1000 milliseconds
//-----------------------------------------------------------------------------------------

//js is synchronous and single threaded meaning
// => it can only do one thing at a time
//but it can offload tasks to the browser or nodejs => called the event loop
//the event loop is a mechanism that allows js to perform non-blocking operations 
// => meaning it can offload tasks to the browser or nodejs
// and continue executing other code when the task is complete,
//  the browser or nodejs will notify js when the task is complete
//this is how js can perform non-blocking operations like reading files,
//  making network requests, etc.
//-----------------------------------------------------------------------------------------
//The event loop is a mechanism that allows js to perform non-blocking operations
//the event loop is a single thread that runs in the background 
// and checks for tasks to execute
//Non Blocking Operations meaning
// => js can offload tasks to the browser or nodejs 
// and continue executing other code when the task is complete,
// the browser or nodejs will notify js when the task is complete
// => this is how js can perform non-blocking operations like reading files,
// making network requests, etc.
//-----------------------------------------------------------------------------------------
//In short, the event loop is a mechanism that allows js to perform non-blocking operations
// => meaning it can skip tasks that are not ready yet
// and continue executing other code when the task is complete,
// the browser or nodejs will notify js when the task is complete
// => this is how js can perform non-blocking operations like reading files,
// making network requests, etc.
//-----------------------------------------------------------------------------------------
//If we have 100 tasks to execute,the next step will execute first before call back completes

//if we are running an application that has a lot of tasks to execute,
// we can use the event loop to offload tasks to the browser or nodejs making it more efficient
// and not making our users wait for a long time

//-----------------------------------------------------------------------------------------