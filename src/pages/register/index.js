import React, {useState} from 'react';
import logo from '../../assets/logo.svg'
import { FiArrowUpLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import {api} from '../../services/api'
import './styles.css'

export default function Register(props) {
	const [name,setName] = useState('')
	const [email,setemail] = useState('')
	const [whatsapp,setwhatsapp] = useState('')
	const [city,setcity] = useState('')
	const [uf,setUF] = useState('')

	const history = useHistory()

	async function handleRegister(e){
		e.preventDefault()

		const data ={
			name,
			email,
			whatsapp,
			city,
			uf
		}
		try {
			const response = await api.post('ongs',data)

			alert(`Seu ID de acesso ${response.data.id}`)
			history.push('/')
		}
		catch (e){
			alert('error no cadastro tente novamente')
		}
	}
    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logo} alt="logo"></img>
                <h1>Cadastro</h1>
                <p>
                Faça seu cadastro, entre na platafroma e
                ajude pessoas a encontrarem casos da sua ONG.
                </p>
                <Link  className="link-next-page" to="/">
                        <FiArrowUpLeft size={16} color="#E02041" /> Não tenho cadastro?
                </Link>
                </section>

                <form onSubmit={handleRegister}>
					<input 
					value={name}
					onChange={e => setName(e.target.value)}
					type="text" placeholder="Nome da ONG"/>
					<input 
					value={email}
					onChange={e => setemail(e.target.value)}
					type="email" placeholder="E-mail"/>
					<input 
					value={whatsapp}
					onChange={e => setwhatsapp(e.target.value)}
					type="text" placeholder="WhatsApp"/>
                    <div className="input-group">
						<input 
						value={city}
						onChange={e => setcity(e.target.value)}
						type="text" placeholder="Cidade"/>
                        <input 
						value={uf}
						onChange={e => setUF(e.target.value)}
						placeholder="UF" style={{with:80}}/>
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}