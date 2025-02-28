const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string'
    },
    movie_id: {
        type: mongoose.Types.ObjectId
    },
    text: {
        type: 'string'
    },
    date: {
        type: 'date',
        default: new Date()
    }
})

const Comment = new mongoose.model('Comment', CommentSchema)

module.exports = Comment