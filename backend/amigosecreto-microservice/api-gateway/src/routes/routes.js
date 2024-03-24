const { Router } = require('express');
const httpProxy = require('express-http-proxy');

const routes = Router();

const {
    PARTICIPANTE_API_URL,
    GRUPO_API_URL,
    SORTEIO_API_URL,
    LISTADESEJO_API_URL,
    CONVITE_API_URL,
    LOGIN_API_URL
} = require('./url');

const participanteServiceProxy = httpProxy(PARTICIPANTE_API_URL);
const grupoServiceProxy = httpProxy(GRUPO_API_URL);
const sorteioServiceProxy = httpProxy(SORTEIO_API_URL);
const loginServiceProxy = httpProxy(LOGIN_API_URL);

routes.get('/', (req, res) => res.send("Olá API GATEWAY"));

// Rota para buscar um participante por ID
routes.get('/participante/:id', (req, res) => participanteServiceProxy(req, res));
// Rota para criar um novo participante
routes.post('/participante', (req, res) => participanteServiceProxy(req, res));
// Rota para criar um novo login
routes.post('/login/create', (req, res) => loginServiceProxy(req, res));
// Rota para criar um novo login
routes.post('/login', (req, res) => loginServiceProxy(req, res));
routes.get('/grupo/:id', (req, res) => grupoServiceProxy(req, res));
routes.get('/grupo/byParticipante/:id', (req, res) => grupoServiceProxy(req, res));
routes.put('/grupo/editaGrupoPorId/:id', (req, res) => grupoServiceProxy(req, res));
routes.post('/sorteio', (req, res) => sorteioServiceProxy(req, res));

module.exports = routes;