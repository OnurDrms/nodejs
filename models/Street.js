const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let street = new Schema(
  {
    name: {
      type: String
    },
    city_id: {
      type: String
    }
  },
  { collection: "Street" }
);

module.exports = mongoose.model("street", street);