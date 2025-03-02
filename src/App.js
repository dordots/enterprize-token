import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import V1Home from './pages/V1Home';
import V2Home from './pages/V2Home';
import SplashScreen from './components/SplashScreen';
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
      <Router>
        <AnimatePresence>
          {loading && <SplashScreen />}
        </AnimatePresence>
        <Routes>
          <Route path="/" element={<V1Home />} />
          <Route path="/v2" element={<V2Home />} />
        </Routes>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
