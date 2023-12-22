import React, { useState } from 'react'
import { AppBar , Tab,Tabs, Toolbar} from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { bgcolor } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const linklist=["Home","Diaries","Login","Signup"];
const userlinks=["Home","Diaries","My Diaries","Add Diary","Profile"];

const Navbar = () => {
    const [value,setValue]=useState();
    const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
   <AppBar sx={{bgcolor: "transparent",position:"sticky"}}>
    <Toolbar>
    <TravelExploreIcon sx={{color:"black"}}/>

    <Tabs value={value} onChange={(e,val)=>setValue(val)}    sx={{ml:"auto"}}>
        {isLoggedIn
        ? userlinks.map((link)=>(
            <Tab LinkComponent={Link}
                 to={`/user/${link=="Home"?"":link.split(" ").join("")}`} 
            sx={{textDecoration:"none",":hover":{textDecoration:"underline",textUnderlineOffset:"6px"}}} 
            key={link} label={link}/>
        )) 

        : linklist.map((link)=>(
            <Tab LinkComponent={Link}
                 to={`/${link=="Home"?"":link}`} 
            sx={{textDecoration:"none",":hover":{textDecoration:"underline",textUnderlineOffset:"6px"}}} 
            key={link} label={link}/>
        )) }
    </Tabs>
    </Toolbar>
   </AppBar>
  )
}

export default Navbar
