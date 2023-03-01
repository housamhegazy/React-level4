import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "MUI Components/AppBar";
import Drawerr from "MUI Components/Drawer";
import { Box } from "@mui/system";
import Home from "./home/Home";

const drawerWidth = 240;

export default function Root() {
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} />
      {/* drawer */}
      <Drawerr drawerWidth={drawerWidth} />

      {/* here we put everythin in page  */}
      <Box
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          justifyContent: "center",
        }}
        className="border"
      >
        <Outlet />
      </Box>
    </div>
  );
}
