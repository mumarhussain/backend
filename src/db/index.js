import mongoose from "mongoose";
import { DBName } from "../constants.js";


const connectDB = async ()=>{
try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DBName}`)    
   console.log(`\n Database connected to ${connectionInstance.connection.host} \n`);
   
} catch (error) {
    console.log("Error connecting to the database", error);
    process.exit(1)
}
}
export default connectDB;