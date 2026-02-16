import { useState } from 'react'
import { useStaggeredFade } from '../hooks/useScrollFade'
import { useSectionTransition } from '../hooks/useSectionTransition'
import { SectionLabel } from './About'
import styles from './Projects.module.css'

const featured = [
  {
    title: 'Built to Last',
    desc: 'Health analytics platform for audits and revenue management. Features real-time dashboards, reporting tools, and complex analytics for healthcare providers to streamline operations.',
    tags: ['Laravel', 'Livewire', 'Alpine.js', 'PHP'],
    category: 'Healthcare',
  },
  {
    title: 'Game Management Platform',
    desc: 'Full-featured platform to manage game components, tools, and monitor statistics. Includes admin controls, real-time data tracking, and comprehensive reporting dashboards.',
    tags: ['Laravel', 'PHP'],
    category: 'Gaming',
  },
  {
    title: 'Hardware E-Commerce',
    desc: 'End-to-end e-commerce platform for server and hardware sales. Built with React and Inertia.js for a modern SPA experience with a robust Laravel backend.',
    tags: ['React', 'Inertia.js', 'Laravel', 'PHP'],
    category: 'E-Commerce',
  },
  {
    title: 'CWA Billing System',
    desc: 'Streamlines billing, invoicing, and client management for CWA International. Automates invoicing workflows, payment tracking, and client communication.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Finance',
  },
  {
    title: 'BD Police Helpline Admin',
    desc: 'Admin panel for managing incidents, calls, and operations for BD Police Helpline. Handles real-time incident tracking, operator assignment, and operational reporting.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Gov / Public Safety',
  },
  {
    title: 'Analytics Visualization Panel',
    desc: 'Data visualization platform with interactive dashboards, real-time tracking, and dynamic reporting. Integrates Chart.js for rendering complex datasets.',
    tags: ['Laravel', 'Vue.js', 'Chart.js'],
    category: 'Analytics',
  },
  {
    title: 'Menstrual Health Platform API',
    desc: 'Backend API and admin panel for managing menstrual health programs with secure role-based access, detailed report generation, and program analytics.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Health',
  },
  {
    title: 'Clinical Reference API',
    desc: 'RESTful API for a clinical reference app offering real-time access to medical data, clinical guidelines, and treatment protocols for healthcare professionals.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Health',
  },
]

const sidehustles = [
  {
    title: 'RBAC Boilerplate',
    desc: 'Robust Role-Based Access Control boilerplate integrating frontend and backend with user authentication, dynamic roles & permission management, and responsive UI with Dark/Light Mode.',
    tags: ['Laravel', 'Vue.js', 'Inertia.js'],
    href: 'https://github.com/thbappy7706',
  },
  {
    title: 'Islamic Platform Frontend',
    desc: 'Frontend for an all-in-one Islamic platform with prayer times, Quran recitations, Zakat calculators, and daily Duas.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/thbappy7706',
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? featured : featured.slice(0, 6)
  const { ref: staggerRef, isVisible: staggerVisible, getDelay } = useStaggeredFade(displayed.length, { delay: 80 })
  const { ref: sectionRef, isVisible: sectionVisible } = useSectionTransition({ threshold: 0.15 })

  // Combine refs
  const setRefs = (element) => {
    staggerRef.current = element
    sectionRef.current = element
  }

  return (
    <section className={`${styles.section} ${sectionVisible ? 'section-visible' : ''}`} id="projects" ref={setRefs}>
      <div className={styles.container}>
        <SectionLabel label="03" title="Projects" />

        <div className={styles.grid}>
          {displayed.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              isVisible={staggerVisible}
              delay={getDelay(i)}
            />
          ))}
        </div>

        {!showAll && featured.length > 6 && (
          <div className={styles.showMore}>
            <button className={styles.showMoreBtn} onClick={() => setShowAll(true)}>
              Show more ({featured.length - 6} more)
            </button>
          </div>
        )}

        {/* Side Hustles */}
        <div className={styles.sideSection}>
          <h3 className={styles.sideTitle}>
            <span className={styles.sideNum}>◆</span>
            Side Projects
          </h3>
          <div className={styles.sideGrid}>
            {sidehustles.map(p => (
              <SideCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, isVisible, delay }) {
  return (
    <article
      className={`${styles.card} fade-in-up ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.category}>{project.category}</span>
        <FolderIcon />
      </div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.desc}</p>
      <div className={styles.cardFooter}>
        <div className={styles.cardTags}>
          {project.tags.map(t => (
            <span key={t} className={styles.cardTag}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function SideCard({ project }) {
  return (
    <article className={styles.sideCard}>
      <div className={styles.sideCardTop}>
        <TerminalIcon />
        <a href={project.href} target="_blank" rel="noreferrer" className={styles.sideCardLink}>
          <ExternalIcon />
        </a>
      </div>
      <h4 className={styles.sideCardTitle}>{project.title}</h4>
      <p className={styles.sideCardDesc}>{project.desc}</p>
      <div className={styles.cardTags}>
        {project.tags.map(t => (
          <span key={t} className={styles.cardTag}>{t}</span>
        ))}
      </div>
    </article>
  )
}

function FolderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
      <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}
