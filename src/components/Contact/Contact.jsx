import { useState } from 'react'
import Button from '../Button/Button'
import SectionTitle from '../SectionTitle/SectionTitle'
import SocialLinks from '../SocialLinks/SocialLinks'
import { contactInfo } from '../../utils/data'
import useInView from '../../utils/useInView'
import styles from './Contact.module.css'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('')
  const ref = useInView()

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in all fields.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email client…')
    setForm(initial)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something exceptional."
          description="Open to thoughtful collaborations, backend systems, and full-stack product work."
        />

        <div ref={ref} className={`reveal ${styles.layout}`}>
          <div className={styles.info}>
            <h3>Direct channels</h3>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
              {contactInfo.phone}
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              github.com/balsangram
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
            <SocialLinks className={styles.social} />
          </div>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                autoComplete="email"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about the project…"
              />
            </label>
            <Button type="submit">Send Message</Button>
            {status ? <p className={styles.status}>{status}</p> : null}
          </form>
        </div>
      </div>
    </section>
  )
}
