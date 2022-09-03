const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const authenticate = async (req,res,next)=>{
    console.log('authentp page')
    try {
        console.log('authentp page inner')
        console.log(req.cookies)
        // const token = req.cookies.jwtoken;
        if(!token){
            console.log('not token')
        }
        console.log(token)
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens:token":token});

        if(!rootUser){
            throw new Error("user not FOund");
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    }catch(err){
        res.status(401).send('unauthorised error');
        console.log(err);
    }
}

module.exports = authenticate;
