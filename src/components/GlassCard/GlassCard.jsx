import styles from './GlassCard.module.css'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Tag = 'div',
  style,
}) {
  return (
    <Tag
      className={`${styles.card} ${hover ? styles.hoverable : ''} ${className}`.trim()}
      style={style}
    >
      <div className={styles.reflection} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </Tag>
  )
}
