var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    
    fname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    contactnumber: {
        type: Date,
        required: false
    }

}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
