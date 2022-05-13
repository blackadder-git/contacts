const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// load whatever swaggerUi.serve is
router.use('/api-docs', swaggerUi.serve);
//router.use('/', swaggerUi.serve);
// run setup with client requests /api-docs/
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
//router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;