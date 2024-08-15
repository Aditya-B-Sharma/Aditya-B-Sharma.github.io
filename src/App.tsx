import React from 'react';
import Header from './components/Header';
import Hero from './components/landing/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App:React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
