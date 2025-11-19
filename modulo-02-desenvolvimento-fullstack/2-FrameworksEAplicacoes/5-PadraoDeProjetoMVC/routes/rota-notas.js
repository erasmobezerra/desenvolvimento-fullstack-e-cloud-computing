const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

router.get('/', notasController.listarTodos);

router.get('/:id', notasController.obter);

router.post('/', notasController.incluir);

router.delete('/:id', notasController.excluir);

router.put('/:id', notasController.alterar);

module.exports = router