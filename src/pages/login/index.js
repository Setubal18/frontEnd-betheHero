import React from 'react';
import './styles.css'
import heroesImage from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'

export default function Login(props) {
    return (
        <div className="login-container">
            <section className="form">
            <img src={logo} alt="logo"></img>
            <form>
                <h1>Faça Seu Login</h1>
                <input type="text" placeholder="Sua Id"/>
                <button className="button" type="submit">Entrar</button>
                <a href="/registrar">
                <FiLogIn size={16} color="#E02041" /> Não tenho cadastro?
                </a>
            </form>
            </section>
            <img src={heroesImage} alt="Heroes"></img>
        </div>
    );
}