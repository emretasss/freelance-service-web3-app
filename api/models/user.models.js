import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    country:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:false,
    },
    desc:{
        type:String,
        required:false,
    },
    isSeller:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        required:false,
    },
    desc:{
        type:String,
        required:false,
    },



});