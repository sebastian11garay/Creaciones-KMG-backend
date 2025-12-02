//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import { Router} from  'express';

import { createUser } from '../controllers/user.controller.js';
const router = Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/',  createUser );


// Definicion de las rutas (EndPoints)

router.post( '/', ( req, res ) => {
    res.json({ msg: 'Crear un usuario' });
} );



//exportando router usando commonJS
export default router;