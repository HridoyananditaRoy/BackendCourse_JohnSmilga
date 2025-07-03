const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("Welcome to our home page");
// })

//Using Event Emitter to create a simple server
//Event Emitter is a module that allows us to create our own events and listen for them

const server = http.createServer()
//createServer is a method that creates a new server instance
//we can use the server instance to listen for requests and respond to them
server.on('request',(req,res)=>{
    res.end("Welcome to our home page");
    //request is an event that is emitted when a request is made to the server
    //That is, when a user makes a request to the server,
    //the request event is emitted and we can listen for it using the on method

    //Example: 
    //we can use the on method to listen for the request event
    //and respond to it by sending a response back to the client

    //we can use the on method to listen for the request event
    //and respond to it by sending a response back to the client
    //res.end is a method that sends a response back to the client
    //it is used to end the response and send it back to the client
    //we can also use the res.write method to write data to the response
    //but we need to call res.end to send the response back to the client
    //here we are sending 'Welcome to our home page' as the response
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000...");
});
//This is a simple server that listens on port 5000 and responds with a message when
// a request is made to the server.

