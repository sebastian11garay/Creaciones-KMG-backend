import { Router } from "express";
import { createProducts, deleteproductById, getAllProducts, getProductsById, updateProductById } from "../controllers/products.controller.js";
const router = Router();

//DEFINICION DE LAS RUTAS DE PRODUCTS
router.post( '/', createProducts );
router.get( '/', getAllProducts) ;
router.get( '/:idProduct', getProductsById );
router.delete('/:idProduct', deleteproductById);
router.patch( '/:idProduct', updateProductById );


export default router;