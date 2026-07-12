import SectionTitle from '../SectionTitle/SectionTitle'
import { achievements } from '../../utils/data'
import useInView from '../../utils/useInView'
import styles from './Achievements.module.css'

export default function Achievements() {
  const ref = useInView()

  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Achievements"
          title="Proof of production-minded craft."
          description="Highlights from shipping reliable systems beyond demos and tutorials."
        />

        <ul ref={ref} className={`reveal ${styles.list}`}>
          {achievements.map((item, index) => (
            <li key={item} className={styles.item}>
              <span className={styles.number}>
                /{String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
