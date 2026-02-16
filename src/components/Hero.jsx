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

      <div className={styles.content}>
        {/* Profile Image */}
        <div className={styles.profileWrapper}>
          <div className={styles.profileRing}></div>
          <div className={styles.profileImage}>
            <img src="/profile.png" alt="Tanvir Hossen Bappy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.dot} />
            Available
          </div>
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
          <a href="https://linkedin.com/in/tanvirhossenbappy" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <LinkedinIcon /> LinkedIn
          </a>
          <a href="https://ibss.com.bd" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <BriefcaseIcon /> IBSS
          </a>
        </div>
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
