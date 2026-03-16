import { Router } from "express";
import { createCategory, deletedCategoryById, getAllCategory, getCategoryById, updateCategoryById } from "../controllers/category.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
import { ALLOWED_ROLES } from "../config/global.config.js";
const router = Router();

router.post( '/', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    createCategory );
router.get( '/',
    // [ authenticationUser,authUser(ALLOWED_ROLES)],  
    getAllCategory) ;
router.get( '/:idCategory', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    getCategoryById );
router.delete('/:idCategory',
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    deletedCategoryById);
router.patch( '/:idCategory', 
    [ authenticationUser,authUser(ALLOWED_ROLES)],  
    updateCategoryById);


export default router;