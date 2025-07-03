console.log('Express Tutorial');

const http = require('http');

// Create a simple HTTP server using Node.js
// This server will respond with a welcome message when accessed
const server = http.createServer((req,res)=>{
   res.writeHead(200,{'contentType':'text/html'}); // Set the response header to indicate HTML content)
   res.write('<h1>Home Page</h1>');
   res.end();//It is important to call res.end() to signal that the response is complete
})

//port is that the server will listen on
//that is 3000
server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})

//Status Codes---------------------------------------------------------------
//Http status codes indicate whether a specific HTTP request has been successfully completed.
//The response status code is a three-digit integer that indicates the result of the request.
//The first digit of the status code defines the class of response.
//The last two digits do not have any categorization role.
//The most common status codes are:
//200 OK: The request has succeeded.
//404 Not Found: The server can not find the requested resource.
//400 Bad Request: The server could not understand the request due to invalid syntax.
//500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.