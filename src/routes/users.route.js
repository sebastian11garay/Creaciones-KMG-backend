//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import express from  'express';
const router = express.Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)
router.get('/users' , (req,res) => {
    // res.send('<h1>Users</h1>');
    const users = [
        {name: "Sebastian", age: 21},
        {name: "Luisa", age: 20},
    ];
    res.json(users)
});


// Definicion de las rutas (EndPoints)
router.get( '/', ( req, res ) => {
    res.json({ msg: 'Obtiene todos los usuarios' });
} );

router.post( '/', ( req, res ) => {
    res.json({ msg: 'Crear un usuario' });
} );

router.put( '/', ( req, res ) => {
    res.json({ msg: 'Actualiza todos las propiedades del usuario' });
} );

router.patch( '/', ( req, res ) => {
    res.json({ msg: 'Actualiza parcialmente 1 o todas las propiedades del usuario' });
} );

router.delete( '/', ( req, res ) => {
    res.json({ msg: 'Elimina un usuario' });
} );


//exportando router usando commonJS
export default router;