import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Postagens(){

    const [postagens, setPostagens] = useState([]);
    const [page, setPage] = useState(1);
    
    const username = localStorage.getItem('usuario');
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();
    
    async function logout() {
        localStorage.clear();
        navigate('/');
    }


    async function editPostagem(id) {
        try {
            navigate(`/postagem/new/${id}`)
        } catch (error) {
            alert('Edit failed! Try again.');
        }
    }

    async function deletePostagem(id) {
        try {
            await api.delete(`api/postagem/v1/${id}`, {
                headers: {
                    Authorization: accessToken
                }
            })

            setPostagens(postagens.filter(postagem => postagem.id !== id))
        } catch (err) {
            alert('Delete failed! Try again.');
        }
    }


    async function fetchMorePostagens() {
        const response = await api.get('postagem/all', {
            headers: {
                Authorization: accessToken
            },
            params: {
                page: page,
                limit: 4,
                direction: 'asc'
            }
        });
        console.log(response.data)
        //setPostagens([ ...postagens, ...response._])
        //console.log (response.data);
        setPage(page + 1);
    }

    useEffect(() => {
        fetchMorePostagens();
    }, []);
    
    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Erudio"/>
                <span>Bem vindo, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="/tema/new/0">Add novo Tema </Link>
                <Link className="button" to="/postagem/new/0">Add nova Postagem </Link>

                <button onClick={logout} type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>

            </header>

            <h1>Postagens salvas</h1>
            <ul>
                {postagens.map(postagem => (
                    <li key={postagem.id}>
                        <strong>Titulo:</strong>
                        <p>{postagem.tituloLivro}</p>
                        <strong>Descricao:</strong>
                        <p>{postagem.descricao}</p>
                        <strong>Foto:</strong>
                        <p>{postagem.foto}</p>
                        <strong>Autor:</strong>
                        <p>{postagem.autor}</p>
                        <strong>Tema:</strong>
                        <p>{postagem.tema}</p>
                        <strong>Usuario:</strong>
                        <p>{postagem.usuario}</p>

                        <button onClick={() => editPostagem(postagem.id)} type="button">
                            <FiEdit size={20} color="#251FC5"/>
                        </button>
                        
                        <button onClick={() => deletePostagem(postagem.id)} type="button">
                            <FiTrash2 size={20} color="#251FC5"/>
                        </button>
                    </li>
                ))}
            </ul>

            <button className="button" onClick={fetchMorePostagens} type="button">Load More</button>
        </div>
    );
}