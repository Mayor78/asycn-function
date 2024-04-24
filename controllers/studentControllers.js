const { restart } = require("nodemon")
const Student = require("../model/studentModel")


const getAllStudents = async (req, res) =>{
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json(error)
    }
}


const creatNewStudents = async (req, res) =>{
    if(!req.body.name){
        return res.status(400).json({messsage:"please enter your name"})
    }
    if(!req.body.password){
        return res.status(400).json({messsage:"please enter your passsword "})
    }
    if(!req.body.email){
        return res.status(400).json({messsage:"please enter your email "})
    }
    if(!req.body.phone){
        return res.status(400).json({messsage:"please enter your name phone"})
    }
    try {
        const newStudent = await Student.create({
            name:req.body.name,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone,
           
        })
        res.status(201).json(newStudent)
    } catch (error) {
        
        res.status(500).json(error)
    }
}

const getSingleStudents = async (req,res)=>{
   try {
    const oneStudent = await Student.findById(req.params.id)
    res.status(200).json(oneStudent)
    
   } catch (error) {
    
   }
    
}
const updateStudents = async (req, res)=>{
    try{
        const updateStudent = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(updateStudents){
            return res.status(200).json(updateStudent)
        }
        
    } catch (error){
        res.status(500).json(error)

    }
}


const deleteStudents = async (req, res)=>{
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if(deleteStudent){
            return res.status(200).json({mesage: "student deleted"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports ={getAllStudents,creatNewStudents , getSingleStudents,updateStudents,deleteStudents }