import React, { useState } from "react";
import "./Contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem(`Obrigado, ${nome}! Entraremos em contato em breve.`);
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <div className="contato">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
        />

        <label>Telefone</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Digite seu telefone"
          required
        />

        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

export default Contato;