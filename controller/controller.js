import multer from "multer";
import { Router } from "express";
const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const usuario = await autenticarUsuario(email, senha);
        if (!usuario) {
            return resp.status(401).send({ erro: 'Credenciais inválidas' });
        }

        resp.send({ id: usuario.id_usuario, nome: usuario.nm_usuario });
    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: 'Erro interno ao autenticar o usuário' });
    }
});

endpoints.post('/evento', async (req, resp) => {
    try {
        let eventoObj = req.body;
        let id = await salvareventoService(eventoObj);

        resp.send({ id: id });
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao salvar o evento' });
    }
});

endpoints.get('/evento', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let registros = await consultareventosService(nome);

        resp.send(registros);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar eventos' });
    }
});

endpoints.get('/evento/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let evento = await consultareventoPorIdService(id);

        resp.send(evento);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar o evento' });
    }
});

endpoints.put('/evento/:id', async (req, resp) => {
    try {
        let eventoObj = req.body;
        let id = req.params.id;

        await alterareventoService(eventoObj, id);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar o evento' });
    }
});

endpoints.delete('/evento/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        await deletareventoService(id);

        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao deletar o evento' });
    }
});

let uploadCapa = multer({ dest: './storage/capa' });

endpoints.put('/evento/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {
    try {
        let id = req.params.id;
        let caminhoImagem = req.file.path;

        await alterarCapaeventoService(id, caminhoImagem);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar a capa do evento' });
    }
});

export default endpoints;
export { autenticarUsuario, criarUsuarioAdmin };
