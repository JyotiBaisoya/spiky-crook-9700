const express = require("express");
const connection = require("./config/db");
const {userRouter}= require("./routes/userroute")
const {adminRouter} = require("./routes/adminrout")
const app = express()

app.use(express.json())

app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


app.listen(3500,async()=>{
    try {
       await connection
       console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log("Running on 4500")
})