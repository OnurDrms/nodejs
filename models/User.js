const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
  {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    avatar: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    gender: {
      type: String
    },
    birthDate: {
      type: Date
    },
    receiver: {
      type: Boolean
    },
    password: {
      type: String
    },
    token: {
      type: String
    }
  },
  { collection: "User" }
);

module.exports = mongoose.model("users", user);