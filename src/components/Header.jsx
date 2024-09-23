// src/components/Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AI Chatbot
        </Typography>
        <UserIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
