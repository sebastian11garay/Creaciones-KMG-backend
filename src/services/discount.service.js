import discountModel from "../models/discount.model.js"


const dbRegisteredDiscount = async (newDiscount) => {
    return await discountModel.create(newDiscount);
}

const dbGetAllDiscounts = async () => {
    return await discountModel.find();
}

const dbGetDiscountById = async (_id) => {
    return await discountModel.findOne({_id});
}

const dbDeleteDiscountById = async (_id) => {
    return await discountModel.findOneAndDelete({_id});
}

const dbUpdateDiscountById = async ( id, productUpdated ) => {
    return await discountModel.findOneAndUpdate(
        id,
        productUpdated,
        { new: true }
    );
}


export {
    dbRegisteredDiscount,
    dbGetAllDiscounts,
    dbGetDiscountById,
    dbDeleteDiscountById,
    dbUpdateDiscountById,

}