import ProjectCard from '../ProjectCard/ProjectCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import { projects } from '../../utils/data'
import useInView from '../../utils/useInView'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useInView()

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work across platforms and products."
          description="Glass-crafted case cards for production systems spanning tourism, finance, and enterprise workflows."
        />

        <div ref={ref} className={`reveal ${styles.grid}`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
