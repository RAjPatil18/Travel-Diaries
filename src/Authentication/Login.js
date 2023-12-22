import { ThemeProvider } from '@emotion/react'
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, FormLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { loginUser } from '../api-helpers/helper'
import { authActions } from '../store'
import { useNavigate } from 'react-router-dom' 

const Login = () => {
  const navigate=useNavigate();
    const dispatch=useDispatch();
    const [loginData,setloginData]=useState({email:"",password:""});

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("hello");
        // console.log(loginData);

        loginUser(loginData).then(data=>{
          localStorage.setItem("userId",data.id);
        })
        .then(()=>{
          dispatch(authActions.login());
          navigate("/user/");
        })
        .catch(err=>console.log(err));
        
        
    };

    const handleChange= async  (e)=>{
      setloginData((prevState)=>({
        ...prevState,
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
            <Typography variant='h5' textAlign={"center"}>Login</Typography>
            <FormLabel sx={{color:"black"}}>Email</FormLabel>
            <TextField margin='normal' onChange={handleChange} value={loginData.name} required name="email"/>
            <FormLabel sx={{color:"black"}}>Password</FormLabel>
            <TextField margin='normal' onChange={handleChange} value={loginData.name} required name="password"/>
            <Button sx={{margin:"5px",borderRadius:"10px"  }} type="submit" variant='contained'>Sign In</Button>
            <Box display={"flex"} justifyContent="center" >
                <Typography>Dont have an account?</Typography>
              <Link href="/signup" sx={{cursor:"pointer",textDecoration:"none"}}>
                <Typography>Sign up</Typography>
              </Link>
            </Box>
        </Box>
    </form>

   </Box>

  )
}

export default Login
