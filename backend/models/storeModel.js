const { Schema, model, Types } = require("../connection");

const mySchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
  brand: { type: String },
  images: { type: Array, default: [] },
  quantity: { type: Number },
  avg_rating: { type: Number },
  reviews: { type: Array, default: [] },
  features: { type: Array, default: [] },
  relatedProducts: { type: Array, default: [] },
  tags: { type: Array, default: [] },
  category: { type: String },
  type: { type: String },
  user: { type: Types.ObjectId, ref: "user" },
  created_at: Date,
  updated_at: Date,
});

module.exports = model("store", mySchema);
