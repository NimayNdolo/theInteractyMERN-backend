const mongoose = require('mongoose')

const picturePostSchema = new mongoose.Schema({
  picture: {
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

module.exports = mongoose.model('Picture', picturePostSchema)
