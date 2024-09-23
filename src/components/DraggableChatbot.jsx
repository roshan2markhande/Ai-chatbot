// src/components/DraggableChatbot.jsx
import React from "react";
import Draggable from "react-draggable";
import Chatbot from "./Chatbot";

const DraggableChatbot = () => {
  return (
    <Draggable>
      <div
        style={{
          width: "300px",
          height: "400px",
          position: "absolute",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <Chatbot />
      </div>
    </Draggable>
  );
};

export default DraggableChatbot;
