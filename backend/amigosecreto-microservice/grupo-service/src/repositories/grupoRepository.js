const Grupo = require('../models/grupo');

module.exports = {
    async create (grupo) {
        try {
            let { nome, valorMinimo, valorMaximo, dataSorteio, responsavel } = grupo;
            const retornGrupo = await Grupo.create({
                nome,
                valorMinimo,
                valorMaximo,
                dataSorteio,
                responsavel
            });
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },

    async edit (grupo) {
        try {
            let { _id, nome, valorMinimo, valorMaximo, dataSorteio } = grupo;
            const retornGrupo = await Grupo.updateOne(
                { _id : _id }, { $set : { nome, valorMinimo, valorMaximo, dataSorteio } }
            );
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },

    async getById (_id) {
        try {
            const retornGrupo = await Grupo.find({ _id });
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },

    async delete (_id) {
        try {
            const retornGrupo = await Grupo.deleteOne({ _id : _id });
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    }//,
}