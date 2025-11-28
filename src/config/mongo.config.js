//Mongoose ODM, ORM
import mongoose from'mongoose';
const MONGO_URI = 'mongodb://localhost:27017/creaciones-kmg';

const dbConnection = async () => {

try {
    await mongoose.connect(MONGO_URI, {});
        console.log('BASE DE DATOS CONECTADA')
}

catch (error){
    console.log(error);
    console.log('ERROR AL CONECTAR LA BASE DE DATOS');
    }

}

export default  dbConnection;





