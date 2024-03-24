import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from "../../services/api";
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NovoParticipante() {
    const [ nome, setNome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ senhaConfirm, setSenhaConfirm ] = useState('');
    const navigate = useNavigate();
    async function handleNew(e) {
        e.preventDefault();

        // Adiciona logs para os dados a serem enviados
        console.log("Dados do login:", { email, senha });
        console.log("Dados do participante:", { nome, cpf, email, senha, senhaConfirm });
        //
        localStorage.setItem('pNome', nome );
        console.log("Valor do campo 'nome':", nome);
        console.log("Valor do campo 'cpf':", cpf);
        console.log("Valor do campo 'email':", email);
        console.log("Valor do campo 'senha':", senha);
        console.log("Valor do campo 'senhaConfirm':", senhaConfirm);

        const dataLogin = {
            email,
            senha
        }
        const dataParticipante = {
            nome,
            cpf,
            email,
            senha
        }
        if(senha !== senhaConfirm){
            toast.error("As senhas não são iguais!");
            return;
        }
        try{
            const response = await api.post('/participante', dataParticipante);
            await api.post('/login/create/', { email, senha });

            // teste pegar idParticipante
            // Supondo que o backend retorna um objeto com os dados do usuário
            const userData = response.data;

            const idParticipante = userData.idParticipante;

            // Armazenando os dados do usuário no localStorage
            localStorage.setItem('idParticipante', idParticipante);

            
            console.log(dataLogin);
            toast.success('Cadastro realizado com sucesso!');
            setTimeout(() => { navigate('/')}, 5000);
        }
        catch(err){
            console.error("Erro ao tentar criar participante e fazer login:", err);
            toast.error("Ocorreu um erro ao tentar criar participante e fazer login. Por favor, tente novamente mais tarde.");
            toast.error("CAMPOS obrigatórios não preenchidos!");
        }
    }

    return (
        <div className="register-container">
            <div className='content'>
                <section>
                    <h1>Novo Participante</h1>
                    <p>Faça seu cadastro, entre na plataforma e crie seus grupos de amigo secreto. Divirta-se!</p>
                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleNew}>
                    <input type='text' placeholder='Digite seu nome'
                        value={nome}
                        onChange={e => setNome(e.target.value)}>
                    </input>
                    <input type='text' placeholder='Digite seu cpf'
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}>
                    </input>
                    <input type='email' placeholder='Digite seu e-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}>
                    </input>
                    <input type='password' placeholder='Digite sua senha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}>
                    </input>
                    <input type='password' placeholder='Confirme sua senha'
                        value={senhaConfirm}
                        onChange={e => setSenhaConfirm(e.target.value)}>
                    </input>
                    <button type='submit' className='button'>Salvar</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}
