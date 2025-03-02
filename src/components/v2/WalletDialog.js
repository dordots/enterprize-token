import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WalletDialog.css';

function WalletDialog({ isOpen, onClose, walletAddress, onTelegramConnect, onSkipTelegram }) {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="wallet-dialog-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="wallet-dialog"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="wallet-status">
          <h3>ארנק חובר בהצלחה!</h3>
          <p className="wallet-address">מזהה הארנק: {walletAddress}</p>
        </div>

        <div className="telegram-section">
          <h3>Register for Updates</h3>
          <p>Would you like to receive updates about your lottery wins on Telegram?</p>
          
          <div className="button-group">
            <motion.button 
              className="telegram-button"
              onClick={onTelegramConnect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes, send me to Telegram!
            </motion.button>
            
            <motion.button 
              className="skip-button"
              onClick={onSkipTelegram}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              No, thanks
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WalletDialog; 