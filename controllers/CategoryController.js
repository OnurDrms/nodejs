const { Category } = require("../models/Main");

const getCategory = (req,res) => {
    Category.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json({result: "success",categories: result});
        }
      });
}

module.exports = { getCategory };