const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
const app = express();

app.use('/api-docs', swaggerUi.serve,
    swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log("Servidor em execução na porta 3000"));