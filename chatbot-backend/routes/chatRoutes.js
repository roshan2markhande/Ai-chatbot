import express from "express";
import {
  createChat,
  getChatHistory,
  chatbotAI,
} from "../controllers/chatController.js";

const router = express.Router();

// Routes
router.post("/chat", createChat);
router.get("/chat/:userId", getChatHistory);
router.post("/chatbot", chatbotAI); // Add route for chatbot AI

export default router;
