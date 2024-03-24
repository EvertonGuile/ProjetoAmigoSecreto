import React, { useState, useEffect } from "react";
import { useNavigate, withRouter } from 'react-router-dom';
import { FiEdit , FiUsers, FiUserPlus } from 'react-icons/fi';
import { Badge } from '@mui/material';
import api from "../../services/api";
import './styles.css';
import Cabecalho from '../../components/cabecalho'

export default function Principal(){
  
  const [ grupos, setGrupos ] = useState([]);
  const pIdParticipante = localStorage.getItem('idParticipante');
  console.log("Testando localStorage pIdParticipante: " + pIdParticipante);
  //console.log(localStorage.getItem("id"));

  useEffect(() => {
    loadingGrupos(pIdParticipante);
  }, [pIdParticipante]);

  function loadingGrupos(idParticipante){
    if (!idParticipante) {
      console.error('ID do participante não está definido.');
      console.log('ID do participante não está definido.')
      return;
    }
  
    api.get(`/grupo/byParticipante/${idParticipante}`).then(response => {
      console.log(response.data);
      setGrupos(response.data.Grupos)
    });
  }

 // useEffect(() => {
 //   const fetchGrupos = async () => {
 //   try {
      // Obtenha o token de autenticação do localStorage
 //     const token = localStorage.getItem('token');
 //     console.log(token);

 //     // Configuração do cabeçalho para incluir o token de autenticação
 //     const config = {
 //       headers: {
 //         Authorization: `Bearer ${token}` // Assumindo que você está usando um token JWT
//        }
 //     };
 //     // Faça a solicitação GET para /principal com o token de autenticação no cabeçalho
 //     const response = await api.get('/principal', config);
 //     setGrupos(response.data); // Atualiza o estado com os grupos retornados pela API
 //   } catch (error) {
 //     console.error('Erro ao buscar grupos:', error);
 //     // Trate o erro, exiba uma mensagem para o usuário, etc.
 //   }
  //};
//
  //fetchGrupos();
  //}, []);
    


  return(
    <div className="principal-container" >
      <Cabecalho />
      <h1>Grupos Amigo Secreto</h1>
      <ul>
        {grupos ? (
          grupos.map((grupo) => (
            <li key={grupo._id} >

              <h2>{grupo.nome}</h2>
              <div className="teste-container">
                <div>
                  <strong>RESPONSÁVEL</strong>
                  <p>{grupo.responsavel ? grupo.responsavel.nomeResponsavel : 'Nenhum responsável'}</p>
                </div>
                <div>
                  <strong>DATA DO SORTEIO</strong>
                  <p>{new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'})
                  .format(Date.parse(grupo.dataSorteio))}
                  </p>
                </div>
              </div>
              <div className="teste-container">
                <div>
                  <strong>VALOR MÍNIMO</strong>
                  <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                  .format(grupo.valorMinimo)}</p>
                </div>
                <div>
                  <strong>VALOR MÁXIMO</strong>
                  <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                  .format(grupo.valorMaximo)}</p>
                </div>
              </div>
              <button> <FiUserPlus className="addUsers" size={22} color="a8a8b3" /> </button>
              <button>
                <Badge className="showUsers"
                  color="secondary" badgeContent={grupo.participantes.length}>
                </Badge>
                <FiUsers className="showUsers" size={22} color="a8a8b3" />
              </button>
              <button>
                <FiEdit className="editGroup" size={22} color="a8a8b3" />
              </button>
            </li>
          ))
        ) : (
          <li>NENHUM Grupo Encontrado!</li>
        )}
      </ul>
    </div>
  )
}