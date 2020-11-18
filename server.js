const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const POST = process.env.PORT || 3001;

const ctrl = require('./controllers');

app.use(bodyParser.urlencoded({extended: false}));


app.listen(POST, () => {
  console.log(`Express server is running on POST ${POST}`)
})