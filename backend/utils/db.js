import mongoose, { connect } from "mongoose";

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb connected sucessfully')
    }catch(error){
        console.log(error)
    }
}

export default connectDb