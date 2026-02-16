import { useSectionTransition } from '../hooks/useSectionTransition'
import styles from './About.module.css'

const skills = [
  { cat: 'Backend', items: ['Laravel', 'PHP', 'RESTful APIs', 'MySQL', 'PostgreSQL', 'Query Optimization'] },
  { cat: 'Frontend', items: ['React', 'Vue.js', 'Alpine.js', 'Inertia.js', 'Livewire', 'Tailwind CSS'] },
  { cat: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub', 'CI/CD', 'Agile/Scrum', 'JetBrains'] },
]

export default function About() {
  const { ref, isVisible } = useSectionTransition({ threshold: 0.15 })

  return (
    <section className={`${styles.section} ${isVisible ? 'section-visible' : ''}`} id="about" ref={ref}>
      <div className={styles.container}>
        <SectionLabel label="01" title="About" />

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              I'm a Full Stack Developer based in Bangladesh with{' '}
              <span className={styles.highlight}>4.5+ years</span> of hands-on experience
              building production-grade web applications. Currently, I'm at{' '}
              <a href="https://ibss.com.bd" target="_blank" rel="noreferrer" className={styles.link}>
                IBSS
              </a>{' '}
              as a Backend Developer, where I architect and maintain scalable systems
              that power real business operations.
            </p>
            <p>
              My focus is on writing clean, maintainable code and building systems that
              perform under pressure. I care deeply about{' '}
              <span className={styles.highlight}>system architecture</span>,{' '}
              database optimization, and the craftsmanship of software — the kind that's
              easy to reason about three years later.
            </p>
            <p>
              When I'm not writing code, I'm exploring new frameworks, contributing to
              open-source projects, or studying software design patterns. I hold a BSc in
              Computer Science and Engineering from Daffodil International University.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4.5+</span>
                <span className={styles.statLabel}>Years experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>12+</span>
                <span className={styles.statLabel}>Projects shipped</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Companies</span>
              </div>
            </div>
          </div>

          <div className={styles.skillsCol}>
            {skills.map(({ cat, items }) => (
              <div key={cat} className={styles.skillGroup}>
                <h4 className={styles.skillCat}>{cat}</h4>
                <ul className={styles.skillList}>
                  {items.map(s => (
                    <li key={s} className={styles.skillItem}>
                      <span className={styles.skillArrow}>▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ label, title }) {
  return (
    <div className={styles.sectionLabel}>
      <span className={styles.labelNum}>{label}.</span>
      <h2 className={styles.labelTitle}>{title}</h2>
      <span className={styles.labelLine} />
    </div>
  )
}
