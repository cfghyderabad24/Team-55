const exp=require("express");
const userApp=exp.Router();
require("dotenv").config();
const bcryptjs=require("bcryptjs")
const expressAsyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
//const verifyToken=require('../middlewares/verifyToken');
//const commonApp=require("./commonapi");
let usercollection;

userApp.use((req,res,next)=>{
   usercollection=req.app.get('usercollection');
   productcollection=req.app.get('productcollection');
   
   next()
})

//register
userApp.post("/user",expressAsyncHandler(async(req,res)=>{
   const newUser=req.body;
   console.log(newUser);
   //check whther there exists same username
const dbUser=await usercollection.findOne({username:newUser.username});
if(dbUser!=null){
    res.send("username alredy exist");
}
else{
    //hash password after installing bcryptjs
    const hashedpassword=await bcryptjs.hash(newUser.password,6);
    //replace plain password
    newUser.password=hashedpassword
    newUser.product=[];
    newUser.codingwithcomputer=false;
    newUser.lifeskills=false;
    //insert into db
    await usercollection.insertOne(newUser);
    res.send({message:"user registred successfully"});
}
}))

//login
userApp.post("/login",async(req,res)=>{
   const credUser=req.body;
   //search ther is anyone with username
   const dbUser=await usercollection.findOne({username:credUser.username}) 
   if (!dbUser) {
      return res.status(400).send({ message: "Invalid username" });
  }
   else{//check password
      const status = await bcryptjs.compare(credUser.password, dbUser.password);
      if (!status) {
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


//see all articles
/*
userApp.get("/articles",verifyToken,expressAsyncHandler(async(req,res)=>{
const articlescollection=req.app.get('articlescollection');
//get all articles
let articles=await articlescollection.find({status:true}).toArray();

res.send({message:"articles list",payload:articles})
}))

//adding comments
userApp.post("/comment/:articleId",verifyToken,expressAsyncHandler(async(req,res)=>{
const usercomment=req.body;
const articleIdfromurl=req.params.articleId
await articlescollection.updateOne({articleId:articleIdfromurl},{$addToSet:{comments:usercomment}})
res.send({message:"commentadded"})
}))
*/


module.exports=userApp;