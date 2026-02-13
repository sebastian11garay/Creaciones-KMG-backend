import { Schema, model } from "mongoose";   


const categorySchema = new Schema ({
    name: {
        type: String,
        require: true,
        trim: true,
        maxlength: 50
    },

    description: {
        type: String,
        trim: true,
        require: true,
        maxlength: 200
    },

    image: {
        type: String,               // URL de una imagen de la categoría
        default: null,
        // require: true
    },

    isActive: {
    type: Boolean,
    default: true
    },

    stock: {
        type: Number,
        default: 0,
        require:true
    },
},{
    versionKey: false,
    timestamps: true
});

const categoryModel = model (
    'category',
    categorySchema
);

export default categoryModel;
