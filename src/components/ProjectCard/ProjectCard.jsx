import Button from '../Button/Button'
import GlassCard from '../GlassCard/GlassCard'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <GlassCard
      className={styles.card}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.media} aria-hidden="true">
        <div className={styles.shine} />
        <span className={styles.index}>0{index + 1}</span>
      </div>
      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Button
          href={project.github}
          target="_blank"
          variant="secondary"
          className={styles.github}
          magnetic={false}
        >
          GitHub
        </Button>
      </div>
    </GlassCard>
  )
}
