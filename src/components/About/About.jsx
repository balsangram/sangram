import useInView from '../../utils/useInView'
import styles from './About.module.css'

export default function About() {
  const ref = useInView()

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className={`reveal ${styles.layout}`}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>About</p>
            <h2 className={styles.title}>
              Engineering systems that scale with clarity.
            </h2>
          </div>

          <div className={styles.right}>
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

            <dl className={styles.meta}>
              <div>
                <dt>Focus</dt>
                <dd>Backend systems &amp; product UI</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>MERN · PostgreSQL · Redis</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>Clean Architecture</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
