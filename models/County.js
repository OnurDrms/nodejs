const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let county = new Schema(
  {
    name: {
      type: String
    },
  },
  { collection: "County" }
);

module.exports = mongoose.model("county", county);