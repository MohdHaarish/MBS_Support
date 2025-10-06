import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Reviews({items}){
  const ref = useRef(null)
  const rafRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [inView, setInView] = useState(false)

  // observe section in view
  useEffect(()=>{
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=> setInView(en.isIntersecting))
    }, { threshold: 0.2 })
    obs.observe(el)
    return ()=> obs.disconnect()
  },[])

  // compute visibleCount based on how far the user has scrolled into the section
  useEffect(()=>{
    const el = ref.current
    if (!el) return

    function update(){
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight || document.documentElement.clientHeight
      // progress: 0 when top of section is at bottom of viewport, 1 when bottom of section at top
      const progress = Math.min(Math.max((windowH - rect.top) / (windowH + rect.height), 0), 1)
      const count = Math.max(0, Math.min((items||[]).length, Math.floor(progress * ((items||[]).length) + 0.001)))
      setVisibleCount(count)
    }

    function onScroll(){
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    // if section not in view, collapse
    if (!inView){
      setVisibleCount(0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // initial update
    onScroll()

    return ()=>{
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  },[inView, items])

  const total = (items||[]).length

  return (
    <section className="section reviews" ref={ref}>
      <div className="section-inner">
        <h3 className="section-title">Client's Review</h3>
        <p className="lead">What our clients say about working with us.</p>
      </div>

      <div className="reviews-stack" aria-hidden={visibleCount===0}>
        {(items||[]).map((r,i)=>{
          const reversedIndex = total - 1 - i
          const isVisible = i < visibleCount
          // compute style values for stacking
          const y = isVisible ? i * 110 : i * 6
          const scale = isVisible ? 1 : 1 - reversedIndex * 0.03
          const z = i

          return (
            <motion.blockquote
              key={i}
              className={`review-card stack-card ${isVisible? 'in': 'out'}`}
              initial={{opacity:0, scale:0.9, y: i*6}}
              animate={{opacity: isVisible? 1 : 0, y, scale}}
              transition={{type:'spring',stiffness:260,damping:20}}
              style={{zIndex: z}}
            >
              <div className="review-meta">
                <strong>{r.author}</strong>
                <div className="rating">{'★'.repeat(r.rating || 5)}</div>
              </div>
              <p>{r.text}</p>
            </motion.blockquote>
          )
        })}
      </div>
    </section>
  )
}
