import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { TextFields } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LockIcon from "@mui/icons-material/Lock";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import MessageIcon from "@mui/icons-material/Message";
import PanoramaIcon from "@mui/icons-material/Panorama";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";

const drawerWidth = 240;

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState("Sidebar");
  const [username, setUsername] = useState("");
  const isUser = true;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setUsername(storedData.firstname);
    }
  }, []);

  const handleLogout = () => {
    window.location.href = "/signin";
  };

  const handleClick = () => {
    // Handle your click logic here
    // Example:
    console.log("Button clicked");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {[
            {
              text: "Chat Generator",
              icon: (
                <FontAwesomeIcon
                  icon={faComments}
                  style={{ color: "white", fontSize: "1rem" }}
                />
              ),
            },
            {
              text: "Feedback 16",
              icon: (
                <FontAwesomeIcon
                  icon={faComments}
                  style={{ color: "white", fontSize: "1em" }}
                />
              ),
            },
            {
              text: "Change Password",
              icon: <LockIcon sx={{ color: "white" }} />,
            },
          ].map(({ text, icon }, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemButton
                onClick={() => {
                  setSelectedItem(text);
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
{
  /* <Paper sx={{ padding: 2, backgroundColor: "blue", maxWidth: 300 }}>
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <TextField label="Input 1" variant="outlined" />
    <TextField label="Input 2" variant="outlined" />
    <TextField label="Input 3" variant="outlined" />
    <TextField label="Input 4" variant="outlined" />
  </Box>
</Paper>; */
}
