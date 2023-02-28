import React from 'react'
import {AppBar,Toolbar,Typography,Avatar, Link,Drawer,Divider } from "@mui/material";

export default function Drawerr({drawerWidth}) {
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar /> 
    <Divider />      
  </Drawer>
  )
}
