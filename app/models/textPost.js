const mongoose = require('mongoose')
const textCommentSchema = require('./textComment')

const textPostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  comment: [textCommentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Text', textPostSchema)
