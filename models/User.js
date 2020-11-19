const mongoose = require('mongoose');
const userSchema = new mongoose.Schema ({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  bio: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;