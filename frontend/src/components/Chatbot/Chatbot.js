// src/components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css'; // Ensure you have a CSS file for styling

const botResponses = {
  "hello": "Hi there! Welcome to NiceSkills360 :) How can I help you today?",
  "how are you": "I'm a chatbot, so I don't have feelings, but I'm here to help you!",
  "what is your name": "I'm your friendly chatbot!",
  "help": "Sure, how can I assist you?",
  "bye": "Goodbye! Have a great day!",
  "cost of product": "The product costs 1700/-",
  // Additional hardcoded questions and responses
  "what is this coding kit about": "Our coding kit includes code snippet stickers and special paper. You can place the stickers on the paper, scan it with our app, and see the code come to life on your device.",
  "who is this coding kit for": "This kit is designed for beginners and young learners who are just starting to explore coding. It's also a fun tool for anyone interested in coding in a hands-on way.",
  "what age group is this kit suitable for": "The kit is ideal for children aged 8 and above, but anyone interested in learning the basics of coding can enjoy it.",
  "what languages or coding concepts does the kit cover": "The kit covers fundamental coding concepts and is language-agnostic, focusing on logic and structure common to all programming languages.",
  "how do I use the coding kit": "Place the code snippet stickers on the designated areas of the special paper. Once your code is complete, scan the paper using our app to see how the code runs and the output it generates.",
  "what do I need to use the coding kit": "You will need the code snippet stickers, the special paper provided in the kit, and a smartphone or tablet with our app installed.",
  "where can I download the app": "Our app is available for download on the App Store for iOS devices and Google Play Store for Android devices.",
  "what should I do if the app doesn't recognize the code snippets": "Ensure the stickers are placed correctly and are not overlapping. Check for adequate lighting and a clean camera lens for the scan. If issues persist, try restarting the app.",
  "why is my code not producing the expected output": "Double-check the sequence of the code snippets and their placement. Ensure all necessary stickers are used and that they are correctly aligned according to the instructions.",
  "can I reuse the code snippet stickers": "Yes, the stickers are designed to be reusable. If they lose their stickiness, you can lightly clean them with a damp cloth to restore their adhesive properties.",
  "can I get more special paper or additional code snippet stickers": "Yes, additional packs of special paper and code snippet stickers are available for purchase on our website.",
  "is there a way to track my progress or save my projects": "Our app includes a feature to save and track your projects, so you can review your progress and revisit past codes at any time.",
  "do you offer any tutorials or guides to help get started": "Yes, our app includes a series of tutorials and guides to help you get started. We also have video tutorials and support articles on our website.",
  "what devices are compatible with the app": "The app is compatible with most iOS and Android smartphones and tablets. Check the app store listing for specific requirements.",
  "is the app available in multiple languages": "Currently, the app is available in English, but we are working on adding more languages in future updates.",
  "is the kit safe for children to use": "Yes, the kit is designed with safety in mind. The stickers and paper are non-toxic, and the app is child-friendly with no inappropriate content.",
  "does the app collect any personal data": "The app collects minimal data necessary for functionality and does not share personal information with third parties. Our privacy policy details what data is collected and how it is used."
};

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: 'bot' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input.trim(), sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage = { text: getBotResponse(input.trim()), sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 500);
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    return botResponses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages" id="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          id="user-input"
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
