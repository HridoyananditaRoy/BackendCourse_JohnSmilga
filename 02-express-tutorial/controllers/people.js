let { people } = require('../data');

const getPeople = (req,res)=>{
    res.status(200).json({success: true, data:people});
}

const createPerson = (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }
    res.status(201).send({success: true, person: name}); //201 is the status code for Created
   }

   const createPersonPostman = (req,res)=>{
    const {name} = req.body; // We need to parse the body of the request
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }   

      res.status(201).send({success: true, data: [...people, name ]});
}

const updatePerson = (req,res)=>{
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
}

const deletePerson = (req,res)=>{
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

}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
};