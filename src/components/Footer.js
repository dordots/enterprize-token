import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; // ניצור קובץ CSS לרכיב זה

const socialLinks = [
  { icon: "🌐", url: "#", label: "Website" },
  { icon: "📱", url: "#", label: "Telegram" },
  { icon: "🐦", url: "#", label: "Twitter" },
  { icon: "📸", url: "#", label: "Instagram" },
  { icon: "💬", url: "#", label: "Discord" }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>EnterPrize Token 🚀</h3>
          <p>Revolutionizing crypto rewards</p>
        </motion.div>

        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#how">How It Works</a>
          <a href="#winners">Winners</a>
          <a href="#contact">Contact</a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer; 