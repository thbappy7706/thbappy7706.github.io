import { useState } from 'react'
import { useStaggeredFade } from '../hooks/useScrollFade'
import { useSectionTransition } from '../hooks/useSectionTransition'
import { SectionLabel } from './About'
import styles from './Projects.module.css'

const featured = [
  {
    title: 'Project Location Analyzer',
    desc: 'Intelligent geographic project tracking system. Interactive map visualization with real-time deployment analytics, location-based insights, and AI-ready data pipelines for modern web applications.',
    tags: ['React', 'Inertia.js', 'Laravel', 'Google Maps API', 'Web APIs'],
    category: 'AI & Data',
    href: '#',
  },
  {
    title: 'Comprohealth Analytics Platform',
    desc: 'AI-ready health analytics dashboard with real-time data visualization, intelligent reporting, and predictive insights for healthcare operations. Built for scale with modern web technologies.',
    tags: ['React', 'Livewire', 'Alpine.js', 'Data Visualization', 'APIs'],
    category: 'Health Tech',
    href: 'https://www.comprohealth.com/',
  },
  {
    title: 'Hardware E-Commerce Platform',
    desc: 'Modern SPA e-commerce experience for server and hardware sales. Seamless cart, real-time inventory, and intelligent product recommendations with fast, responsive UI.',
    tags: ['React', 'Inertia.js', 'Modern Web Stack', 'APIs'],
    category: 'E-Commerce',
    href: 'https://www.ibssbd.com/',
  },
  {
    title: 'CWA Billing & Client Intelligence System',
    desc: 'Smart billing platform with automated workflows, client analytics, and intelligent invoice tracking. Streamlines financial operations with modern web architecture.',
    tags: ['Laravel', 'Web APIs', 'MySQL', 'Full Stack'],
    category: 'FinTech',
    href: 'https://www.cwa.international/',
  },
  {
    title: 'NESCO Complaint Management System',
    desc: 'Citizen-focused public utility platform with intelligent ticket routing, status tracking, and real-time resolution monitoring. Modern web interface for government services.',
    tags: ['Laravel', 'Livewire', 'Web Platform', 'Public Sector'],
    category: 'Gov Tech',
    href: 'https://complain.nesco.gov.bd/',
  },
  {
    title: 'Analytics Visualization Dashboard',
    desc: 'Interactive data dashboard with dynamic charts, real-time metrics, and intelligent reporting. Transforms complex datasets into actionable web-based visualizations.',
    tags: ['React', 'Vue.js', 'Chart.js', 'Data Viz', 'Web APIs'],
    category: 'Data & Analytics',
  },
  {
    title: 'Menstrual Health Platform API',
    desc: 'Secure backend API powering a women\'s health platform with role-based access, program analytics, and intelligent reporting for health initiatives.',
    tags: ['Web APIs', 'Backend', 'MySQL', 'Health Tech'],
    category: 'Health Tech',
    href: 'https://www.wateraid.org/bd/publications/menstrual-health-and-hygiene-journey-of-wateraid-bangladesh',
  },
  {
    title: 'Clinical Reference API',
    desc: 'RESTful API providing healthcare professionals real-time access to medical data, clinical guidelines, and treatment protocols via modern web endpoints.',
    tags: ['Web APIs', 'Backend', 'MySQL', 'Health Tech'],
    category: 'Health Tech',
  },
]

const sidehustles = [
  {
    title: 'Quran Bangla React PWA',
    desc: 'Progressive web app for Bengali Quran reading with audio, search, bookmarks, and intelligent last-read tracking. Offline-capable modern web experience.',
    tags: ['React', 'PWA', 'Web APIs', 'i18n'],
    href: 'https://thbappy7706.github.io/quran-bangla-react/',
  },
  {
    title: 'QuestionCraft - Exam Creator',
    desc: 'Mobile-first PWA for teachers to create, manage, and export structured exam papers. Intelligent question organization with modern web tooling.',
    tags: ['React 19', 'TypeScript', 'PWA', 'Web App'],
    href: 'https://thbappy7706.github.io/bangla-question-maker/',
  },
  {
    title: 'Real-Time Order Tracker',
    desc: 'Live order tracking system with WebSocket-powered real-time updates. Interactive UI for monitoring order status from preparation to delivery.',
    tags: ['React', 'Inertia.js', 'WebSockets', 'Real-Time Web'],
    href: 'https://github.com/thbappy7706/Real-Time-Pizza-Tracker',
  },
  {
    title: 'Skill Intelligence Tracker',
    desc: 'Modern skill management platform with reactive admin interface. Track proficiency growth with intelligent data visualization.',
    tags: ['Laravel', 'Filament', 'Livewire', 'Web Platform'],
    href: 'https://github.com/thbappy7706/Skill-Tracking-App',
  },
  {
    title: 'DIU Charity Arcade',
    desc: 'Crowdfunding web platform for disaster relief supporting monetary and material donations. Community-driven modern web application.',
    tags: ['Laravel', 'Web Platform', 'MySQL', 'Full Stack'],
    href: 'https://github.com/thbappy7706/DIU-Charity-Arcade-A-Crowd-Funding-Web-Application',
  },
  {
    title: 'RBAC Access Control System',
    desc: 'Role-based access control boilerplate with dynamic permissions, user authentication, and responsive dark/light UI. Full-stack web security foundation.',
    tags: ['Laravel', 'Vue.js', 'Inertia.js', 'Web Security'],
    href: 'https://github.com/thbappy7706',
  },
  {
    title: 'Islamic Platform Web Interface',
    desc: 'All-in-one web interface featuring prayer times, Quran recitations, Zakat calculators, and daily spiritual content. Modern frontend for Islamic digital services.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Frontend'],
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
            Web Projects
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
