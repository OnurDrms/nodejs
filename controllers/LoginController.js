const { User } = require("../models/Main");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const checkLogin = async (req,res) => {
    try {
        const { email, password } = req.body;
  
        if(!(email && password)){
            res.json({"result": "failed"},401);
        }
  
        const user = await User.findOne({ email });
  
        if(user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign(
                { user_id : user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            );
  
            user.token = token;
            res.status(200).json(user);
        }
  
        res.status(400).send("Invalid Credentials");
  
      }catch(err){
          console.log(err);
      }
}

module.exports = { checkLogin };