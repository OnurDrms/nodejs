const { County } = require("../models/Main");

const getCounty = (req,res) => {
    County.find({}, function(err, result) {
        if (err) {
        res.send(err);
        } else {
        res.json({result: "success",counties: result});
        }
    });
}

module.exports = { getCounty };