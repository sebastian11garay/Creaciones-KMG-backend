//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import { Router} from  'express';

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller.js';
import authUser from '../middlewares/authorization.middleware.js';
import authenticationUser from '../middlewares/authentication.middleware.js';
import { ALLOWED_ROLES } from '../config/global.config.js';

const router = Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    createUser );
router.get( '/', 
        [ authenticationUser,authUser(ALLOWED_ROLES)],  
     getAllUsers) ;
router.get( '/:idUser',    
     [ authenticationUser,authUser(ALLOWED_ROLES)],  
 getUserById ); // parametrizar la ruta: crear un parametro en la ruta que funje como variable
router.delete('/:idUser',    
     [ authenticationUser,authUser(ALLOWED_ROLES)],  
 deleteUserById);
router.patch( '/:idUser',    
     [ authenticationUser,authUser(ALLOWED_ROLES)],  
 updateUserById );


//exportando router usando commonJS
export default router;