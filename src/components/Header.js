import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css'; // ניצור קובץ CSS לרכיב זה

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.jpg" alt="EnterPrize" />
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
            <div className="social-links">
              <a href="https://t.me/yourtelegram" className="social-link">
                <img src="/images/telegram.png" alt="Telegram" />
              </a>
              <a href="https://x.com/yourx" className="social-link">
                <img src="/images/twitter.png" alt="X" />
              </a>
            </div>
          </motion.nav>
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header; 