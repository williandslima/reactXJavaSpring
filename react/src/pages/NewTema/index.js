import React, {useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'

export default function NewTema() {
    const [id, setId] = useState(null);
    const [categoria, setCategoria] = useState('');
    const [genero, setGenero] = useState('');

    const [postagem, setPostagem] = useState('');

    //const usuarioLogado = localStorage.getItem('usuario');
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();


    async function cadastrarTema(e){
        e.preventDefault();

        const data = {
                postagem,
                
                categoria,
                genero,   
        };
    
        try {
            await api.post('temas', data, {
                headers : {
                    Authorization: accessToken
                }

            });

            alert('Cadastro ok')
       //     navigate('/temas');
        } catch (err) {
            alert('Erro ao cadastrar tema!')
        }
    };

    return (
        <div className="new-book-container">
                        <div className="content">

            <section className="form">
            <img src={logoImage} alt="Erudio"/>
                    <Link className="back-link" to="/postagens">
                    <FiArrowLeft size={16} color="#251fc5"/> Voltar para postagens
                    </Link>
                </section>

                <form onSubmit={cadastrarTema}>
                    <h1>Cadastrar tema</h1>
                
                    <input
                        placeholder="Genero"
                        value={genero}
                        onChange={e => setGenero(e.target.value)}
                    />
                
                    <input
                        placeholder="Categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar </button>
                </form>

            </div>

        </div>
    )

}