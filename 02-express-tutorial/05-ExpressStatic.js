const express = require('express');
const path = require('path'); // Import the path module to handle file paths

const app = express();// Create an instance of the Express application


//If we dump the contents of the 'navbar-app' directory into the public directory,
// we can serve static files like CSS, images, and JavaScript without defining separate routes.
// The express.static middleware serves static files from the specified directory.
// In this case, it serves files from the 'navbar-app' directory.
// Use express.static middleware to serve static files from the 'navbar-app' directory
// This allows us to serve files like CSS, images, and JavaScript without defining separate routes

app.use(express.static('./navbar-app'));

app.get('/', (req, res) => {
  // This http req is invoked every time the user hits the home page
  res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
    // Use res.sendFile to send the index.html file as a response
});

app.get('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>');
    // This http req is invoked for all other pages that are not defined
    // The '*' wildcard matches all routes that are not explicitly defined
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
}); 