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
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import './App.css';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
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
    </Web3ReactProvider>
  );
}

export default App;
