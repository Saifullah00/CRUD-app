const mongoose = require('mongoose');

//shape and content of docs ie model
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports= Userdb