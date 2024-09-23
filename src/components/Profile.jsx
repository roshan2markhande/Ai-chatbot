import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import axios from "axios";

const Profile = () => {
  const handleLogout = async () => {
    // Implement logout functionality (clear session, tokens, etc.)
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Profile</Typography>
      <Avatar sx={{ width: 100, height: 100, mt: 2 }}>U</Avatar>
      <Typography variant="h6" sx={{ mt: 2 }}>
        User Name
      </Typography>
      <Typography>Email: user@example.com</Typography>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Profile;
