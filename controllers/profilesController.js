const express = require('express');
const router = express.Router();
const db = require('../models');

//index route
router.get('/', (req, res) => {})

//create route
router.get('/new', (req, res) => {})

//post route
router.post('/', (req, res) => {
  db.Profile.create((err, newProfile) => {
    if(err) return console.log(err)
  })
})

//show profile
router.get('/:id', (req, res) => {
  db.Profile.findById(req.params.id, (err, blog) => {
    if(err) return console.log(err);
  })
})

//edit route
router.get('/:id/edit', (req, res) => {
  db.Profile.findById(req.params.id, (err, profileToEdit) => {
    if (err) return console.log(err)
  })
})

//put route
router.put('/:id', (req, res) => {
  db.Profile.findByIdAndUpdate(
    req.params.id,
    {new: true},
    (err, updatedProfile) => {
      if(err) return console.log(err);
    }
  )
})

//delete route
router.delete('/:id', (req, res) => {
  db.Profile.findByIdAndDelete(req.params.id, (err, profileToDelete) => {
    if(err) return console.log(err);
  })
})

module.exports = router;