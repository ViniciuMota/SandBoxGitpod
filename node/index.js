const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response)=>{
    response.json({
        ok: true
    })
})

app.get('/:nome', (request, response)=>{
    const {nome} = request.params;
    response.json({
        nome:nome
    })
})

app.listen(3333);