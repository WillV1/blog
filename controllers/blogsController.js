const express = require('express');
const router = express.Router();
const db = require('../models');

//index route
router.get('/', (req, res) => {})

//create route
router.get('/addpost', (req, res) => {})

//post route
router.post('/', (req, res) => {})

//show route
router.get('/:id', (req, res) => {})

//edit route
router.get('/:id/edit', (req, res) => {})

//put route 
router.put('/:id', (req, res) => {

})

//delete route
router.delete('/:id', (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id, (err, blogToDelete) => {
    if(err) return console.log(err);
  })
})

module.exports = router;