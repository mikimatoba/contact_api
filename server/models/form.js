const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Form', formSchema)