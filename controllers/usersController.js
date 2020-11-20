const db = require('../models');
const bcrypt = require('bcrypt');

//index route
const index = (req, res) => {
  db.User.find({})
  .then((foundUser) => {
    res.json({users: foundUser})
  })
  .catch((err) => {
    console.log('Error on index.route', err);
    res.json({Error: 'Unable to retrieve user'})
  })
};

//show post
const show = (req, res) => {
  db.User.findById(req.params.id)
  .then((foundUser) => {
    res.json({user: foundUser})
  })
  .catch((err) => {
    console.log('Error on show route', err)
    res.json({Error: 'Unable to retrieve data'})
  })
};

//post route
const create = (req, res) => {
  console.log(req.body);
  db.User.findOne({ email: req.body.user.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new db.User({
        email: req.body.user.email,
        password: req.body.user.password
      });

// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

//put route
const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  .then((updatedUser) => {
    res.json({user: updatedUser})
  })
  .catch((err) => {
    console.log('Error on update route', err)
    res.json({Error: 'Unable to update data'})
  })
};

//delete route
const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id)
  .then((deletedUser) => {
    res.json({user: deletedUser})
  })
  .catch((err) => {
    console.log('Error on delete route', err)
    res.json({Error: 'Unable to delete data'})
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}