const { User } = require("../models/Main");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const saveUser = async (req,res) => {
    try{
        const { first_name, last_name, email, password } = req.body;

        if(!(email && password && first_name && last_name)){
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ email });
        if(oldUser){
            return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword
        });

        const token  = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        user.token = token;

        res.status(201).json(user);

    }catch(err){
        console.log("error");
    }
}

module.exports = { saveUser };