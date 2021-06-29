const mongoose = require('mongoose')
const audioCommentSchema = require('./audioComment')

const audioPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  audio: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  comment: [audioCommentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Audio', audioPostSchema)
