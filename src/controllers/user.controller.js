// se debe de encargar de recibir las peticiones y responder a ellas
import { registerUser } from "../services/user.service.js";

const  createUser = async (req, res) => {
    const data  = req.body;                     //extraer el cuerpo de la peticion

    console.log( data );                        // imprimirr en la consola el cuerpo de la  peticion
    
    //registrar los datos usandon uselModel
    const dataRegistered = await registerUser( data );             //registrar los datos en la base de datos

    // responder al usuario

    res.json({ 
        msg: 'create users',
        // data: data;     //forma tradicional 
        dataRegistered     // ECMAScript 2015
     });
}

export { 
    createUser

} 