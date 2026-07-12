export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options

  return (node) => {
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }
}

export function attachReveal(node, className = 'reveal') {
  if (!node) return
  node.classList.add(className)

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('visible')
        observer.unobserve(node)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
  )

  observer.observe(node)
}
