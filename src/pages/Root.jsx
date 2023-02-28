import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Link } from "@mui/material";
export default function Root() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link sx={{ flexGrow: 1 }} underline="none" color="inherit" href="/">
            my expenses
          </Link>
          <Typography mx="10px" color="inherit" variant="body1">
            housam hegazy
          </Typography>
          <Avatar
            variant="circular"
            alt="Remy Sharp"
            src="http://mui.com/static/images/avatar/1.jpg"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}
