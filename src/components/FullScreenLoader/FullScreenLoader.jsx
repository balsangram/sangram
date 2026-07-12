import { useEffect, useMemo } from 'react'
import { gsap } from 'gsap'
import styles from './FullScreenLoader.module.css'

function createClouds(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    top: `${8 + ((index * 17) % 75)}%`,
    scale: 0.55 + ((index % 5) * 0.18),
    duration: `${28 + (index % 12) * 3}s`,
    delay: `${-((index * 4) % 24)}s`,
    opacity: 0.35 + ((index % 4) * 0.12),
  }))
}

export default function FullScreenLoader({ onDone, duration = 2.4 }) {
  const clouds = useMemo(() => createClouds(8), [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.fromTo(
      `.${styles.overlay}`,
      { opacity: 0 },
      { opacity: 1, duration: reduceMotion ? 0.2 : 0.55 },
    )

    tl.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: 18, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: reduceMotion ? 0.2 : 0.7 },
      '-=0.2',
    )

    tl.to(`.${styles.overlay}`, {
      opacity: 0,
      duration: reduceMotion ? 0.2 : 0.55,
      delay: duration,
      onComplete: onDone,
    })

    return () => tl.kill()
  }, [onDone, duration])

  return (
    <div className={styles.overlay} aria-hidden="true">
      <div className={styles.sky}>
        {clouds.map((cloud) => (
          <span
            key={cloud.id}
            className={styles.cloud}
            style={{
              top: cloud.top,
              opacity: cloud.opacity,
              animationDuration: cloud.duration,
              animationDelay: cloud.delay,
              transform: `scale(${cloud.scale})`,
            }}
          />
        ))}
      </div>

      <h1 className={styles.title}>
        <span className={styles.glass}>Sangram</span>
      </h1>
    </div>
  )
}
