const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: false,
  },
  methode: {
    type: String,
    required: false,
  },
  phone_number: {
    type: String,
    required: false,
  },
  activation_code: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
