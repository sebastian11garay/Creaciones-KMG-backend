const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Campo principal para inicio de sesión, debe ser único y validado
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    // Contraseña almacenada como hash (nunca en texto plano)
    password: {
        type: String,
        required: true
    },
    // Nombre de usuario opcional, también puede ser único
    username: {
        type: String,
        unique: true,
        sparse: true, // Permite que varios documentos tengan 'null' en este campo
        trim: true
    },
    // **ROL CRUCIAL:** Define las capacidades y el perfil asociado
    role: {
        type: String,
        required: true,
        enum: ['SuperAdmin', 'Admin', 'Mayorista', 'Minorista'], // Restringe los valores posibles
        default: 'Minorista' // Valor por defecto al registrarse
    },
    // Estado de la cuenta, permite deshabilitar el acceso
    isActive: {
        type: Boolean,
        default: true
    },
    // **RELACIÓN:** Referencia al perfil específico (AdminProfile o ClientProfile)
    // El tipo de referencia real se determinará en el código de aplicación
    relatedProfileId: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'profileModel' // Define la clave para determinar a qué colección referencia
    },
    // Campo auxiliar para Mongoose, define la colección a la que apunta relatedProfileId
    profileModel: {
        type: String,
        required: true,
        enum: ['AdminProfile', 'ClientProfile']
    }
}, { timestamps: true }); // Agrega 'createdAt' y 'updatedAt' automáticamente

module.exports = mongoose.model('User', userSchema);