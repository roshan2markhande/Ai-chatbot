// src/api/api.js
import axios from "axios";

const API_URL = "mongodb://localhost:27017/"; // Adjust according to your backend setup

const api = {
  login: (data) => axios.post(`${API_URL}/auth/login`, data),
  signup: (data) => axios.post(`${API_URL}/auth/signup`, data),
  getChatHistory: (userId) => axios.get(`${API_URL}/chat/history/${userId}`),
  saveChat: (data) => axios.post(`${API_URL}/chat`, data),
};

export default api;
