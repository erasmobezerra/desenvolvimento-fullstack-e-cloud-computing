const express = require('express');
const rotas = require('./rotas');
const app1 = express(), app2 = express();

app1.use(express.json()); 

app2.use(express.json());

app1.use("/app1", rotas);

app1.listen(3000, () => console.log('app1'));

app2.post('/webhook-client', async (req, res) => {
    console.log('Inside Callback hook', req.body);
    return res.status(200).end();
});

app2.listen(8005, () => console.log('app2'));

// Como o próprio nome diz, um Webhook representa um “gancho” na Web, onde um site,
// ao ter uma determinada rota acionada, pode enviar uma solicitação para outro site. Em
// geral, pode se tornar uma boa ferramenta para garantia de interoperabilidade entre dois
// sistemas que executam no protocolo HTTP.
// O principal objetivo de um Webhook é garantir a comunicação entre duas APIs. Eles
// também são chamados de APIs reversas ou APIs de push, sendo oferecido por muitos
// sites, como o GitHub.