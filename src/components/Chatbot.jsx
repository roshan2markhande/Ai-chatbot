// frontend/src/components/Chatbot.jsx
import React, { useState } from 'react';
import {Signup} from '../components/Signup';
import {Login} from '../components/Login';
import {ChatWindow} from './ChatWindow';
import { Container, Box } from '@mui/material';

const Chatbot = () => {
    const [user, setUser] = useState(null);

    return (
        <Container>
            {!user ? (
                <Box>
                    <Login setUser={setUser} />
                    <Signup />
                </Box>
            ) : (
                <ChatWindow user={user} />
            )}
        </Container>
    );
};

export default Chatbot;
