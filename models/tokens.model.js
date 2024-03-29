const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    token:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        Default: Date.now,
        expires: 600
    }
})

module.exports = mongoose.model('Tokens',tokenSchema);