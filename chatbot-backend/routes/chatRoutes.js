// backend/routes/chatRoutes.js
import express from 'express';
import { saveChat, getChatHistory } from '../controllers/chatController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/save', verifyToken, saveChat);
router.get('/history', verifyToken, getChatHistory);

export default router;
