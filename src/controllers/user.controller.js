// se debe de encargar de recibir las peticiones y responder a ellas
import userModel from "../models/user.model.js";
import { dbRegisterUser, dbGetAllUsers, dbGetUserById, dbDeletedUserById, dbUserUpdate } from "../services/user.service.js";

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

const getUserById = async ( req, res ) => {
    try {
        const idUser = req.params.idUser;
    
        const user = await dbGetUserById (
            idUser);
    
        res.json ({
            user
        });
    }
        
     catch (error) {
        console.error( error );
        res.json ({
            msg: 'Error: no se pudo obtener usuario por ID'
            
        });

    }
}

const deleteUserById = async ( req, res ) => {
    try {
        const idUser = req.params.idUser;
    
        const userDeleted = await dbDeletedUserById( 
            idUser );
    
        res.json({
            userDeleted
        });
            
        
    } catch (error) {
        console.error(error);
        res.json({
            msg:'Error: no se pudo eliminar el usuario por Id'
        })
        
    }

    
}

const updateUserById = async (req, res) => {
    try {
        
        const inputData = req.body;
        const idUser = req.params.idUser;
    
        const userUpdate = await dbUserUpdate (
            idUser,            //ID
            inputData,           //Datos a actualizar
            { new: true }       //configuracion
        );
        
        
        
    
        //  const userUpdate = await userModel.findOneAndUpdate(
        //     {_id: idUser},      //objeto de consulta debe terner el ID
        //     inputData              //Datos a actualizar
        // );
        
        res.json({
            userUpdate
        });

    } catch (error) {
        console.error(error)
        res.json({
            msg: 'Error: no se pudo actualizar el usuario por ID'
        });
        
    }


}

export { 
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
} 