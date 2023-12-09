import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
   



});