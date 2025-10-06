import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'corp',
    src: '/CORPORATE DEBT COLLECTION.jpg',
    title: 'Corporate Debt Recovery',
    subtitle: 'Strategic solutions for corporate receivables'
  },
  {
    id: 'cons',
    src: '/CONSUMER DEBT COLLECTION.jpg',
    title: 'Consumer Debt Collection',
    subtitle: 'People-first recovery with compliance in mind'
  },
  {
    id: 'comm',
    src: '/COMMERCIAL DEBT COLLECTION.jpg',
    title: 'Commercial Debt Solutions',
    subtitle: 'Tailored approaches for commercial portfolios'
  }
]

export default function HeroCarousel(){
  const [index, setIndex] = useState(0)
  // offset.x / offset.y for translate, offset.rx/ry for rotation, offset.z for perceived depth
  const [offset, setOffset] = useState({ x: 0, y: 0, rx: 0, ry: 0, z: -60 })
  const wrapRef = useRef(null)
  const timeoutRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0, rx: 0, ry: 0, z: -60 })
  const rafRef = useRef(null)

  useEffect(()=>{
    // autoplay
    timeoutRef.current = setInterval(()=>{
      setIndex(i=> (i+1) % slides.length)
    }, 6000)
    return ()=> clearInterval(timeoutRef.current)
  },[])

  useEffect(()=>{
    const el = wrapRef.current
    if (!el) return

    const amplitudeX = 18 // px max translation X
    const amplitudeY = 12 // px max translation Y
    const rotMax = 6 // degrees
    const depth = -70 // translateZ amount (more negative appears further)

    function onMove(e) {
      const rect = el.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width // 0..1
      const ny = (e.clientY - rect.top) / rect.height // 0..1
      // translate
      targetRef.current.x = (nx - 0.5) * (amplitudeX * 2)
      targetRef.current.y = (ny - 0.5) * (amplitudeY * 2)
      // rotation: invert so moving right rotates left slightly for parallax look
      targetRef.current.ry = (nx - 0.5) * -rotMax
      targetRef.current.rx = (ny - 0.5) * rotMax
      targetRef.current.z = depth
    }

    function onLeave() {
      targetRef.current = { x: 0, y: 0, rx: 0, ry: 0, z: depth }
    }

    // smooth RAF loop to lerp toward targetRef.current (3D)
    function rafLoop() {
      const cur = offset
      const tgt = targetRef.current || { x: 0, y: 0, rx: 0, ry: 0, z: depth }
      const lerp = 0.06 // smoothing
      const next = {
        x: cur.x + (tgt.x - cur.x) * lerp,
        y: cur.y + (tgt.y - cur.y) * lerp,
        rx: cur.rx + (tgt.rx - cur.rx) * lerp,
        ry: cur.ry + (tgt.ry - cur.ry) * lerp,
        z: cur.z + (tgt.z - cur.z) * lerp
      }
      if (Math.abs(next.x - cur.x) > 0.01 || Math.abs(next.y - cur.y) > 0.01 || Math.abs(next.rx - cur.rx) > 0.01) {
        setOffset(next)
      }
      rafRef.current = requestAnimationFrame(rafLoop)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(rafLoop)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  },[offset])

  return (
    <div className="hero-carousel" ref={wrapRef}>
      <AnimatePresence initial={false} mode="wait">
        {slides.map((s, i)=> i === index && (
          <motion.div key={s.id} className="hero-slide" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.div className="hero-bg-wrap" style={{transformStyle:'preserve-3d', perspective: 900}}>
              <motion.img
                src={s.src}
                alt={s.title}
                className="hero-bg"
                // keep base centering (-50%,-50%) and add px offsets
                style={{transform:`translate3d(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px), ${offset.z}px) rotateX(${offset.rx}deg) rotateY(${offset.ry}deg)`}}
                draggable={false}
              />
            </motion.div>

            <motion.div className="hero-copy" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
              <div className="hero-lead">Trusted recovery partners across industries</div>
              <h2>{s.title}</h2>
              <p>{s.subtitle}</p>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="hero-dots">
        {slides.map((_,i)=> (
          <button key={i} className={i===index? 'dot active': 'dot'} onClick={()=> setIndex(i)} aria-label={`Go to slide ${i+1}`} />
        ))}
      </div>
    </div>
  )
}
