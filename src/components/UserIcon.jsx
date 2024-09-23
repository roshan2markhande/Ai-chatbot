// src/components/UserIcon.jsx
import React from "react";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserIcon = () => {
  // Replace with user data when available
  const user = { name: "User Name", image: "path_to_image" };

  return (
    <IconButton>
      <AccountCircleIcon />
      <span>{user.name}</span>
    </IconButton>
  );
};

export default UserIcon;
