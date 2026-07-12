import SectionTitle from '../SectionTitle/SectionTitle'
import { education } from '../../utils/data'
import useInView from '../../utils/useInView'
import styles from './Education.module.css'

export default function Education() {
  const ref = useInView()

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Education"
          title="Academic foundation."
          description="Computer Science training that anchors the engineering practice."
        />

        <div ref={ref} className={`reveal ${styles.row}`}>
          <span className={styles.year}>{education.year}</span>
          <div>
            <h3>
              {education.degree} · {education.field}
            </h3>
            <p>{education.school}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
