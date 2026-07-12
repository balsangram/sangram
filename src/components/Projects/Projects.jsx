import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../../utils/data'
import useInView from '../../utils/useInView'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useInView()

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <header ref={ref} className={`reveal ${styles.header}`}>
          <h2 className={styles.heading}>Projects.</h2>
          <span className={styles.mark} aria-hidden="true" />
        </header>

        <div className={styles.list}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
