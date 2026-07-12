import GlassCard from '../GlassCard/GlassCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import useInView from '../../utils/useInView'
import styles from './About.module.css'

export default function About() {
  const ref = useInView()

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About"
          title="Engineering systems that scale with clarity."
          description="A full-stack craft focused on reliable backends and refined product interfaces."
        />

        <div ref={ref} className={`reveal-scale ${styles.grid}`}>
          <GlassCard className={styles.card}>
            <div className={styles.body}>
              <p>
                Full Stack MERN Developer with experience in React.js, Node.js,
                Express.js, MongoDB, PostgreSQL, Redis, Firebase, JWT
                Authentication, WebSockets, Razorpay Integration, Clean
                Architecture, scalable backend systems and modern frontend
                applications.
              </p>
              <p>
                I care about maintainable APIs, thoughtful UX, and shipping
                production-ready features with precision — not just prototypes.
              </p>
              <ul className={styles.meta}>
                <li>
                  <strong>Focus</strong>
                  <span>Backend systems &amp; product UI</span>
                </li>
                <li>
                  <strong>Stack</strong>
                  <span>MERN · PostgreSQL · Redis</span>
                </li>
                <li>
                  <strong>Approach</strong>
                  <span>Clean Architecture</span>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
