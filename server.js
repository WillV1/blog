const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const POST = process.env.PORT || 3001;

//routes
const routes = require('./routes');

//middleware
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/blogs', routes.blogs);
app.use('/users', routes.users);

app.listen(POST, () => {
  console.log(`Express server is running on POST ${POST}`)
})