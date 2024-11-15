const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required:true,
        },
        surname:{
            type:String,
            required:true,
        },
        DOB:{
            type:Date,
            required:true,
        },
        email:{
            type: String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
);


const User= mongoose.model("user",userSchema)

module.exports=User