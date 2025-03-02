import React from 'react';
import { motion } from 'framer-motion';
import './WinnersSection.css';

function WinnersSection() {
  // This section is prepared for future implementation
  const hasWinners = false; // This will be changed to true when we have winners

  return (
    <section id="winners" className="winners-section">
      <div className="winners-content">
        <div className="section-header">
          <h2>Recent Winners</h2>
          <p>Celebrating our lucky EnterPrize community members</p>
        </div>

        {hasWinners ? (
          <div className="winners-grid">
            {/* Winners content will be added here in the future */}
          </div>
        ) : (
          <motion.div 
            className="coming-soon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="coming-soon-content">
              <h3>Winners Coming Soon!</h3>
              <p>Be the first to win amazing prizes by joining our community today.</p>
              <div className="winners-cta">
                <a href="https://t.me/EnterPrizeTokenBot" className="cta-button">
                  Join Our Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default WinnersSection; 