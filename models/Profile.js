const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema ({
  username: {
    type: String,
    required: true
  },
  email: {
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
  }]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;