const mongoose = require('mongoose')
const pictureCommentSchema = require('./pictureComment.js')

const picturePostSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  comment: [pictureCommentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Picture', picturePostSchema)
