import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  IconButton,
  Rating,
  Container,
} from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import ChatIcon from "@mui/icons-material/Chat";
import MessageIcon from "@mui/icons-material/Message";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { useNavigate } from "react-router-dom";

const ChatBotTitle = () => {
  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, padding: "20px" }}>
      <Typography variant="h4">ChatBot</Typography>
    </Box>
  );
};

const ChatBotContent = () => {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Perform any necessary actions before navigating if needed
    // Example: API calls, state updates, etc.

    // Navigate to the Sidebar route
    navigate("/sidebar");
  };
  return (
    <Container>
      <Box sx={{ padding: "5px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 3,
            marginLeft: -5,
          }}
        >
          <Box sx={{ flex: 1, marginRight: "30px" }}>
            <Typography variant="h3">
              Write AI chatbot to <br />
              scale your business
            </Typography>

            <Typography variant="subtitle2">
              Embed it in your website, or plugin it in your <br /> WhatsApp,
              this chatbot fits everywhere and is there <br /> to amplify your
              business.
            </Typography>
            <Box mt={2}>
              <Rating
                name="customized-1"
                defaultValue={4.9}
                precision={0.1}
                readOnly
              />
              <Typography variant="subtitle2">4.9 / 5 rating</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: 10, marginRight: 2 }}
              >
                Try Free Trial
              </Button>
              <IconButton>
                <AdjustIcon />
              </IconButton>
              <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                View Demo
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              marginRight: "-1px",
            }}
          >
            <img
              src="Klm.jpg"
              alt="Klm.jpg"
              style={{
                width: "25rem",
                height: "20rem",
                margin: "0 10px",
                padding: "20px",
                marginTop: "-35px",
                marginRight: "-5rem",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ padding: "20px" }}>
          <Typography variant="h3">3 Steps to your Bot</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
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
              <ChatIcon
                sx={{ fontSize: 30, marginLeft: -27, marginTop: -2.2 }}
              />
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
            <Button
              onClick={handleGetStarted}
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
        </Box>
      </Box>
    </Container>
  );
};

const Main = () => {
  return (
    <>
      <ChatBotTitle />
      <ChatBotContent />
    </>
  );
};

export default Main;
