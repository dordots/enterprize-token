import React from 'react';
import { motion } from 'framer-motion';
import './HeroSectionV2.css';

function HeroSectionV2({ showTelegramDialog, setShowTelegramDialog }) {
  return (
    <section className="hero-section-v2">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to EnterPrize
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Future of Crypto Rewards
          </motion.p>
        </div>

        <motion.div 
          className="token-animation"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="/images/logo-orange.png" alt="EnterPrize Token" className="token-image" />
          <div className="token-glow"></div>
        </motion.div>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#prizes" className="cta-button">
            View Prizes
          </a>
          <a href="https://t.me/EnterPrizeTokenBot" className="cta-button telegram">
            Join Telegram
          </a>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-particles"></div>
      </div>
    </section>
  );
}

export default HeroSectionV2; 