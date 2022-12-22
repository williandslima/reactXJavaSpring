import React, {useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css';

import logoImage from '../../assets/logo.svg';

export default function NewPostagem(){

    const [id, setId] = useState(null);
    const [tituloLivro, setTituloLivro] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState('');
    const [autor, setAutor] = useState('');
    const [usuario, setUsuario] = useState('');
    const [tema, setTema] = useState('');

    const {postagemId} = useParams();

    //const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    async function loadPostagem() {
        try {
            const response = await api.get(`postagem/${postagemId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            //let adjustedDate = response.data.launchDate.split("T", 10)[0];

            setId(response.data.id);
            setTituloLivro(response.data.tituloLivro);
            setDescricao(response.data.descricao);
            setFoto(response.data.foto);
            setAutor(response.data.autor);
            setUsuario(response.data.usuario);
            setTema(response.data.tema);
            alert('OK');

        } catch (error) {
            alert('Error recovering Book! Try again!');
            navigate('/postagens');
        }
    }

    useEffect(() => {
        if (postagemId === '0') return;
        else loadPostagem();
    }, [postagemId])

    async function saveOrUpdate(e){
        e.preventDefault();

        const data = {
            tituloLivro,
            descricao,
            autor,
            data,
            usuario,
            tema,
        }

        try {
            if (postagemId === '0') {
                await api.post('postagem', data, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            } else {
                data.id = id;
                await api.put('postagem', data, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            }

            navigate('/postagens');
        } catch (err) {
            alert('Erro ao salvar')
        }
    }

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio"/>
                    <h1>Ola </h1>
                    <h1>{postagemId === '0' ? 'Adicionando nova' : 'Atualizando'} Postagem</h1>
                    <p>Adicionando nova postagem {postagemId === '0' ? "'Adicionando'" : "'Atualizando'"}!</p>
                    <Link className="back-link" to="/postagens">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Voltar para Postagens
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input
                        placeholder="Titulo"
                        value={tituloLivro}
                        onChange={e => setTituloLivro(e.target.value)}
                    />
                    <input
                        placeholder="Descricao"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        placeholder="Foto"
                        value={foto}
                        onChange={e => setFoto(e.target.value)}
                    />
                    <input
                        placeholder="Autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                    />
                    <input
                        placeholder = "id usuario"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <input
                        placeholder="id tema"
                        value={tema}
                        onChange={e => setTema(e.target.value)}
                    />

                    <button className="button" type="submit">{postagemId === '0' ? 'SALVAR' : 'Update'}</button>
                </form>
            </div>
        </div>
    );
}