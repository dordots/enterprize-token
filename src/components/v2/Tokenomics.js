import React from 'react';
import { motion } from 'framer-motion';
import './Tokenomics.css';

function Tokenomics() {
  const tokenDistribution = [
    {
      id: 1,
      title: "Prize Pool",
      percentage: "40%",
      description: "Dedicated to community rewards and prizes",
      color: "#FF6B00"
    },
    {
      id: 2,
      title: "Liquidity",
      percentage: "30%",
      description: "Ensuring stable trading and market depth",
      color: "#FF8E3C"
    },
    {
      id: 3,
      title: "Development",
      percentage: "15%",
      description: "Platform development and technical improvements",
      color: "#FFA764"
    },
    {
      id: 4,
      title: "Marketing",
      percentage: "10%",
      description: "Community growth and marketing initiatives",
      color: "#FFC08C"
    },
    {
      id: 5,
      title: "Team",
      percentage: "5%",
      description: "Team allocation with vesting schedule",
      color: "#FFD8B4"
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="tokenomics" className="tokenomics">
      <motion.div 
        className="tokenomics-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="section-header">
          <h2>Tokenomics</h2>
          <p>Transparent and sustainable token distribution</p>
        </div>

        <div className="tokenomics-grid">
          <div className="distribution-chart">
            <div className="chart-container">
              {tokenDistribution.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="chart-segment"
                  style={{
                    background: item.color,
                    height: `${item.percentage}`,
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>

          <motion.div 
            className="distribution-details"
            variants={containerVariants}
          >
            {tokenDistribution.map((item) => (
              <motion.div
                key={item.id}
                className="distribution-item"
                variants={itemVariants}
              >
                <div className="item-header">
                  <div 
                    className="color-indicator"
                    style={{ background: item.color }}
                  />
                  <h3>{item.title}</h3>
                  <span className="percentage">{item.percentage}</span>
                </div>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="tokenomics-features"
          variants={itemVariants}
        >
          <h3>Token Features</h3>
          <ul>
            <li>🔒 Locked liquidity for 1 year</li>
            <li>⏳ Team tokens vested over 12 months</li>
            <li>💰 Auto-prize pool allocation</li>
            <li>🛡️ Audited smart contract</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Tokenomics; 