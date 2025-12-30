import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechStack />
      <Services />
      <CaseStudies />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
