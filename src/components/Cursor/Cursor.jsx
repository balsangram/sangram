import { useEffect, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return undefined

    const move = (event) => setPos({ x: event.clientX, y: event.clientY })
    const down = () => setActive(true)
    const up = () => setActive(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      className={`${styles.glow} ${active ? styles.active : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  )
}
