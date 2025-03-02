import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorksV2.css';

function HowItWorksV2() {
  const steps = [
    {
      id: 1,
      title: "Connect Your Wallet",
      description: "Link your crypto wallet to start participating in our rewards program.",
      icon: "🔗",
    },
    {
      id: 2,
      title: "Join Our Telegram",
      description: "Join our Telegram community to receive instant notifications about winners and stay updated.",
      icon: "📱",
      isHighlighted: true,
    },
    {
      id: 3,
      title: "Hold Tokens",
      description: "Hold EnterPrize tokens in your wallet to be eligible for prizes.",
      icon: "💎",
    },
    {
      id: 4,
      title: "Win Prizes",
      description: "Get notified through Telegram when you win and claim your prizes!",
      icon: "🏆",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className="how-it-works-v2">
      <motion.div 
        className="how-it-works-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Follow these simple steps to start winning</p>
        </div>

        <div className="steps-container">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className={`step-card ${step.isHighlighted ? 'highlighted' : ''}`}
              variants={itemVariants}
            >
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.isHighlighted && (
                <div className="telegram-emphasis">
                  <p>⚠️ Important: Winners are announced on Telegram!</p>
                  <a 
                    href="https://t.me/EnterPrizeTokenBot" 
                    className="telegram-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Telegram Now
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="telegram-note"
          variants={itemVariants}
        >
          <p>Don't miss out on your prizes! Make sure to join our Telegram channel to receive winner announcements.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HowItWorksV2; 