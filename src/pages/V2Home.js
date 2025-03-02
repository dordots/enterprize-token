import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeaderV2 from '../components/v2/HeaderV2';
import HeroSectionV2 from '../components/v2/HeroSectionV2';
import PrizesSection from '../components/v2/PrizesSection';
import WinnersSection from '../components/v2/WinnersSection';
import HowItWorksV2 from '../components/v2/HowItWorksV2';
import WhyEnterprize from '../components/v2/WhyEnterprize';
import Tokenomics from '../components/v2/Tokenomics';
import ContractAddress from '../components/v2/ContractAddress';
import FAQ from '../components/v2/FAQ';
import FooterV2 from '../components/v2/FooterV2';

function V2Home() {
  const [showTelegramDialog, setShowTelegramDialog] = useState(false);

  return (
    <motion.div 
      className="App v2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderV2 onWalletConnect={() => setShowTelegramDialog(true)} />
      <HeroSectionV2 
        showTelegramDialog={showTelegramDialog} 
        setShowTelegramDialog={setShowTelegramDialog} 
      />
      <PrizesSection />
      <WinnersSection />
      <HowItWorksV2 />
      <WhyEnterprize />
      <Tokenomics />
      <ContractAddress />
      <FAQ />
      <FooterV2 />
    </motion.div>
  );
}

export default V2Home; 