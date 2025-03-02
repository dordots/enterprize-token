import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../utils/web3Config';
import { isMobileDevice } from '../../utils/mobileWallet';
import MobileWalletModal from '../MobileWalletModal';
import WalletDialog from './WalletDialog';
import './HeaderV2.css';

function HeaderV2({ onWalletConnect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { active, account, activate, deactivate } = useWeb3React();
  const [error, setError] = useState('');
  const [showMobileWalletModal, setShowMobileWalletModal] = useState(false);
  const [showWalletDialog, setShowWalletDialog] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header-content')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const connectWallet = async () => {
    setError('');
    try {
      if (isMobileDevice()) {
        if (window.solana) {
          const response = await window.solana.connect();
          if (response.publicKey) {
            onWalletConnect();
            setShowWalletDialog(true);
          }
        } else {
          handleMobileConnect();
        }
      } else {
        if (!window.ethereum) {
          setError('No crypto wallet found. Please install MetaMask or Phantom.');
          return;
        }
        await activate(injected);
        setShowWalletDialog(true);
        onWalletConnect();
      }
    } catch (err) {
      console.error("Connection error:", err);
      if (isMobileDevice()) {
        setShowMobileWalletModal(true);
      } else {
        setError(err.message);
      }
    }
  };

  const handleMobileConnect = () => {
    const currentURL = window.location.origin;
    const phantomBrowseURL = `https://phantom.app/ul/browse/${encodeURIComponent(currentURL)}?ref=${encodeURIComponent(currentURL)}`;
    window.location.href = phantomBrowseURL;
  };

  const disconnectWallet = async () => {
    try {
      deactivate();
      setShowWalletDialog(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleTelegramConnect = () => {
    const telegramBotUrl = `https://t.me/EnterPrizeTokenBot?start=${account}`;
    window.open(telegramBotUrl, '_blank');
    setShowWalletDialog(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="header-v2">
      <div className="header-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/images/logo-orange.png" alt="EnterPrize" className="logo-image" />
        </motion.div>

        <div className="header-right">
          <div className="social-links">
            <motion.a 
              href="https://t.me/EnterPrizeTokenBot" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/images/telegram.png" alt="Telegram" className="social-icon" />
            </motion.a>
            <motion.a 
              href="https://x.com/enterprizetoke" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/images/twitter.png" alt="X" className="social-icon" />
            </motion.a>
          </div>

          <motion.button
            className={`connect-wallet-btn-v2 ${active ? 'connected' : ''}`}
            onClick={active ? disconnectWallet : connectWallet}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {active ? formatAddress(account) : 'Connect Wallet'}
          </motion.button>

          <button 
            className="mobile-menu-button" 
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav 
                className="nav-links active"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <motion.a 
                  href="#how-it-works" 
                  className="nav-link"
                  variants={itemVariants}
                  onClick={handleNavClick}
                >
                  How It Works
                </motion.a>
                <motion.a 
                  href="#prizes" 
                  className="nav-link"
                  variants={itemVariants}
                  onClick={handleNavClick}
                >
                  Prizes
                </motion.a>
                <motion.a 
                  href="#winners" 
                  className="nav-link"
                  variants={itemVariants}
                  onClick={handleNavClick}
                >
                  Winners
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="nav-link"
                  variants={itemVariants}
                  onClick={handleNavClick}
                >
                  About
                </motion.a>

                <div className="mobile-social-links">
                  <motion.a 
                    href="https://t.me/EnterPrizeTokenBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                  >
                    <img src="/images/telegram.png" alt="Telegram" />
                  </motion.a>
                  <motion.a 
                    href="https://x.com/enterprizetoke"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                  >
                    <img src="/images/twitter.png" alt="X" />
                  </motion.a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>

      <MobileWalletModal
        isOpen={showMobileWalletModal}
        onClose={() => setShowMobileWalletModal(false)}
        onConnect={handleMobileConnect}
      />

      <WalletDialog
        isOpen={showWalletDialog}
        onClose={() => setShowWalletDialog(false)}
        walletAddress={account}
        onTelegramConnect={handleTelegramConnect}
        onSkipTelegram={() => setShowWalletDialog(false)}
      />

      <AnimatePresence>
        {error && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default HeaderV2; 