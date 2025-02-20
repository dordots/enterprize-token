import React from 'react';
import { motion } from 'framer-motion';
import './ValueProposition.css'; // ניצור קובץ CSS לרכיב זה

const values = [
  {
    icon: '🔐',
    title: 'Full Transparency',
    description: 'Clear, fair, and verifiable lottery process through blockchain'
  },
  {
    icon: '💎',
    title: 'Real Value',
    description: 'Not just future investment - real winnings and immediate enjoyment'
  },
  {
    icon: '🎯',
    title: 'Your Opportunity',
    description: 'Join now and experience the thrill of winning big!'
  }
];

function ValueProposition() {
  return (
    <section className="value-proposition">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why EnterPrize Token? 🚀
      </motion.h2>
      <div className="values-container">
        {values.map((value, index) => (
          <motion.div 
            className="value-card"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ValueProposition; 