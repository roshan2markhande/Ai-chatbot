// frontend/src/components/ChatWindow.jsx
import React, { useState, useEffect } from 'react';
import { saveChat, getChatHistory } from '../api';
import { TextField, Button } from '@mui/material';

const ChatWindow = ({ user }) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        const fetchChatHistory = async () => {
            const history = await getChatHistory(user);
            setChatHistory(history.data);
        };

        fetchChatHistory();
    }, [user]);

    const handleSend = async () => {
        const response = await saveChat(user, { message });
        setChatHistory([...chatHistory, response.data]);
        setMessage('');
    };

    return (
        <div>
            <h2>Chat Window</h2>
            {chatHistory.map((chat) => (
                <div key={chat._id}>
                    <p>{chat.message}</p>
                    <p>{chat.response}</p>
                </div>
            ))}
            <TextField value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={handleSend}>Send</Button>
        </div>
    );
};
export default ChatWindow;
