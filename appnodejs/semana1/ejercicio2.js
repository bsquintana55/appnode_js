const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Sea bienvenido a la App Express!')
})

app.get('/cliente', (req, res) => {
  res.send('Sea bienvenido, Cliente!')
})

app.listen(port, () => {
  console.log(`Esta con el puerto ${port}`)
})