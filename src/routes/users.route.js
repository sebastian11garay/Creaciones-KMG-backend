//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import { Router} from  'express';

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller.js';
import authenticationUser from '../middlewares/authetication.meddlewares.js';
import authorizationUser from '../middlewares/authorizationUser.js';
const router = Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/', [authenticationUser, authorizationUser],  createUser );
router.get( '/', [authenticationUser, authorizationUser], getAllUsers) ;
router.get( '/:idUser', [authenticationUser, authorizationUser], getUserById ); // parametrizar la ruta: crear un parametro en la ruta que funje como variable
router.delete('/:idUser', [authenticationUser, authorizationUser], deleteUserById);
router.patch( '/:idUser', [authenticationUser, authorizationUser], updateUserById );


//exportando router usando commonJS
export default router;