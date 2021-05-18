'use strict';

import express from 'express'

const app = express()
app.use(express.json())

app.get('/info', (req, resp) => {
  const result = {
    "componente": "resourcemanager",
    "descrição": "Serviço para gerenciamento de recursos",
    "versao": "0.1"
  }
  resp.send(result)
})

const server = app.listen(3003, '0.0.0.0', () => {
  console.log("Aplicação Iniciada com Sucesso na porta 3003!")
})