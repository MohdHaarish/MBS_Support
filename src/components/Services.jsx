import React from 'react'
import { motion } from 'framer-motion'

const grid = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

export default function Services({items}){
  // items = [{title,desc,icon}] - keep generic
  return (
    <motion.section className="section services" initial="hidden" whileInView="show" viewport={{once:true, amount:0.2}}>
      <motion.div className="section-inner" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
        <h3 className="section-title">Services</h3>
        <p className="lead">We offer flexible services tailored to your portfolio and business needs. Explore below.</p>
      </motion.div>

      <motion.div className="services-grid" variants={grid} initial="hidden" whileInView="show" viewport={{once:true, amount:0.15}}>
        {(items || []).map((s, i) => (
          <motion.article key={i} className="service-card" variants={card} whileHover={{ y:-8, boxShadow:'0 12px 40px rgba(2,6,23,0.6)' }} transition={{type:'spring',stiffness:280}}>
            <div className="service-icon">{s.icon || '⚙️'}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}
