const mongoose = require('mongoose')
const commerceCommentSchema = require('./commerceComment.js')

const commercePostSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  video: {
    type: String
  },
  audio: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  comment: [commerceCommentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Commerce', commercePostSchema)
