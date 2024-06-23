import React, { useState } from 'react';
import './Chatbot.css'; // Ensure you have the CSS file in the same directory

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    if (userInput.trim() === '') return;

    // Add user message to the chat
    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    setMessages(newMessages);

    // Clear input field
    setUserInput('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = { text: `You said: ${userInput}`, sender: 'bot' };
      setMessages([...newMessages, botResponse]);
    }, 1000);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-body">
    <div className="chat-container">
      <div className="chat-box" id="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="user-input"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default Chatbot;
