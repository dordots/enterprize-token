import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import './HeroSection.css'; // ניצור קובץ CSS לרכיב זה

function HeroSection({ showTelegramDialog, setShowTelegramDialog }) {
  const { account } = useWeb3React();

  const goToTelegramBot = () => {
    const telegramBotUrl = `https://t.me/EnterPrizeTokenBot?start=${account}`;
    window.open(telegramBotUrl, '_blank');
    setShowTelegramDialog(false);
  };

  return (
    <div style={{ padding: '20px 0' }}>
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your Crypto Game! 🚀
            <span className="gradient-text">Win Big, Live Large</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hold tokens, win prizes, live the dream! 🎯 Join the most exciting crypto rewards platform
          </motion.p>

          <motion.div 
            className="cta-container"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ marginBottom: '0' }}
          >
            <a href="#how-it-works" className="cta-button primary">
              <span>Start Winning Now</span>
              <span className="emoji">🎉</span>
            </a>
            <a href="#about" className="cta-button secondary">
              <span>Learn More</span>
              <span className="emoji">📚</span>
            </a>
          </motion.div>

          <div className="floating-elements">
            <img src="/images/eth.png" className="float-item eth" alt="Ethereum" />
            <img src="/images/btc.png" className="float-item btc" alt="Bitcoin" />
            <img src="/images/xrp.png" className="float-item prize" alt="Xrp" />
          </div>
        </div>

        {showTelegramDialog && (
          <div className="telegram-dialog">
            <div className="dialog-content">
              <h3>Register for Updates</h3>
              <p>Would you like to receive updates about your lottery wins on Telegram?</p>
              <button onClick={goToTelegramBot}>Yes, send me to Telegram!</button>
              <button onClick={() => setShowTelegramDialog(false)}>No, thanks</button>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  );
}

export default HeroSection; 