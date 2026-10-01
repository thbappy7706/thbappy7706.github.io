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
          Building intelligent web experiences · React · Inertia.js · Modern Web APIs · {new Date().getFullYear()}
        </p>
        <p className={styles.stack}>
          React · Inertia.js · Web APIs · PWA · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
