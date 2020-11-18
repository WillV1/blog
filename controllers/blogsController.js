const express = require('express');
const router = express.Router();
const db = require('../models');

//index route
router.get('/', (req, res) => {})

//create route
router.get('/addpost', (req, res) => {})

//post route
router.post('/', (req, res) => {
  db.Blog.create((err, newBlogPost) => {
    if(err) return console.log(err)
  })
})

//show post
router.get('/:id', (req, res) => {
  db.Blog.findById(req.params.id, (err, blog) => {
    if(err) return console.log(err);
  })
})

//edit route
router.get('/:id/edit', (req, res) => {
  db.Blog.findById(req.params.id, (err, blogToEdit) => {
    if (err) return console.log(err)
  })
})

//put route 
router.put('/:id', (req, res) => {
  db.Blog.findByIdAndUpdate(
    req.params.id,
    {new: true},
    (err, updatedBlog) => {
      if(err) return console.log(err);
    }
  )
})

//delete route
router.delete('/:id', (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id, (err, blogToDelete) => {
    if(err) return console.log(err);
  })
})

module.exports = router;