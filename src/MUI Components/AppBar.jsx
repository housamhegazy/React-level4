import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Link,
  Drawer,
  Divider,
} from "@mui/material";

export default function Appbar({ drawerWidth }) {
  return (
    <AppBar
      sx={{ ml: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)` }}
      position="static"
    >
      <Toolbar>
        <Link
          sx={{
            flexGrow: 1,
            transition: ".3s",
            "&:hover": { color: "red", fontSize: "22px" },
          }}
          underline="none"
          color="inherit"
          href="/"
        >
          my expenses
        </Link>
        <Typography mx={"10px"} color="inherit" variant="body1">
          housam hegazy
        </Typography>
        <Avatar variant="circular" alt="Remy Sharp" src="./images/housam.jpg" />
      </Toolbar>
    </AppBar>
  );
}
