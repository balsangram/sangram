import { useMemo } from 'react'
import styles from './BubbleBackground.module.css'

function createClouds(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    top: `${6 + ((index * 13) % 80)}%`,
    scale: 0.45 + ((index % 6) * 0.14),
    duration: `${32 + (index % 10) * 4}s`,
    delay: `${-((index * 5) % 30)}s`,
    opacity: 0.22 + ((index % 5) * 0.08),
  }))
}

export default function BubbleBackground() {
  const clouds = useMemo(() => createClouds(10), [])

  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />

      {clouds.map((cloud) => (
        <span
          key={cloud.id}
          className={styles.cloud}
          style={{
            top: cloud.top,
            opacity: cloud.opacity,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
            ['--scale']: cloud.scale,
          }}
        />
      ))}
    </div>
  )
}
