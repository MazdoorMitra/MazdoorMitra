const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Labour = mongoose.model('Labour', labourSchema);

module.exports = Labour;
