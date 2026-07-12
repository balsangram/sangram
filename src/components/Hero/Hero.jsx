import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { typingRoles } from '../../utils/data'
import styles from './Hero.module.css'

const floatingIcons = ['React', 'Node', 'Mongo', 'Redis', 'Docker', 'JWT']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = typingRoles[roleIndex]
    const speed = deleting ? 38 : 78

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 1400)
      return () => clearTimeout(pause)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((index) => (index + 1) % typingRoles.length)
      return undefined
    }

    const timer = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1)
      setText(next)
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.hello}>Hello,</p>
          <h1 className={styles.title}>
            I&apos;m <span>Sangram Bal</span>
          </h1>
          <p className={styles.role}>Full Stack MERN Developer</p>
          <p className={styles.typing}>
            <span className={styles.typed}>{text}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </p>
          <p className={styles.lede}>
            Building scalable backends and polished frontend experiences with
            clean architecture, modern APIs, and production-ready systems.
          </p>
          <div className={styles.actions}>
            <Button href="/resume.pdf" download>
              Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>

        <div className={styles.orbit} aria-hidden="true">
          <div className={styles.ring} />
          <div className={styles.core}>SB</div>
          {floatingIcons.map((icon, index) => (
            <span
              key={icon}
              className={styles.floatIcon}
              style={{
                animationDelay: `${index * 0.4}s`,
                ['--angle']: `${index * 60}deg`,
              }}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
