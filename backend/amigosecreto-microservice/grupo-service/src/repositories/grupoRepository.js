const Grupo = require('../models/grupo');

module.exports = {
    async create (grupo){
        try{
            let { nome, valorMinimo , valorMaximo, dataSorteio , responsavel }  = grupo;
            const retornGrupo = await Grupo.create({
                nome,
                valorMinimo,
                valorMaximo ,
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
    async edit (grupo){
        console.log("Entrou no grupoRepository método edit")
        try{
            let { _id, nome, valorMinimo , valorMaximo, dataSorteio, participantes, responsavel }  = grupo;
            console.log(Grupo);
            const retornGrupo = await Grupo.findByIdAndUpdate(
                { _id }, {$set : { nome , valorMinimo ,valorMaximo, dataSorteio },
                            $addToSet: { responsavel, participantes }}
         );
         return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getById (_id){
        try{
            
            const retornGrupo = await Grupo.find({ _id }); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async delete (_id){
        try{
            
            const retornGrupo = await Grupo.deleteOne({ _id : _id}); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async addParticipante (grupo){
        try{           
            let { _id , participantes } = grupo; 
            const retornGrupo = await Grupo.updateOne({ _id }, { $push : { participantes }});
             return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getGrupoByIdResponsavel (_idResponsavel){
        try{
            const retornGrupo = await Grupo.find({"responsavel._idResponsavel" : _idResponsavel}); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getGrupoByIdParticipante (_idParticipante){
        try{            
            const retornGrupo = await Grupo.find({ participantes : 
                {$elemMatch :{ "_id" : _idParticipante}}}); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async delParticipante (_id, _idParticipante){
        try{
            
            const retornGrupo = await Grupo.updateOne({ _id }, { $pull : { participantes : { _idParticipante }}});
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    // Retorna todos os Grupos
    async getAll() {
        try {
            const grupos = await Grupo.find();
            return grupos;
        } catch (err) {
            console.log("Erro " + err);
            return null;
        }
    },
    // Retorna grupos de acordo com Id do Participante
    async getGruposByParticipanteId(participanteId) {
        try {
            const grupos = await Grupo.find({ "participantes._id": participanteId });

            const gruposDetalhados = [];

            console.log(gruposDetalhados);

            for (const grupo of grupos) {
                const detalhesGrupo = await Grupo.findById(grupo._id);
                console.log("Detalhes do grupo encontrado:", detalhesGrupo);
                gruposDetalhados.push(detalhesGrupo);
            }
            console.log(gruposDetalhados);
            return gruposDetalhados;
        } catch (err) {
            console.log("Erro " + err);
            return null;
        }
    }    
}