const Login = require('../models/login');
const cripto = require('../utils/cripto');

module.exports = {
    async create(loginData){
        try{
            let { email, senha }  = loginData;

            const retornLogin = await Login.create({
                email ,
                senha: cripto.criptografa(senha),
                ativo: true
            });
         return retornLogin;
        }
        catch (err) {
            console.log("Erro " + err);

            //Chat na linha abaixo
            return null;
            // até aqui
        }
        return null;
    },
    async validarLogin (loginData){
        try{
            let { email, senha }  = loginData;

            //Chat na linha abaixo
            const usuario = await Login.findOne({ email, ativo: true }) // Busca pelo usuário pelo email
            if (!usuario) {
                return null; // Se não encontrar o usuário, retorna null
            }
            const senhaCorreta = cripto.comparaSenha(senha, usuario.senha); // Compara a senha fornecida com a senha armazenada no banco de dados
            if (!senhaCorreta) {
                return null; // Se as senhas não coincidirem, retorna null
            }
            console.log(usuario.id)
            //
            return usuario; // Retorna o usuário se a autenticação for bem-sucedida
            // até aqui acima o Chat

            //Daqui o chat ignora
            //const retornLogin = await Login.find({ email , senha :cripto.comparaSenha(senha),ativo : true });
            //if(retornLogin || null)
            //    if(!cripto.comparaSenha(senha, retornLogin.senha))
            //        return null;
         //return retornLogin;
         //até aqui
         
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
}