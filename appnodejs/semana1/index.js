/*const op=require('./ejercicio1.js')

//console.log(op)

const server = http.createServer((function(request, response)
    

));
op.sumar(4,4)
op.restar(8,4)
op.multi(2,4)
op.dividir(4,8)*/
/*
const http = require('http')
const host = 'localhost';
const port = 8000;

const requestLister = function (req,res) {
    res.writehead(200);
    Response.apply("Esto es un servidor")
    
};

const server = http.createServer(requestLister);
    server.listen(port,host,()=>{
        console.log(`servidor ejecudado sobre http://${host}:${port}`);
    })

const http = require('http')
function handleServer(req, res) {
    res.write('<h1>Respuesta del Usuario</h1>')
    res.end()

}

const server = http.createServer(handleServer).listen(3001)*/





const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.set('views',__dirname + '/views' )


app.get('/', (req, res) => {
    //res.writeHead(200, {'Content-type':'html'});
    //res.write('<h1>Bienvenidos!</h1>')
    //res.end()
    //res.send('beloooo!')
    //console.log(__dirname)
    res.render('index',{titulo:"Pagina Home ejecutada por render"})
})
app.get('/productos', (req, res) => {
    //res.writeHead(200, {'Content-type':'html'});
    //res.write('<h1>Bienvenidos!</h1>')
    //res.end()
    //res.send('beloooo!')
    //console.log(__dirname)
    res.render('productos',{
        titulo:"Belooo, pag de productos", 
        descripcion:"Encuentre sus productos aqui :)"}) 
})



app.get('/clientes', (req, res) => {
  res.write('<h1>Hola Cliente!</h1>')
  res.end()
})
app.get('/user', (req, res) => {
    res.write('<h1>Hola Usuario!</h1>')
    res.end()
})

app.delete('/user', (req, res) => {
    res.write('<h1>Hola Usuario!</h1>')
    res.end()
})

//genera 404 

app.use((req, res, next) => {

    res.status(404).sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

