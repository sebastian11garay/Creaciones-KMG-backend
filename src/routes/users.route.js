//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import express from  'express';
import userModel from '../models/user.model.js';
const router = express.Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/', async (req, res) => {
    const data  = req.body;                     //extraer el cuerpo de la peticion

    console.log( data );                        // imprimirr en la consola el cuerpo de la  peticion
    
    //registrar los datos usandon uselModel
    const dataRegistered = await userModel.create( data );             //registrar los datos en la base de datos

    // responder al usuario

    res.json({ msg: 'create users',
        // data: data;     //forma tradicional 
        dataRegistered     // ECMAScript 2015
     })
})




// Definicion de las rutas (EndPoints)

router.post( '/', ( req, res ) => {
    res.json({ msg: 'Crear un usuario' });
} );



//exportando router usando commonJS
export default router;