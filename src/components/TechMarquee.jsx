import { useSectionTransition } from '../hooks/useSectionTransition'
import styles from './TechMarquee.module.css'

const stack = [
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Inertia.js', icon: 'https://avatars.githubusercontent.com/u/47703742?s=200&v=4' }, // No official devicon yet, using GitHub avatar
  { name: 'Alpine.js', icon: 'https://avatars.githubusercontent.com/u/59030169?s=200&v=4' }, // No official devicon yet
  { name: 'Livewire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/livewire/livewire-original.svg' },
  { name: 'Filament PHP', icon: 'https://filamentphp.com/images/icon.png' }, // Official icon
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg' },
]

export default function TechMarquee() {
  const doubled = [...stack, ...stack]
  const { ref, isVisible } = useSectionTransition({ threshold: 0.2 })

  return (
    <div className={`${styles.wrapper} section-transition ${isVisible ? 'section-visible' : ''}`} ref={ref}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <img src={item.icon} alt={item.name} className={styles.icon} />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

