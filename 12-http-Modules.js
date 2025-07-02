//http Module
 //its used to make our own backend server

 const http = require('http');

 const server = http.createServer((req, res)=>{
    if(req.url === '/'){
         res.end('Welcome to our homepage');//ends the response
    }

    if(req.url === '/about'){
         res.end('Here is the about page');
    }

    res.end(
        `<h1>OOps !!! </h1> //api
        <p>We cant seem to find the page </p>
        <a href="/">Back</a>`

    )
    //client is requesting anything
    //we're sending res back
    // res.write('Welcome to our homePage');//send back the response
    // res.end();//ends the response

 })

 server.listen(5000);//server is listening to at port 5000