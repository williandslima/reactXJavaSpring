import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './styles.css';
import axios from 'axios';
import api from '../../services/api'

import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Login() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    //funcao de login
    async function login(e){
        e.preventDefault();
        const data = {
            usuario: usuario,
            senha: senha,
        };

        try {
            const response = await api.post('usuarios/logar', data);
            localStorage.setItem('usuario', usuario);
            localStorage.setItem('accessToken', response.data.token);
            localStorage.setItem('nome', response.data.nome)
            alert('OK');
            navigate('/postagens')
        } catch (err) {
            alert('Login failed! Try again!');
        }
    };

   //funcao para entrar no cadastro
    async function cadastrarUsuario() {
        localStorage.clear();
        navigate('/cadastrar');
    }


    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Erudio Logo"/>
                <form onSubmit={login}>
                    <h1>Acesse ou cadastro</h1>
                    <input
                        placeholder="Username"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <input
                        type="password" placeholder="Password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>

                <button className="button" onClick={cadastrarUsuario} type="button" >Realizar cadastro</button>


            </section>

            <img src={padlock} alt="Login"/>

        </div>
    )

}