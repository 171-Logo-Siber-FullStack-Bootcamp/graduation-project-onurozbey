const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Veritabanındaki tablomuz diye düşünün

const Product = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
  category: { type: String, required: true },
  image: { type: String },
  stock: { type: Number, required: true },
  rating: { type: Number },
});

// // User geldi mi
// const User = new Schema({
//   first_name: { type: String, required: true },
//   last_name: { type: Number, required: true },
//   birth_date: { type: Date, default: Date.now },
//   gender: { type: String },
// });

// module.exports = mongoose.model("users", User); // veritabanında users diye gorunecek

module.exports = mongoose.model("products", Product);
