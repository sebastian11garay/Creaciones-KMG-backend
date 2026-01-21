import { dbDeleteDiscountById, dbGetAllDiscounts, dbGetDiscountById, dbRegisteredDiscount, dbUpdateDiscountById } from "../services/discount.service.js";

const createDiscount = async (req, res) => {

    try {
        const inputData = req.body;
        const newDiscount = await dbRegisteredDiscount(inputData);
        return res.json({msg: `Descuento creado: ${newDiscount}`});
        
    } catch (error) {
        res.json({msg: 'Error: no se puede crear el descuento.'});
    }
}

const getAllDiscounts = async ( req, res ) => {
    try {
          
        const discounts = await dbGetAllDiscounts ();
        res.json({
            discounts
        });

    } catch (error) {
        console.error(error)
        res.json({ msg: 'Error: descuentos no encontrados.' });
    }
}

const getDiscountById = async (req, res) => {

try {
    
    const idDiscount = req.params.idDiscount;

    const discountFound = await dbGetDiscountById(idDiscount);
    res.json({
        discountFound
    });

} catch (error) {
    console.error(error);
    res.json({ msg: 'Error: descuentos no encontrado por id.' });
}

}

const deletedDiscountById = async (req, res) => {

    try {
        
        const idDiscount = req.params.idDiscount;

        const discountDeleted = await dbDeleteDiscountById(idDiscount);

        res.json({
            msg: 'borrado',
            discountDeleted
         });


    } catch (error) {
        console.error(error);
        res.json({ msg: 'Error: descuento no borrado.' });
    }

}

const updateDiscountById = async (req, res) => {

    try {
        const idDiscount = req.params.idDiscount;
        const inputData = req.body;

        const discountUpdate = await dbUpdateDiscountById( idDiscount, inputData );
        res.json({
            
            discountUpdate
        });

    } catch (error) {
        console.error(error);
        res.json({ msg: 'Error: descuento no actualizado.' });
    }

}

export {
    createDiscount,
    getAllDiscounts,
    getDiscountById,
    deletedDiscountById,
    updateDiscountById,

}