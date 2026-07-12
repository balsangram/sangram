import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>Sangram Bal</p>
          <p className={styles.tag}>Full Stack MERN Developer</p>
        </div>
        <SocialLinks />
        <p className={styles.copy}>© {year} Sangram Bal. Crafted with precision.</p>
      </div>
    </footer>
  )
}
