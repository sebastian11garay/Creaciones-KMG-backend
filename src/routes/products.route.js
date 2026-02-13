import { Router } from "express";
import { createProducts, deleteproductById, getAllProducts, getProductsById, updateProductById } from "../controllers/products.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authUser from "../middlewares/authorization.middleware.js";
const router = Router();

//DEFINICION DE LAS RUTAS DE PRODUCTS
router.post( '/', 
    [ authenticationUser,authUser],  
    createProducts );
router.get( '/', 
    [ authenticationUser,authUser],  
    getAllProducts) ;
router.get( '/:idProduct', 
    [ authenticationUser,authUser],  
    getProductsById );
router.delete('/:idProduct', 
        [ authenticationUser,authUser],  
    deleteproductById);
router.patch( '/:idProduct',
    [ authenticationUser,authUser],  
    updateProductById );


export default router;