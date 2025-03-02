import React from 'react';
import { motion } from 'framer-motion';
import './PrizesSection.css';

function PrizesSection() {
  const prizes = [
    {
      id: 1,
      title: "Grand Prize",
      amount: "$10,000",
      description: "Monthly grand prize draw for lucky token holders",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Weekly Rewards",
      amount: "$1,000",
      description: "Weekly draws for active community members",
      icon: "💰"
    },
    {
      id: 3,
      title: "Daily Prizes",
      amount: "$100",
      description: "Daily opportunities to win smaller prizes",
      icon: "🎁"
    },
    {
      id: 4,
      title: "Special Events",
      amount: "Variable",
      description: "Exclusive prizes during special events and holidays",
      icon: "🎉"
    }
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
    <section id="prizes" className="prizes-section">
      <motion.div 
        className="prizes-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-header">
          <h2>Available Prizes</h2>
          <p>Win amazing rewards by holding EnterPrize tokens</p>
        </div>

        <motion.div 
          className="prizes-grid"
          variants={containerVariants}
        >
          {prizes.map((prize) => (
            <motion.div
              key={prize.id}
              className="prize-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="prize-icon">{prize.icon}</div>
              <h3>{prize.title}</h3>
              <div className="prize-amount">{prize.amount}</div>
              <p>{prize.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="prizes-cta"
          variants={itemVariants}
        >
          <p>Don't miss out on your chance to win!</p>
          <a 
            href="https://t.me/EnterPrizeTokenBot" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Join Our Telegram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PrizesSection; 