const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    date: {
        type: 'date',
        default: new Date()
    }
})

const User = new mongoose.model('User', UserSchema)

module.exports = User