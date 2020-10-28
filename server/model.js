const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    coverimg: String,
    desc: String
})

module.exports = mongoose.model("Book", schema)