import { Router } from "express";   
import { createCategory, deletedCategoryById, getAllCategory, getCategoryById, updateCategoryById } from "../controllers/category.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
const router = Router();

router.post( '/', 
    [ authenticationUser,authUser],  
    createCategory );
router.get( '/',
    [ authenticationUser,authUser],  
    getAllCategory) ;
router.get( '/:idCategory', 
    [ authenticationUser,authUser],  
    getCategoryById );
router.delete('/:idCategory',
    [ authenticationUser,authUser],  
    deletedCategoryById);
router.patch( '/:idCategory', 
    [ authenticationUser,authUser],  
    updateCategoryById);


export default router;