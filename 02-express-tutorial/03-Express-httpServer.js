//Express

//Express is a minimal and flexible Node.js web application framework that provides a robust set of features
//for building web and mobile applications. It simplifies the process of creating server-side applications
//by providing a set of tools and utilities for handling HTTP requests, routing, middleware, and more.
//Express is often used to build RESTful APIs, single-page applications, and traditional web applications
//by providing a simple and intuitive API for handling HTTP requests and responses.

const { readFileSync } = require('fs');
const homePage = readFileSync('./navbar-app/index.html'); // Read the home page HTML file
readFileSync('./navbar-app/styles.css'); // Read the home page CSS file
readFileSync('./navbar-app/logo.svg'); // Read the home page image
readFileSync('./navbar-app/browser-app.js'); // Read the home page JavaScript file

const express = require('express');

const app = express();

app.get('/',(req, res)=>{
 //This http req is invoked everytime the user hits the home page
   res.status(200).send('<h1>Home Page</h1>');
})

app.get('/about',(req,res)=>{
    //This http req is invoked everytime the user hits the about page
    res.status(200).send('<h1>About Page</h1>');
})

app.all('*',(req,res)=>{
    //* is a wildcard that matches all routes
    //This http req is invoked for all other pages that are not defined
    res.status(404).send('<h1>Resource Not Found</h1>');
    //404 is a status code that indicates that the requested resource was not found
    //We can also use res.status(404).sendFile('path/to/file') to send a file as a response
    //or res.status(404).json({message: 'Resource Not Found'}) to send a JSON response

})

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});




//Methods to handle different HTTP requests
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
