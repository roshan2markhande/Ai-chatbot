// backend/controllers/chatController.js
import Chat from '../models/chatModel.js';

export const saveChat = async (req, res) => {
    const { message, response } = req.body;
    const chat = new Chat({ userId: req.user.id, message, response });
    await chat.save();
    res.status(201).json(chat);
};

export const getChatHistory = async (req, res) => {
    const chats = await Chat.find({ userId: req.user.id });
    res.json(chats);
};
