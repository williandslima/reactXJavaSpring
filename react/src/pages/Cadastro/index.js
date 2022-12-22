import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [foto, setFoto] = useState('');

    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();

        const data = {
            nome,
            usuario,
            senha,
            foto,
        };

        try {
            const response = await api.post('usuarios/cadastrar', data);

            localStorage.setItem('usuario', usuario);
            localStorage.setItem('accessToken', response.data.token);

            navigate('/')
            alert('Cadastrado com sucesso!')
        } catch (err) {
            alert('Nao foi possivel cadastrar');
        }
    };

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Erudio Logo"/>
                <form onSubmit={login}>
                    <h1>Cadastrar conta</h1>
                    <input
                        type="text" placeholder="Nome" name="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                
                    <input
                        placeholder="Username" name="email@email"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <input
                        type="password" placeholder="Password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <input
                        type="text" placeholder="Coloque o Link da Foto"
                        value={foto}
                        onChange={e => setFoto(e.target.value)}
                    />

                    

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </section>

            <img src={padlock} alt="Login"/>

        </div>
    )

}