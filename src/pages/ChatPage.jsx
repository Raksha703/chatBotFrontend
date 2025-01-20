import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css files/ChatCSS.css';

//const BASE_URL = "http://127.0.0.1:5000";
const BASE_URL = "https://chatbotbackend-imwg.onrender.com";

function ChatPage() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'chatbot' }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!userMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, sender: 'user' }
    ]);

    setUserMessage('');
    setLoading(true);

    const chatbotResponse = await getChatbotResponse(userMessage);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: chatbotResponse, sender: 'chatbot' }
    ]);

    setLoading(false);
  };

  const onClose = () => {
    navigate("/");
  };

  const getChatbotResponse = async (userMessage) => {
    const url = `${BASE_URL}/api/message/${userMessage}`;
    try {
      const response = await axios.get(url);
      return response.data.message;
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      return 'Oops! Something went wrong. Please try again.';
    }
  };

  return (
    <div className="chat-overlay">
      <div className="chat-modal">

        <div className="chat-header">
          <h2>Chat with Chatbot</h2>
          <button onClick={onClose} className="close-button">x</button>
        </div>

        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <strong>{message.sender === 'chatbot' ? 'Chatbot: ' : 'You: '}</strong>
              <span>{message.text}</span>
            </div>
          ))}
          {loading && <div className="message chatbot">Typing...</div>}
        </div>

        <Form onSubmit={handleSendMessage} className="message-form">
          <Form.Group>
            <Form.Control
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              className="message-input"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="send-button">
            Send
          </Button>
        </Form>
        
      </div>
    </div>
  );
}

export default ChatPage;
