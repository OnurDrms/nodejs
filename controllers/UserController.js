const { User } = require("../models/Main");

const getUserInfos = (req,res) => {
    User.find({token: req.body.token}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json({result: "success",user: result});
        }
    });
}

const updateUserInfos = (req,res) => {
    User.findOneAndUpdate({token: req.body.token}, req.body, {
        returnNewDocument: true
    }, function( err, updateRes){
        if(err) { 
          console.log('error'); 
        }else{
            res.json({result: "success",user: result});
        }
    });
}

module.exports = { getUserInfos,updateUserInfos };