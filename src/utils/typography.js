export const FONTS = [
  { id: 'inter', label: 'Inter', value: "'Inter', sans-serif" },
  { id: 'indie-flower', label: 'Indie Flower', value: "'Indie Flower', cursive" },
  { id: 'roboto', label: 'Roboto', value: "'Roboto', sans-serif" },
  { id: 'poppins', label: 'Poppins', value: "'Poppins', sans-serif" },
]

export const DEFAULT_FONT_ID = 'roboto'
export const DEFAULT_FONT_SCALE = 1
export const MIN_FONT_SCALE = 0.85
export const MAX_FONT_SCALE = 1.3
export const FONT_SCALE_STEP = 0.05

const FONT_KEY = 'portfolio-font'
const SCALE_KEY = 'portfolio-font-scale'

export function getStoredFontId() {
  const stored = localStorage.getItem(FONT_KEY)
  return FONTS.some((font) => font.id === stored) ? stored : DEFAULT_FONT_ID
}

export function getStoredFontScale() {
  const stored = Number(localStorage.getItem(SCALE_KEY))
  if (Number.isFinite(stored) && stored >= MIN_FONT_SCALE && stored <= MAX_FONT_SCALE) {
    return stored
  }
  return DEFAULT_FONT_SCALE
}

export function applyFont(fontId) {
  const font = FONTS.find((item) => item.id === fontId) || FONTS.find((item) => item.id === DEFAULT_FONT_ID)
  document.documentElement.style.setProperty('--font', font.value)
  localStorage.setItem(FONT_KEY, font.id)
  return font.id
}

export function applyFontScale(scale) {
  const next = Math.min(MAX_FONT_SCALE, Math.max(MIN_FONT_SCALE, Number(scale.toFixed(2))))
  document.documentElement.style.setProperty('--font-scale', String(next))
  localStorage.setItem(SCALE_KEY, String(next))
  return next
}
