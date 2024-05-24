
import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    city:{
        type:String,
    }

},{timestamps:true})

export default mongoose.model('Data',DataSchema)

