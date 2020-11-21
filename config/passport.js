const db = require('../models');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

  passport.use(
    new localStrategy((username, password, done) => {
      db.User.findOne({username: username}, (err, user) => {
        if(err) return console.log(err);
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) console.log(err)
          if (result === true) {
            return done(null, user)
          }
          else {
            return done(null, false);
          }
        });
      });
    })
  );
  passport.serializeUser((user, cb) => {
    cb(null, user._id)
  })
  passport.deserializeUser((id, cb) => {
    db.User.findOne({_id: id}, (err,user) => {
      cb(err, user)
    });
  });
};