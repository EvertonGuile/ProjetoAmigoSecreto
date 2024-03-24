const listadedesejoModel = require('../models/listadedesejoModel');
const listadedesejoRepository = require('../repositories/listadedesejoRepository');


module.exports = {
    // FUNCIONA
    // Caminho para método de Criar uma nova lista
    async create(request, response) {
        try {
            const { nomeLista, _idParticipante , itens } = request.body;
            const novaLista = new listadedesejoModel({ nomeLista, _idParticipante, itens });
            const listaSalva = await novaLista.save();
            
            return response.json({
                mensagem: "Lista criada com sucesso!",
                status: 200,
                lista: listaSalva
            });
        } catch (error) {
            console.error("Erro ao criar a lista de desejos:", error);
            return response.status(500).json({
                mensagem: "Erro ao criar a lista de desejos",
                status: 500,
                error: error.message
            });
        }
    },

    // FUNCIONA
    async edit(request, response) {
        try {
            const listaAtualizada = await listadedesejoRepository.edit(request.body);
            return response.json({
                mensagem: "Lista editada com sucesso!",
                status: 200,
                lista: listaAtualizada
            });
        } catch (err) {
            console.error("Erro ao editar a lista de desejos:", err);
            return response.status(500).json({
                mensagem: "Erro ao editar a lista de desejos",
                status: 500,
                error: err.message
            });
        }
    },


    // FUNCIONA
    // Caminho para método de Deletar uma Lista por Id
    async delete (request, response){
        let { id }  = request.params;
        const listaDesejos = await listadedesejoRepository.delete(id);
        return response.json({
            "mensagem" : "Lista removida com sucesso!",
            "status" : 200
        }); 
    },

    // FUNCIONA
    // Caminho para método de Recuperar uma Lista por Id
    async getById (request, response){
        let { id }  = request.params;
        let listaDesejos =  await listadedesejoRepository.getById(id);
        
        if (listaDesejos === null) {
            response.status(404);           
            return  response.json({
                "mensagem" : "Lista não encontrada!",
                "status" : 404,
                "Lista" : listaDesejos            
            });         
        }
        return response.json({
            "mensagem" : "Lista encontrada com sucesso!",
            "status" : 200,
            "Lista" : listaDesejos            
        }); 

    },

    // FUNCIONA
    // Caminho para método de Adicionar Item na Lista de Desejos
    async addItemNaListaDeDesejos(request, response) {
        try {
            const { id } = request.params; // Obtém o ID da lista de desejos da rota
            const { nomeItem, descricaoItem } = request.body; // Obtém o novo item do corpo da requisição
    
            // Chama o método do repositório para adicionar o item à lista
            const listaAtualizada = await listadedesejoRepository.addItemNaListaDeDesejos(id, { nomeItem, descricaoItem });
    
            // Verifica se a lista foi atualizada com sucesso
            if (!listaAtualizada) {
                return response.status(404).json({
                    mensagem: "Lista de desejos não encontrada",
                    status: 404
                });
            }
    
            // Retorna a resposta com a lista atualizada
            return response.json({
                mensagem: "Item adicionado na lista com sucesso!",
                status: 200,
                lista: listaAtualizada
            });
        } catch (err) {
            console.error("Erro ao adicionar item na lista de desejos:", err);
            return response.status(500).json({
                mensagem: "Erro ao adicionar item na lista de desejos",
                status: 500,
                error: err.message
            });
        }
    },

    // 
    // Caminho para método de Deletar Item da Lista
    async deleteItemDaListaDeDesejos(request, response) {
        try {
            const { idLista, idItem } = request.params;
            const listaAtualizada = await listadedesejoRepository.deleteItemDaListaDeDesejos(idLista, idItem);
            return response.json({
                mensagem: "Item removido da lista com sucesso!",
                status: 200,
                lista: listaAtualizada
            });
        } catch (err) {
            console.error("Erro ao excluir item da lista de desejos:", err);
            return response.status(500).json({
                mensagem: "Erro ao excluir item da lista de desejos",
                status: 500,
                error: err.message
            });
        }
    },

    // FUNCIONA
    // Caminho para método de Recuperar Lista por Participante
    async getListasByParticipanteId (request, response){
        try {
            const { participanteId } = request.params;
            const listaDesejos = await listadedesejoRepository.getListasByParticipanteId(participanteId);
            return response.json({
                "mensagem": "Lista encontrada com sucesso!",
                "status": 200,
                "Lista": listaDesejos
            });
        } catch (err) {
            return response.json({
                "mensagem": "Erro " + err,
                "status": 500,
                "Lista": null
            });
        }

    },
    // Método que retorna todos os grupos do banco de dados
    async getAll(request, response) {
        try {
            const listas = await listadedesejoRepository.getAll();
            return response.json({
                "mensagem": "Listas encontradas com sucesso!",
                "status": 200,
                "listas": listas
            });
        } catch (err) {
            return response.json({
                "mensagem": "Erro " + err,
                "status": 500,
                "listas": null
            });
        }
    }
}