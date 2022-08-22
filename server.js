// 'npm run dev' para rodar o código
// 'import' é usado para importar

import  express  from "express";
import dotenv from 'dotenv';
import router from './routes/routes.js';
import bodyParser from 'body-parser'

// load config
dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT || 5000;

// run server
const server = express();

server.listen(
    
    PORT,
    console.log(`Servidor rodando no ambiente de ${process.env.NODE_ENV} na porta ${PORT}...`)
    
    );

// ROUTES == rota
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

server.use(router);
