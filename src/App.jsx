import React, { useState } from 'react'
import { motion } from 'framer-motion'
import HeroCarousel from './components/HeroCarousel'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Clients from './components/Clients'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
  <div id="top" className="page-root">
      <header className="nav">
        <div className="brand">
            <a href="#top" className="brand-link"><img src="/CroppedMBSLogo.png" alt="MBS Support" className="brand-logo" /></a>
        </div>

        <button className="nav-toggle" aria-expanded={navOpen} aria-label="Toggle navigation" onClick={() => setNavOpen(v => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
        </button>

        <nav className={`links ${navOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
          <a href="#clients" onClick={() => setNavOpen(false)}>Clients</a>
        </nav>
      </header>

      <main className="hero">
  <HeroCarousel />
       
        {/* removed right-side visual to allow full-width hero */}
      </main>

      {/* New site sections */}
      <AboutUs />

      <Services items={[
        { title: 'Personal Loan Recovery', desc: 'Corporate commercial business-to-business payment collection services with advanced solutions and support.', icon: '/Personal loan Recovery.jpg' },
        { title: 'Debt Recovery Agency', desc: "Corporate debt restructuring refers to the reorganization of a distressed company's outstanding obligations to its creditors.", icon: '/CORPORATE DEBT COLLECTION.jpg' },
        { title: 'Money Recovery', desc: "We keep client details confidential, We don't Share the case details Even in Critical Times, or any Mishap Happens In money recovery.", icon: '/Money Recovery.jpg' },
        { title: 'Recovery overseas debts', desc: "They have consistently rated us highly because of our focus on simplifying legal requirements and providing regular updates.", icon: '/Recovery overseas debts.jpg' },
        { title: 'Bad Debt Recovery Services', desc: "Relieve stress of chasing debtors Save time; let us handle the collections process of bad debt recovery in Delhi.", icon: '/Bad Debt Recovery Services.jpg' },
        { title: 'Commercial Debt Collection', desc: "Commercial Debt Recovery represents the collection of delinquent amounts from a debtor on behalf of your business (creditor).", icon: '/COMMERCIAL DEBT COLLECTION.jpg' },
        { title: 'Consumer Debt Collection', desc: "Consumer Debt Collection is the recovery of debts owed by an individual to a business – often referred to as B2C debt collection.", icon: '/CONSUMER DEBT COLLECTION.jpg' }
      ]} />

      <Clients logos={[
        { src: '/bajaj_amc_1.png', alt: 'Bajaj Finance' },
        { src: '/kissht_logo.png', alt: 'Kissht Ring' },
        { src: '/Nira.jpg', alt: 'Nira Finance (Upcoming)' },
      ]} />

      <Reviews items={[
        { author: 'Bajaj Finserv', rating: 5, text: 'MBS Support transformed our collections process — smart, compliant and humane.' },
        { author: 'Kissht Ring', rating: 5, text: 'Results-driven and professional. Highly recommended.' },
        { author: 'Bajaj Finserv', rating: 4, text: 'Their analytics and operational support lifted recoveries across channels.' }
      ]} />

      <Footer />
    </div>
  )
}
