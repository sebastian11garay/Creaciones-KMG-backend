const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminProfileSchema = new Schema({
    // **RELACIÓN:** Enlace a la cuenta de autenticación principal
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Referencia a la colección 'User'
        required: true,
        unique: true // 1:1 relación con User
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    // Permisos granulares para los roles 'Admin' (ej. para gestión de pedidos)
    permissions: [{
        type: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('AdminProfile', adminProfileSchema);