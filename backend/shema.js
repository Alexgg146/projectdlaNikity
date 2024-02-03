const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    select: false,
  },
  age: {
    type: String,
    minlength: 1,
    maxlength: 30,
    default: ' ',
  },
  location: {
    type: String,
    minlength: 1,
    maxlength: 255,
    default: ' ',
  },
  opros: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
}, {
  versionKey: false,
});