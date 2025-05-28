// src/App.js
import React, { useEffect, useState } from 'react';
import splitClient from './splitClient';
import ChatWidget from './chatWidget';
import './App.css';

function App() {
  const [chatEnabled, setChatEnabled] = useState(false);
  const [chatConfig, setChatConfig] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    splitClient.on(splitClient.Event.SDK_READY, () => {
      const treatment = splitClient.getTreatmentWithConfig('chatWidget');

      if (treatment.treatment === 'on') {
        setChatEnabled(true);
        try {
          const config = JSON.parse(treatment.config || '{}');
          setChatConfig(config);
        } catch (err) {
          console.error('Invalid config JSON:', err);
        }
      }

      setIsReady(true);
    });
  }, []);

  console.log({ isReady, chatEnabled, chatConfig });

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo"> Shibumi Bank</div>
        <nav className="nav-links">
          <span>Personal</span>
          <span>Business</span>
          <span>Rates</span>
          <span>Support</span>
        </nav>
        <div className="nav-buttons">
          <button className="ghost">Sign In</button>
          <button className="primary">Open Account</button>
        </div>
      </header>

      <section className="hero">
        <h1>Modern banking, powered by you.</h1>
        <p>High interest. No fees. Full control.</p>
        <button className="primary">Open an account</button>
      </section>

      <section className="stats">
        <div><strong>500k+</strong><p>Customers</p></div>
        <div><strong>7x</strong><p>More interest</p></div>
        <div><strong>$0</strong><p>Banking fees</p></div>
      </section>

      <section className="features">
        <div className="feature-card">Everyday Banking</div>
        <div className="feature-card">Investments</div>
        <div className="feature-card">Payments</div>
        <div className="feature-card">Security</div>
      </section>

      {isReady && chatEnabled && chatConfig && <ChatWidget config={chatConfig} />}
    </div>
  );
}

export default App;