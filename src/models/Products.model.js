const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },
    material: {
        type: String,
        trim: true
    },
    color: {
        type: String,
        trim: true
    },
    urlImage: {
        type: String,
        trim: true
    },
    // Código de inventario único
    sku: {
        type: String,
        unique: true,
        required: true
    },
    // Precio de venta para Minoristas (precio base)
    price: {
        type: Number,
        required: true,
        min: 0
    },
    // Precio base para Mayoristas (opcional, si no se usa Discount)
    wholesalePrice: {
        type: Number,
        min: 0
    },
    // **CRUCIAL:** Stock disponible en bodega
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    tags: {
        type: [String],
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // Otros campos relevantes (categoría, descripción, imágenes, etc.)
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);