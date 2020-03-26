import React from 'react';
import logo from '../../assets/logo.svg'
import { FiArrowUpLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Register(props) {
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

                <form>
                    <input type="text" plarceholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input placeholder="UF" style={{with:80}}/>
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}