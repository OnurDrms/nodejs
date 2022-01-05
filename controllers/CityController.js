const { City } = require("../models/Main");

const getCities = (req,res) => {
    City.find({ county_id: req.body.countyId }, function(err, result) {
        if (err) {
        res.send(err);
        } else {
        res.json({result: "success",cities: result});
        }
    });
}

module.exports = { getCities };