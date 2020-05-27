const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var chatSchema = new Schema({
    user: String,
    message: String,
    _id: String,
    status: String
});