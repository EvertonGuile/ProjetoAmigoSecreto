const { Router } = require('express');

const grupoController = require('../controllers/grupoController');

const routes = Router();

routes.get('/grupo/:id', grupoController.getById);
routes.post('/grupo', grupoController.create);
routes.put('/grupo', grupoController.edit);
routes.delete('/grupo/:id', grupoController.delete);

module.exports = routes;