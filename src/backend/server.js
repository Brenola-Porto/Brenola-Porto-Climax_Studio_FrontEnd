const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'senha123';

// Configuração do CORS para permitir que o React (porta 5173) acesse o servidor Node.js
app.use(cors({ origin: 'http://localhost:5173' }));

// Configuração do Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuração da Conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Coloque seu usuário do MySQL aqui
    password: '',  // Coloque sua senha do MySQL aqui
    database: 'cdb'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Middleware para autenticar o token



app.get('/api/table', (req, res) => {
    res.json({ message: 'This is a protected table page' });
});

// Rota de login
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    console.log("Login attempt:", email, senha);

    // SQL query to check for matching email and senha in the login table
    const sql = 'SELECT * FROM login WHERE email = ? AND senha = ?';

    // Execute the query with email and senha as parameters to prevent SQL injection
    db.query(sql, [email, senha], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        
        if (results.length > 0) {
            if (!SECRET_KEY) {
                console.log("aaa")
            } else {
                console.log("bbb")
            }

            const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ message: "Login feito com sucesso", user: results[0], token: token });
            

        } else {
            res.status(401).json({ message: "E-mail ou senha incorretos", });
        }
    });
});


// Rota para criar um novo contato (sem autenticação)
app.post('/api/contatos', (req, res) => {
    const { nome, email, telefone, data, local, mensagem, pacote } = req.body;
    console.log("Received data:", req.body)
    const sql = 'INSERT INTO eventos (nome, email, telefone, data, local, mensagem, pacote) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nome, email, telefone, data, local, mensagem, pacote], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Contato adicionado com sucesso!' });
    });
});

// Rota para listar todos os contatos (requer autenticação)
app.get('/api/getContatos', (req, res) => {
    const sql = 'SELECT * FROM eventos';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.get('/api/getImages', (req, res) => {
    const sql = 'SELECT * FROM imagens';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.delete('/api/eventos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM eventos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Contato deletado com sucesso!' });
    });
});

app.put('/api/eventos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, data, local, mensagem, pacote } = req.body; // Fields to update

    const sql = `
        UPDATE eventos 
        SET nome = ?, email = ?, telefone = ?, data = ?, local = ?, mensagem = ?, pacote = ?
        WHERE id = ?`;

    db.query(sql, [nome, email, telefone, data, local, mensagem, pacote, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Evento not found' });
        }
        
        res.json({ message: 'Evento updated successfully!' });
    });
});


app.put('/api/images/:id', (req, res) => {
    const { id } = req.params;
    const { url, description } = req.body;
    const sql = 'UPDATE imagens SET url = ? WHERE id = ?';
    db.query(sql, [url, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Image updated successfully!' });
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
