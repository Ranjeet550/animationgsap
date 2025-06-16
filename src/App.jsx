import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ClientLogos from './components/ClientLogos.jsx';
import Features from './components/Features.jsx';
import Interface from './components/Interface.jsx';
import LaunchPad from './components/LaunchPad.jsx';
import FloatingServices from './components/FloatingServices.jsx';
import FloatingTestimonials from './components/FloatingTestimonials.jsx';
import Awards from './components/Awards.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import EnhancedHorizontalScroll from './components/EnhancedHorizontalScroll.jsx';
import MouseWheelHandler from './components/MouseWheelHandler.jsx';

function App() {
  return (
    <div className="App">
      <MouseWheelHandler isActive={true} sensitivity={0.8} />
      <Header />

      {/* Hero Section - Normal scroll */}
      <Hero />
      <ClientLogos />

      {/* Horizontal Scroll Sections */}
      <EnhancedHorizontalScroll>
        <div className="horizontal-section">
          <Features />
        </div>

        <div className="horizontal-section">
          <Interface />
        </div>

        <div className="horizontal-section">
          <LaunchPad />
        </div>

        <div className="horizontal-section">
          <FloatingServices />
        </div>

        <div className="horizontal-section">
          <FloatingTestimonials />
        </div>

        <div className="horizontal-section">
          <Awards />
        </div>
      </EnhancedHorizontalScroll>

      {/* Final sections - Normal scroll */}
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
