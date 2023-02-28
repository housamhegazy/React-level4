import React from "react";
import { Outlet } from "react-router-dom";
import {AppBar,Toolbar,Typography,Avatar, Link } from "@mui/material";
export default function Root() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link
            sx={{ flexGrow: 1,transition:".3s", "&:hover": { color: "red" ,fontSize:'22px' } }}
            underline="none"
            color="inherit"
            href="/"
          >
            my expenses
          </Link>
          <Typography mx={"10px"} color="inherit" variant="body1">
            housam hegazy
          </Typography>
          <Avatar
            variant="circular"
            alt="Remy Sharp"
            src="./images/housam.jpg"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}
