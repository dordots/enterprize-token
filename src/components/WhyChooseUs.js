import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const features = [
  {
    icon: '👑',
    title: 'Luxury Service',
    description: 'Premium project management with prestigious brand partnerships'
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'Built on blockchain technology for maximum transparency and security'
  },
  {
    icon: '🌟',
    title: 'Exclusive Rewards',
    description: 'Win amazing prizes that most can only dream of'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Leading the future of crypto-powered reward systems'
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us" id="about">
      <motion.div 
        className="background-glow"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      />
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The EnterPrize Advantage
      </motion.h2>
      <div className="features-carousel">
        {features.map((feature, index) => (
          <motion.div 
            className="feature-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs; 