// require("dotenv").config({});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";


dotenv.config({path:"./env"})
connectDB().then(()=>{
    app.linster(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Mongo Connection Fails !!",err);
})



// import express from "express";

// const app = express();

// ( async ()=>{
// try {

//  await mongoose.connect(`${process.env.MONGO_URI}/${DBName}`)
//  app.on("err", (err)=>{
//     console.log("Error connecting to the database", err);
//     throw err
//  })
//  app.listen(process.env.PORT, ()=>{
//         console.log(`Server is running on port ${process.env.PORT}`)
//  })
// } catch (error) {
//     console.log(error);
//     throw err   
// }
// })()