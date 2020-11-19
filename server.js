const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config()

const POST = process.env.PORT || 3001;

//routes
const routes = require('./routes');

//middleware -------------------------------
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitalized: true
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


//routes -----------------------------
app.use('/register', routes.register);
app.use('/login', routes.login);
app.use('/blogs', routes.blogs);
app.use('/users', routes.users);

app.listen(POST, () => {
  console.log(`Express server is running on POST ${POST}`)
})