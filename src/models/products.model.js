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
        required: true,
        
    },
    image:{
        type: String,               // URL de una imagen de la categoría
        default: null,
        // require: true
    },

    size: {
        type: String,          
        trim: true,
        required: true,

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
        required: true,

    },

    category: {
        // type: Schema.Types.ObjectId,
        type: String,
        ref: 'category',
        // required: true
    },

    tags: [{                // si el usuario busca por  # ej: 'mueca rosada'
        type: String,
        trim: true
    }],

    isActive: {
        type: Boolean,
        default: false
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

