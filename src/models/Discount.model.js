const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    // Nombre del descuento se relacion con el motivo
    name: {
        type: String,
        required: true
    },
    description: String,     // Campo opcional para justificación del descuento
    type: {
        type: String,
        required: true,
        enum: ['Porcentaje', 'Fijo'] // Tipo de cálculo del descuento
    },
    value: {
        type: Number,
        required: true,
        min: 0
    },
    // Define a quién se aplica este descuento (para separar Mayorista/Minorista/Global)
    targetAudience: {
        type: String,
        required: true,
        enum: ['Todos', 'Minorista', 'Mayorista']
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    // Requisito de volumen de compra (usado principalmente por Mayoristas)
    minPurchaseAmount: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Discount', discountSchema);