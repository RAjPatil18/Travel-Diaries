import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getUser } from '../api-helpers/helper';
import DiaryItem from '../diary/DiaryItem';

const MyDiaries = () => {
    const [user,setUser]=useState();
    const [isPending,setisPending]=useState(true);
    
    useEffect(()=>{
        getUser().then(data=>{
            setUser(data.user);
            setisPending(false);
            console.log(data.user.posts.title);
        }).catch(err=>console.log(err));
        
    },[])
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent="center" alignItems={"center"} padding={3} >
        {isPending && <div>Loading...</div>}
        {user && user.posts.map((item,index)=>(
        <DiaryItem date={new Date( `${item.date}`).toLocaleDateString()}  
            title={item.location}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            Mydiaries={true}
             key={index} />
        ))}
      
    </Box>
  )
}

export default MyDiaries
