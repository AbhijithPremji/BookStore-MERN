import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { Box, Button } from "@mui/material"

export const Home = () => {
  const history = useNavigate()
  return (
    <div>
        <Box>
            <Button style={{display:"flex", flexDirection:"row"}} onClick={()=>history("/books")}>View Items</Button>
        </Box>
    </div>
  )
}

