// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signup`, data);
};

export const loginUser = async (data) => {
    return await axios.post(`${API_URL}/auth/login`, data);
};

export const saveChat = async (token, data) => {
    return await axios.post(`${API_URL}/chat/save`, data, {
        headers: { Authorization: token },
    });
};

export const getChatHistory = async (token) => {
    return await axios.get(`${API_URL}/chat/history`, {
        headers: { Authorization: token },
    });
};
