import styles from '../styles/components/Card.module.css'

export function Card({ children }) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}