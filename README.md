# FoodZ

Food Z es un proyecto que me premite vender diferentes platillos frios precocidos

## Caracteristicas desarrolladas

**Entidad: Users**
- [X] Registar usuario
- [x] Obtener el listado de usuarios
- [x] Obtener un usuario por su ID
- [ ] Actualizar un usuario por su ID
- [ ] Eliminar un usuario por su ID 



order.model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
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
  priceAtTime: {
    type: Number,
    required: true
  },
  discountApplied: {
    type: Number,
    default: 0
  }
}, { _id: false });

const orderSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'ClientProfile',
    required: true
  },

  orderType: {
    type: String,
    enum: ['Minorista', 'Mayorista'],
    required: true
  },

  status: {
    type: String,
    enum: [
      'Comprado',
      'Pendiente de Pago',
      'Gestionado',
      'Enviado',
      'Reparto',
      'Entregado',
      'Cancelado'
    ],
    default: 'Comprado'
  },

  items: [orderItemSchema],

  discountsApplied: [{
    discountId: {
      type: Schema.Types.ObjectId,
      ref: 'Discount'
    },
    name: String,
    type: String,
    value: Number
  }],

  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },

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

  estimatedDeliveryDate: {
    type: Date,
    required: true
  },

  lastModifiedDate: {
    type: Date,
    default: Date.now
  },

  managedByAdminId: {
    type: Schema.Types.ObjectId,
    ref: 'AdminProfile'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
