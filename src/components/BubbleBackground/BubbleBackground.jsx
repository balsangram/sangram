import { useMemo } from 'react'
import styles from './BubbleBackground.module.css'

function createBubbles(count) {
  return Array.from({ length: count }, (_, index) => {
    const size = 18 + ((index * 37) % 70)
    return {
      id: index,
      size,
      left: `${(index * 17) % 100}%`,
      delay: `${(index * 0.7) % 12}s`,
      duration: `${10 + (index % 9)}s`,
      blur: `${1 + (index % 4)}px`,
      opacity: 0.25 + ((index % 5) * 0.08),
    }
  })
}

function createParticles(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 13) % 100}%`,
    top: `${(index * 19) % 100}%`,
    delay: `${(index * 0.4) % 6}s`,
    size: 2 + (index % 4),
  }))
}

export default function BubbleBackground() {
  const bubbles = useMemo(() => createBubbles(18), [])
  const particles = useMemo(() => createParticles(28), [])

  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />

      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className={styles.bubble}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
            filter: `blur(${bubble.blur})`,
            opacity: bubble.opacity,
          }}
        />
      ))}

      {particles.map((particle) => (
        <span
          key={particle.id}
          className={styles.particle}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
