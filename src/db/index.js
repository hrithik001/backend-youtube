
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"



const connectDB = async () => {
    try {
        // console.log("URI",process.env.MONGO_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        

        console.log(`MongoDB Connected! DB : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}

export default connectDB

