import { useEffect, useState } from 'react'
import { ArrowUp, Download } from 'lucide-react'
import styles from './FloatingActions.module.css'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.panel}>
      <a
        className={styles.iconBtn}
        href="/resume.pdf"
        download="Sangram-Bal-Resume.pdf"
        aria-label="Download resume PDF"
        title="Download resume"
      >
        <Download size={18} strokeWidth={2} />
      </a>

      {showTop ? (
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={scrollToTop}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </button>
      ) : null}
    </div>
  )
}
