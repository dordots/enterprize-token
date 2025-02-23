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
        </div>
      </div>
    </header>
  );
}

export default Header; 