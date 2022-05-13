const router = require('express').Router();

// route any uri that begins with /api-docs to the swagger file
router.use('/api-docs', require('./swagger')); // goto swagger.js

// route any uri that begins with /contacts to the contacts file
router.use('/contacts', require('./contacts')); // goto contacts.js

// home page
router.get('/', (req, res) => {
    res.send('Ahoy, Madison!!');
});

module.exports = router;