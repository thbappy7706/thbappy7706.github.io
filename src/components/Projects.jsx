import { useState } from 'react'
import { useStaggeredFade } from '../hooks/useScrollFade'
import { useSectionTransition } from '../hooks/useSectionTransition'
import { SectionLabel } from './About'
import styles from './Projects.module.css'

const featured = [
  {
    title: 'Comprohealth Analytics Platform',
    desc: 'Health analytics platform for audits and revenue management. Features real-time dashboards, reporting tools, and complex analytics for healthcare providers to streamline operations.',
    tags: ['Laravel', 'Livewire', 'Alpine.js', 'PHP'],
    category: 'Healthcare',
    href: 'https://www.comprohealth.com/',
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
    href: 'https://www.ibssbd.com/',
  },
  {
    title: 'CWA Billing System',
    desc: 'Streamlines billing, invoicing, and client management for CWA International. Automates invoicing workflows, payment tracking, and client communication.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Finance',
    href: 'https://www.cwa.international/',
  },
  {
    title: 'Nesco Complain Management System',
    desc: 'Comprehensive complaint management system for NESCO (Northern Electricity Supply Company). Enables citizens to submit, track, and resolve electricity-related complaints efficiently.',
    tags: ['Laravel', 'Livewire'],
    category: 'Gov / Public Utility',
    href: 'https://complain.nesco.gov.bd/',
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
    href: 'https://www.wateraid.org/bd/publications/menstrual-health-and-hygiene-journey-of-wateraid-bangladesh',
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
    title: 'Quran Bangla React',
    desc: 'Full-featured Quran reading Progressive Web App in Bengali built with React. Fetches Quran data from an API with audio support, search, bookmarks, last-read tracking, and more.',
    tags: ['React', 'PWA', 'API', 'Bengali'],
    href: 'https://thbappy7706.github.io/quran-bangla-react/',
  },
  {
    title: 'QuestionCraft',
    desc: 'Mobile-first Bangla exam question paper creator built as an installable PWA. Allows teachers to create, manage, and export structured question papers directly from their mobile devices.',
    tags: ['React 19', 'TypeScript', 'Zustand', 'PWA'],
    href: 'https://thbappy7706.github.io/bangla-question-maker/',
  },
  {
    title: 'Real-Time Pizza Tracker',
    desc: 'Real-time order tracking system with live status updates using WebSockets. Features interactive order placement and status monitoring from preparation to delivery.',
    tags: ['Laravel', 'React', 'Inertia.js', 'Reverb'],
    href: 'https://github.com/thbappy7706/Real-Time-Pizza-Tracker',
  },
  {
    title: 'Skill Tracking App',
    desc: 'Comprehensive skill management system for tracking proficiency and growth. Built with Filament v5 for a high-performance, reactive admin interface.',
    tags: ['Laravel', 'Filament', 'Livewire'],
    href: 'https://github.com/thbappy7706/Skill-Tracking-App',
  },
  {
    title: 'DIU Charity Arcade',
    desc: 'Crowdfunding platform for disaster relief allowing monetary and material donations. Facilitates community support for affected individuals.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    href: 'https://github.com/thbappy7706/DIU-Charity-Arcade-A-Crowd-Funding-Web-Application',
  },
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
  const [showAllSide, setShowAllSide] = useState(false)

  const displayed = showAll ? featured : featured.slice(0, 6)
  const displayedSide = showAllSide ? sidehustles : sidehustles.slice(0, 4)

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

        {/* Other Projects */}
        <div className={styles.sideSection}>
          <h3 className={styles.sideTitle}>
            <span className={styles.sideNum}>◆</span>
            Other Projects
          </h3>
          <div className={styles.sideGrid}>
            {displayedSide.map(p => (
              <SideCard key={p.title} project={p} />
            ))}
          </div>

          {!showAllSide && sidehustles.length > 4 && (
            <div className={styles.showMore}>
              <button className={styles.showMoreBtn} onClick={() => setShowAllSide(true)}>
                Show more ({sidehustles.length - 4} more)
              </button>
            </div>
          )}
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
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer" className={styles.sideCardLink}>
            <ExternalIcon />
          </a>
        ) : (
          <FolderIcon />
        )}
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
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
