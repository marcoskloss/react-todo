import { Card } from './Card'
import { DoneIcon } from './DoneIcon'

import styles from '../styles/components/Card.module.css'

export function ListItem({ item, onItemDeleted, onItemHasDone }) {
  return (
    <li>
      <Card>
        <p className={`${styles.text} ${item.done ? styles.done : ''}`}>
          {item.text}
        </p>
        <button type='button' onClick={() => onItemDeleted(item)} className={styles.deleteBtn}>
          <img src="/assets/trash.svg" alt="Delete" />
        </button>
        <button type="button" onClick={() => onItemHasDone(item)} className={styles.doneBtn}>
          <DoneIcon className={styles.doneImg} item={item} />
        </button>
      </Card>
    </li>
  )

}