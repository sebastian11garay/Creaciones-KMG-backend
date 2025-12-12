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
        id: userFound._id, //identificador unico del usuario, controlar quien hace que en la aplicacion
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

const reNewToken = async (req, res) => {
// paso 1: extrae el payload del onjeto req que hemos asignado 
    const payload = req.payload;
    

    // paso 2: elimina propiedades inecesarias para el cliente
    delete payload.iat;
    delete payload.exp;

    //paso 3: verificar si el usuario sigue existiendo en la base de datos
    const userFound = await dbGetUserByEmail( payload.email);

    if( !userFound ) {
        return res.json({ msg: 'usuario no existe. por favor haga su registro' });
    }
//paso 4: generar un nuevo token 
      
    const token = generateToken ({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    });

    //paso 5: eliminar propiedades con datos sensibles 

    const jsonUserFound = userFound.toObject();
    delete jsonUserFound.password;

    // paso 6: responder al cliente
    res.json({token, user: jsonUserFound});

} 

export{
    loginUser,
    reNewToken
} 