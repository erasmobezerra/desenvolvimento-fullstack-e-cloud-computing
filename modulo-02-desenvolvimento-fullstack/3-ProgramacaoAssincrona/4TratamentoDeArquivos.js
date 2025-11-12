/*
## ✅ Vantagens de não usar `open` e `close` diretamente

- **Menos código** e mais legibilidade.
- **Menos chance de erro** por esquecer de fechar o arquivo.
- **Evita vazamento de recursos**, já que o fechamento é garantido pela API.
- **Mais seguro em ambientes concorrentes**, pois o sistema lida com bloqueios e sincronização.

---

## 🧠 Quando usar `open` e `close` manualmente?

Você só precisa usar `open` e `close` se:

- Vai **manter o arquivo aberto por muito tempo** (ex: streaming de dados).
- Precisa **escrever em partes** ou fazer múltiplas operações sem reabrir.
- Está lidando com **grandes volumes de dados** e quer controle fino sobre buffers e desempenho.

## ⚙️ Como `fs/promises.appendFile` funciona internamente

- Quando você usa `appendFile('log.txt', texto, 'utf8')`, o Node.js **abre o arquivo automaticamente**, escreve o conteúdo e **fecha o arquivo ao final da operação**.
- Esse processo é **otimizado internamente** pelo sistema de arquivos e pelo runtime do Node.js.
- Ou seja, você **não precisa gerenciar manualmente o file descriptor (`fd`)** como faria com `fs.open` e `fs.close`.


*/

// Aqui está a versão refatorada do seu código usando apenas fs/promises com async/await, tornando-o mais moderno, limpo e legível:
import $fs from 'fs/promises';

async function escreverLog() {
    try {
        const texto = `Escrito X em ${new Date()}\n`;
        await $fs.appendFile('log2.txt', texto, 'utf8');
        console.log('Log escrito com sucesso.');
    } catch (err) {
        console.error('Erro ao escrever no log:', err);
    }
}

async function lerLog() {
    try {
        const data = await $fs.readFile('log2.txt', 'utf8');
        console.log('Conteúdo do log:');
        console.log(data);
    } catch (err) {
        console.error('Erro ao ler o log:', err);
    }
}

async function main() {
    await escreverLog();
    await lerLog();
}

main();