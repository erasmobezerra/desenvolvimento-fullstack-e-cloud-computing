const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./produto-schema');
const app = express();
app.all('/graphql', createHandler({ schema }));
app.listen({ port: 4000 });
console.log('Listening to port 4000');

// A tecnologia GraphQL (Graph Query Language) foi desenvolvida pela equipe do Facebook
// (Meta) como uma alternativa ao modelo REST. Ela tem a vantagem de poder retornar
// múltiplos formatos de resposta para um mesmo endpoint, pois define uma sintaxe de
// pesquisa simplificada