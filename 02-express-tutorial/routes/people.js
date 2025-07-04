const express = require('express');
//Instead of using the default express instance, we create router instance
const router = express.Router();

//All routes
//Frpm app to router that will handle the routing
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');

router.get('/',getPeople)

//POST is used to send data to the server.
router.post('/', createPerson)


router.post('/postman', createPersonPostman)

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

//we can chain all methods
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;
//This module exports the router instance, which can be used in the main app file to handle
