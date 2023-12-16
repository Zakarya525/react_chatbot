import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ChatIcon from '@mui/icons-material/Chat';
import MessageIcon from '@mui/icons-material/Message';
import PanoramaIcon from '@mui/icons-material/Panorama';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

const drawerWidth = 240;

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState('Sidebar');
  const [username, setUsername] = useState('');
  const isUser = true; // Assuming isUser should trigger navigation

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setUsername(storedData.firstname);
    }
  }, []);

  const handleLogout = () => {
    window.location.href = '/signin';
  };

  const handleClick = () => {
    // Handle your click logic here
    // Example:
    console.log('Button clicked');
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: 'black',
              color: 'white',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {[
              { text: 'Chat Generator', icon: <FontAwesomeIcon icon={faComments} style={{ color: 'white', fontSize: '1rem' }} /> },
              { text: 'Feedback 16', icon: <FontAwesomeIcon icon={faComments} style={{ color: 'white', fontSize: '1em' }} /> },
              { text: 'Change Password', icon: <LockIcon sx={{ color: 'white' }} /> },
            ].map(({ text, icon }, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 8,
        }}
      >
        
        <Paper
            sx={{
              width: "30%",
              bgcolor: "#c1ffc8",
              color: "black",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "10rem",
            }}
          >
            <ChatIcon sx={{ fontSize: 30, marginLeft: -27, marginTop: -2.2 }} />
            <Typography variant="h6"></Typography>
            <Typography variant="subtitle1">
              upload your business information or Answer
              <br /> question to let us understand your <br /> business
            </Typography>
          </Paper>
          <Paper
            sx={{
              width: "30%",
              bgcolor: "#0caa11",
              color: "black",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "10rem",
            }}
          >
            <MessageIcon
              sx={{ fontSize: 30, marginLeft: -27, marginTop: -2.3 }}
            />
            <Typography variant="h6"></Typography>
            <Typography variant="subtitle1">
              set up theme for your <br /> bot and personalize it
              <br /> for your business
            </Typography>
          </Paper>

          <Paper
            sx={{
              width: "30%",
              bgcolor: "#ffebc3",
              color: "black",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PanoramaIcon
              sx={{ fontSize: 30, marginLeft: -27, marginTop: -2.3 }}
            />
            <Typography variant="h6"></Typography>
            <Typography variant="subtitle1">
              Generate the <br /> bot,test it and <br /> embed it
            </Typography>
          </Paper>
      </Box>

      
      <Box display="flex" justifyContent="center">
      <Button onClick={handleClick}
        variant="contained"
        size="medium"
        sx={{
          borderRadius: 10,
          marginTop: 10,
          color: "white",
          bgcolor: "black",
          alignItems: "center",
          "&:hover": {
            bgcolor: "black",
          },
        }}
      >
        
          Get Started
        </Button>
      </Box>
    </>
  );
};

export default SideBar;
