// defining schema
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
const signupSchema = new mongoose.Schema({
    firstName :{
        type: String,
        trim: true,
        required: true,
    },
    lastName :{
        type: String,
        trim: true,
        required: true,
    },
    role :{
        type: String,
        trim : true,
        required: true,
    },
 email :{
    type: String,
    trim:true,
    required: true,
    unique: true,
 },
contact :{
    type: Number,
    trim : true,
    required: true,
    unique: true,
},
});
signupSchema.plugin(passportLocalMongoose,{
    usernameField: 'email'
})
module.exports = mongoose.model('signup', signupSchema); //the const.

//everyone who uses this form will be saved under'signup' in the db.
