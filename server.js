const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const POST = 3001;

app.listen(POST, () => {
  console.log(`Express server is running on POST ${POST}`)
})