
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Programs from '@/components/Programs';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Take Off English | Inglés práctico para adultos (trabajo, viajes y exámenes)</title>
        <meta name="description" content="Aprende inglés práctico con objetivos reales: entrevistas de trabajo, viajes, exámenes PET/FCE. Clases online personalizadas. Primera entrevista GRATIS. Flexibilidad total." />
        <meta name="keywords" content="inglés para entrevistas laborales, inglés para viajes intensivo, curso FCE online, preparar PET online, inglés para adultos, clases de inglés online" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Programs />
          <About />
          <HowItWorks />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
