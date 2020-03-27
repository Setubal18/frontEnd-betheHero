import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'

const Profile = () => {
    return (
        <div className='profile-container'>
            <header>
            <img src={logo} alt="logo"></img>
            <span>Bem Vinda APAD</span>
            <Link className="button">Cadastrar Novo Caso</Link>
            <button type='button'>
                <FiPower size={18} color="#E02041"/>
            </button>
            </header>
			<h1>
				Casos Cadastrados
			</h1>

			<ul>
				<li>
					<strong>CASO:</strong>
					<p>caso teste</p>
					
					<strong>DESCRIÇÃO:</strong>
					<p>descricao teste</p>
					
					<strong>Valor:</strong>
					<p>R$120</p>
					<button>
						<FiTrash2 size={20} color="#a8a8b3"/>
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p>caso teste</p>
					
					<strong>DESCRIÇÃO:</strong>
					<p>descricao teste</p>
					
					<strong>Valor:</strong>
					<p>R$120</p>
					<button>
						<FiTrash2 size={20} color="#a8a8b3"/>
					</button>
				</li>
				<li>
					<strong>CASO:</strong>
					<p>caso teste</p>
					
					<strong>DESCRIÇÃO:</strong>
					<p>descricao teste</p>
					
					<strong>Valor:</strong>
					<p>R$120</p>
					<button>
						<FiTrash2 size={20} color="#a8a8b3"/>
					</button>
				</li>
			</ul>
        </div>
    );
};

export default Profile;