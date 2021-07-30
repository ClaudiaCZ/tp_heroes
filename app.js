const server = require("express");
const { dirname } = require("path");
const path = require('path');
const app = server();

const port = 3030;



app.use(server.static('public'))

app.get('/home',(req, res) =>  res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/Babbage',(req, res)=> res.sendFile(path.join(__dirname,'views','babbage.html')))
app.get('/Berners-Lee',(req, res)=> res.sendFile(path.join(__dirname,'views','berners-lee.html')))
app.get('/Clarke',(req, res)=> res.sendFile(path.join(__dirname,'views','clarke.html')))
app.get('/Hamilton',(req, res) => res.sendFile(path.join(__dirname,'views','hamilton.html')))
app.get('/Hopper',(req, res) => res.sendFile(path.join(__dirname,'views', 'hopper.html')))
app.get('/Lovelace',(req, res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')))
app.get('/turing',(req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')))

app.listen(port, () => console.log("Servidor ejecutado en el puerto", port))