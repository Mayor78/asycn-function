const mongoose = require("mongoose")
 require("dotenv").config()

const connectDb = async () =>{
try {
    const connect = await  mongoose.connect(process.env.MONGODB)
    console.log("database connected successfully", connect)
    
}catch (error) {
  console.log(error)
    
}
}

module.exports = connectDb