
//req => middleware => res
//Middleware function to log request details
const logger = (req, res, next)=>{
    //It will supply request object, response object and next function
    //to the logger function by Express which is a middleware function.
    //next function is used to pass control to the next middleware function in the stack.

     const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); // Call next() to pass control to the next middleware function
    //If we dont call next() then the request will hang and the response will not be
    //sent to the client.

    //res.send('Testing Middleware');
}

//Export the logger function to use it in other files
module.exports = logger;