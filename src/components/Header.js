import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../utils/web3Config';
import { isMobileDevice } from '../utils/mobileWallet';
import MobileWalletModal from './MobileWalletModal';
import './Header.css'; // ניצור קובץ CSS לרכיב זה

function Header({ onWalletConnect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { active, account, activate, deactivate } = useWeb3React();
  const [error, setError] = useState('');
  const [showTelegramDialog, setShowTelegramDialog] = useState(false);
  const [showMobileWalletModal, setShowMobileWalletModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connectWallet = async () => {
    console.log("Attempting to connect wallet...");
    setError('');

    const isMobile = isMobileDevice();
    
    try {
      // נסה להתחבר ישירות לארנק (בין אם במובייל או בדסקטופ)
      if (isMobile) {
        // במובייל, נסה להתחבר לארנק סולנה אם זמין
        if (window.solana) {
          const response = await window.solana.connect();
          console.log("Connected to Solana wallet:", response.publicKey.toString());
          onWalletConnect();
        } else {
          // אם אין ארנק זמין במובייל, פתח את האתר בפנטום
          console.log("No wallet available on mobile, opening in Phantom");
          handleMobileConnect();
        }
      } else {
        // בדסקטופ, השתמש ב-web3-react
        if (!window.ethereum) {
          setError('No crypto wallet found. Please install MetaMask or Phantom.');
          return;
        }
        
        await activate(injected);
        onWalletConnect();
      }
    } catch (err) {
      console.error("Connection error:", err);
      
      if (isMobile) {
        // אם ההתחברות נכשלה במובייל, הצג את המודאל
        console.log("Failed to connect on mobile, showing modal");
        setShowMobileWalletModal(true);
      } else {
        setError(err.message);
      }
    }
  };

  // Function to handle mobile wallet connection
  const handleMobileConnect = () => {
    const currentURL = window.location.origin;
    const phantomBrowseURL = `https://phantom.app/ul/browse/${encodeURIComponent(currentURL)}?ref=${encodeURIComponent(currentURL)}`;
    
    // Open the URL
    window.location.href = phantomBrowseURL;
  };

  // Function to handle app store redirect
  const handleGetPhantom = () => {
    const appStoreLink = /iPhone|iPad|iPod/.test(navigator.userAgent)
      ? 'https://apps.apple.com/app/phantom-solana-wallet/id1598432977'
      : 'https://play.google.com/store/apps/details?id=app.phantom';
    
    window.open(appStoreLink, '_blank');
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
    const telegramBotUrl = `https://t.me/EnterPrizeTokenBot?start=${account}`;
    window.open(telegramBotUrl, '_blank');
    setShowTelegramDialog(false);
  };

  // Add effect to handle body class
  useEffect(() => {
    if (showMobileWalletModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showMobileWalletModal]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.jpg" alt="EnterPrize" />
        </div>

        <div className="header-right">
          <div className="social-links">
            <motion.a 
              href="https://t.me/EnterPrizeTokenBot" 
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

      {/* Mobile Wallet Modal */}
      <MobileWalletModal
        isOpen={showMobileWalletModal}
        onClose={() => setShowMobileWalletModal(false)}
        onConnect={handleMobileConnect}
        onGetPhantom={handleGetPhantom}
      />

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