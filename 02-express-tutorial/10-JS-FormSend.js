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

//Parse JSON data
app.use(express.json());

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data:people});
})

//POST is used to send data to the server.
app.post('/api/people', (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }
    res.status(201).send({success: true, person: name}); //201 is the status code for Created
   })

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

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body; // We need to parse the body of the request
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }   

      res.status(201).send({success: true, data: [...people, name ]});
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    //This is a PUT request to update a person with the given id.

    const person = people.find((person)=>{
        person.id === Number(id);
        //If the person with the given id is found, return it.
        if(!person){
             return res.status(404).json({success: false,
            msg: 'No person with this id'})
        }

        const newPeople = people.map((person)=>{
            if(person.id === Number(id)){
                person.name = name;
            }
            return person;
        })
        return res.status(200).json({success: true, data:newPeople});
    })
});

app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    //This is a DELETE request to delete a person with the given id.
   const person = people.find((person)=>{
        return person.id === Number(id)
    })

   if(!person){
        return res.status(404).json({success: false,
            msg: `No person with this id  ${id}`})
   }
//    return res.status(200).json({success: true,
//     data: person
//    })

const newPeople = people.filter((person)=>{
    return person.id !== Number(id)})
    //If the person with the given id is not found, return it.
    return res.status(200).json({success: true, data:newPeople});

})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
});


//Notes
// When a user submits a form on the frontend (HTML),
// the form sends the data to your Express server.
//  The name value comes from the <input> field with the 
//  name="name" attribute.

//This built-in middleware parses the form data (application/x-www-form-urlencoded) and attaches it to req.body. So if you submit "Anita" in the form, Express receives:

// req.body = {
//   name: 'Anita'
// }

//Extract as - const { name } = req.body;

//If you're submitting JSON (e.g., from Postman), you need:
//app.use(express.json());

//In short:

// * The HTML form has `<input name="name" />`, which sends the value as `{ name: 'value' }` to the server.
// * Express uses `express.urlencoded({ extended: false })` to parse this form data.
// * The parsed data becomes available as `req.body`, so you can access it with `const { name } = req.body`. ✅
