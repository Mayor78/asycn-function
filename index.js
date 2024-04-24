const express = require("express")
require("dotenv").config()
const bodyparser = require("body-parser");
const app = express();
const PORT = process.env.PORT 

const connectDb = require("./db/db")
const studentRoute = require("./routes/studentRoutes")
connectDb()




app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(studentRoute);
















app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})