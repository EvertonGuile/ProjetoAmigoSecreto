const GrupoRepository = require('../repositories/grupoRepository');

module.exports = {
    async create (request, response){
        try {
            let grupo = await GrupoRepository.create(request.body);
            console.log(grupo);
            return response.json({
                "mensagem" : "Grupo criado com sucesso!",
                "status" : 200,
                "grupo" : grupo
            });
        }
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "grupo" : null
            });
        }
    },

    async edit (request, response) {
        try {
            let Grupo = await GrupoRepository.edit(request.body);
            return response.json({
                "mensagem" : "Grupo editado com sucesso!",
                "status" : 200,
                "Grupo" : Grupo
            });
        }
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "idGrupo" : null
            });
        }
    },

    async delete (request, response) {
        let { id } = request.params;
        const Grupo = await GrupoRepository.delete(id);
        return response.json({
            "mensagem" : "Grupo removido com sucesso!",
            "status" : 200
        });
    },

    async getById (request, response) {
        let { id } = request.params;
        const Grupo = await GrupoRepository.getById(id);

        if (Grupo === null) {
            response.status(404);
            return response.json({
                "mensagem" : "Grupo não encontrado!",
                "status" : 404,
                "prupo" : Grupo
            });
        }
        return response.json({
            "mensagem" : "Grupo encontrado com sucesso!",
            "status" : 200,
            "grupo" : Grupo
        });
    }//,
}