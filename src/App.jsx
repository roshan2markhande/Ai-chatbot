// src/App.jsx
//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ChatHistory from "./components/ChatHistory";
import ForgotPassword from "./components/ForgotPassword";
import DraggableChatbot from "./components/DraggableChatbot";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DraggableChatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/chat-history" element={<ChatHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
