const http = require("http"); // Gerencia o protocolo HTTP para criação de clientes e servidores.
const os = require("os"); // Fornece informações sobre o sistema operacional, como CPU, memória, etc.   
const $fs = require("fs"); // Permite interagir com o sistema de arquivos do servidor, como ler e gravar arquivos.

const savelog = () => {
    $fs.appendFileSync("log.txt",
        `Acesso efetuado em ${new Date()}\n`);
}

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<html><body>");
    res.write("<h1>Servidor</h1>");
    res.write(`Plataforma: ${os.platform()}<br/>`);
    res.write(`Endereço: ${os.hostname()}<br/>`);
    res.write("</body></html>");
    res.end();
    savelog();
}).listen(3000);

console.log("Servidor executando na porta 3000");