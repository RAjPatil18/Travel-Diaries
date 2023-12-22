import { Button, FormLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import { addPost } from '../api-helpers/helper';

const AddDiary = () => {
    const [post,setPost]=useState({title:"",location:"",image:"",date:"",description:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(post);

        addPost(post).then(data=>console.log(data)).catch(err=>console.log(err));
    }
    const handleChange= async (e)=>{
        setPost((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
            
           }));
    };
  return (
    <Box
    display={"flex"}
    flexDirection="column"
    width={"100%"}
    height={"100%"}
    >
        <Box display={"flex"} margin="auto" padding={4}>
            <Typography variant='h4' fontFamily={"quiksand"}>Add Your Travel Diary</Typography>
            <FlightIcon sx={{fontSize:'40px',paddingLeft:1, color:'lightcoral'}}/>
        </Box>
        <form onSubmit={handleSubmit}>
            <Box padding={4} 
                display={"flex"}
                flexDirection="column"
                margin={"auto"}
                width={"60%"}
            >
                <FormLabel sx={{mt:4}}>Title</FormLabel>
                <TextField name="title" value={post.title} onChange={handleChange} variant='standard'/>
                <FormLabel sx={{mt:4}}>Location</FormLabel>
                <TextField name="location" value={post.location} onChange={handleChange} variant='standard'/>
                <FormLabel sx={{mt:4}}>Image</FormLabel>
                <TextField name="image" value={post.image} onChange={handleChange} variant='standard'/>
                <FormLabel sx={{mt:4}}>Date</FormLabel>
                <TextField type={"date"} name="date" value={post.date} onChange={handleChange} variant='standard'/>
                <FormLabel sx={{mt:4}}>Description</FormLabel>
                <TextField name="description" value={post.description} onChange={handleChange} variant='standard'/>
                <Button type="submit" variant='contained' color="warning" sx={{width:"50%",margin:"auto",mt:4,borderRadius:"10px"}}>Post</Button>

            </Box>
        </form>
    </Box>
  )
}

export default AddDiary
