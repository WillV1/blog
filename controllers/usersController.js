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
  db.User.findOne({username: req.body.username}, async (err, user) => {
    if (err) return console.log(err);
    if (user) res.send("User already exists");
    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await db.User.create({username: req.body.username, password: hashedPassword})
      .then((savedUser) => {
        res.json({user: savedUser})
      })
      .catch((err) => {
        console.log('Error on create route', err)
        res.json({Error: 'Unable to save data'})
      })
    }
  })
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