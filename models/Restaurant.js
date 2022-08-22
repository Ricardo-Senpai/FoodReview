// 'sequelize' é uma biblioteca que sincroniza os modelos com o banco de dados e transforma os códigos em códigos sql
import Sequelize from "sequelize";

import connection from "../config/db.js";

const Restaurant = connection.define(

    'restaurant',
    {

        // oque o restaurant vai ter de informação
        id: {

            type: Sequelize.INTEGER,
            autoIncrement: true,
            allwNull: false,
            primaryKey: true

        },
        name:{

            type: Sequelize.STRING,
            allowNull: false

        },
        type: {

            type: Sequelize.STRING,
            allowNull: false

        },
        description: {

            type: Sequelize.STRING,
            allowNull: false

        },
        address: {

            type: Sequelize.STRING,
            allowNull: false

        }

    }

);

export default Restaurant;



