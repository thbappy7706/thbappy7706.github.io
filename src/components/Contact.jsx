import { useSectionTransition } from '../hooks/useSectionTransition'
import { SectionLabel } from './About'
import styles from './Contact.module.css'

export default function Contact() {
  const { ref, isVisible } = useSectionTransition({ threshold: 0.15 })

  return (
    <section className={`${styles.section} ${isVisible ? 'section-visible' : ''}`} id="contact" ref={ref}>
      <div className={styles.container}>
        <SectionLabel label="05" title="Contact" />

        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              Let's build something
              <br />
              <span className={styles.accentWord}>remarkable.</span>
            </h2>
            <p className={styles.sub}>
              I'm currently open to new opportunities — whether it's a full-time role,
              contract work, or an exciting collaboration. My inbox is always open.
            </p>
            <a href="mailto:tanvirbappy7706@gmail.com" className={styles.emailBtn}>
              Say hello →
            </a>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Find me here</h4>
            <ul className={styles.linksList}>
              <ContactLink
                href="https://github.com/thbappy7706"
                label="GitHub"
                handle="@thbappy7706"
              />
              <ContactLink
                href="https://www.linkedin.com/in/tanvir-hossen-bappy/"
                label="LinkedIn"
                handle="tanvir-hossen-bappy"
              />
              <ContactLink
                href="mailto:tanvirbappy7706@gmail.com"
                label="Email"
                handle="tanvirbappy7706@gmail.com"
              />
              <ContactLink
                href="https://ibss.com.bd"
                label="Current Workplace"
                handle="IBSS"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({ href, label, handle }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={styles.contactLink}>
        <span className={styles.contactLabel}>{label}</span>
        <span className={styles.contactHandle}>{handle}</span>
        <span className={styles.contactArrow}>→</span>
      </a>
    </li>
  )
}
