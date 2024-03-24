const loginRepository = require('../repositories/loginRepository');
const jwt = require('jsonwebtoken');

module.exports = {
    async validarLogin(request, response){
        const login = await loginRepository.validarLogin(request.body);
        if(login === null){
            return response.json({
                auth : false, token : null
            });
        }


        // CHAT GPT RESOLVEU - 1 LINHA
        const token = jwt.sign({ _id: login._id }, process.env.JWT_KEY, { expiresIn: '1h' });
        return response.json({
            auth : true, token : token, login: login._id
        });
        
    },
    async create (request, response){
        const login = await loginRepository.create(request.body);
        if(login === null){
            response.status(500);
            return response.json({
                "mensagem" : "Erro ao criar login!",
                "status" : 500
            });
        }
        return response.json({
            "mensagem" : "Login criado com sucesso!",
            "status" : 200
        });
    }
}