const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sub-esquema para los detalles de cada producto en el pedido
const orderItemSchema = new Schema({
    // **RELACIÓN:** Referencia al producto comprado (para ver detalles actualizados)
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    // Precio del producto *en el momento de la compra* (importante para auditoría)
    priceAtTime: {
        type: Number,
        required: true
    },
    // Descuento aplicado a este ítem individualmente
    discountApplied: {
        type: Number,
        default: 0
    }
}, { _id: false });

const orderSchema = new Schema({
    // **RELACIÓN:** Quién hizo la compra/pedido
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'ClientProfile',
        required: true
    },
    // Distingue el flujo (Minorista: carrito, Mayorista: pedido formal)
    orderType: {
        type: String,
        required: true,
        enum: ['Minorista', 'Mayorista']
    },
    // **ESTADO CRUCIAL (Mayorista):** Seguimiento del pedido
    status: {
        type: String,
        required: true,
        enum: [
            'Comprado', // Estado inicial
            'Pendiente de Pago',
            'Gestionado', // Confirmado por Admin y stock reservado
            'Enviado',
            'Reparto',
            'Entregado',
            'Cancelado'
        ],
        default: 'Comprado'
    },
    // Array de sub-documentos detallando los productos y sus precios
    items: [orderItemSchema],
    
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    // Dirección de envío (puede ser distinta a la registrada en ClientProfile)
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    // **IMPORTANTE:** Necesario para la ventana de 3 días de modificación/cancelación
    lastModifiedDate: {
        type: Date,
        default: Date.now
    },
    // **RELACIÓN:** Referencia al Admin que tomó la responsabilidad de este pedido
    managedByAdminId: {
        type: Schema.Types.ObjectId,
        ref: 'AdminProfile' // Referencia opcional, solo para pedidos 'Gestionados' y 'Mayorista'
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
