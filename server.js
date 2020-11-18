const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const POST = process.env.PORT || 3001;

//controllers
const ctrl = require('./controllers');

//middleware
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/blogs', ctrl.blogs);
app.use('/profiles', ctrl.profiles);

app.use('*', (req, res))

app.listen(POST, () => {
  console.log(`Express server is running on POST ${POST}`)
})