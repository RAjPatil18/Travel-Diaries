import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DiaryItem from './DiaryItem'
import { getAllPosts } from '../api-helpers/helper'

const Diaries = () => {
    const [posts,setPosts]=useState();
    const [isPending,setisPending]=useState(true);
    
    useEffect(()=>{
        getAllPosts().then((data)=>{
            setPosts(data?.posts);
            setisPending(false);
        }).catch(err=>console.log(err));
    },[]);
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent="center" alignItems={"center"} padding={3} >
        {isPending && <div>Loading...</div>}
        {posts && posts.map((item,index)=>(
        <DiaryItem date={new Date( `${item.date}`).toLocaleDateString()}  
            title={item.location}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            Mydiaries={false}
             key={index} />
        ))}
      
    </Box>
  )
}

export default Diaries
