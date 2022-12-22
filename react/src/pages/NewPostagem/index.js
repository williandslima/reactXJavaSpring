import React, {useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'

export default function NewPostagem() {
    const [id, setId] = useState(null);
    const [tituloLivro, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState('');
    const [autor, setAutor] = useState('');

    const [tema, setTema] = useState('');
    const [usuario, setUsuario] = useState('');

    //const usuarioLogado = localStorage.getItem('usuario');
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();


    async function cadastrarPostagem(e){
        e.preventDefault();

        const data = {
                tema,
                usuario,
                
                tituloLivro,
                descricao,
                foto,
                autor,    
        };
    
        try {
            await api.post('postagem', data, {
                headers : {
                    Authorization: accessToken
                    //Authorization: `Basic ${token}`
                }

            });

            alert('Cadastro ok')
            navigate('/postagens');
        } catch (err) {
            alert('Erro ao cadastrar postagem!')
        }
    };

    return (
        <div className="new-book-container">
                        <div className="content">

            <section className="form">
            <img src={logoImage} alt="Erudio"/>
                    <Link className="back-link" to="/postagens">
                    <FiArrowLeft size={16} color="#251fc5"/> Voltar
                    </Link>
                </section>

                <form onSubmit={cadastrarPostagem}>
                    <h1>Cadastrar postagem</h1>
                
                    <input
                        placeholder="Titulo"
                        value={tituloLivro}
                        onChange={e => setTitulo(e.target.value)}
                    />
                
                    <input
                        placeholder="Descricao do livro"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        placeholder="Foto do Livro"
                        value={foto}
                        onChange={e => setFoto(e.target.value)}
                    />

                    <input
                        placeholder="Autor do Livro"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar </button>
                </form>

            </div>

        </div>
    )

}