const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema ({
  publishDate: Date,
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;