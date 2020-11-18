const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
console.log(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

mongoose.connection.on('error', (err) => console.log(err));

module.exports = {
  Blog: require('./Blog'),
  User: require('./User')
};