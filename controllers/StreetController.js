const { Street } = require("../models/Main");

const getStreets = (req,res) => {
    Street.find({ city_id: req.body.cityId }, function(err, result) {
        if (err) {
        res.send(err);
        } else {
        res.json({result: "success",streets: result});
        }
    });
}

module.exports = { getStreets };