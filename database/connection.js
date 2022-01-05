const mongoose = require("mongoose");
require("dotenv").config();

var uri = process.env.DATABASE_URL;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});