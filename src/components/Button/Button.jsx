import { useRef } from 'react'
import styles from './Button.module.css'

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  magnetic = true,
  download,
  target,
  rel,
}) {
  const ref = useRef(null)

  const handleMove = (event) => {
    if (!magnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  const handleRipple = (event) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const circle = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    circle.className = styles.ripple
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${event.clientX - rect.left - size / 2}px`
    circle.style.top = `${event.clientY - rect.top - size / 2}px`
    node.appendChild(circle)
    circle.addEventListener('animationend', () => circle.remove())
  }

  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()
  const shared = {
    ref,
    className: classes,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onMouseDown: handleRipple,
  }

  if (href) {
    return (
      <a
        {...shared}
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noreferrer' : undefined)}
        onClick={onClick}
      >
        <span className={styles.label}>{children}</span>
      </a>
    )
  }

  return (
    <button {...shared} type={type} onClick={onClick}>
      <span className={styles.label}>{children}</span>
    </button>
  )
}
