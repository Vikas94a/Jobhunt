import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
type:String,
require:true,
unique:true
    },
    phoneNumber:{
       type:String,
       require:true 
    },
    password:{
        type:String,
        require:true
    
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        require:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String}, // Url to resume file
        resumeOriginName:{type:String},
        // company:{type:mongoose.Schema.type.objectId, ref:'Company'}, 
        profilePhota:{
            type:String,
            default:""
        }
    },

}, {timestamps:true});

export const User = mongoose.model('User', userSchema)