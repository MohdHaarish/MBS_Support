import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function AboutUs(){
  return (
    <motion.section className="section about-us" initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}} variants={container}>
      <motion.div className="section-inner" variants={item}>
        <h3 className="section-title">About Us</h3>
        <p className="lead">We are MBS Support — a partner for robust, compliant, and people-first debt recovery solutions.</p>
      </motion.div>

      <motion.div className="about-grid" variants={item}>
        <motion.article className="about-card" whileHover={{ y: -6, scale: 1.02 }} transition={{type:'spring',stiffness:300}}>
          <h4>Mission</h4>
          <p>To recover value for our clients while preserving dignity for consumers through transparent, ethical practices.</p>
        </motion.article>

        <motion.article className="about-card" whileHover={{ y: -6, scale: 1.02 }} transition={{type:'spring',stiffness:300}}>
          <h4>Vision</h4>
          <p>To be the most trusted national partner for recovery services — combining technology, compliance and human care.</p>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}
