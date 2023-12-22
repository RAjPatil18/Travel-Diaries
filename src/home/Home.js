import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <Box position={"relative"} width="100%" height={"90vh"}>
      <img src="/road.jpg" alt="road" width={"100%"} height={"80%"} />
      <Typography 
            fontFamily={"Gentium Book Plus, serif"}
            variant='h4'
            textAlign={"center"} 
            width="100%" 
            sx={{position:"absolute",top:"2px",color:"white",":hover":{color:"#f1356d"}}}>

        Dare to live the life you've always wanted
      </Typography>
      <Box width={"100%"} height="20%" display={"flex"} flexDirection="column">
            <Typography textAlign={"center"} variant="h4" padding={4} fontFamily="Quicksand">
                    SHARE YOUR TRAVEL DIARIES WITH US...
            </Typography>
      </Box>
    </Box>
  )
}

export default Home
