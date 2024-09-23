// frontend/src/components/Signup.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { registerUser } from '../api';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser({ username, password });
        alert('User registered successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Username" onChange={(e) => setUsername(e.target.value)} fullWidth />
            <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} fullWidth />
            <Button type="submit">Signup</Button>
        </form>
    );
};

export default Signup;
