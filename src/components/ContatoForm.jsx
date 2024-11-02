import React from "react";
import '../styles/contatoform.css';

function ContatoForm() {
    return (

        <div>
            <div className="login-box">
                <p>Formulário de Contato</p>
                <form>
                    <div className="user-box">
                        <input required type="text" name="name" id="name" />
                        <label>Nome</label>
                    </div>
                    <div className="user-box">
                        <input required type="email" name="email" id="email" />
                        <label>E-Mail</label>
                    </div>
                    <div className="user-box">
                        <input required type="tel" name="phone" id="phone" />
                        <label>Telefone</label>
                    </div>
                    <div className="user-box">
                        <input required type="date" name="date" id="date" />
                        <label></label>
                    </div>
                    <div className="user-box">
                        <input required type="text" name="location" id="location" />
                        <label>Local</label>
                    </div>
                    <div className="user-box">
                        <textarea required id="message" name="message" rows="4"></textarea>
                        <label>Escreva sobre seu evento</label>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>


    );
}
export default ContatoForm;