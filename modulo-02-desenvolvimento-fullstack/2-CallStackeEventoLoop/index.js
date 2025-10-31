// Programação Síncrona (Blocking)
const fs = require('fs');

// console.log("1. Pedindo um hambúrguer (síncrono)...");

try {
  // readFileSync = SÍNCRONO. "Sync" no final.
  // O Node.js VAI PARAR AQUI até o arquivo 'dados.txt' ser lido.
  const dados = fs.readFileSync('dados.txt', 'utf8'); 
  console.log("2. Hambúrguer entregue! Conteúdo: ", dados);
} catch (err) {
  console.error("2. A cozinha falhou:", err);
}

console.log("3. Atendendo o próximo cliente."); 
// Esta linha SÓ executa depois que o arquivo for lido.

console.log("--------------------------------------------------");

// Programação Assíncrona (Non-Blocking)

// A Solução Clássica: Callbacks
// Callback => É uma função que você passa como argumento para outra função, 
//             para ser executada depois que a operação assíncrona terminar.
console.log("1. Pedindo um hambúrguer (callback)...");

fs.readFile('dados.txt', 'utf8', (err, dados) => {
  if (err) {
    return console.error("2. A cozinha falhou:", err);
  }
  console.log("1. Hambúrguer entregue! Conteúdo: ", dados);
});

// O Node.js NÃO espera. Ele registra o pedido e continua.
console.log("2. Atendendo o próximo cliente. (enquanto a pizza está no forno)"); 


// A Evolução: Promises (.then / .catch)
// Callbacks funcionam, mas se você precisar ler o arquivo A, depois o B, depois escrever C, 
// você entra no "Callback Hell" (código aninhado, ilegível).

// As Promises são objetos que representam a conclusão (ou falha) futura de uma operação. É um "recibo" que o garçom te dá. Esse recibo pode estar em 3 estados:

// pending (pendente): A cozinha ainda está preparando.
// fulfilled (realizada): O prato está pronto (sucesso).
// rejected (rejeitada): A cozinha deixou cair o prato (erro).

// Usamos .then() para o caso de sucesso (fulfilled) e .catch() para o caso de erro (rejected).

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

console.log("1. Pedindo um Hamburguer e Sobremesa (Promise)...");

readFile('dados.txt')
  .then(dados => {
    // .then() só executa se a Promise for 'fulfilled' (sucesso)
    console.log("3.1 Hamburguer entregue!", dados);
    return readFile('dados2.txt'); // Podemos retornar outra Promise aqui
  })
  .then(dados2 => {
    console.log("3.2 Sobremesa entregue!", dados2);
  })
  .catch(err => {
    // .catch() só executa se a Promise for 'rejected' (erro)
    console.error("3. A cozinha errou o Hamburguer:", err);
  });

console.log("2. Atendendo o próximo cliente (enquanto a sobremesa é preparada).");

console.log("--------------------------------------------------");



// A Sintaxe Moderna: async/await
// async/await é a forma mais moderna e legível de trabalhar com Promises. É apenas "açúcar sintático" (uma sintaxe mais bonita) por cima das Promises.
// async: Declara que uma função vai lidar com código assíncrono. Ela sempre retorna uma Promise.
// await: Pausa a execução apenas dentro da função async até que a Promise seja resolvida.
// Importante: await não bloqueia a thread principal do Node.js. Ele apenas pausa aquela função específica, liberando o Event Loop para fazer outras coisas enquanto espera.

console.log("1. Pedindo um Hamburguer e Sobremesa (async/await)...");
const pedirComida = async () => {
  try {
    const dados = await readFile('dados.txt'); // Espera o hambúrguer
    console.log("3.1 Hamburguer entregue!", dados);
    const dados2 = await readFile('dados2.txt'); // Espera a sobremesa
    console.log("3.2 Sobremesa entregue!", dados2);
  } catch (err) {
    console.error("3. A cozinha errou o Hamburguer:", err);
  }
};

pedirComida();
console.log("2. Atendendo outro cliente (enquanto a comida do primeiro cliente é preparada).");