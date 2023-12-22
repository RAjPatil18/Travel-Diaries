import { ThemeProvider } from '@emotion/react'
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, FormLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { registerUser } from '../api-helpers/helper'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [registerData,setregisterData]=useState({name:"",email:"",password:""});

    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("hello");
        console.log(registerData);


        registerUser(registerData).then(data=>{
          navigate("/Login");
        }).catch(err=>console.log(err));
        
    };

    const handleChange= async  (e)=>{
      setregisterData((prevState)=>({
        ...registerData,
        [e.target.name]: e.target.value,
        
       }));

      
    };

  return (
   <Box
      width={"50%"}   
      borderRadius={10}
      boxShadow="5px 5px 10px #ccc"
      margin="auto"
      marginTop={10}
   >
    <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection="column" width={"50%"} padding="5px" margin="auto">
            <Typography variant='h5' textAlign={"center"}>Register</Typography>

            <FormLabel sx={{color:"black"}}>Name</FormLabel>
            <TextField margin='normal' onChange={handleChange} value={registerData.name} required name="name"/>

            <FormLabel sx={{color:"black"}}>Email</FormLabel>
            <TextField margin='normal'
             onChange={handleChange}
             type={"email"}
             required
             value={registerData.email} name="email"/>

            <FormLabel sx={{color:"black"}}>Password</FormLabel>
            <TextField margin='normal' onChange={handleChange} type={"password"} required value={registerData.password} name="password"/>

            <Button type="submit" variant='contained' sx={{margin:"5px",borderRadius:"10px"  }} >Sign Up</Button>
            <Box display={"flex"} justifyContent="center" >
                <Typography>Already have an account?</Typography>
              <Link href="/login" sx={{cursor:"pointer",textDecoration:"none"}}>
                <Typography>Sign in</Typography>
              </Link>
            </Box>


        </Box>
    </form>

   </Box>

  )
}

export default Register
