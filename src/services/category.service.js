import categoryModel from "../models/category.model.js";

const dbRegisterCategory = async (newCategory) => {
    return await categoryModel.create(newCategory);
}

const dbGetAllCategorys = async () => {
    return await categoryModel.find();
}

const dbGetCategoryById = async (_id) => {
    return await categoryModel.findOne({_id});

}

const dbDeletedCategoryById = async (_id) => {
    return await categoryModel.findOneAndDelete({_id});

}

const dbUpdateCategoryById = async ( id, categoryUpdate ) => {
    return await categoryModel.findByIdAndUpdate(
        id,
        categoryUpdate,
        { new: true }
    );

}




export{
    dbRegisterCategory,
    dbGetAllCategorys,
    dbGetCategoryById,
    dbDeletedCategoryById,
    dbUpdateCategoryById 
}