import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
//import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Password reset link sent to your email');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <Container>
      <h2>Reset Your Password</h2>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleResetPassword} variant="contained" color="primary">
        Reset Password
      </Button>
    </Container>
  );
};

export default ForgetPassword;
