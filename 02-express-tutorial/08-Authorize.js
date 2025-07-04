//Multiple Middleware Fns

const express = require('express');
const app = express();
const logger = require('./logger');
const authorize  = require('./authorize');

//app.use([logger, authorize]);
app.use(express.static('./public'));

//app.use is a method in Express.js that mounts the middleware function
//  on the specified path.

app.get('/', (req,res)=>{
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
   
    //********** We dont need to copy paste this code in every route.
    //********** We can use middleware to handle this.

    res.send('About Page');
})

app.get('/api/products', (req,res)=>{
    res.send('Products Page');
})

app.get('/api/items',[logger, authorize], (req,res)=>{
    console.log(req.user);
    //req.user is set by the authorize middleware
    //It is used to access the user object set by the authorize middleware.
    res.send('Items Page');
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
});