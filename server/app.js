const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})
require('./db/conn.js')

app.use(express.json());

const User = require('./models/userSchema');

//we link the routre file to  make our route easy;
app.use(require('./router/auth'));

const PORT = process.env.PORT


//middelware






// app.get('/about',(req,res)=>{
//     console.log('hello m')
//     res.send(`hello world! about me`);
// });
app.get('/contact',(req,res)=>{
    res.send(`hello world! contact`);
});
app.get('/signin',(req,res)=>{
    res.send(`hello world! SignIN`);
});
app.get('/signup',(req,res)=>{
    res.send(`hello world! SignUp`);
});

app.listen(PORT,()=>{
    console.log('listening on port ',PORT);
});
