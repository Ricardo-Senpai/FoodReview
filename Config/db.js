// import mysql from 'mysql'
import dotenv from 'dotenv'
import Sequelize from 'sequelize'
import SequelizeMethod  from 'sequelize/types/utils'

// load Config
dotenv.config({path:'./config.env'})

const connection = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect:'mysql',
    host:process.env.MYSQL_HOST
  }
  )



export default connection

// const connect= () =>{

    // var connection = mysql.createConnection({
    //     host: process.env.MYSQL_HOST,
    //     user: process.env.MYSQL_USER,
    //     password: process.env.MYSQL_PASSWORD,
    //     database: process.env.MYSQL_DATABASE
    //   });
       
    //   connection.connect();
       
    //   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0].solution);
    //   });
       
    //   connection.end();
//}