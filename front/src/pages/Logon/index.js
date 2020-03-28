import React, { useState } from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../asserts/logo.svg';
import heroesImg from '../../asserts/heroes.png';

export default function Logon() {
    
    const [id, setId] = useState('');

    const history = useHistory();

    async function handlheLogin(e) {
        e.preventDefault();
        try {
            console.log(id);
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        } catch {
            alert('Falha no login, tente novamente!');
        }
    }
    
    return(
        <div className="logonContainer">
            <section className="form">
                <img src={logo} alt="Be the hero"/>

                <form onSubmit={handlheLogin}>
                    <h1>Faça o seu logon</h1>
                    <input
                     placeholder="Sua ID"
                     value={id}
                     onChange= {e => setId(e.target.value) }/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}