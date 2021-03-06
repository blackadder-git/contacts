// Create a GitHub repository
// Use npm init to start a new node project from scratch ... add the created node_modules folder to .gitignore so as not to be tracked remotely
// Create a web server

// before the project can use express, it needs to be installed with (npm install --save express)
const express = require('express');
const bodyParser = require('body-parser');
// database connection
const mongodb = require('./db/connect');

// PORT gets set on heroku shared server but won´t exist locally where 3000 is used instead
const port = process.env.PORT || 3000;
const app = express();

// Create a route in your server that will return you the name of someone you know.
// when the default page is hit, load the routes folder
app
.use(bodyParser.json()) // vs bodyParser.urlencoded({ extended: true })
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS
    // needed for react frontend to work
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    //res.setHeader('Content-Type', 'application/json'); // this line kills turn the swagger ui into source rather than html
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})
.use('/', require('./routes')); // goto routes

// listen if connection is made
mongodb.initDb((err, mongodb) => {

    // start server if db is connected
    if (err) {
        console.log(err);
    }
    else {
        // control C to stop server once it is up and running
        app.listen(port, () => {
            console.log(`Connected to DB and listening on port: ${port}`);
        });
    }
});