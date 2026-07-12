import styles from './SectionTitle.module.css'
import useInView from '../../utils/useInView'

export default function SectionTitle({ eyebrow, title, description }) {
  const ref = useInView()

  return (
    <div ref={ref} className={`reveal ${styles.wrap}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
