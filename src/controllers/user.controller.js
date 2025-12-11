// se debe de encargar de recibir las peticiones y responder a ellas
import { encryptedPassword } from "../helpers/bcrypt.helper.js";
import userModel from "../models/user.model.js";
import { dbRegisterUser, dbGetAllUsers, dbGetUserById, dbDeletedUserById, dbUserUpdate, dbGetUserByEmail } from "../services/user.service.js";

const  createUser = async (req, res) => {

    try {
    const inputData  = req.body;                     //extraer el cuerpo de la peticion

    // paso 1: verificar si el usuario existe
    const userFound = await dbGetUserByEmail  (inputData.email);
    
    if (userFound) {
        return res.json({ msg: 'error: no se puede registrar el usario ya esta registrado' });
    }
     
    // paso2: encriptar la clave del usuario

    inputData.password = encryptedPassword (inputData.password);
    console.log( 'inputData antes de registrar', inputData );

    //paso3: registrar el usuario
    console.log( inputData );   
    //registrar los datos usandon uselModel
    const dataRegistered = await dbRegisterUser( inputData );             //registrar los datos en la base de datos

    //paso 4: eliminar datos senseibles
    const jsonUserFound = dataRegistered.toObject();   //convertir un bjson a json

    delete jsonUserFound.password;

    // responder al usuario

    

    res.json({ 
         
        user: jsonUserFound    // ECMAScript 2015
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