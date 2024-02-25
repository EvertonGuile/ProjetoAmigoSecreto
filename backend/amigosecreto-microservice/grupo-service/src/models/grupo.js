const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
    nome : String,
    valorMinimo : {
        type: Number
    },
    valorMaximo : {
        typer: Number
    },
    //dataSorteio: Date,
    dataSorteio: {
        type: Date,
        // Defina um getter para converter o formato da data antes de salvar no banco de dados
        get: v => {
            // Faça a conversão da data no formato "DD/MM/YYYY" para "YYYY-MM-DD"
            const parts = v.split('/');
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }},
    flSorteado : { type: Boolean, default : false},
    respnsavel : {
        _idResponsavel : String,
        nomeResponsavel : String
    },
    participantes : [{
        _idParticipante : String,
        nomeParticipante : String,
        _idAmigo : String,
        nomeAmigo : String
    }]
});

module.exports = mongoose.model('Grupo', grupoSchema);