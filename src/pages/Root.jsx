import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "MUI Components/AppBar";
import Drawerr from "MUI Components/Drawer";

const drawerWidth = 240;

export default function Root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth}/>
      {/* drawer */}  
      <Drawerr drawerWidth={drawerWidth}/>
      <Outlet />
    </div>


  );
}
