const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email : String,
    senha : String,
    ativo : Boolean,
    // testando elemento ID
    //idDoParticipante : String
});

module.exports = mongoose.model('Login', loginSchema);