import {  compare, compareSync,  hashSync } from "bcryptjs";
import User from "../models/User";

export const getallUsers = async (req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch (err) {
        console.log(err);
    }

    if(!users){
        return res.status(500).json({message:"Unexpected error"});
    }

    return res.status(200).json({users});
};

export const addUsers = async (req,res,next)=>{
    const { name, email, password} = req.body;
    console.log(req.body);
    if(!name && name.trim()==="" && !email && email.trim()===""&& !password && password.trim()===""){
        return res.status(422).json({message:"Inavalid data"});
    }
  
    const hashedPassword= hashSync(password);

    let user;
    
    try{
        user=new User({name,email,password:hashedPassword});
        await user.save();
    }
    catch (err){
        console.log(err);
    }

    if(!user){
        return res.status(500).json({message:"Unexpected error"});
    }

    return res.status(201).json({user});
    
};

export const loginUser = async (req,res,next)=>{
    const { email, password} = req.body;
    console.log("hello");
     console.log(password);
    if(!email && email.trim()===""&& !password && password.trim()===""){
        return res.status(422).json({message:"Inavalid data"});
    }

       
    let existingUser;
    try{
        existingUser= await User.findOne({email});
    }
    catch (err){
        console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message:"No User Exist"});
    }

    console.log(existingUser.password);
    
    const comparePassword=  compareSync(password,existingUser.password);
    
    console.log(comparePassword);

    if(!comparePassword){
        return res.status(400).json({message:"Password Does Does Not Match"});
    }

    return res.status(200).json({id:existingUser._id,message:"User Found"});
    
};

export const getUser = async (req,res,next)=>{
      
    const id=req.params.id;

    let user;

    try{
        user=await User.findById(id).populate("posts");
    }
    catch(err)
    {
        console.log(err)
    };

    if(!user){
        return res.status(500).json({message:"No Post Found"});
    }

    return res.status(200).json({user});
   
};
