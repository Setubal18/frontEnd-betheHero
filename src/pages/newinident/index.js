import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'

const NewIncident = () => {
    return (
        <div className='incident-container'>
            <header>
            <img src={logo} alt="logo"></img>
            <span>Bem Vinda APAD</span>
            <Link className="button">Cadastrar Novo Caso</Link>
            <button type='button'>
                <FiPower size={18} color="#E02041"/>
            </button>
            </header>
        </div>
    );
};

export default NewIncident;