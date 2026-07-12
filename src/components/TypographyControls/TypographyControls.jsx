import { useEffect, useRef, useState } from 'react'
import { Minus, Plus, Type } from 'lucide-react'
import {
  applyFont,
  applyFontScale,
  DEFAULT_FONT_ID,
  DEFAULT_FONT_SCALE,
  FONTS,
  FONT_SCALE_STEP,
  getStoredFontId,
  getStoredFontScale,
  MAX_FONT_SCALE,
  MIN_FONT_SCALE,
} from '../../utils/typography'
import styles from './TypographyControls.module.css'

export default function TypographyControls() {
  const [fontId, setFontId] = useState(DEFAULT_FONT_ID)
  const [scale, setScale] = useState(DEFAULT_FONT_SCALE)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    const nextFont = applyFont(getStoredFontId())
    const nextScale = applyFontScale(getStoredFontScale())
    setFontId(nextFont)
    setScale(nextScale)
  }, [])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!panelRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  const selectFont = (id) => {
    setFontId(applyFont(id))
    setOpen(false)
  }

  const bumpScale = (delta) => {
    setScale((current) => applyFontScale(current + delta))
  }

  return (
    <div className={styles.panel} ref={panelRef}>
      <div className={styles.group}>
        <button
          type="button"
          className={`${styles.iconBtn} ${open ? styles.active : ''}`}
          aria-label="Change font"
          aria-expanded={open}
          title="Change font"
          onClick={() => setOpen((value) => !value)}
        >
          <Type size={18} strokeWidth={2} />
        </button>

        {open ? (
          <ul className={styles.menu} role="listbox" aria-label="Font options">
            {FONTS.map((font) => (
              <li key={font.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={fontId === font.id}
                  className={`${styles.option} ${fontId === font.id ? styles.selected : ''}`}
                  style={{ fontFamily: font.value }}
                  onClick={() => selectFont(font.id)}
                >
                  {font.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <button
        type="button"
        className={styles.iconBtn}
        aria-label="Increase font size"
        title="Increase font size"
        disabled={scale >= MAX_FONT_SCALE}
        onClick={() => bumpScale(FONT_SCALE_STEP)}
      >
        <Plus size={18} strokeWidth={2} />
      </button>

      <button
        type="button"
        className={styles.iconBtn}
        aria-label="Decrease font size"
        title="Decrease font size"
        disabled={scale <= MIN_FONT_SCALE}
        onClick={() => bumpScale(-FONT_SCALE_STEP)}
      >
        <Minus size={18} strokeWidth={2} />
      </button>
    </div>
  )
}
