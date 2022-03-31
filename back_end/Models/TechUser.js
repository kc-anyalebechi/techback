const mongoose = require('../connection')

const techUserSchema = new mongoose.Schema({
    full_name: String,
    expertise: String 
})

module.exports = mongoose.model('TechUser', techUserSchema)