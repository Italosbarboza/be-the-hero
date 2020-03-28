import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../asserts/logo.svg';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');

        } catch {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }
 
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be Ther Hero" />
                <h1>Cadastro novo caso</h1>
                <p>Descrever o caso detalhadamente para encontrar um herói para resolver isso.</p>


                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>
            </section>
            <form onSubmit = {handleSubmit}>
                <input 
                placeholder="Titulo do caso"
                value= { title }
                onChange= {e => setTitle(e.target.value)}/>
               
                <textarea 
                placeholder="Descrição"
                value={ description }
                onChange= {e => setDescription(e.target.value)}
                />

                <input
                 placeholder="Valor em reais"
                 value={value}
                 onChange = {e => setValue(e.target.value)}/>

                <button className="button" type="submit">Registrar</button>
            </form>
        </div>
    </div>
    );
}