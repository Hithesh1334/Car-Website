const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticate = require('../middleware/authenticate.js');



require('../db/conn');
const User = require('../models/userSchema');

router.get('/',(req,res)=>{
    res.send(`hello world! from the server router.js`);
});

// router.post('/register',(req,res)=>{
    
//     const {name,email,phone,work,password,Cpassword} = req.body;
    
//     if(!name||!email||!phone||!work||!password||!Cpassword){
//         return res.status(422).json({error:"fill the fields"})
//     }
//     User.findOne({email:email}).then ((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"email already userExist"})
//         }
//         const user = new User({name,email,phone,work,password,Cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user refgistered successfuly"});
//         }).catch((err)=>res.status(500).json({error:"failed registration"}))
//     }).catch(err => {console.log(err);});

// });
router.post('/signup',async(req,res)=>{
    
    const {name,email,phone,work,password,Cpassword} = req.body;
    
    if(!name||!email||!phone||!work||!password||!Cpassword){
        return res.status(422).json({error:"fill the fields"})
    }

    try{
        
        const userExist= await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:"email already userExist"})
        }
        else if(password!=Cpassword){
            return res.status(422).json({error:"password not matching"});
        }else{
            const user = new User({name,email,phone,work,password,Cpassword});
        


        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json({message:"user refgistered successfuly"});
            
        }
        }
        
    }
    catch(err){
        console.log(err);
    }

    
});

router.post('/Login',async(req,res)=>{
    try{
        console.log(req.body);
        let token;
        const {email,password} = req.body;
        console.log("s",email);
        if(!email || !password){
            return res.status(400).json({error:"pls fill the data"})
        }

        const userLogin =  await User.findOne({email:email})

        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);
            console.log("near cookies")
            res.cookie("jwtoken",token,{
                
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            })

        if(!isMatch){
            console.log("k")
            
            res.status(400).json({error:"user err"});
        }
        else{
            console.log("noterr");
            res.json({message:"user sigin successfuly"});
        }
        }else{
            console.log("k")
            res.status(400).json({error:"user err"});
        }

        
        

    }catch(err){
        console.log(err);
    }
    // console.log(req.body);
    // res.json({message:"asw"});
})

//about us page 

router.get('/about',authenticate,(req,res)=>{
    console.log('hello m')
    res.send(req.rootUser);
});


router.get('/getdata',authenticate,(req,res)=>{
    console.log('hello m')
    res.send(req.rootUser);
})

module.exports = router;


