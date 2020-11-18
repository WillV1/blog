import mongoose from 'mongoose';
const blogSchema = new mongoose.Schema ({
  publishDate: Date,
  title: {
    type: String,
    required: true
  },
  text: Text
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;