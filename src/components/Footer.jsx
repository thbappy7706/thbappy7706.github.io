import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>
          Tanvir Hossen Bappy
          <span className={styles.dot}>◆</span>
        </p>
        <p className={styles.copy}>
          Designed & built with care · {new Date().getFullYear()}
        </p>
        <p className={styles.stack}>
          React · Vite · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
