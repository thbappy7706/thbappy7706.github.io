import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
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
      'Developed and maintained scalable web applications using Laravel and Vue.js.',
      'Enhanced performance through optimized code, queries, caching, and server-side processing.',
      'Improved application features and workflows to increase user engagement and interaction.',
      'Integrated third-party services and APIs, including payment gateways, email services, and analytics.',
      'Delivered seamless user experiences through close collaboration with front-end and DevOps teams.',
      'Continuously analyzed and optimized database queries and backend logic to improve efficiency.',
    ],
    tags: ['Laravel', 'Vue.js', 'React.js', 'Alpine.js', 'FilamentPHP', 'MySQL', 'Docker'],
  },
  {
    company: 'Hi-Tech Bangla',
    fullName: 'Hi-Tech Bangla Inc.',
    role: 'Laravel Developer (Project Basis)',
    period: 'Jan 2023 – Aug 2024',
    current: false,
    bullets: [
      'Built secure, high-performance RESTful APIs for system integration and third-party services.',
      'Optimized database queries and schema design to improve performance, speed, and scalability.',
      'Implemented complex business logic aligned with client requirements and project specifications.',
      'Ensured code quality with automated testing, code reviews, and CI/CD practices.',
      'Monitored and optimized backend processes to reduce latency and increase system efficiency.',
    ],
    tags: ['Laravel', 'PHP', 'RESTful APIs', 'MySQL', 'Docker', 'Unit Testing'],
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
  const { ref, isVisible } = useScrollFade({ threshold: 0.15 })

  return (
    <section className={styles.section} id="experience" ref={ref}>
      <div className={`${styles.container} fade-in-section ${isVisible ? 'is-visible' : ''}`}>
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
