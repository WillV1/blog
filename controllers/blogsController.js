const db = require('../models');

//index route
const index = (req, res) => {
  db.Blog.find({})
  .then((foundBlogs) => {
    res.json({posts: foundBlogs})
  })
  .catch((err) => {
    console.log('Error on index.route', err);
    res.json({Error: 'Unable to retrieve data'})
  })
};

//show post
const show = (req, res) => {
  db.Blog.findById(req.params.id)
  .then((foundBlog) => {
    res.json({post: foundBlog})
  })
  .catch((err) => {
    console.log('Error on show route', err)
    res.json({Error: 'Unable to retrieve data'})
  })
};

//post route
const create = (req, res) => {
  db.Blog.create(req.body)
  .then((savedBlog) => {
    res.json({post: savedBlog})
  })
  .catch((err) => {
    console.log('Error on create route', err)
    res.json({Error: 'Unable to save data'})
  })
};

//put route 
const update = (req, res) => {
  db.Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  .then((updatedBlog) => {
    res.json({post: updatedBlog})
  })
  .catch((err) => {
    console.log('Error on update route', err)
    res.json({Error: 'Unable to update data'})
  })
};

//delete route
const destroy = (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id)
  .then((deletedBlog) => {
    res.json({post: deletedBlog})
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