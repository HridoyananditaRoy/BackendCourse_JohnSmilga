const express = require('express');
const app = express();
let {people} = require('./data');

//static assests
app.use(express.static('./methods-public'));

//Middleware
//GET is the default method for retrieving data from a server.

//parse form data
app.use(express.urlencoded({extended: false}));
//Builtin middleware function in Express.js
//It parses incoming requests with urlencoded payloads.

//This middleware is used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property.
//It parses the incoming request bodies in a middleware before your handlers, available

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data:people});
})

//POST is used to send data to the server.

app.post('/login', (req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide name');
    //401 is the status code for Unauthorized

    console.log(req.body);
    res.send('POST Request');
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
});