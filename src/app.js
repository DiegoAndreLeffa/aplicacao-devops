const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

data 

app.get('/integrantes', (req, res) => {
  res= {
  'integrantes': [
    { 'nome': 'Diego André' },
    { 'nome': 'Leonardo Giora' },
    { 'nome': 'Maria Egydio' },
  ]
}.json(data)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})