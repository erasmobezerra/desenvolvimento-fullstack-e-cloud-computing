// Importação tradicional
// const c1 = require('./circuloF.js');

// console.log(`Um círculo de raio 1 tem área ${c1.area(1)} `+
// `e perímetro ${c1.perimetro(1)}`);


// Importação de modulos - usado para importar módulos nativos, terceiros ou locais
// Para que o comando import funcione, você deve transformar seu projeto em um módulo,
// trocando o valor de "type" de 'commonjs' por 'module', no arquivo package.json.

import { Circulo } from './circuloC.js'; // Importação nomeada - chaves {} - arquivo local
import Calculadora  from "calculadora"; // Importação default - sem chaves - npm install calculadora

const circulo1 = new Circulo(1);
console.log(`Um círculo de raio 1 tem área ${circulo1.area()} `+
`e perímetro ${circulo1.perimetro()}`);

const calculadora1 = new Calculadora();
console.log(calculadora1.somar(1,2));