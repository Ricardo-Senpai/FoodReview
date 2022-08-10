import connection from './Config/db.js'
import Restaurant from './Models/Restaurant.js'
import Review from './Models/Review.js'



const migrate = async () => {
    try {
        const resultado= await connection.sync()
        console.log(resultado)
    } catch(error){
        console.log(error)
    }
}

migrate()