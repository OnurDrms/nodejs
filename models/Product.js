const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let product = new Schema(
  {
    picture: {
      type: String
    },
    properties: {
      type: Array,
      content : {
        type: Object,
      }
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    category: {
      type: String
    },
    price: {
      type: String
    },
    status: {
      type: String
    },
    address: {
      type: String
    },
    county:{
      type: String
    },
    city:{
      type: String
    },
    street:{
      type: String
    },
    user_id: {
      type: String
    }
  },
  { collection: "Product" }
);

module.exports = mongoose.model("products", product);