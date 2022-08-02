import express from "express";

const server=express()
server.listen(3000, console.log('Servidor rodando na porta 3000...'))

server.get('/', (req,res) => res.send('Hello meu consagrado!'))

server.get('/users',(req,res) => res.send('Pagina de Usuários'))