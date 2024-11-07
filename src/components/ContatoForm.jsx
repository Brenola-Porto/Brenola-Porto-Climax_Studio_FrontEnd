import React, { useState } from "react";
import axios from 'axios';
import '../styles/contatoform.css';

function ContatoForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        data: "",
        local: "",
        mensagem: "",
        pacote: "Pacote Básico"
    });

    const handleChange = (e) => {
        console.log(`Field: ${e.target.name}, Value: ${e.target.value}`);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
        axios.post('http://localhost:3000/api/contatos', formData)
            .then(response => {
                alert("Contato enviado com sucesso!");
            })
            .catch(error => {
                console.error("Houve um erro ao enviar o contato:", error.response.data);
            });
    };

    return (
        <div>
            <div className="login-box">
                <p>Formulário de Contato</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input required type="text" name="nome" id="nome" onChange={handleChange} maxLength="60" />
                        <label>Nome</label>
                    </div>
                    <div className="user-box">
                        <input required type="email" name="email" id="email" onChange={handleChange} maxLength="60" />
                        <label>E-Mail</label>
                    </div>
                    <div className="user-box">
                        <input required type="tel" name="telefone" id="telefone" onChange={handleChange} maxLength="15" />
                        <label>Telefone</label>
                    </div>
                    <div className="user-box">
                        <input required type="date" name="data" id="data" onChange={handleChange} />
                        <label></label>
                    </div>
                    <div className="user-box">
                        <input required type="text" name="local" id="local" onChange={handleChange} maxLength="60"  />
                        <label>Local</label>
                    </div>
                    <div className="user-box">
                        <textarea required id="mensagem" name="mensagem" rows="4" onChange={handleChange} maxLength="500" ></textarea>
                        <label>Escreva sobre seu evento</label>
                    </div>
                    <div className="user-box2">
                    <label>Pacote:</label>
                        <select required id="pacote" name="pacote" onChange={handleChange}>
                            <option value="Pacote Básico">Pacote Básico</option>
                            <option value="Pacote Intermediario">Pacote Intermediário</option>
                            <option value="Pacote Premium">Pacote Premium</option>
                        </select>
                        
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default ContatoForm;
