import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/web3Config';
import './Header.css'; // ניצור קובץ CSS לרכיב זה

function Header({ onWalletConnect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { active, account, activate, deactivate } = useWeb3React();
  const [error, setError] = useState('');
  const [showTelegramDialog, setShowTelegramDialog] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connectWallet = async () => {
    console.log("Attempting to connect wallet...");
    
    if (!window.ethereum) {
      setError('No crypto wallet found. Please install MetaMask or Phantom.');
      return;
    }

    try {
      await activate(injected);
      setError('');
      onWalletConnect(); // Trigger the dialog through the callback
    } catch (err) {
      console.error("Connection error:", err);
      setError(err.message);
    }
  };

  const disconnectWallet = async () => {
    try {
      deactivate();
    } catch (err) {
      setError(err.message);
    }
  };

  // Format wallet address for display
  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const goToTelegramBot = () => {
    const telegramBotUrl = `https://t.me/your_bot_username?start=${account}`;
    window.open(telegramBotUrl, '_blank');
    setShowTelegramDialog(false); // Close dialog after redirect
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.jpg" alt="EnterPrize" />
        </div>

        <div className="header-right">
          <div className="social-links">
            <motion.a 
              href="https://t.me/yourtelegram" 
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/images/telegram.png" alt="Telegram" />
            </motion.a>
            <motion.a 
              href="https://x.com/enterprizetoke" 
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/images/twitter.png" alt="X" />
            </motion.a>
          </div>

          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <AnimatePresence>
            <motion.nav 
              className={`nav-links ${isMenuOpen ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#prizes" className="nav-link">Prizes</a>
              <a href="#winners" className="nav-link">Winners</a>
              <a href="#about" className="nav-link">About</a>
            </motion.nav>
          </AnimatePresence>

          <motion.button
            className={`connect-wallet-btn ${active ? 'connected' : ''}`}
            onClick={active ? disconnectWallet : connectWallet}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {active ? (
              <span className="wallet-address">{formatAddress(account)}</span>
            ) : (
              'Connect Wallet'
            )}
          </motion.button>

          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}
        </div>
      </div>

      {/* Telegram Registration Dialog */}
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
    </header>
  );
}

export default Header; 