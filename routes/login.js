const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/passport');

//routes
router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return console.log(err)
    if (!user) res.send("No User Exists")
    else {
      req.logIn(user, err => {
        if (err) return console.log(err)
        res.send('Successfully Authenticated')
        console.log(req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;