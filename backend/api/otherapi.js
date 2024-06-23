const exp=require("express");
const otherApp=exp.Router();
require("dotenv").config();
const bcryptjs=require("bcryptjs")
const expressAsyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
//const verifyToken=require('../middlewares/verifyToken');
//const commonApp=require("./commonapi");
let othercollection,customercollection;

otherApp.use((req,res,next)=>{
    customercollection=req.app.get('customercollection');
    productcollection=req.app.get('productcollection');
    othercollection=req.app.get('othercollection');
    next()
 })
 
 //register
 otherApp.post("/payment",expressAsyncHandler(async(req,res)=>{
    const credUser = req.body;

    // Check if user already exists based on email
    const dbUser = await customercollection.findOne({ email: credUser.email });
    if (!dbUser) {
        await customercollection.insertOne(credUser);
        console.log(credUser.email)
    }

    try {
        console.log(credUser)
      await othercollection.insertOne(credUser);
  res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
 }))
 

 module.exports=otherApp;