import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css'; // ניצור קובץ CSS לרכיב זה

const testimonials = [
  {
    text: "Can't believe I won a Lambo! This platform is insane! 🏎️",
    author: "Alex P.",
    role: "Early Investor",
    avatar: "🤑"
  },
  {
    text: "Most transparent crypto project I've ever seen. Love it! 💎",
    author: "Sarah M.",
    role: "Crypto Enthusiast",
    avatar: "🚀"
  },
  {
    text: "Weekly draws keep me excited. Already won twice! 🎯",
    author: "Mike R.",
    role: "Token Holder",
    avatar: "🎮"
  }
];

function Testimonials() {
  return (
    <section className="testimonials" id="winners">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Winners Circle 🏆
      </motion.h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="avatar">{testimonial.avatar}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="author-info">
              <h4>{testimonial.author}</h4>
              <span>{testimonial.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials; 