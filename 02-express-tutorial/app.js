const express = require('express');
const app = express();


const people = require('./routes/people');
const auth = require('./routes/auth');

// Correctly use router (not data destructuring)
const peopleRouter = require('./routes/people');

//static assets
app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended: false}));
//Builtin middleware function in Express.js

//Parse JSON data
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/login', auth);
//This middleware is used to parse the incoming request bodies in a middleware before your handlers, available
// under the req.body property.


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
});
//This will start the server on port 5000 and listen for incoming requests.
