// import productsModel from "../models/products.model.js";
import { dbDeletedProducstById, dbGetAllProducts, dbGetProducstById, dbProductsUpdate, dbRegisterProduct } from "../services/productcs.service.js";

const createProducts = async (req, res) => {
    try {
        const inputData  = req.body;                     

        console.log( inputData );                       

        const dataRegistered = await dbRegisterProduct( inputData );             

        
        res.status(201).json({  
        dataRegistered,
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se puede crear el producto, puede que ya exista'
        });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await dbGetAllProducts();
        res.status(200).json({

            products
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'Error: no se pudo obtener el listado de productos'

        });
    }
}

const getProductsById = async (req, res) => {
    try {
         const idProduct = req.params.idProduct;
    
        const data = await dbGetProducstById (
            idProduct);
    
        res.status(200).json ({
            data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: no se pudo obtener producto por ID'
        });
    }
}

const deleteproductById = async ( req, res ) => {
    try {
        const idProduct = req.params.idProduct;
    
        const productcDeleted = await dbDeletedProducstById( 
            idProduct );
    
        res.status(204).json({
            productcDeleted
        });
            
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'Error: no se pudo eliminar el usuario por Id'
        })
        
    }

    
}

const updateProductById = async ( req,res ) => {
    try {

        const inputData = req.body;
        const idProduct = req.params.idProduct;
    
        const productcUpdate = await dbProductsUpdate( idProduct, inputData );
    
        res.status(200).json({
            productcUpdate,
            msg: 'Producto actualizado exitosamente'
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'Error: no se pudo actualizar el producto por ID'
        });
    }
}


export {
    createProducts,
    getAllProducts,
    getProductsById,
    deleteproductById,
    updateProductById
}