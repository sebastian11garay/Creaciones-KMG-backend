import { Schema, model, version } from "mongoose";

const categorySchema = new Schema (
{ 
    name: {
        type: String,
        require: true,
        trim: true

    },

    descripcion: {
        type: String,
        require: true,
        trim: true
    }
},{
    versionkey: false,
    timestamps: true
});

const categoryModel = model(
    'category',
    categorySchema
);

export default categoryModel;



