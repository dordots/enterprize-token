import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContractAddress.css';

function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "7dcupfrgnn6xmvjwa29wcwupsewnshtshjtzqxw1alpy"; // Replace with actual address

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contract" className="contract-address">
      <motion.div 
        className="contract-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <h2>Contract Address</h2>
          <p>Verify and interact with our smart contract</p>
        </div>

        <div className="address-container">
          <div className="address-box">
            <span className="address-label">Solana Contract Address:</span>
            <div className="address-value">
              <code>{contractAddress}</code>
              <button 
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <h3>Important Notice</h3>
          <div className="disclaimer-content">
            <p>
              $EPRZ is a utility token designed for the EnterPrize platform. By participating, you acknowledge that:
            </p>
            <ul>
              <li>This is not a security or investment product</li>
              <li>Token value may fluctuate based on market conditions</li>
              <li>Always verify the contract address before interacting</li>
              <li>Never share your private keys or seed phrases</li>
            </ul>
            <p>
              The EnterPrize team is not responsible for any losses incurred through trading or holding the token. 
              Always conduct your own research and never invest more than you can afford to lose.
            </p>
          </div>
        </div>

        <div className="verification-links">
          <a 
            href="https://solscan.io/token/7dcupfrgnn6xmvjwa29wcwupsewnshtshjtzqxw1alpy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="verify-button"
          >
            View on Solscan
          </a>
          <a 
            href="https://dexscreener.com/solana/7dcupfrgnn6xmvjwa29wcwupsewnshtshjtzqxw1alpy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="verify-button"
          >
            View on DEX Explorer
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContractAddress; 