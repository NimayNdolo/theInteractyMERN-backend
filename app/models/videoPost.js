const mongoose = require('mongoose')

const videoPostSchema = new mongoose.Schema({
  title: {
    type: String
  },
  video: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Video', videoPostSchema)
