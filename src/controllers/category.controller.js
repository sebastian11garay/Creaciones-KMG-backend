
import { dbDeletedCategoryById, dbGetAllCategorys, dbGetCategoryById, dbRegisterCategory, dbUpdateCategoryById } from "../services/category.service.js";

const createCategory = async ( req, res ) => {
    try {
        const inputData = req.body;

        console.log(inputData);

        const dataRegistered = await dbRegisterCategory (inputData);

        res.json({
            dataRegistered
        });
        
    } catch (error) {
         console.error(error);
        res.json({
            msg: 'Error: no se puede crear la categoria'
       
        });
    }
}

const getAllCategory = async ( req, res ) => {
    try {
        const categorys = await dbGetAllCategorys();

        res.json({
            categorys
        });
        
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: no se puede ver la categoria'
       
        });
    }
}

const getCategoryById = async (req, res) => {

    try {
    const idCategory = req.params.idCategory;

    const categoryFound = await dbGetCategoryById( idCategory );

    res.json({
        categoryFound
    });
    
    } catch (error) {
       console.error(error);
        res.json({
            msg: 'Error: no se puede encontrar la categoria'
       
        });
    }

}

const deletedCategoryById = async (req, res) => {
    try {
        const idCategory = req.params.idCategory;
        const categoryDeleted = await dbDeletedCategoryById( idCategory );

    res.json({
        categoryDeleted
    });


        
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: no se puede borrar la categoria'
       
        });
    }
}

const updateCategoryById = async (req, res) => {
    try {
        const inputData = req.body;
        const idCategory = req.params.idCategory;
        

        const categoryUpdate = await dbUpdateCategoryById ( idCategory, inputData );

    res.json({
        categoryUpdate
    });


        
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: no se puede actualizar la categoria'
       
        });
    }
}



export {
    createCategory,
    getAllCategory,
    getCategoryById,
    deletedCategoryById,
    updateCategoryById 
}