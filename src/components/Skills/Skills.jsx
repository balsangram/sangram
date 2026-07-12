import { useEffect, useRef, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { skillCategories } from '../../utils/data'
import styles from './Skills.module.css'

function SkillBars({ skills, active }) {
  return (
    <ul className={styles.bars}>
      {skills.map((skill) => (
        <li key={skill.name}>
          <div className={styles.row}>
            <span className={styles.name}>{skill.name}</span>
            <span className={styles.level}>{skill.level}%</span>
          </div>
          <div className={styles.track}>
            <div
              className={styles.fill}
              style={{ width: active ? `${skill.level}%` : '0%' }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const category = skillCategories[activeTab]

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="A stack tuned for modern products."
          description="Frontend polish, backend reliability, and the tooling that keeps systems shipping."
        />

        <div ref={ref} className={`reveal ${styles.wrap}`}>
          <div className={styles.tabs} role="tablist" aria-label="Skill categories">
            {skillCategories.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <h3>{category.title}</h3>
            <SkillBars skills={category.skills} active={visible} />
          </div>
        </div>
      </div>
    </section>
  )
}
