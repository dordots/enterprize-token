import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import ValueProposition from '../components/ValueProposition';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

function V1Home() {
  const [showTelegramDialog, setShowTelegramDialog] = useState(false);

  return (
    <div className="App">
      <Header onWalletConnect={() => setShowTelegramDialog(true)} />
      <HeroSection showTelegramDialog={showTelegramDialog} setShowTelegramDialog={setShowTelegramDialog} />
      <HowItWorks />
      <ValueProposition />
      <WhyChooseUs />
      <Testimonials />
      <Countdown />
      <Footer />
    </div>
  );
}

export default V1Home; 