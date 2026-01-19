import { Schema, model } from "mongoose";
import { ALLOWED_DISCOUNT_AUDIENCE, DISCOUNT_KINDS, DISCOUNT_TYPES } from "../config/global.config.js";

const discountSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: String,

  discountKind: {
    type: String,
    enum: DISCOUNT_KINDS,
    required: true
  },

  type: {
    type: String,
    enum: DISCOUNT_TYPES,
    required: true
  },

  value: {
    type: Number,
    required: true,
    min: 0
  },

  couponCode: {
    type: String,
    unique: true,
    sparse: true
  },

  targetAudience: {
    type: String,
    enum: ALLOWED_DISCOUNT_AUDIENCE,
    required: true
  },

  minPurchaseAmount: {
    type: Number,
    default: 0
  },

  startDate: {
    type: Date,
    required: true
  },

  endDate: {
    type: Date,
    required: true
  },

  active: {
    type: Boolean,
    default: true
  }
}, {
    versionKey: false, 
    timestamps: true 
});

const discountModel = model(
    'Discount',
    discountSchema);

export default discountModel;