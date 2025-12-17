const mongoose = require('require');
const Schema = mongoose.Schema;

// Sub-esquema para las métricas de lealtad (solo relevante para Mayoristas)
const loyaltyMetricsSchema = new Schema({
    joinDate: {
        type: Date,
        default: Date.now
    },
    // Total de volumen comprado para aplicar descuentos por volumen
    totalVolumeBought: {
        type: Number,
        default: 0
    },
    // Podría ser el número de pedidos completados, etc.
    completedOrdersCount: {
        type: Number,
        default: 0
    }
}, { _id: false }); // No necesita su propio _id

const clientProfileSchema = new Schema({
    // **RELACIÓN:** Enlace a la cuenta de autenticación principal
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true // 1:1 relación con User
    },
    name: {
        type: String,
        required: true
    },
    // Este campo puede ser redundante si ya está en User.role, pero mantiene la información de negocio aquí
    client_type: {
        type: String,
        required: true,
        enum: ['Mayorista', 'Minorista']
    },
    phone: {
        type: String
    },
    // Dirección principal (se puede anidar como un sub-documento)
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    // **IMPORTANTE:** Sub-documento para la lógica de descuentos de Mayorista
    loyaltyMetrics: loyaltyMetricsSchema
}, { timestamps: true });

module.exports = mongoose.model('ClientProfile', clientProfileSchema);