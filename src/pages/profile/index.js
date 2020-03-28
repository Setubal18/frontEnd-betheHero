/* eslint-disable no-unused-vars */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { api, headers } from '../../services/api'
import {map} from 'rxjs/operators'

import logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'

const Profile = () => {
	const [cases, setCases] = useState([])
	const ongData = JSON.parse(localStorage.getItem('Ong'))
	useEffect(() => {
		api.get('incidents', headers)
		.then(response => {
			setCases(response.data)
		})
	},[ongData.id])

	console.log(cases)
	return (
		<div className='profile-container'>
			<header>
				<img src={logo} alt="logo"></img>
				<span>Bem Vinda {ongData.name}</span>
				<Link to="/newincident" className="button">Cadastrar Novo Caso</Link>
				<button type='button'>
					<FiPower size={18} color="#E02041" />
				</button>
			</header>
			<h1>
				Casos Cadastrados
			</h1>
			<ul>
				{cases.map(case => (
					<li key={case.id}>
					<strong>CASO:</strong>
					<p>{case.title}</p>
					
					<strong>DESCRIÇÃO:</strong>
					<p>{case.desription}</p>
					
					<strong>Valor:</strong>
					<p>{case.value}</p>
					<button>
					<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
				))}
			</ul>
		</div>
	);
};

export default Profile;
/* <li key={case.id}>
<strong>CASO:</strong>
<p>{case.title}</p>

<strong>DESCRIÇÃO:</strong>
<p>{case.desription}</p>

<strong>Valor:</strong>
<p>{case.value}</p>
<button>
<FiTrash2 size={20} color="#a8a8b3" />
</button>
</li> */