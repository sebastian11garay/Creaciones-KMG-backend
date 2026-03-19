
import { verifyEncriptedPassword } from "../helpers/bcrypt.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { dbGetUserByEmail } from "../services/user.service.js";

const loginUser = async (req,res) => {
    const inputData = req.body;

    //paso 1: verificar si el usuario no existe(por favor registrese)

    const userFound = await dbGetUserByEmail  (inputData.email);
        
        if ( ! userFound ) {
            return res.status(400).json({ msg: 'No puede logearse. por favor haga su registro' });
        }
        //verificar si esta activo osea si ya verifico correo
        if(!userFound.isActive){
            return res.status(403).json({ 
            msg: 'Cuenta no verificada. Por favor revisa tu correo para confirmar.' 
            });
        }
        

    //paso 2: verificar si la contrasenia cohincide

    const isMatch = verifyEncriptedPassword ( inputData.password, userFound.password );

    if ( ! isMatch ) {
        return res.status(400).json({ msg: 'credenciales invalidas' });
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
    delete jsonUserFound.createdAt;
    delete jsonUserFound.updatedAt;

    //paso 5: responder al cliente 

    res.status(201).json({
        token,
        user: jsonUserFound,
        msg: `Bienvenido ${jsonUserFound.name}`
    });
}

const reNewToken = async (req, res) => {
// paso 1: extrae el payload del onjeto req que hemos asignado 
    try {
        const payload = req.payload;
        

        //paso 3: verificar si el usuario sigue existiendo en la base de datos
        const userFound = await dbGetUserByEmail( payload.email);
        
        if( !userFound ) {
            return res.status(400).json({ msg: 'usuario no existe. por favor haga su registro' });
        }
    // Paso 3: Crear el nuevo token con el payload actualizado
        const newPayload = {
            id: userFound._id,      // Referenciar quien hace que en la applicacion
            name: userFound.name,   // Puedo usar este dato para personalizar mensajes
            email: userFound.email, // Puedo usar este dato para enviar mensajes anonimos entre usuarios de la aplicacion
            role: userFound.role    // Puedo usar este dato para acceder a las diferentes rutas permisionadas en el FrontEnd
        };

        // Paso 4: Generar el nuevo token
        const newToken = generateToken(newPayload);

        // Paso 5: Eliminar las propiedades con datos sensibles 
        const jsonUserFound = userFound.toObject();     // Convertir un documento de MongoDB (BJSON), en un JavaScript Object (JSON)
        delete jsonUserFound.password;
        delete jsonUserFound.createdAt;
        delete jsonUserFound.updatedAt;                  // Elimina la propiedad 'password' del JSON

        // Paso 6: Envia respuesta al cliente con el nuevo Token y los datos actualizados el
        res.status(201).json({ token: newToken, user: jsonUserFound });
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'Error: no se puede renovar token'
        });
    
    }

} 

export{
    loginUser,
    reNewToken
} 