const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// config body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000);