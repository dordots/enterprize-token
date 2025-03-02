import React from 'react';
import { motion } from 'framer-motion';
import './WhyEnterprize.css';

function WhyEnterprize() {
  const advantages = [
    {
      id: 1,
      title: "Transparent Rewards",
      description: "All prize distributions are publicly verifiable on the blockchain",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Instant Notifications",
      description: "Get immediate alerts when you win through our Telegram bot",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Fair Distribution",
      description: "Equal opportunity for all token holders to win prizes",
      icon: "⚖️"
    },
    {
      id: 4,
      title: "Community Driven",
      description: "Active community participation in decision making",
      icon: "👥"
    },
    {
      id: 5,
      title: "Regular Prizes",
      description: "Frequent prize draws for continuous engagement",
      icon: "🎁"
    },
    {
      id: 6,
      title: "Secure Platform",
      description: "Built on Solana for fast and secure transactions",
      icon: "🔒"
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
    <section id="why-enterprize" className="why-enterprize">
      <motion.div 
        className="why-enterprize-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-header">
          <h2>Why Choose EnterPrize?</h2>
          <p>Discover the unique advantages of our platform</p>
        </div>

        <motion.div 
          className="advantages-grid"
          variants={containerVariants}
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.id}
              className="advantage-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="platform-features"
          variants={itemVariants}
        >
          <div className="feature-highlight">
            <h3>The EnterPrize Advantage</h3>
            <ul>
              <li>✨ Automated prize distribution system</li>
              <li>🌐 Global accessibility</li>
              <li>💫 Innovative reward mechanisms</li>
              <li>🤝 Strong community focus</li>
              <li>🔄 Sustainable tokenomics</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhyEnterprize; 