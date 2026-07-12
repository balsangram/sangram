import useInView from '../../utils/useInView'
import styles from './Timeline.module.css'

export default function Timeline({ items }) {
  const ref = useInView()

  return (
    <ol ref={ref} className={`reveal ${styles.timeline}`}>
      {items.map((item, index) => (
        <li key={`${item.company}-${item.role}`} className={styles.item}>
          <div className={styles.index}>
            /{String(index + 1).padStart(2, '0')}
          </div>
          <div className={styles.content}>
            <div className={styles.head}>
              <div>
                <h3>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.type}>{item.type}</span>
              </div>
            </div>
            <ul className={styles.tags}>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
