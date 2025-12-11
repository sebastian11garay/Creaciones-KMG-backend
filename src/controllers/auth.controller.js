import { verifyEncriptedPassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { dbGetUserByEmail } from "../services/user.service.js";

const loginUser = async (req,res) => {
    const inputData = req.body;

    //paso 1: verificar si el usuario no existe(por favor registrese)

    const userFound = await dbGetUserByEmail  (inputData.email);
        
        if ( ! userFound ) {
            return res.json({ msg: 'No puede logearse. por favor haga su registro' });
        }
         

    //paso 2: verificar si la contrasenia cohincide

    const isMatch = verifyEncriptedPassword ( inputData.password, userFound.password );

    if ( ! isMatch ) {
        return res.json({ msg: 'credenciales invalidas' });
    }

    //paso 3: generar credencial digital(Token)

    const payload = {
        name: userFound.name,   // hola (nombre)
        email: userFound.email,  // para realizar comunicaciones anonimas
        role: userFound.role     // para informar al fronteende para la autorizacion que tienen los usuarios para acceder a las diferentes interfaces

    };

    const token = generateToken( payload );

    //paso 4: eliminar propiedades con datos sensibles
            // userFound es un BJSON ( JSON binario)
    const jsonUserFound = userFound.toObject();   //convertir un bjson a json

    delete jsonUserFound.password;
    //paso 5: responder al cliente 

    res.json({
        token,
        user: jsonUserFound
    });
}

export{
    loginUser,
}