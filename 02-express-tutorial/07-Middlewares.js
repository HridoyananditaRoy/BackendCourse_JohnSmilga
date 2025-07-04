//Middleware
//It is the heart and soul of Express.js.
//It is a function that has access to the request object (req), 
// the response object (res), and the next middleware function in the application’s request-response cycle.

//It can perform the following tasks:
//- Execute any code.
//- Make changes to the request and response objects.
//- End the request-response cycle.
//- Call the next middleware function in the stack.
//- If the current middleware function does not end the request-response cycle,
//  it must call next() to pass control to the next middleware function.
//--------------------------------------------------------------------

const express = require('express');
const app = express();
const logger = require('./logger');

app.use(logger);

//app.use is a method in Express.js that mounts the middleware function
//  on the specified path.
//It is used to mount the middleware function on the specified path.
//If no path is specified, the middleware function will be executed
//  for all requests.

app.get('/', logger,(req,res)=>{
    //logger is referred to as a middleware function.
    //WE must pass pass it to the next middleware function in the stack
    
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url, time);
    //res.send is a method in Express.js that sends a response to the client.
    //It is used to send a response to the client.

    res.send('Home Page');
})

app.get('/about', (req,res)=>{
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time);

    //********** We dont need to copy paste this code in every route.
    //********** We can use middleware to handle this.

    res.send('About Page');
})

app.get('/api/products', (req,res)=>{
    res.send('Products Page');
})

app.get('/api/items', (req,res)=>{
    res.send('Items Page');
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
});