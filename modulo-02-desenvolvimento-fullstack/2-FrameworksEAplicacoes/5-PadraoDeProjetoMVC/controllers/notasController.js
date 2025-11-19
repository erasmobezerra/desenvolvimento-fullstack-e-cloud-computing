const NotasDAO = require('../daos/notas-dao');

class NotasController {
    constructor() {
        this.dao = new NotasDAO();
    }

    listarTodos = async (req, res) => {
        try {
            const lista = await this.dao.obterTodos();
            res.status(200).json(lista);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao listar notas', details: err.message });
        }
    }

    obter = async (req, res) => {
        try {
            const obj = await this.dao.obter(req.params.id);
            if (!obj) return res.status(404).json({ error: 'Nota não encontrada' });
            res.status(200).json(obj);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao obter nota', details: err.message });
        }
    }

    incluir = async (req, res) => {
        try {
            const criado = await this.dao.incluir(req.body);
            res.status(201).json(criado);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao incluir nota', details: err.message });
        }
    }

    alterar = async (req, res) => {
        try {
            const resultado = await this.dao.alterar(req.params.id, req.body);
            res.status(200).json(resultado);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao alterar nota', details: err.message });
        }
    }

    excluir = async (req, res) => {
        try {
            const resultado = await this.dao.excluir(req.params.id);
            res.status(204).json(resultado);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao excluir nota', details: err.message });
        }
    }
}

module.exports = new NotasController();
