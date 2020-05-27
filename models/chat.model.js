const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  username: String,
  message: String
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;