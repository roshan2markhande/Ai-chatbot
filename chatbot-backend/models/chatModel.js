// backend/models/chatModel.js
import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    response: { type: String },
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
