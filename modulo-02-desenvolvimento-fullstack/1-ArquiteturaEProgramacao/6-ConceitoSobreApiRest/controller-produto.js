import { Op } from "sequelize";
import ProdutoRepo from "./model-produto.js";

async function obterTodos() {
    return await ProdutoRepo.findAll();
}

async function obterProduto(codigo) {
    return await ProdutoRepo.findByPk(codigo);
}

async function obterNomeQtd(nome, quantidade) {
    return await ProdutoRepo.findAll({
        attributes: ['nome', 'quantidade'],
        where: {
            nome: { [Op.like]: `${nome}%` },
            quantidade: { [Op.gt]: quantidade }
        }
    });
}

async function criarProduto(nome, quantidade) {
    const produto = await ProdutoRepo.create(
        { nome: nome, quantidade: quantidade });
    return produto.codigo;
}

async function alterarProduto(codigo, nome, quantidade) {
    let produto = await ProdutoRepo.findByPk(codigo);
    produto.nome = nome;
    produto.quantidade = quantidade;
    return await produto.save();
}


async function zerarQtd() {
    const [updateRows] = await ProdutoRepo.update(
        { quantidade: 0 },
        { where: { quantidade: null } }
    );
    return updateRows;
}

async function removerProduto(codigo) {
    let produto = await ProdutoRepo.findByPk(codigo);
    await produto.destroy();
}

export default {
    obterTodos,
    obterProduto,
    obterNomeQtd,
    criarProduto,
    alterarProduto,
    zerarQtd,
    removerProduto
};