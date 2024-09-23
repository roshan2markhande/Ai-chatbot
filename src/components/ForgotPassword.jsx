// src/components/ForgotPassword.jsx
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log("Forgot password for:", email);
    // Implement your forgot password logic here
  };

  return (
    <div>
      <Typography variant="h5">Forgot Password</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleForgotPassword}>Submit</Button>
    </div>
  );
};

export default ForgotPassword;
