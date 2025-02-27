import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPhantomStoreLink } from '../utils/mobileWallet';
import './MobileWalletModal.css';

const MobileWalletModal = ({ isOpen, onClose, onConnect, onGetPhantom }) => {
  if (!isOpen) return null;

  const phantomStoreLink = getPhantomStoreLink();

  return (
    <div className="mobile-wallet-modal-overlay">
      <div className="mobile-wallet-modal">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Connect Wallet</h2>
        <div className="wallet-options">
          <button className="wallet-option-btn" onClick={onConnect}>
            <img src="./images/Phantom-Icon_Transparent_Purple.svg" alt="Phantom" />
            <span>Open in Phantom App</span>
          </button>
          <div className="divider">
            <span>or</span>
          </div>
          <button
            onClick={onGetPhantom}
            className="store-link-btn"
          >
            Get Phantom Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileWalletModal; 