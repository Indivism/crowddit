const mongoose = require('mongoose');

//define user schema
const userschema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

//export the user schema
module.exports = mongoose.model("user", userschema);