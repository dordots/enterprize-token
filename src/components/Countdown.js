import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Countdown.css'; // ניצור קובץ CSS לרכיב זה

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
        minutes: prev.seconds === 0 ? (prev.minutes > 0 ? prev.minutes - 1 : 59) : prev.minutes,
        hours: prev.minutes === 0 && prev.seconds === 0 ? (prev.hours > 0 ? prev.hours - 1 : 23) : prev.hours,
        days: prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0 ? prev.days - 1 : prev.days
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Next Mega Draw 🎰
      </motion.h2>
      <motion.div 
        className="countdown-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="countdown-timer">
          {Object.entries(timeLeft).map(([key, value], index) => (
            <motion.div 
              key={key}
              className="countdown-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="countdown-number">{value}</span>
              <span className="countdown-label">{key}</span>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="prize-preview"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>🏆 Grand Prize: Luxury Villa in Dubai 🌴</h3>
          <p>Worth $2,000,000 USD</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Countdown; 