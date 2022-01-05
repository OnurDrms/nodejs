const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let city = new Schema(
  {
    name: {
      type: String
    },
    county_id: {
      type: String
    }
  },
  { collection: "City" }
);

module.exports = mongoose.model("city", city);