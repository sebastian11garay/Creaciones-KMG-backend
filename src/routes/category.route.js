import { Router } from "express";
import { createCategory, deletedCategoryById, getAllCategory, getCategoryById, updateCategoryById } from "../controllers/category.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
import { ALLOWED_ROLES, ROLES } from "../config/global.config.js";
const router = Router();

router.post( '/', 
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    createCategory );
router.get( '/',
    // [ authenticationUser,authUser(ALLOWED_ROLES)],  
    getAllCategory) ;
router.get( '/:idCategory', 
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    getCategoryById );
router.delete('/:idCategory',
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    deletedCategoryById);
router.patch( '/:idCategory', 
    [ authenticationUser,authUser([ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.COLABORATOR])],  
    updateCategoryById);


export default router;