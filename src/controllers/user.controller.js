// se debe de encargar de recibir las peticiones y responder a ellas

import { encryptedPassword } from "../helpers/bcrypt.js";
import { dbRegisterUser, dbGetAllUsers, dbGetUserById, dbDeletedUserById, dbUserUpdate, dbGetUserByEmail, dbGetUserByVerificationCode, dbConfirmUser } from "../services/user.service.js";
import { ALLOWED_ROLES } from "../config/global.config.js";
import { sendVerificationEmail } from "../helpers/email.helper.js";
 
const createUser = async (req, res) => {

    try {
        const inputData = req.body;                     //extraer el cuerpo de la peticion

    // paso 1: verificar si el usuario existe
    const userFound = await dbGetUserByEmail  (inputData.email);
    
    if (userFound) {
        return res.status(400).json({ msg: 'Error: no se puede registrar el usario, usario ya registrado' });
    }
     
    // paso2: encriptar la clave del usuario

    inputData.password = encryptedPassword (inputData.password);

    // crear const para numero random de verify y agregarlo al inputdata osea al model
    const veriCode = Math.floor(100000 + Math.random() * 900000).toString();
    inputData.verificationCode = veriCode;
    inputData.isActive = false;

        //paso3: registrar el usuario
        //registrar los datos usandon uselModel
        const dataRegistered = await dbRegisterUser(inputData);             //registrar los datos en la base de datos

        //enviamos al correo registrado el codigo
        await sendVerificationEmail(dataRegistered.email, veriCode);

        //paso 4: eliminar datos senseibles
        const jsonUserFound = dataRegistered.toObject();   //convertir un bjson a json

    delete jsonUserFound.password;
    delete jsonUserFound.createdAt;
    delete jsonUserFound.updatedAt;
    delete jsonUserFound.verificationCode; //borramos el codigo por seguridad

        // responder al usuario

    res.status(201).json({ 
        msg: 'Registro exitoso, revisa tu correo',
        user: jsonUserFound       // ECMAScript 2015
     });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'error: no se pudo crear el usuario'
        });
    }
}

const confirmAcount = async (req, res) => {
    try {
        //pedimos en el body email y codigo 
        const { email, code } = req.body;
        //le preguntamos a la base de datos para verificar que el email tenga codigo de verify
        const user = await dbGetUserByVerificationCode(email, code);
        //si no lo tiene no lo deja ingresar
        if(!user){
            return res.status(400).json({ msg: 'Código incorrecto o correo no encontrado' });
        }
        //si es el codigo correcto lo confirmamos y lo demjamos pasar

        const userConfirm = await dbConfirmUser(user.id);
        res.status(200).json({ 
            msg: 'Cuenta confirmada. Ya puedes logearte.' 
        });

    } catch (error) {
        res.status(500).json({
          msg: 'Error al confirmar' 
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await dbGetAllUsers();
        res.status(200).json({

            users
        });

    } catch (error) {
        console.statuserror(error);
        res.status(500).json({
            msg: 'error: no se pudo obtener el listado de usuarios'
        });
    }

}

const getUserById = async (req, res) => {
    try {
        const idUser = req.params.idUser;

        const userFound = await dbGetUserById(
            idUser);

        res.status(200).json({
            userFound
        });
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener usuario por ID'

        });

    }
}

const deleteUserById = async (req, res) => {
    try {
        const idUser = req.params.idUser;

        const userDeleted = await dbDeletedUserById(
            idUser);

        res.status(204).json({
            userDeleted
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo eliminar el usuario por Id'
        })

    }


}

const updateUserById = async (req, res) => {
    try {

        const inputData = req.body;
        const idUser = req.params.idUser;

        const userUpdate = await dbUserUpdate(idUser, inputData);




        //  const userUpdate = await userModel.findOneAndUpdate(
        //     {_id: idUser},      //objeto de consulta debe terner el ID
        //     inputData              //Datos a actualizar
        // );

        res.status(200).json({
            userUpdate
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'Error: no se pudo actualizar el usuario por ID'
        });

    }


}


export {
    createUser,
    confirmAcount,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
} 