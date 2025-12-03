// se debe de encargar de recibir las peticiones y responder a ellas
import userModel from "../models/user.model.js";
import { dbRegisterUser, dbGetAllUsers } from "../services/user.service.js";

const  createUser = async (req, res) => {

    try {
    const data  = req.body;                     //extraer el cuerpo de la peticion

    console.log( data );                        // imprimirr en la consola el cuerpo de la  peticion
    
    //registrar los datos usandon uselModel
    const dataRegistered = await dbRegisterUser( data );             //registrar los datos en la base de datos

    // responder al usuario

    res.json({ 
        msg: 'create users',
        // data: data;     //forma tradicional 
        dataRegistered     // ECMAScript 2015
     });

    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'error: no se pudo crear el usuario'
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await dbGetAllUsers();
        res.json({
            msg: 'obtiene todos los usuario',
            users
        });
        
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'error: no se pudo obtener el listado de usuarios'
        });
    }
    
}

export { 
    createUser,
    getAllUsers

} 