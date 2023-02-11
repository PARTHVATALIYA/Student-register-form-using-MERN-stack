import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app =express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/studentManagement', {
   useNewUrlParser: true,
   useUnifiedTopology: true 
}, ()=>{
    console.log("DB connected");
})


app.post("/login",(req,res)=>{
    const {email,password} = req.body
    User.findOne({email: email},(err,user)=>{
        if(user){
            if(password ===user.password){
                res.send({message: "Login succussfully", user:user })
            }else{
                res.send(alert("Password didn't match"))
            }
        }
        else{
            res.send({message: "User not registered"})
        }
    })
})


app.post("/register",(req,res)=>{
    const {firstName, lastName,id, department,number} = req.body
    User.findOne({id:id},(err,user)=>{
        if(user){
            res.send({message:"USer already register"})
        }else{
            const user = new User({
                firstName,
                lastName,
                id,
                department,
                number
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message : "Successfully registered"})
                }
            })
        }
    })
    
})



app.listen(9002,()=>{
    console.log("Be started at port 9002");
})

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    id: String,
    department: String,
    number: Number

})

const User =new mongoose.model("User" ,  userSchema)