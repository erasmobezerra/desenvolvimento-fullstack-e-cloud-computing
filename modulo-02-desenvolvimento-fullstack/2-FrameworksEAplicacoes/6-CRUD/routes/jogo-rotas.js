const express = require("express")
const PersonagemDAO = require("../daos/personagem-daos")
const router = express.Router();
const dao = new PersonagemDAO();

// Rotas CRUD
// Listar todos
router.get('/', async (req, res) => {
    let dados = await dao.findAll();
    res.json(dados);
})

// Listar por id
router.get('/:id', async (req, res) => {
    let dados = await dao.find(req.params.id);
    res.json(dados);
})

// Criar novo
router.post('/', async (req, res) => {
    let dados = await dao.create(req.body);
    res.json(dados);
})

// Alterar existente
router.put('/:id', async (req, res) => {
    let dados = await dao.update(req.params.id, req.body);
    res.json(dados);
})

// Excluir existente
router.delete('/:id', async (req, res) => {
    let dados = await dao.excluir(req.params.id);
    res.json(dados);
})

module.exports = router