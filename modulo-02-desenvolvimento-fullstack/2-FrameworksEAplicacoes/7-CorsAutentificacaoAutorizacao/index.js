const express = require('express')
const cors = require('cors')
const TokenManager = require('./token-manager')
const UserDao = require('./user-dao')
const dao = new UserDao();
const tm = new TokenManager();
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.post('/login', async (req, res) => {
    const usuario = await dao.findByLoginSenha(
        req.body.login, req.body.senha);
    if (usuario) {
        const id = usuario.id; const token = tm.sign(id);
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({ message: 'Login inválido!' });
})

app.post('/addUser', tm.verifyJWT, async (req, res) => {
    try {
        console.log('addUser called by userId:', req.userId);
        console.log('body:', req.body);
        const { nome, login, senha } = req.body;
        if (!nome || !login || !senha) {
            return res.status(400).json({ error: 'Campos obrigatórios: nome, login, senha' });
        }
        const usuario = await dao.create({ nome, login, senha });
        return res.status(201).json({ usuario: usuario });
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        return res.status(500).json({ error: 'Erro ao criar usuário', details: err.message });
    }
})

app.listen(3000, () => console.log("Servidor pronto"));