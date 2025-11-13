import produtoController from "./controller-produto.js";

// Exemplo de uso do controller de produto

// Exibe todos os produtos em formato JSON (forma alternativa)
produtoController.obterTodos().then((produtos) => {
    for (let produto of produtos) {
        console.log(JSON.stringify(produto))
    }
})

// Exibe todos os produtos (formato personalizado)
// produtoController.obterTodos().then(
//     (produtos) => {
//         for (let p of produtos)
//             console.log(p.nome + "::" + p.quantidade)
//     }
// )

// Cria um produto e lista todos os produtos em seguida
// produtoController.criarProduto("Uva", 800).then(
//     x => produtoController.obterTodos().then(
//         (produtos) => {
//             for (let p of produtos)
//                 console.log(p.nome + "::" + p.quantidade)
//         }
//     )
// )

// Obtém produtos com nome iniciando com "L" e quantidade maior que 1000
// produtoController.obterNomeQtd("A", 100).then(
//     (produtos) => {
//         for (let p of produtos)
//             console.log(p.nome + "::" + p.quantidade)
//     }
// )

// Zera quantidades nulas e exibe a quantidade de registros atualizados
// produtoController.zerarQtd().then(
//     (qtd) => console.log(`Registros atualizados: ${qtd}`)
// )

// Remove um produto pelo código
// produtoController.removerProduto(6).then(
//     () => console.log("Produto removido")
// )

// Altera um produto e exibe o produto alterado
// produtoController.alterarProduto(5, "Laranja Bahia", 2500).then(
//     (produto) => console.log(`Produto alterado: ${produto.nome}::${produto.quantidade}`)
// )



