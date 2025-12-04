import { Schema, model } from "mongoose";


const productsSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        trim: true,
    },

    size: {
        type: String,          
        trim: true,
    },

    material: {
        type: String,         
    },

    color: {
        type: String,
        trim: true,
    },

    price: {                    //precio
        type: Number,
        required: true,
    },

    stock: {
        type: Number,
        default: 0,
    },

    category: {
        type: String,
        trim: true,
    },

    tags: [{                // si el usuario busca por  # ej: 'mueca rosada'
        type: String,
        trim: true
    }],

    isActive: {
        type: Boolean,
        default: true,
    }



    

},{
    versionKey: false,
    timestamps: true
});

const productsModel = model (
    'products',
    productsSchema
);

export default productsModel;

