// defining schema
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
const productShema = new mongoose.Schema({
    produceName :{
        type: String,
        trim: true,
        required: true,
    },
    produceType :{
        type: String,
        trim: true,
        required: true,
    },
    tonnage :{
        type: Number,
        trim : true,
        required: true,
    },
 cost :{
    type: Number,
    trim:true,
    required: true,
 },
});
module.exports = mongoose.model('product', productShema); //the const.

//everyone who uses this form will be saved under'signup' in the db.
