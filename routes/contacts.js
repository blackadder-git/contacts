// routes in this file all being with /contacts
const router = require('express').Router();

const contactsController = require('../controllers/contacts');

// Create a GET request in your contacts route file that will return all of the documents in your contacts collection.
router.get('/', contactsController.getAll); // contacts/

// Create another GET request in your contacts route file that will return a single document from your contacts collection where an id matches the id from a query parameter.
router.get('/:id', contactsController.getSingle); // contacts/1234567890

// Create a POST route to create a new contact. All fields are required. Return the new contact id in the response body.
router.post('/create', contactsController.createContact); // contacts/create/???

// Create a PUT route to update a contact. This route should allow for a url similar to this: api-url-path/contacts/id-to-modify. Return an http status code representing the successful completion of the request.
router.put('/update/:id', contactsController.updateContact); // contacts/update/1234567890/???

// Create a DELETE route to delete a contact. Return an http status code representing the successful completion of the request.
router.delete('/delete/:id', contactsController.deleteContact); // contacts/delete/1234567890/???

module.exports = router;