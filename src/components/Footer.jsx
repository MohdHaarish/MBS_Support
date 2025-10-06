import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <motion.footer className="site-footer" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/CroppedMBSLogo.png" alt="MBS Support" className="brand-logo" />
          <p className="muted">Operationally excellent. Ethically led.</p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a>CEO: Azhruddin Mewati</a>
          <a>CIN Number: U74999HR2022PTC104047</a>
          <a>Address: 408-409, 3RD FLOOR, AKD TOWER SECTOR-14 GURGAON GURGAON HR 122001 IN HARYANA HARYANA india 122001</a>
          <a>Phone: +91-8799747332</a>
          <a>Email: azhruddin.m@mbssupportprivatelimited.in</a>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <a>Personal Loan Recovery</a>
          <a>Debt Recovery Agency</a>
          <a>Money Recovery</a>
          <a>Recovery overseas debts</a>
        </div>

        <div className="footer-newsletter">
          <h4>Stay updated</h4>
          <form onSubmit={(e)=> e.preventDefault()} className="newsletter-form">
            <input placeholder="Email address" aria-label="Email address" />
            <button className="btn primary small">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} MBS Support — All rights reserved</div>
    </motion.footer>
  )
}
