import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css'; // ניצור קובץ CSS לרכיב זה

const steps = [
  {
    icon: '💎',
    title: 'Buy Tokens',
    description: 'Purchase EnterPrize tokens through our secure platform'
  },
  {
    icon: '🎲',
    title: 'Enter Draws',
    description: 'Automatically enter all prize draws by holding tokens'
  },
  {
    icon: '🏆',
    title: 'Win Big',
    description: 'Win amazing prizes like cars, vacations, and luxury apartments'
  }
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div 
            className="step-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <div className="step-number">{index + 1}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks; 