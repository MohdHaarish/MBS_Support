import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Reviews({items}){
  const ref = useRef(null)
  const lastY = useRef(0)
  const [inView, setInView] = useState(false)
  const [visible, setVisible] = useState(true)

  // Observe whether the section is in viewport
  useEffect(()=>{
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=> setInView(en.isIntersecting))
    }, { threshold: 0.25 })
    obs.observe(el)
    return ()=> obs.disconnect()
  },[])

  // Track scroll direction; when section visible, show on scroll down, hide on scroll up
  useEffect(()=>{
    function onScroll(){
      const y = window.scrollY || window.pageYOffset
      const delta = y - (lastY.current || 0)
      lastY.current = y
      if (!inView){
        setVisible(false)
        return
      }
      // if user scrolls down -> make visible, scroll up -> hide
      if (delta > 0) setVisible(true)
      else if (delta < 0) setVisible(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  },[inView])

  return (
    <section className="section reviews" ref={ref} data-band="soft">
      <div className="section-inner">
        <h3 className="section-title">Client's Review</h3>
        <p className="lead">What our clients say about working with us.</p>
      </div>

      <div className="reviews-stage">
        <AnimatePresence>
          {visible && (
            <motion.div className="reviews-wrap" key="reviews" initial={{opacity:0,y:24,scale:0.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:18,scale:0.98}} transition={{duration:0.6}}>
              {(items||[]).map((r,i)=> (
                <motion.blockquote key={i} className="review-card" whileHover={{ y:-8, scale:1.02 }} transition={{type:'spring',stiffness:320}}>
                  <div className="review-meta">
                    <strong>{r.author}</strong>
                    <div className="rating">{'★'.repeat(r.rating || 5)}</div>
                  </div>
                  <p>{r.text}</p>
                </motion.blockquote>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
