import axios from "axios"
export const getAllPosts = async ()=>{
   const res=await axios.get("http://localhost:5000/posts");
   if(res.status!==200){
    return console.log("Some Error Occured");
   }
   return res.data;
}

export const registerUser = async (registerData)=>{
   const res=await axios.post("http://localhost:5000/user/signup",{
      name:registerData.name,
      email:registerData.email,
      password:registerData.password})
      .catch(err=>console.log("Error occured Not registerd"));

   if(res.status!==200 && res.status!==201 ){
    return console.log("Some Error Occured No registration");
   }
   const data= await res.data;
   return data;
   
}


export const loginUser = async (loginData)=>{
   const res=await axios.post("http://localhost:5000/user/login",{
      email:loginData.email,
      password:loginData.password})
      .catch(err=> console.log("Error occured "));

   if(res.status!==200 && res.status!==201 ){
    return console.log("Login Not done");
   }
 
   const data= await res.data;
   return data;
}

export const getUser= async ()=>{
   const id=localStorage.getItem("userId");
   const res=await axios.get(`http://localhost:5000/user/${id}`);
   if(res.status!==200){
    return console.log("Some Error Occured");
   }
   return res.data;
}


export const addPost = async (postData)=>{
   const res=await axios.post("http://localhost:5000/posts",{
      title:postData.title,
      location:postData.location,
      date:postData.date,
      image:postData.image,
      description:postData.description,
      user:localStorage.getItem("userId")
   })
      .catch(err=>console.log("Error occured Not registerd"));

   if(res.status!==200 && res.status!==201 ){
    return console.log("Some Error Occured No registration");
   }
   const data= await res.data;
   return data;
   
}

export const getPost= async (id)=>{
   const res=await axios.get(`http://localhost:5000/posts/${id}`);
   if(res.status!==200){
    return console.log("Some Error Occured");
   }
   return res.data;
}

export const updatePost= async (id,updateData)=>{
   const res=await axios.put(`http://localhost:5000/posts/${id}`,{
      title:updateData.title,
      location:updateData.location,
      image:updateData.image,
      description:updateData.description,
   });
   if(res.status!==201){
    return console.log("Some Error Occured");
   }

   return console.log("Updated...");

}

export const deletePostbyid= async (id)=>{
   const res=await axios.delete(`http://localhost:5000/posts/${id}`);
   if(res.status!==200){
    return console.log("Some Error Occured");
   }
   return console.log("Deleted post");
}

