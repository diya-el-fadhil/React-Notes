const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    age: Number,
    place: String,
    phone: Number
})

const userModel = mongoose.model('user', schema);

module.exports = userModel;