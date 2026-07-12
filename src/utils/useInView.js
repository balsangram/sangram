import { useEffect, useRef } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    once = true,
  } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
          if (once) observer.unobserve(node)
        } else if (!once) {
          node.classList.remove('visible')
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
