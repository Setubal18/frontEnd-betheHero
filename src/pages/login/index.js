import React, {useState} from 'react';
import './styles.css'
import heroesImage from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Login(props) {
	const [id, setId] = useState('')
	const history = useHistory()
	async function handleLogin(e){
		e.preventDefault()

		try {
			const response =  await api.post('login', {id})
			localStorage.setItem('ongID',id)
			localStorage.setItem('Ong',JSON.stringify(response.data))
			history.push('/profile')

		} catch (error) {
			alert('Ong não existe')
		}

	}
    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="logo"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Login</h1>
					<input 
					value={id}
					onChange={e => setId(e.target.value)}
					type="text" placeholder="Sua Id" />
                    <button className="button" type="submit">Entrar</button>
                    <Link  className="link-next-page" to="/register">
                        <FiLogIn size={16} color="#E02041" /> Não tenho cadastro?
                    </Link>
                </form>
            </section>
            <img src={heroesImage} alt="Heroes"></img>
        </div>
    );
}