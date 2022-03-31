const mongoose = require('../connection')

const techUserSchema = new mongoose.Schema({
    full_name: String,
    expertise: String, 
    location: String, 
    linkedin: String,
    email: String,
    offer: String,
})

module.exports = mongoose.model('TechUser', techUserSchema)