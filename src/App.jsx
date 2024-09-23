import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Draggable from 'react-draggable';
import ChatbotWindow from './components/ChatbotWindow';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for user authentication

  return (
    <Router>
      <div className="App">
        {/* Draggable chatbot window */}
        <Draggable>
          <div className="chatbot-container">
            <ChatbotWindow isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          </div>
        </Draggable>
      </div>
    </Router>
  );
}

export default App;
