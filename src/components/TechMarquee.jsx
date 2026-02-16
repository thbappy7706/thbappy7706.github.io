import { useScrollFade } from '../hooks/useScrollFade'
import styles from './TechMarquee.module.css'

const stack = [
  'Laravel', 'React', 'PHP', 'JavaScript', 'Vue.js', 'Inertia.js',
  'Alpine.js', 'Livewire', 'Filament PHP', 'Tailwind CSS', 'MySQL',
  'PostgreSQL', 'Docker', 'Git', 'RESTful APIs', 'Astro',
]

export default function TechMarquee() {
  const doubled = [...stack, ...stack]
  const { ref, isVisible } = useScrollFade({ threshold: 0.2 })

  return (
    <div className={`${styles.wrapper} fade-in-scale ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.bullet}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
