//IMPORTANDO LA DEPENDECIA EXPRESS USANDO commonJs
import { Router} from  'express';

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller.js';
import authUser from '../middlewares/authorization.middleware.js';
import authenticationUser from '../middlewares/authentication.middleware.js';

const router = Router();
//DEFINICION DE LAS RUTAS (ENDPOINTS)

router.post('/', 
    [ authenticationUser,authUser],  
    createUser );
router.get( '/', 
        [ authenticationUser,authUser],  
     getAllUsers) ;
router.get( '/:idUser',    
     [ authenticationUser,authUser],  
 getUserById ); // parametrizar la ruta: crear un parametro en la ruta que funje como variable
router.delete('/:idUser',    
     [ authenticationUser,authUser],  
 deleteUserById);
router.patch( '/:idUser',    
     [ authenticationUser,authUser],  
 updateUserById );


//exportando router usando commonJS
export default router;