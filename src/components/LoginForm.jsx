import React, { useState } from "react";
import axios from 'axios';
import '../styles/loginform.css';


function LoginForm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, senha });
            localStorage.setItem('token', response.data.token);
            alert("Login bem-sucedido!");
            // Redireciona para a página de gerenciamento de eventos
            window.location.href = "/eventos";
        } catch (err) {
            setError("Credenciais inválidas");
        }
    };

    return (
        <div className="login-box">
            <p>Login</p>
            <form onSubmit={handleLogin}>
                <div className="user-box">
                    <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input required type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <label>Password</label>
                </div>
                <button type="submit">Entrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default LoginForm;
