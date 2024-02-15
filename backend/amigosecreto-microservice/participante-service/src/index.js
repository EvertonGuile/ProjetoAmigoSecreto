const express = require('express');

const app = express();

app.use(express.json());

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

app.listen(3333);