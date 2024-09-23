// src/components/Signup.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import api from '../api.js';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const data = { name, email, password };
    try {
      const response = await api.signup(data);
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <Typography variant="h5">Signup</Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSignup}>Signup</Button>
    </div>
  );
};

export default Signup;
