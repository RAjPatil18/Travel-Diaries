import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useParams } from 'react-router-dom';
import { deletePostbyid } from '../api-helpers/helper';

const DiaryItem = ({title,description,image,location,date,id,Mydiaries}) => {
  // const postid = useParams().id;
  const deletePost=()=>{
    deletePostbyid(id).then(data=>console.log(data)).catch(err=>console.log(err));
  }

  return (

    <Card sx={{ width:"50%", height:"60vh", margin:1,padding:1,display:"flex",flexDirection:"column",boxShadow:"5px 5px 10px #ccc"}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
         <LocationOnRoundedIcon/>
        </IconButton>
      }
      title={title}
      header={location}
      subheader={date}
    />
    <img
      height="194"
      src={image}
      alt={title}
    />
    <CardContent>
    <Typography variant="h6" color="text.primary">
       {title}
      </Typography>
      <hr />
      <Box paddingTop={1} display={"flex"}>
      <Typography width={"170px"} fontWeight={"bold"} variant="h7">
        Raj Patil
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
      </Box>
    </CardContent>
   { Mydiaries && <CardActions sx={{marginLeft:"auto"}}>
        <IconButton LinkComponent={Link} to={`/user/UpdateDiary/${id}`} color='warning'><EditIcon/></IconButton>
        <IconButton onClick={deletePost} color='error'><DeleteForeverIcon/></IconButton>
    </CardActions>}
  </Card>

  )
}

export default DiaryItem
