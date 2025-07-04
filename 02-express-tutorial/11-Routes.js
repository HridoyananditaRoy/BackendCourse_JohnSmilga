const express = require('express');
const app = express();


//let {people} = require('./routes/people');

// Correctly use router (not data destructuring)
const peopleRouter = require('./routes/people');


app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended: false}));
//Builtin middleware function in Express.js

//Parse JSON data
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/login', peopleRouter);
//This middleware is used to parse the incoming request bodies in a middleware before your handlers, available
// under the req.body property.


app.post('/', (req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide name');
    //401 is the status code for Unauthorized

    console.log(req.body);
    res.send('POST Request');
})

//POST is used to send data to the server.
app.post('/', (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }
    res.status(201).send({success: true, person: name}); //201 is the status code for Created
   })


app.post('/postman',(req,res)=>{
    const {name} = req.body; // We need to parse the body of the request
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }   

      res.status(201).send({success: true, data: [...people, name ]});
})
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ success: false, msg: 'No person with this id' });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  return res.status(200).json({ success: true, data: newPeople });
});


app.delete('/:id',(req,res)=>{
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
