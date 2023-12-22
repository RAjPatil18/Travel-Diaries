import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { getUser } from '../api-helpers/helper';

import {useDispatch} from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    useEffect(()=>{
        getUser().then(data=>console.log(data)).catch(err=>console.log(err));
    },[]);

    const logoutUser=()=>{
        
        dispatch(authActions.logout());
        localStorage.removeItem("userId");
        navigate("/");

    }

  return (
    <div>
      <p>Profile this is</p>
      <Button onClick={logoutUser} color="warning">Logout</Button>
     
    </div>
  )
}

export default Profile
