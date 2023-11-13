const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/academic_app")
.then(()=>{
    console.log('Database connected')
})
.catch(()=>{
    console.log('Connection failed')
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const student_collection = mongoose.model("students_cred",newSchema)
const teacher_collection = mongoose.model("teacher_cred",newSchema)
module.exports={
    student_collection,
    teacher_collection
}