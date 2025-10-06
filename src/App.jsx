import React from 'react'
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
  return (
    <div className="page-root">
      <header className="nav">
        <div className="brand">
            <img src="/CroppedMBSLogo.png" alt="MBS Support" className="brand-logo" />
        </div>
        <nav className="links">
          <a>Product</a>
          <a>Features</a>
          <a>Pricing</a>
          <a className="cta">Get started</a>
        </nav>
      </header>

      <main className="hero">
  <HeroCarousel />
        <motion.div
          className="hero-inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="title" variants={item}>
            Design beautiful experiences
          </motion.h1>
          <motion.p className="subtitle" variants={item}>
            Craft delightful web interfaces with motion-first components built
            on Framer Motion and React.
          </motion.p>



          <motion.div className="hero-ctas" variants={item}>
            <button className="btn primary">Try it free</button>
            <button className="btn ghost">View examples</button>
          </motion.div>

          <motion.div className="feature-cards" variants={item}>
            <section className="card">
              <h3>Animate</h3>
              <p>Fluid, interruptible animations with an intuitive API.</p>
            </section>
            <section className="card">
              <h3>Compose</h3>
              <p>Reusable components and layout primitives for speed.</p>
            </section>
            <section className="card">
              <h3>Ship</h3>
              <p>Fast builds and production-ready performance.</p>
            </section>
          </motion.div>
        </motion.div>

        {/* removed right-side visual to allow full-width hero */}
      </main>

      {/* New site sections */}
      <AboutUs />

      <Services items={[
        { title: 'Consumer Recovery', desc: 'End-to-end consumer receivable management and legal support', icon: '👥' },
        { title: 'Commercial Recovery', desc: 'Tailored strategies for commercial portfolios and disputes', icon: '🏢' },
        { title: 'Portfolio Analytics', desc: 'Data-driven segmentation, scoring and recovery modeling', icon: '📊' },
        { title: 'Compliance & Consulting', desc: 'Regulatory alignment, audits and training for teams', icon: '🛡️' }
      ]} />

      <Clients logos={[
        { src: '/client1.png', alt: 'Client 1' },
        { src: '/client2.png', alt: 'Client 2' },
        { src: '/client3.png', alt: 'Client 3' },
        { src: '/client4.png', alt: 'Client 4' }
      ]} />

      <Reviews items={[
        { author: 'Acme Financial', rating: 5, text: 'MBS Support transformed our collections process — smart, compliant and humane.' },
        { author: 'GreenBank', rating: 5, text: 'Results-driven and professional. Highly recommended.' },
        { author: 'RetailCo', rating: 4, text: 'Their analytics and operational support lifted recoveries across channels.' }
      ]} />

      <Footer />
    </div>
  )
}
