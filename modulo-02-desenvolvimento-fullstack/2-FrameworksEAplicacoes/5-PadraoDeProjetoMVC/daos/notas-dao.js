const db = require('../models/index.js');

// Data Access Object (DAO) 
// Implementa operações CRUD usando Sequelize 
// Todos os métodos são assíncronos, com a marcação async, e
// as chamadas para o Sequelize são precedidas por await, de 
// forma a aguardar a execução e depois retornar o resultado como promise.
class NotasDAO {
    obterTodos = async () => await db.Nota.findAll();
    obter = async (id) => await db.Nota.findByPk(id);
    incluir = async (objJSON) => await db.Nota.create(objJSON);
    alterar = async (_id, objSON) =>
        await db.Nota.update(objSON, { where: { id: _id } });
    excluir = async (_id) =>
        await db.Nota.destroy({ where: { id: _id } });
}

module.exports = NotasDAO