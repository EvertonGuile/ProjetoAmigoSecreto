import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import api from "../../services/api";
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Loginform(){
    const [ login, setLogin ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ erroLogin, setErroLogin ] = useState('');
    //const [ pIdParticipante, setPIdParticipante] = useState(null);
    const navigate = useNavigate();

    async function handleLogon(e){
        e.preventDefault();
        const data = {
            email:login,
            senha
        };
        try{
            if(data.email === ""){
                setErroLogin(true);
                toast.error("Campos obrigatórios não preenchidos!");
                return;
            }
            else {
                const response = await api.post('/login', data);
                //localStorage.setItem("pIdParticipante", response.data);
                console.log(response);
                if(response.data.auth){
                    //await api.get('/participante/', dataParticipante);
                    localStorage.setItem("email", data.email); // Testando localstorage = DEU CERTO PARA O EMAIL
                    localStorage.setItem("senha", data.senha); // Testando localstorage = NÃO DEU CERTO
                    localStorage.setItem("pIdParticipante", response.data.login);
                    localStorage.setItem("token", response.data.token);
                    //setPIdParticipante(response.data.pIdParticipante);
                    //console.log("ID do participante:", response._id); // Adicionado para depuração
                    navigate('/principal');
                }else{
                    toast.error("Login e/ou senha inválidos!");
                }
            }
        }
        catch(err){
            toast.error("Erro ao tentar logar no sistema!");
        }
    }

    return(
        <div className="logon-container" >
                <section className="form">
                <form onSubmit={handleLogon}>
                    <h1>Faça seu login</h1>
                    <input className={erroLogin ? "error" : ""}
                        placeholder="Seu Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        onBlur={e => e.target.value === "" ? setErroLogin(true) : setErroLogin(false)}
                    />
                    <input type="password"
                    placeholder="Sua Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="back-link" to="/novoparticipante" >
                    <FiLogIn sie={16} color="#E02041" />
                    Não Tenho Cadastro...
                </Link>
                </section>
                <ToastContainer />
        </div>
    )
}