const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    member: {
        type: Boolean,
        default: true
    },
    avatar:{
        type:String,    
    },
    date: {
        type: Date,
        default: Date.now
    },
    hasposted: {
        type: Boolean,
        default: true
    }
});

module.exports = Admin = mongoose.model('admin', AdminSchema);