const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// config body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil router
let router = require("./router");
router(app); 

// config http port express
app.listen(3000);