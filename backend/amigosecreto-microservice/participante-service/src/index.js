const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/routes');

require('dotenv').config();

const app = express();

app.use(express.json());

/*
// MÉTODO GET
app.get('/:nome', (request, response) => {
    return response.send("Hello World! Seja bem vindo " + `${request.params.nome}`);
});

// MÉTODO POST
app.post('/participante', (request, response) => {
    console.log(request.body);
    const { nome } = request.body;
    return response.json({"mensagem":`Olá Mundo ${nome}`});
});
*/

app.use(routes);

mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = 5050;

app.listen(port, () => console.log(`API online na porta ${port}!`));