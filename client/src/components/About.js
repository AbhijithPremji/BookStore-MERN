import React from 'react'
import {Box, Typography} from '@mui/material'


const About = () => {
  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center"  padding="100px" margin="6rem">
        <Typography sx={{fontFamily :"fantasy"}}  variant='h2'>Library App</Typography>
        <Typography sx={{fontFamily :"fantasy"}}  variant='h2'>using</Typography>
        <Typography variant='h3'>MERN Stack</Typography>
        </Box>
    </div>
  )
}

export default About