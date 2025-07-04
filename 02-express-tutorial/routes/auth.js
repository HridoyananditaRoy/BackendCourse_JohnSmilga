const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide name');
    //401 is the status code for Unauthorized

    console.log(req.body);
    res.send('POST Request');
})


router.post('/:name',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false,
            msg: 'Please provide name value'
        })
    }
    //res.status(201).send({success: true, person: name}); //201 is the status code for Created

    const newPeople = {id: Date.now(), name};
    return res.status(201).send({success: true, person: name});

})


module.exports = router;