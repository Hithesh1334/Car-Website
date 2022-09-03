const mongoose = require('mongoose');

const DB = process.env.DATABASE;
console.log(DB);
// {useNewUrlParser:true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false}
mongoose.connect(DB).then(()=>{
    console.log("connection success");
}).catch((err)=>{
    console.log('no connection');
});