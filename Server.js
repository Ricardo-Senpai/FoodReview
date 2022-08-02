import express from "express";
import dotenv from "dotenv";

// load Config
dotenv.config({path:'./config/config.env'})
const port=process.env.port
// Run Server
const server=express()
server.listen(port, console.log(`Servidor rodando na porta ${port}...`))

server.get('/', (req,res) => res.send('Hello meu consagrado!'))

server.get('/users',(req,res) => res.send('Pagina de Usuários'))