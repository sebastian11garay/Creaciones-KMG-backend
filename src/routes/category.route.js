import { Router } from "express";   
import { createCategory, deletedCategoryById, getAllCategory, getCategoryById, updateCategoryById } from "../controllers/category.controller.js";
const router = Router();

router.post( '/', createCategory );
router.get( '/', getAllCategory) ;
router.get( '/:idCategory', getCategoryById );
router.delete('/:idCategory', deletedCategoryById);
router.patch( '/:idCategory', updateCategoryById);


export default router;