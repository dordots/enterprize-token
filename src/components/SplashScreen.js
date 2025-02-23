import React from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

function SplashScreen() {
  return (
    <motion.div 
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      exit={{ display: 'none' }}
    >
      <motion.div 
        className="logo-container"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/logo.jpg" alt="EnterPrize Token" />
        <motion.div 
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default SplashScreen; 