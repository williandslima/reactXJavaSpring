import React, {useState} from 'react';
import { useNavigate, Link, useParams} from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'

export default function NewPostagem() {
    const [tema, setTema] = useState('');
    const [usuario, setUsuario] = useState('');
    const id = 0 ;


    const [tituloLivro, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState('');
    const [autor, setAutor] = useState('');
    const navigate = useNavigate();

    async function cadastrarPostagem(e){
        e.preventDefault();

        const data = {
                "tema": {
                    "id": tema,
                },
                "usuario": {
                    "id": usuario,
                },
                "id": id,
                "tituloLivro": tituloLivro,
                "descricao": descricao,
                "foto": foto,
                "autor": autor
        };
        try {
            await api.post('postagem', data, {
                    headers: {
                        Authorization: 'Basic cm9vdEByb290LmNvbTpyb290cm9vdA=='
                    }
                });
            
            alert('Cadastro ok')
            navigate('/postagens');
        } catch (err) {
            alert('Error while recording Book! Try again!')
        }
    };

    return (
        <div className="new-book-container">
                        <div className="content">

            <section className="form">
            <img src={logoImage} alt="Erudio"/>
                    <Link className="back-link" to="/postagens">
                        Back to Postagens
                    </Link>
                </section>

                <form onSubmit={cadastrarPostagem}>
                    <h1>Cadastrar postagem</h1>
                    <input
                        type="text" placeholder="id Tema" name="Tema"
                        value={tema}
                        onChange={e => setTema(e.target.value)}
                    />
                    

                    <input
                        type="text" placeholder="id Usuario" name="Usuario"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />

                    
                    <input
                        type="text" placeholder="Nome" name="Nome"
                        value={tituloLivro}
                        onChange={e => setTitulo(e.target.value)}
                    />
                
                    <input
                        type="text" placeholder="Descricao do livro"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        type="text" placeholder="Foto do Livro"
                        value={foto}
                        onChange={e => setFoto(e.target.value)}
                    />

                    <input
                        type="text" placeholder="Autor do Livro"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                    />
                   
                    

                    

                    <button className="button" type="submit">Cadastrar </button>
                </form>

            </div>

        </div>
    )

}