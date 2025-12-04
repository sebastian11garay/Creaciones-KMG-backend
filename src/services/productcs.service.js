import productsModel from "../models/products.model.js";

const dbRegisterProduct = async (newProduct) => {
    return await productsModel.create(newProduct);   // async/await por que el modelo retorna una promesa
}
const dbGetAllProducts = async () => {
    return await productsModel.find();
}

const dbGetProducstById =  async ( _id) => {
   return await productsModel.findOne({ _id });
}

const dbDeletedProducstById = async ( _id) => {
    return await productsModel.findOneAndDelete({ _id });
    // return await userModel.findByIdAndDelete( _id );
}

const dbProductsUpdate = async ( id, productUpdated ) => {
    return await productsModel.findByIdAndUpdate (
        id,
        productUpdated,
        { new: true }
    );
}


export {
    dbRegisterProduct,
    dbGetAllProducts,
    dbGetProducstById,
    dbDeletedProducstById,
    dbProductsUpdate
}