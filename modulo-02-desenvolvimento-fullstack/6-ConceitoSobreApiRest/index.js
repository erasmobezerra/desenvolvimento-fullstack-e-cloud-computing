import http from 'node:http';
import produtoController from "./controller-produto.js";

// Criação do servidor HTTP utilizando o módulo nativo 'http' do Node.js
// A função createServer recebe uma callback que lida com as requisições
// recebidas pelo servidor. Dentro dessa callback, são verificadas as rotas
// e métodos HTTP para direcionar as requisições para as funções apropriadas
const server = http.createServer((req, res) => {

    // Rota para obter todos os produtos
    if (req.url === "/produtos" && req.method === "GET") {
        produtoController.obterTodos().then((produtos) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(produtos));
        });
    }

    // Rota para criar um novo produto
    else if (req.url === "/produtos" && req.method === "POST") {
        let corpo = "";
        req.on("data", (parte) => corpo += parte);
        req.on("end", () => {
            const produto = JSON.parse(corpo);
            produtoController.criarProduto(produto.nome, produto.quantidade).then((novoProduto) => {
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 201; // Created
                res.end(JSON.stringify(novoProduto));
            });
        })
    } 
    // Rota não encontrada
    else {
        res.statusCode = 404;
        res.end("404: Rota não encontrada");
    }
});

// O servidor é configurado para escutar na porta 3000
server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});


// Exemplo de requisição GET para obter todos os produtos
// const getProdutos = http.request(
//     {
//         hostname: 'localhost', port: 3000,
//         method: "GET", path: "/produtos"
//     },
//     (res) => {
//         res.on("data", (d) => {
//         for (const produto of JSON.parse(d.toString())) {
//             console.log(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}`);
//         }
//         });
//     }
// );
// getProdutos.end();


// Exemplo de requisição POST que cria um novo produto
// E envia dados do novo produto no corpo da requisição
// const postProduto = http.request(
//     {
//         hostname: 'localhost', port: 3000,
//         method: "POST", path: "/produtos"
//     },
//     (res) => {
//         res.on("data", (d) => console.log(d.toString()));
//     }
// )
// postProduto.write(JSON.stringify({ nome: "Abacate", quantidade: 450 }));
// postProduto.end();



