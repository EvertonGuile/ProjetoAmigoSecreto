const { Router } = require('express');

const grupoController = require('../controllers/grupoController');

const routes = Router();

routes.get('/grupo/:id', grupoController.getById);
routes.get('/grupo/byResponsavel/:idResponsavel', grupoController.getGruposByResponsavel);
routes.get('/grupo/byParticipante/:idParticipante', grupoController.getGruposByParticipante);
routes.post('/grupo', grupoController.create);
routes.post('/grupo/addParticipante', grupoController.addParticipante);
routes.put('/grupo/editaGrupoPorId/:id', grupoController.edit);
routes.delete('/grupo/:id', grupoController.delete);
routes.delete('/grupo/:id/delParticipante/:idParticipante', grupoController.delParticipante);

routes.get('/grupo', grupoController.getAll); // Rota para retornar todos os Grupos do Banco de Dados

routes.get('/grupo/byParticipanteId/:participanteId', grupoController.getGruposByParticipanteId); // Rota retorna Grupos por Participante

module.exports = routes;