import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is EnterPrize Token?",
      answer: "EnterPrize Token ($EPRZ) is a Solana-based utility token that powers our innovative prize distribution platform. It combines the excitement of winning prizes with the benefits of blockchain technology."
    },
    {
      question: "How do I participate in prize draws?",
      answer: "To participate, you need to: 1) Hold EnterPrize tokens in your wallet, 2) Connect your wallet to our platform, and 3) Join our Telegram channel to receive winner announcements."
    },
    {
      question: "How are winners selected?",
      answer: "Winners are selected through a transparent and verifiable random selection process on the blockchain. The more tokens you hold, the higher your chances of winning."
    },
    {
      question: "When are prizes distributed?",
      answer: "Prize distributions occur regularly according to our schedule. Winners are announced on our Telegram channel, and prizes are automatically sent to the winner's wallet."
    },
    {
      question: "Is my investment safe?",
      answer: "While we implement strong security measures, cryptocurrency investments always carry risks. Never invest more than you can afford to lose, and always do your own research."
    },
    {
      question: "How do I claim my prizes?",
      answer: "Prizes are automatically sent to your connected wallet. Make sure to join our Telegram channel to receive notifications when you win."
    },
    {
      question: "Where can I buy EnterPrize tokens?",
      answer: "EnterPrize tokens can be purchased on supported Solana DEXes. Always verify the contract address before making any transactions."
    },
    {
      question: "How can I contact support?",
      answer: "For support, join our Telegram channel where our community managers are available to help. You can also email us at support@enterprize.token"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <motion.div 
        className="faq-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about EnterPrize</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="faq-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>Still have questions?</p>
          <a 
            href="https://t.me/EnterPrizeTokenBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-button"
          >
            Contact Us on Telegram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FAQ; 