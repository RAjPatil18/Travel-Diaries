import mongoose from "mongoose";
import Post from "../models/Post";
import User from "../models/User";

export const getAllPosts= async (req,res,next)=>{

    let posts;

    try{
        posts=await Post.find();
    }
    catch(err)
    {
        console.log(err)
    };

    if(!posts){
        return res.status(500).json({message:"Unexpected Error"});
    }

    return res.status(200).json({posts});

};

export const addPost = async (req,res,next)=>{
    const { title,description,image,location,date, user } = req.body;
    
    if(!title && title.trim()==="" && !description && description.trim()===""&& !image && image.trim()==="" && !date && !user ){
        return res.status(422).json({message:"Inavalid data"});
    }
    let existingUser;
    try{
        existingUser=await User.findById(user);
    }catch(err){console.log(err);}
    if(!existingUser){
        return res.status(404).json({message:"User Does Found"});
    }

    let post;
    
    try{
        //
        post=new Post({title,description,image,location,date:new Date(`${date}`), user});

         const  session= await mongoose.startSession();
        session.startTransaction();
           existingUser.posts.push(post);
          await existingUser.save({session});
        await post.save({session});
        session.commitTransaction();

    }
    catch (err){
        console.log(err);
    }

    if(!post){
        return res.status(500).json({message:"Unexpected error"});
    }

    return res.status(201).json({post});
    
};

export const getPostById = async (req,res,next)=>{
      
    const id=req.params.id;

    let post;

    try{
        post=await Post.findById(id);
    }
    catch(err)
    {
        console.log(err)
    };

    if(!post){
        return res.status(500).json({message:"No Post Found"});
    }

    return res.status(200).json({post});
   
};

export const updatePost = async (req,res,next)=>{
    const id=req.params.id;
    const { title,description,image,location} = req.body;
    
    if(!title && title.trim()==="" && !description && description.trim()===""&& !image && image.trim()===""   ){
        return res.status(422).json({message:"Inavalid data"});
    }
    let post;
    
    try{
        post= await Post.findByIdAndUpdate(id,{title,description,image,location});
        
    }
    catch (err){
        console.log(err);
    }

    if(!post){
        return res.status(500).json({message:"Unexpected error"});
    }

    return res.status(201).json({message:"Updated Succesfully"});
    
};

export const deletePostById = async (req,res,next)=>{
      
    const id=req.params.id;

    let post;

    try{

        const  session= await mongoose.startSession();
        session.startTransaction();
        post=await Post.findById(id).populate("user");
        post.user.posts.pull(post);
        await post.user.save({session});
        post=await Post.findByIdAndRemove(id);
        session.commitTransaction();

        
    }
    catch(err)
    {
        console.log(err)
    };

    if(!post){
        return res.status(500).json({message:"No Post Found"});
    }

    return res.status(200).json({message:"Deleted Succesfully"});
   
};