import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.classList.add('loading')
    const leaveTimer = setTimeout(() => setLeaving(true), 1400)
    const doneTimer = setTimeout(() => {
      document.body.classList.remove('loading')
      onDone?.()
    }, 1900)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
      document.body.classList.remove('loading')
    }
  }, [onDone])

  return (
    <div
      className={`${styles.loader} ${leaving ? styles.leave : ''}`}
      aria-hidden="true"
    >
      <div className={styles.orb} />
      <p className={styles.brand}>Sangram Bal</p>
      <div className={styles.bar}>
        <span />
      </div>
    </div>
  )
}
