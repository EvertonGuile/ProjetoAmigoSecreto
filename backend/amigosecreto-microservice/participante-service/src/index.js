const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/routes');

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

mongoose.connect('mongodb+srv://evertinhuplayer:O93fSpTIvhf92qxL@firstcluster.vwo5uub.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333);