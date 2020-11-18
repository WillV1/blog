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
  },
  author: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  }]
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;