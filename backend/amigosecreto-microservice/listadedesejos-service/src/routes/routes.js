const { Router } = require('express');
const listadedesejosController = require('../controllers/listadedesejosController');
//const auth = require('../middleware/auth');
const routes = Router();

// FUNCIONA
routes.post('/listadedesejos', listadedesejosController.create);
// FUNCIONA
routes.put('/listadedesejos', listadedesejosController.edit);
//routes.put('/listadedesejos/:id', listadedesejosController.edit);
// FUNCIONA
routes.get('/listadedesejos/:id', listadedesejosController.getById);
// FUNCIONA
routes.delete('/listadedesejos/:id', listadedesejosController.delete);
// FUNCIONA
routes.get('/listadedesejos/byParticipanteId/:participanteId', listadedesejosController.getListasByParticipanteId);
// FUNCIONA
routes.post('/listadedesejos/addItem/:id', listadedesejosController.addItemNaListaDeDesejos);
// 
// Arrumar isso, acho que não funciona
routes.delete('/listadedesejos/deleteItem/:idLista/:idItem', listadedesejosController.deleteItemDaListaDeDesejos);
//



// Seria a rota para editar item por id
routes.put('/listadedesejos/editaListaPorId/:id', listadedesejosController.edit);
routes.get('/listadedesejos', listadedesejosController.getAll); // Rota para retornar todos os Grupos do Banco de Dados

// Outra rota para recuperar lista por participante... TESTE
//routes.get('/listadedesejos/byParticipanteId/:participanteId', listadedesejosController.getListaByParticipanteId); // Rota retorna Grupos por Participante

module.exports = routes;





