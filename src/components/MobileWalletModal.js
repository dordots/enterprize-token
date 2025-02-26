import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPhantomStoreLink } from '../utils/mobileWallet';
import './MobileWalletModal.css';

const MobileWalletModal = ({ isOpen, onClose, onConnect }) => {
  const phantomStoreLink = getPhantomStoreLink();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-wallet-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mobile-wallet-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button className="close-button" onClick={onClose}>✕</button>
            <h2>Connect Wallet</h2>
            <div className="wallet-options">
              <button className="wallet-option-btn" onClick={onConnect}>
                <img src="/images/phantom-icon.png" alt="Phantom" />
                <span>Open in Phantom App</span>
              </button>
              <div className="divider">
                <span>or</span>
              </div>
              <a
                href={phantomStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="store-link-btn"
              >
                Get Phantom Wallet
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileWalletModal; 