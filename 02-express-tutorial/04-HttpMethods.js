//HTtP Methods
//GET, POST, PUT, DELETE, PATCH
//GET - READ DATA
//POST - INSERT DATA
//PUT - UPDATE DATA
//DELETE - DELETE DATA

console.log('Express Tutorial');

const http = require('http');
const {readFileSync} = require('fs');
//readFileSync is a method from the 'fs' module that allows you to read files synchronously.
//It reads the entire contents of a file and returns it as a string or buffer, depending on the encoding specified.
//In this case, we are using it to read the contents of the 'index.html' file synchronously, which means the code will wait until the file is fully read before

//get all files
const homePage = readFileSync('./navbar-app/index.html'); // Read the home page HTML file
const homeStyles = readFileSync('./navbar-app/styles.css'); // Read the home page CSS file
const homeImage = readFileSync('./navbar-app/logo.svg'); // Read the home page image
const homeLogic = readFileSync('./navbar-app/browser-app.js'); // Read the home page
// JavaScript file

// Create a simple HTTP server using Node.js
// This server will respond with a welcome message when accessed
const server = http.createServer((req,res)=>{
    const url = req.url; // Get the requested URL
    if(url === '/'){
        res.writeHead(200,{'contentType':'text/html'}); // Set the response header to indicate HTML content)
   res.write(homePage);
   res.end();//It is important to call res.end() to signal that the response is complete
    }

    //Styles page
    else if(url === '/styles.css'){
        res.writeHead(200,{'contentType':'text/css'}); // Set the response header to indicate CSS content )
        res.write(homeStyles);
        res.end();
    }

    //image/logo page
    else if(url === '/logo.svg'){
        res.writeHead(200,{'contentType':'image/svg+xml'}); // Set the response header to indicate CSS content )
        res.write(homeImage);
        res.end();
    }

    //JavaScript page
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'contentType':'text/javascript'}); // Set the response header to indicate JavaScript content )
        res.write(homeLogic);
        res.end();
    }

    //404 Not Found
    else{
        res.writeHead(404,{'contentType':'text/html'}); // Set the response header to indicate HTML content )
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
   })

//port is that the server will listen on
//that is 3000
server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})

//To make our lives easir and not manually type those urls etc that we did,
//we use Express js
//Continue to Express Js