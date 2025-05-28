// src/ChatWidget.js
import React, { useState } from 'react';
import './chatWidget.css';

const ChatWidget = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const position = config?.position || 'right';
  const placeholder = config?.placeholder || 'Welcome to chat!';
  const color = config?.color || '#333';

  const positionClass = position === 'left' ? 'chat-container-left' : 'chat-container-right';
  
  return (
    <div className={`chat-container ${positionClass}`}>
      <button
        className="chat-toggle"
        style={{ backgroundColor: config.color || '#333' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '💬 Chat'}
      </button>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">Shibumi Chat Assistant</div>
          <div className="chat-body">
            <p>{config.placeholder}</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
