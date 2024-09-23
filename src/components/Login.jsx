// frontend/src/components/Login.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { loginUser } from '../api';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({ username, password });
        setUser(response.data.token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Username" onChange={(e) => setUsername(e.target.value)} fullWidth />
            <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} fullWidth />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default Login;
