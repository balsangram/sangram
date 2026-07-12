import GlassCard from '../GlassCard/GlassCard'
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

        <ul ref={ref} className={`reveal ${styles.grid}`}>
          {achievements.map((item, index) => (
            <li key={item} style={{ transitionDelay: `${index * 0.08}s` }}>
              <GlassCard className={styles.card}>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{item}</h3>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
