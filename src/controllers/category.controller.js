
import { dbDeletedCategoryById, dbGetAllCategorys, dbGetCategoryById, dbRegisterCategory, dbUpdateCategoryById } from "../services/category.service.js";

const createCategory = async (req, res) => {
    try {
        const inputData = req.body;

        console.log(inputData);

        const dataRegistered = await dbRegisterCategory(inputData);

        res.status(201).json({
            dataRegistered,
        });


    } catch (error) {
         console.error(error);
        return res.status(500).json({
            msg: 'Error: no se puede crear la categoria'


        });
    }
}

const getAllCategory = async (req, res) => {
    try {
        const categories = await dbGetAllCategorys();

        res.json({
            categories
        });


    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: no se puede ver las categorias'
       
        });
    }
}

const getCategoryById = async (req, res) => {

    try {
        const idCategory = req.params.idCategory;

        const data = await dbGetCategoryById(idCategory);

        res.json({
            data
        });

    } catch (error) {
        console.error(error);
        console.error(error);
        res.json({
            msg: 'Error: no se puede encontrar la categoria'


        });
    }

}

const deletedCategoryById = async (req, res) => {
    try {
        const idCategory = req.params.idCategory;
        const categoryDeleted = await dbDeletedCategoryById(idCategory);

    res.json({
        categoryDeleted,
        msg: 'Categoria eliminada correctamente'
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



        const categoryUpdate = await dbUpdateCategoryById(idCategory, inputData);

    res.json({
        categoryUpdate,
        msg: 'Categoria actualizada correctamente'
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