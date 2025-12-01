//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import express from  'express';
const router = express.Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/', (req, res) => {
    const data  = req.body;    //extraer el cuerpo de la peticion

    console.log( data ); // imprimirr en la consola el cuerpo de la 
    
    res.json({ msg: 'create users',
        // data: data;     //forma tradicional 
        data               // ECMAScript 2015
     })
})




// Definicion de las rutas (EndPoints)

router.post( '/', ( req, res ) => {
    res.json({ msg: 'Crear un usuario' });
} );



//exportando router usando commonJS
export default router;