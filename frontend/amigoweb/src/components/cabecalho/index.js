import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './styles.css';

export default function Cabecalho(){
    const loginName = localStorage.getItem('pNome');
    const navigate = useNavigate();
    function handleLogout(){
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className="header-container" >
            <header>
                <span>Seja Bem Vindo, {loginName}</span>
                <Link className="button" to="/novogrupo">Novo Grupo</Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
        </div>
    );
}