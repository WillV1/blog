const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config()

const POST = process.env.PORT || 3001;

//middleware -------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitalized: true
}));

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//routes
const routes = require('./routes');
const { request } = require('express');

//routes -----------------------------
app.use('/register', routes.register);
app.use('/login', routes.login);
app.use('/blogs', routes.blogs);
app.use('/users', routes.users);

app.get('/', (req, res) => {
  console.log("It's working!")
  res.send('Is this working?')
})

app.listen(POST, () => {
  console.log(`Express server is running on PORT ${POST}`)
})