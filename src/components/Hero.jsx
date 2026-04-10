import { useEffect, useRef } from 'react'
import { useSectionTransition } from '../hooks/useSectionTransition'
import styles from './Hero.module.css'

export default function Hero() {
  const { ref, isVisible } = useSectionTransition({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className={`${styles.hero} ${isVisible ? 'section-visible' : ''}`}
      id="hero"
    >
      <div className={styles.gridLines} aria-hidden="true" />
      <ParticleCanvas />
      <ConfettiCanvas />

      {/* Floating ambient orbs */}
      <div className={styles.orbsContainer} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.content}>
        {/* Profile Image */}
        <div className={styles.profileWrapper}>
          <div className={styles.profileRing}></div>
          <div className={styles.profileRing2}></div>
          <div className={styles.profileImage}>
            <img src="/profile.png" alt="Tanvir Hossen Bappy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.dot} />
            Available
          </div>
          {/* Sparkles around profile */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`${styles.sparkle} ${styles['sparkle' + (i + 1)]}`} />
          ))}
        </div>

        {/* Name & Title */}
        <h1 className={styles.name}>
          Tanvir Hossen <span className={styles.accent}>Bappy</span>
        </h1>

        <p className={styles.role}>
          Full Stack Developer
          <span className={styles.cursor} aria-hidden="true" />
        </p>

        {/* Description */}
        <p className={styles.desc}>
            Crafting high-performance, scalable web applications.
          I turn complex problems into clean, elegant software — from API architecture
          to polished user interfaces.
        </p>

        {/* CTA Buttons */}
        <div className={styles.cta}>
          <a
            href="#contact"
            className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className={styles.btnSecondary}
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View work <span>↓</span>
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.social}>
          <a href="https://github.com/thbappy7706" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <GithubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tanvir-hossen-bappy/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <LinkedinIcon /> LinkedIn
          </a>
          <a href="https://ibssbd.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <BriefcaseIcon /> IBSS
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        scroll
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}

function UserIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    </svg>
  )
}

/* ── Floating Particle Canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 10000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.8 + 0.4,
          dx: (Math.random() - 0.5) * 0.28,
          dy: -(Math.random() * 0.45 + 0.08),
          baseOpacity: Math.random() * 0.45 + 0.1,
          phase: Math.random() * Math.PI * 2,
          freq: Math.random() * 0.015 + 0.008,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const now = performance.now() / 1000
      particles.forEach(p => {
        const twinkle = p.baseOpacity * (0.55 + 0.45 * Math.sin(now * p.freq * 10 + p.phase))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96,165,250,${twinkle})`
        ctx.shadowBlur = 6
        ctx.shadowColor = 'rgba(96,165,250,0.6)'
        ctx.fill()
        ctx.shadowBlur = 0
        p.x += p.dx
        p.y += p.dy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
        if (p.x < -4) p.x = canvas.width + 4
        if (p.x > canvas.width + 4) p.x = -4
      })
      animId = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    draw()
    return () => { cancelAnimationFrame(animId); observer.disconnect() }
  }, [])
  return <canvas ref={canvasRef} className={styles.particleCanvas} aria-hidden="true" />
}

/* ── Confetti Burst on Load ── */
function ConfettiCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    setSize()
    window.addEventListener('resize', setSize)

    const colors = ['#60a5fa','#34d399','#f472b6','#fbbf24','#a78bfa','#fb923c','#38bdf8','#c084fc','#f87171']
    let animId

    const particles = Array.from({ length: 140 }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 10 + 3
      return {
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 120,
        y: canvas.height * 0.27,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed - 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.28,
        gravity: 0.28,
        opacity: 1,
        w: Math.random() * 11 + 5,
        h: Math.random() * 5 + 3,
        shape: Math.random() > 0.38 ? 'rect' : 'circle',
      }
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      particles.forEach(p => {
        if (p.opacity <= 0) return
        alive = true
        p.dy += p.gravity; p.x += p.dx; p.y += p.dy
        p.dx *= 0.992; p.rotation += p.rotationSpeed; p.opacity -= 0.007
        ctx.save()
        ctx.translate(p.x, p.y); ctx.rotate(p.rotation)
        ctx.globalAlpha = Math.max(0, p.opacity); ctx.fillStyle = p.color
        if (p.shape === 'rect') ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        else { ctx.beginPath(); ctx.arc(0, 0, p.h, 0, Math.PI * 2); ctx.fill() }
        ctx.restore()
      })
      if (alive) animId = requestAnimationFrame(draw)
    }

    const timer = setTimeout(draw, 700)
    return () => {
      clearTimeout(timer); cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
    }
  }, [])
  return <canvas ref={canvasRef} className={styles.confettiCanvas} aria-hidden="true" />
}
