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

// const dbGetApplicableDiscounts = async (
//     purchaseAmount,
//     clientType,
//     couponCode = null
// ) => {
//     const now = new Date();

//     const query = {
//         active: true,
//         startDate: { $lte: now },
//         endDate: { $gte: now },
//         minPurchaseAmount: { $lte: purchaseAmount },
//         targetAudience: { $in: ['Todos', clientType] }
//     };

//     if (couponCode) {
//         query.couponCode = couponCode;
//     }

//     return await discountModel.find(query);
// };




export {
    dbRegisteredDiscount,
    dbGetAllDiscounts,
    dbGetDiscountById,
    dbDeleteDiscountById,
    dbUpdateDiscountById,

}