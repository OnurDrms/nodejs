const { User,Product } = require("../models/Main");

const saveProduct = (req,res) => {
    User.find({token: req.body.token}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            if(result){
                var productItem = new Product(queryBody);
                productItem.save(function (err, saveRes) {
                 if (err) return console.error(err);
                 Product.find({user_id: result._id}, function(err, resultProducts) {
                   if (err) {
                     res.send(err);
                   } else {
                     res.json({result: "success",products: resultProducts});
                   }
                 });
               });
            }
        }
    });
}

const updateProduct = (req,res) => {
    User.find({token: req.body.token}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            if(result){
                Product.findOneAndUpdate({user_id: result._id,_id: req.body.id}, queryBody, {
                    returnNewDocument: true
                }, function( err, updateRes){
                    if(err) { 
                      console.log('error'); 
                    }else{
                      Product.find({user_id: result._id}, function(err, resultProducts) {
                        if (err) {
                          res.send(err);
                        } else {
                          res.json({result: "success",products: resultProducts});
                        }
                      });
                    }
                  });
            }
        }
    });
}

module.exports = { saveProduct, updateProduct };