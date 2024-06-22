const exp=require("express");
const adminApp=exp.Router();
require("dotenv").config();
const bcryptjs=require("bcryptjs")
const expressAsyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const nodemailer=require("nodemailer")
//const verifyToken=require('../middlewares/verifyToken');
//const commonApp=require("./commonapi");
let admincollection;
adminApp.use((req,res,next)=>{
    admincollection=req.app.get('admincollection');
    productcollection=req.app.get('productcollection');
    customercollection=req.app.get('customercollection');
    next()
 })

 adminApp.post("/login",async(req,res)=>{
    const credUser=req.body;
    //search ther is anyone with username
    const dbUser=await admincollection.findOne({username:credUser.username}) 
    if (!dbUser) {
       return res.status(400).send({ message: "Invalid username" });
   }
    else{//check password
      
       if(credUser.password!=dbUser.password) {
           return res.status(400).send({ message: "Invalid password" });
       }
      else{
         //create token
 const signedToken=jwt.sign({username:dbUser.username},process.env.SECRET_KEY,{expiresIn:'20m'})
 return res.status(200).send({ message: "Login success", token: signedToken, user: dbUser });
 console.log("yes");     
 }
    }
 })

 adminApp.post("/addproduct",async(req,res)=>{
    const newproduct=req.body;
    const dbUser=await productcollection.findOne({name:newproduct.name});
if(dbUser!=null){
    res.send("username alredy exist");
}
else{
    //hash password after installing bcryptjs
    newproduct.state=true;
    await productcollection.insertOne(newproduct);
    console.log(newproduct);
    res.send({message:"producted added"});
    const customerEmails = await customercollection.distinct("email");

    // Send emails
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: customerEmails.join(', '), // Join all emails with commas
    subject: 'New Product Added',
    text: `Dear Customer,\n\nWe are pleased to inform you that a new product has been added to our store.\n\nProduct Details:\n${JSON.stringify(newproduct, null, 2)}\n\nThank you for choosing us!\n\nBest Regards,\nYour Company Name`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Product added and email sent successfully' });
    }
  });
}});

 
 module.exports=adminApp;
 