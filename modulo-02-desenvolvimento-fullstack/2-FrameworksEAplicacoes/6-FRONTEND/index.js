const readline = require("readline");
const Cliente = require("./cliente.js")
const cliente = new Cliente();

// Interface de leitura
const leitor = readline.createInterface({
    input: process.stdin, output: process.stdout
});

// Função para ler entrada do usuário
const ler = (pergunta) => {
    return new Promise(resolve => {
        leitor.question(pergunta, (input) => resolve(input))
    });
}

// Função do menu
const menu = async () => {
    console.log("1 - Listar Todos. 2 - Listar Um. 3 - Incluir. 4 - Alterar. 5 - Excluir. 0 - Sair.");
    const valor = await ler("Digite a opcao:");
    return eval(valor);
}

// Funções para cada operação

// Função para obter dados do personagem
const obterDados = async () => {
    const nomeStr = await ler("Nome:");
    const ataqueStr = await ler("Ataque:");
    const defesaStr = await ler("Defesa:");
    return [nomeStr, eval(ataqueStr), eval(defesaStr)];
}

// Incluir personagem
const incluir = async () => {
    const [nome, ataque, defesa] = await obterDados();
    await cliente.incluir(nome, ataque, defesa);
}

// Listar personagens
const listar = async () => {
    const dados = await cliente.obterTodos();
    for (let obj of dados)
        console.log(obj);
}

// Listar um personagem
const listarUm = async () => {
    const idStr = await ler("ID do personagem a listar:");
    const obj =  await cliente.obter(eval(idStr));
    console.log(obj);
}

// Alterar personagem
const alterar = async () => {
    const idStr = await ler("ID do personagem a alterar:");
    const [nome, ataque, defesa] = await obterDados();
    await cliente.alterar(eval(idStr), nome, ataque, defesa);
 }

// Excluir personagem
const excluir = async () => { 
    const idStr = await ler("ID do personagem a excluir:");
    await cliente.excluir(eval(idStr));
}

// Função principal
const principal = async () => {
        let opcao;
        do {
            opcao = await menu();
            switch (opcao) {
                case 1: await listar(); break;
                case 2: await listarUm(); break;
                case 3: await incluir(); break;
                case 4: await alterar(); break;
                case 5: await excluir(); break;
            }
        } while (opcao != 0);
    }

    principal().then(() => leitor.close());