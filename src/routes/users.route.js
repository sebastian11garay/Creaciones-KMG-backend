//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import { Router} from  'express';

import { createUser, deleteUserById, getAllUsers, getUserById } from '../controllers/user.controller.js';
const router = Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/',  createUser );
router.get( '/', getAllUsers) ;
router.get( '/:idUser', getUserById ); // parametrizar la ruta: crear un parametro en la ruta que funje como variable
router.delete('/:idUser', deleteUserById);


//exportando router usando commonJS
export default router;