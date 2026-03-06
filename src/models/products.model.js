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
        required: true,

    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        // required: true
    },

    tags: [{                // si el usuario busca por  # ej: 'mueca rosada'
        type: String,
        trim: true
    }],

    status: {
        type: String,
        default: 'active',
        enum: ['active','inactive']
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

