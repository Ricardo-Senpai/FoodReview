// 'sequelize' é uma biblioteca que sincroniza os modelos com o banco de dados e transforma os códigos em códigos sql
import Sequelize from "sequelize";
import connection from "../config/db.js";
import bcrypt from 'bcrypt';

const User = connection.define(

    'user',
    {

        // oque o user vai ter de informação
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
        email: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                isEmail: true

            },
            unique: true

        },
        password: {

            type: Sequelize.STRING,
            allowNull: false

        },
        admin: {

            type: Sequelize.BOOLEAN,
            allowNull: false

        }

    },
    {
        hooks: {
        //criptografia do password
            beforeCreate: async(user) => {
                if(user.password){
                    const salt = await bcrypt.genSaltSync(10,'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async(user) => {
                if(user.password){
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
        }
    }

);

export default User;



