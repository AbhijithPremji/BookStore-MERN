import React, { useState } from 'react'
import {AppBar, Tab,Tabs, Toolbar, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
import StoreIcon from '@mui/icons-material/Store';
export const Header = () => {
    const [value,setvalue] = useState(0)
  return (
    <div>
        <AppBar sx={{backgroundColor:"black"}} position='sticky' >
            <Toolbar>
             <Typography>
                <StoreIcon /> BOOK STORE
             </Typography>
            </Toolbar>
            <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={((e,val)=>setvalue(val))}
              sx={{ml:"auto"}}>
                <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
                <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
            </Tabs>
        </AppBar>
        </div>
  )
}
