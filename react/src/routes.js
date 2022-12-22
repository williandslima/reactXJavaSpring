import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './pages/Login';
import NewPostagem from './pages/NewPostagem';
import Cadastro from './pages/Cadastro';
import Postagem from './pages/Postagem';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/postagens" element={<Postagem/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
                <Route path="/postagem/new/:postagemId" element={<NewPostagem/>}/>
            </Routes>
        </BrowserRouter>
    );
}