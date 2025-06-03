import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Cta from "./components/Cta"; // asegurate que el archivo se llame Cta.tsx
import Footer from "./components/Footer";
import AssistantModal from './components/AssistantModal';
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Cta />
      <FAQ />
      <AssistantModal />
      <Footer />
      
    </>
  );
}

export default App;