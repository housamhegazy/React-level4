import React from "react";
import {
  Toolbar,
  Drawer,
  Divider,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import CreateIcon from "@mui/icons-material/Create";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import { Home } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
export default function Drawerr({ drawerWidth }) {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      {/* list */}
      <List>
          {/* one */}
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* two :link from mui*/}
        <Link to="/create">
          <ListItemButton>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="create" />
          </ListItemButton>
        </Link>
        
        {/* three : link from react*/}
        <Link to={"/profile"}>
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="profile" />
          </ListItemButton>
        </Link>

        {/* four */}
        <ListItemButton onClick={()=>{
          navigate('/')
        }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="settings" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>

      </List>
    </Drawer>
  );
}
