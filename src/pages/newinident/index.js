import React from 'react';
import { FiArrowUpLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'

const NewIncident = () => {
    return (
        <div className='incident-container'>
			<div className="content">
                <section>
                <img src={logo} alt="logo"></img>
                <h1>Cadastrar novo Caso</h1>
                <p>
                Descreva o Caso detalhamente para 
				encontrar um herói para resolver isso.
                </p>
                <Link  className="link-next-page" to="/profile">
                        <FiArrowUpLeft size={16} color="#E02041" /> Não tenho cadastro?
                </Link>
                </section>
				<form>
                    <input type="text" placeholder="Titulo"/>
                    <textarea type="text" placeholder="Descrição"/>
                    <input type="text" placeholder="value"/>
					<div className="btn-group">
                    <button className="button">Cadastrar</button>
                    <button className="button">Cancelar</button>
                    </div>
                </form>
				</div>
        </div>
    );
};

export default NewIncident;