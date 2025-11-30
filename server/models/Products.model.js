import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema({
  ml: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { _id: false });


const ProductSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: [
      "Brandy", "Rum", "Whisky", "Beer", "Vodka", "Gin", "Wine",
      "Port Wine", "Sparkling Wine", "Soju", "Cocktail Wine", "Cooler Wine", "Cider", "Other"
    ],
    required: true
  },
  currency: {
    type: String,
    default: "INR"
  },
  available: {
    type: Boolean,
    default: true
  },
  pricePerMl: {
    type: [PriceSchema],   // array of { ml, price }
    required: true
  },
  img: {
    type: String,  
    default:"https://i.ibb.co/RGMWTLsL/Liqr-bottle.jpg"
  }
}, { timestamps: true }
)

export default mongoose.model('Product',ProductSchema)