// 'sequelize' é uma biblioteca que sincroniza os modelos com o banco de dados e transforma os códigos em códigos sql
import Sequelize from "sequelize";

import connection from "../config/db.js";

const Review = connection.define(

    'review',
    {

        // oque o review vai ter de informação
        id: {

            type: Sequelize.INTEGER,
            autoIncrement: true,
            allwNull: false,
            primaryKey: true

        },
        idUser:{

            type: Sequelize.INTEGER,
            allowNull: false,
            references: {

                model: 'users',
                key: 'id'

            }

        },
        idRestaurant: {

            type: Sequelize.INTEGER,
            allowNull: false,
            references: {

                model: 'restaurants',
                key: 'id'

            }

        },
        comment: {

            type: Sequelize.STRING,
            allowNull: false

        },
        stars: {

            type: Sequelize.INTEGER,
            allowNull: false

        }

    }

);

export default Review;



