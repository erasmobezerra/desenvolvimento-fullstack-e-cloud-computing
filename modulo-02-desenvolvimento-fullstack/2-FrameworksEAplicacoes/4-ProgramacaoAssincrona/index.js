// 1. Funções de Callback

// Exemplo 1
const fsPromises = require('fs').promises;
fsPromises.readFile("./Meu_Arquivo.txt", "utf8")
    .then((result) => {
        console.log("Lido: " + result);
    })
    .catch(function (error) {
        console.log(error);
    })


// Exemplo 2
const $fs = require('fs');
$fs.readFile('/Users/denis/teste.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString('utf8'));
});


// Exemplo 3
let router = express.Router();
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', function (req, res) {
    res.send('Birds home page');
});


// Exemplo 4
const libEmitter = require('events')
const myEmitter = new libEmitter.EventEmitter();
let m = 0;
myEmitter.on('somar', () => { console.log(++m); });
myEmitter.on('error', (err) => {
    console.error('Opa! Erro!');
});
myEmitter.emit('somar');
myEmitter.emit('somar');
myEmitter.emit('error', new Error('Erro!'));




// 2. Funções Assíncronas com Async e Await


// Exemplo 1
const somar = async (a, b) => a + b;
const imprimir_soma = async (a, b) => {
    let valor = await somar(a, b);
    console.log(valor);
    return "Processo Concluido";
}
imprimir_soma(1, 2).then((retorno) => console.log(retorno));


// Exemplo 2
const fsPromises = require('fs').promises;
const func_exemplo = async () => {
    console.log(await fsPromises.readFile("./Meu_Arquivo.txt", "utf8"));
}

// Exemplo 3
const $fs = require('fs / promises');
async function teste_leitura() {
    try {
        const data = await $fs.readFile(
            '/Users/denis / teste.txt', { encoding: 'utf8' });
        console.log(data);
    } catch (err) { console.log(err); }
}
teste_leitura();


// Exemplo 4
$fs.readFile('/Users/denis/teste.txt', { encoding: 'utf8' })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));




// 3. Funções Assíncronas com Promises

// Exemplo 1
const obterTodos = async () => {
    if (Math.random() < 0.5)
        return [4, 2, 6, 4, 2, 1, 4, 6, 8, 9];
    throw new Error("Erro ao recuperar");
}

const obterPromise = () => {
    const promise = new Promise((resolve, reject) => {
        obterTodos()
            .then((dados) => resolve(dados))
            .catch((err) => reject(new Error(err)))
    })
    return promise;
}

obterPromise()
    .then((dados) => console.log(dados))
    .catch((err) => console.log(err))


// Exemplo 2
const somar2 = (a, b) => Promise.resolve(a + b)
const dobrar = (x) => Promise.resolve(x * 2)
const dividir = (a, b) =>
    (b == 0) ? Promise.reject(new Error("Div by zero")) :
        Promise.resolve(a / b);

somar2(4, 5)
    .then((x) => dobrar(x))
    .then((y) => dividir(y, 6))
    .then((z) => console.log(z))

dividir(2, 0)
    .then((x) => console.log(x))
    .catch((err) => console.log(err.message))


// Exemplo 3
const {promisify} = require('util');
const {writeFile} = require('fs');
const writeFilePromises = promisify(writeFile);
writeFilePromises('arquivo.txt', 'conteúdo do arquivo')
.then(() => console.log('arquivo criado com sucesso!'))
.catch(err => console.log(err));


// Exemplo 4
somar = (a,b,callback) => {
const x = a + b;
callback(null,x);
}
// Utilização padrão
somar(1,2,(err,w)=>console.log(w));
// Utilização via thenconst somarPromise = promisify(somar);
somarPromise(1,2).then((x)=>console.log(x));