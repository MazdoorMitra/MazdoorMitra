const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  mobileNumber: String,
  groupId: String, // Group identifier
});

module.exports = mongoose.model('User', userSchema);
