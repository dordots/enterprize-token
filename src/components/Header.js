import React from 'react';
import './Header.css'; // ניצור קובץ CSS לרכיב זה

function Header() {
  return (
    <header className="header">
      <div className="logo">EnterPrize Token 🚀</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <button className="signup-button">Sign Up Now!</button>
    </header>
  );
}

export default Header; 