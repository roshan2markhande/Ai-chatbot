import Chat from "../models/chatModel.js";

// Create a new chat message
export const createChat = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const chat = await Chat.create({ userId, message });
    res.status(201).json(chat);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// Get chat history for a user
export const getChatHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await Chat.find({ userId }).sort({ timestamp: -1 });
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// AI chatbot function
export const chatbotAI = async (req, res) => {
  const { message } = req.body;

  try {
    // Implement your AI logic here
    const responseMessage = `AI Response to: ${message}`;
    res.json({ response: responseMessage });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
