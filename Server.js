import express from "express"
import dotenv from "dotenv"
import connection from './Config/db.js'
import Restaurant from './Models/Restaurant.js'
import Review from './Models/Review.js'

// load Config
dotenv.config({path:'./config/config.env'})

const port=process.env.port
// Run Server
const server=express()

server.listen(
    port, console.log(`Servidor rodando no ambiente de ${process.env.NODE_ENV} na porta ${port}...`))

server.get('/', (req,res) => res.send('Hello meu consagrado!'))

server.get('/users',(req,res) => res.send('Pagina de Usuários'))

const migrate = async () => {
    try {
        const resultado= await connection.sync()
        console.log(resultado)
    } catch(error){
        console.log(error)
    }
}

migrate()