import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add logic to create user here
    setIsAuthenticated(true);
    navigate('/chat'); // Redirect to chat after signup
  };

  return (
    <Box component="form" onSubmit={handleSignup} sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>
      <Button onClick={() => navigate('/login')} color="secondary" sx={{ mt: 2 }}>
        Already have an account? Login
      </Button>
    </Box>
  );
};

export default Signup;
