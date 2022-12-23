import React, { useState, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function Postagens(){

    const [postagens, setPostagens] = useState([]);    
    const username = localStorage.getItem('nome');
    const accessToken = localStorage.getItem('accessToken');
    
    const navigate = useNavigate();

    useEffect(() => {
        api.get('postagem/all',{
            headers : {
                Authorization: accessToken
            }
        }).then(response => {
            setPostagens(response.data.)

        })
    })

    /*
    const navigate = useNavigate();
      
         useEffect(() => {
            api.get('postagens/10',{
                headers : {
                    Authorization: accessToken
                }
            }).then(response => {
               console.log(response.data.id)
               // setPostagens(response.data._embedded.postagenVoes)
            })
         })

            api.get('postagens/10',{
                headers : {
                    Authorization: accessToken
                }
            }).then(response => {
               //console.log(response.data)
               setPostagens(response.data)
               console.log(response.Link)
            })
/*

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
*/

    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Erudio"/>
                <span>Bem vindo, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="/tema/new/0">Add novo Tema </Link>
                <Link className="button" to="/postagem/new/0">Add nova Postagem </Link>

                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>

            </header>

            <h1>Postagens salvas</h1>
            <ul>
                {postagens.map(postagem => (
                    <li>
                    <strong>Titulo</strong>
                    <p>Mostrando titulo</p>
                    <strong>Descrição</strong>
                    <p>Mostrando Descricao</p>
                    <strong>Autor</strong>
                    <p>Mostrando autor</p>

                    <button type="button"><FiEdit size={20} color="#251FC5"/>
                    </button>

                    <button type="button"><FiTrash2 size={20} color="#251FC5"/>
                    </button>


                    </li>
    

                ))}

                
            </ul>

            <button className="button" type="button">Load More</button>
        </div>
    );
}