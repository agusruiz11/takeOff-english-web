
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
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
        {/* Primary Meta Tags */}
        <title>Take Off English | Inglés práctico para adultos (trabajo, viajes y exámenes)</title>
        <meta name="title" content="Take Off English | Inglés práctico para adultos (trabajo, viajes y exámenes)" />
        <meta name="description" content="Aprende inglés práctico con objetivos reales: entrevistas de trabajo, viajes, exámenes PET/FCE. Clases online personalizadas. Primera entrevista GRATIS. Flexibilidad total." />
        <meta name="keywords" content="inglés para entrevistas laborales, inglés para viajes intensivo, curso FCE online, preparar PET online, inglés para adultos, clases de inglés online, take off english, inglés argentina" />
        <meta name="author" content="Take Off English" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://takeoffenglish.ar/" />
        <meta property="og:title" content="Take Off English | Inglés práctico para adultos" />
        <meta property="og:description" content="Aprende inglés práctico con objetivos reales: entrevistas de trabajo, viajes, exámenes PET/FCE. Clases online personalizadas. Primera entrevista GRATIS." />
        <meta property="og:site_name" content="Take Off English" />
        <meta property="og:locale" content="es_AR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://takeoffenglish.ar/" />
        <meta name="twitter:title" content="Take Off English | Inglés práctico para adultos" />
        <meta name="twitter:description" content="Aprende inglés práctico con objetivos reales: entrevistas de trabajo, viajes, exámenes PET/FCE. Clases online personalizadas. Primera entrevista GRATIS." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://takeoffenglish.ar/" />
        
        {/* Language */}
        <meta httpEquiv="content-language" content="es-AR" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <PromoBanner />
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
