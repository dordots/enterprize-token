import React from 'react';
import { motion } from 'framer-motion';
import './FooterV2.css';

function FooterV2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-v2">
      <div className="footer-content">
        <div className="footer-grid">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/logo-orange.png" alt="EnterPrize" className="footer-logo" />
            <p>The Future of Crypto Rewards</p>
            <div className="social-links">
              <a 
                href="https://t.me/EnterPrizeTokenBot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="/images/telegram.png" alt="Telegram" />
              </a>
              <a 
                href="https://x.com/enterprizetoke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="/images/twitter.png" alt="X" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Resources</h3>
            <ul>
              <li><a href="#contract">Contract Address</a></li>
              <li><a href="https://solscan.io" target="_blank" rel="noopener noreferrer">Solscan</a></li>
              <li><a href="https://docs.enterprize.token" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://github.com/enterprize" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Contact Us</h3>
            <p>Join our Telegram community for the fastest support and latest updates.</p>
            <a 
              href="https://t.me/EnterPrizeTokenBot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button"
            >
              Join Telegram
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>&copy; {currentYear} EnterPrize Token. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterV2; 