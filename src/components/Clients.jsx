import React from 'react'
import { motion } from 'framer-motion'

export default function Clients({logos}){
  return (
    <section className="section clients">
      <div className="section-inner">
        <h3 className="section-title">Our Clients</h3>
        <p className="lead">We've partnered with organizations across industries.</p>
      </div>

      <motion.div className="clients-strip" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        {(logos||[]).map((l,i)=> (
          <motion.div key={i} className="client-logo" whileHover={{scale:1.06}} transition={{type:'spring',stiffness:300}}>
            <img src={l.src} alt={l.alt || `client-${i}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
