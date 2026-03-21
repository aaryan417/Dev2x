import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
