// Connecting to moongose
const mongoose=require("mongoose");

const mongoURL="mongodb+srv://vikranthpadidam:iYF0p9er7ithjX5y@cluster0.i7qbox7.mongodb.net/games?retryWrites=true&w=majority";

const connecttoMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Successfully connected to mongoDB");
    })
}

module.exports=connecttoMongo;