import useInView from '../../utils/useInView'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index = 0 }) {
  const ref = useInView()
  const number = String(index + 1).padStart(2, '0')

  return (
    <article ref={ref} className={`reveal ${styles.item}`}>
      <div className={styles.main}>
        <div className={styles.meta}>
          <span className={styles.index}>/{number}</span>
          <span className={styles.category}>{project.category}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.metrics}>
          {project.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>

        <a
          className={styles.link}
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <aside className={styles.aside}>
        <div className={styles.block}>
          <p className={styles.label}>Tech Stack</p>
          <ul className={styles.tech}>
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Key Achievement</p>
          <p className={styles.achievement}>{project.achievement}</p>
        </div>
      </aside>
    </article>
  )
}
