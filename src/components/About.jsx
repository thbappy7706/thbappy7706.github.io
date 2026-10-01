import { useSectionTransition } from '../hooks/useSectionTransition'
import styles from './About.module.css'

const skills = [
  { cat: 'Web Development', items: ['React 19', 'Next.js', 'Vue.js', 'Inertia.js', 'Livewire', 'Alpine.js', 'TypeScript'] },
  { cat: 'Backend & APIs', items: ['Laravel', 'PHP 8.x', 'Node.js', 'RESTful APIs', 'GraphQL', 'WebSockets', 'MySQL'] },
  { cat: 'AI & Intelligence', items: ['LLM Integration', 'AI APIs', 'Data Pipelines', 'Real-time Analytics', 'FilamentPHP', 'Chart.js'] },
  { cat: 'Tools & DevOps', items: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Vite', 'Agile/Scrum'] },
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
              I'm a Full Stack Engineer based in Bangladesh passionate about the{' '}
              <span className={styles.highlight}>AI-powered web</span> — building intelligent applications
              that leverage modern web technologies, data pipelines, and emerging AI capabilities. Currently at{' '}
              <a href="https://ibss.com.bd" target="_blank" rel="noreferrer" className={styles.link}>
                IBSS
              </a>{' '}
              where I architect scalable web systems that power real business operations.
            </p>
            <p>
              My focus is on the intersection of <span className={styles.highlight}>web development and intelligent systems</span>.
              I build performant, data-driven applications with modern frameworks — React, Inertia.js, Laravel —
              and integrate AI-ready features like intelligent APIs, real-time data, and LLM-powered tools.
            </p>
            <p>
              When I'm not shipping code, I'm exploring web AI integrations, building developer tools,
              or contributing to open-source. I hold a BSc in Computer Science and Engineering from
              Daffodil International University.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4.5+</span>
                <span className={styles.statLabel}>Years experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>15+</span>
                <span className={styles.statLabel}>Web projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>AI-ready tools</span>
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
