const express = require('express');
const ArquivoPDF = require('pdfkit');
const QRCode = require('qrcode');

// Cria uma aplicação Express
const app = express();

// Rota para gerar o PDF
// Evento 'data' para coletar os dados gerados
app.get('/gerarPDF', (req, res) => {
    const doc = new ArquivoPDF({ bufferPages: true });
    let dados = [];
    doc.on('data', dados.push.bind(dados));
    doc.on('end', () => {
        let pdf = Buffer.concat(dados);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(pdf),
            'Content-Type': 'application/pdf'
        }).end(pdf);
    });
    doc.font('Times-Roman').fontSize(16)
        .text('APENAS UM EXEMPLO');
    doc.end();
});

// Rota para gerar o QR Code
// Callback com erro ou o código gerado
app.get("/qrcode", (req, res) => {
    QRCode.toString('https://www.google.com', {
        errorCorrectionLevel: 'H', 
        width: 200, 
        type: 'svg'
    }, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<html><body>");
        res.write(data);
        res.write("</body></html>");
        res.end();
    });
})

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});