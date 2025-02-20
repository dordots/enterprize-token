import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>
      <div className="App">
        <Header />
        <HeroSection />
        <HowItWorks />
        <ValueProposition />
        <WhyChooseUs />
        <Testimonials />
        <Countdown />
        <Footer />
      </div>
    </>
  );
}

export default App;
