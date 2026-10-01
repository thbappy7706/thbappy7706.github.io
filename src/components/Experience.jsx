import { useState } from 'react'
import { useSectionTransition } from '../hooks/useSectionTransition'
import { SectionLabel } from './About'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'IBSS',
    fullName: 'Integrated Business Systems & Solution PVT Ltd',
    role: 'Backend Developer',
    period: 'Jan 2022 – Present',
    current: true,
    bullets: [
      'Built intelligent web applications using React, Inertia.js, and modern backend APIs.',
      'Enhanced web performance through optimized code, advanced caching, and efficient data handling for SPA experiences.',
      'Integrated AI-ready features, real-time data pipelines, and intelligent endpoints to power modern web applications.',
      'Connected third-party web services — payment gateways, analytics platforms, email services, and LLM-based tools via APIs.',
      'Delivered seamless SPA experiences and progressive web apps through modern frontend/backend collaboration.',
      'Designed scalable web architecture and optimized database systems for high-traffic production applications.',
    ],
    tags: ['React', 'Inertia.js', 'Vue.js', 'Web APIs', 'Data Pipelines', 'AI Tools', 'MySQL', 'Docker'],
  },
  {
    company: 'Hi-Tech Bangla',
    fullName: 'Hi-Tech Bangla Inc.',
    role: 'Laravel Developer (Project Basis)',
    period: 'Jan 2023 – Aug 2024',
    current: false,
    bullets: [
      'Built high-performance web APIs and GraphQL endpoints for modern web applications and third-party integrations.',
      'Optimized data queries and schema design for fast, scalable web application performance.',
      'Implemented complex business logic and intelligent data processing pipelines for web platforms.',
      'Maintained code quality with automated testing, code reviews, and modern CI/CD workflows.',
      'Developed AI-ready backend services and data endpoints for intelligent web features.',
    ],
    tags: ['Web APIs', 'GraphQL', 'PHP 8.x', 'MySQL', 'Docker', 'AI-Ready Data'],
  },
  {
    company: 'MCC',
    fullName: 'Multimedia Content and Communication Ltd',
    role: 'Junior Software Engineer',
    period: 'Nov 2020 – Dec 2021',
    current: false,
    bullets: [
      'Assisted in developing and maintaining web applications using Laravel and CodeIgniter.',
      'Participated in front-end development using HTML, CSS, and JavaScript frameworks.',
      'Supported the engineering team in implementing new features and improving existing functionality.',
      'Debugged issues, performed code refactoring, and maintained legacy applications.',
      'Learned and implemented security best practices to safeguard applications.',
    ],
    tags: ['Laravel', 'CodeIgniter', 'PHP', 'JavaScript', 'MySQL', 'Git'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const { ref, isVisible } = useSectionTransition({ threshold: 0.15 })

  return (
    <section className={`${styles.section} ${isVisible ? 'section-visible' : ''}`} id="experience" ref={ref}>
      <div className={styles.container}>
        <SectionLabel label="02" title="Experience" />

        <div className={styles.layout}>
          <ul className={styles.tabs}>
            {jobs.map((j, i) => (
              <li key={j.company}>
                <button
                  className={`${styles.tab} ${active === i ? styles.activeTab : ''}`}
                  onClick={() => setActive(i)}
                >
                  {j.company}
                  {j.current && <span className={styles.activeDot} />}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.panel}>
            {jobs.map((j, i) => (
              <div
                key={j.company}
                className={`${styles.jobContent} ${active === i ? styles.visible : ''}`}
                aria-hidden={active !== i}
              >
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.role}>{j.role}</h3>
                    <p className={styles.company}>{j.fullName}</p>
                  </div>
                  <span className={styles.period}>{j.period}</span>
                </div>

                <ul className={styles.bullets}>
                  {j.bullets.map((b, bi) => (
                    <li key={bi} className={styles.bullet}>
                      <span className={styles.bulletArrow}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {j.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
