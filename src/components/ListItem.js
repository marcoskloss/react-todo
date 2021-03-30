import { Card } from './Card'
import { DoneIcon } from './DoneIcon'

import styles from '../styles/components/Card.module.css'

import { useDispatch } from 'react-redux'
import { deleteItem, changeDone } from '../actions/listAction'

export function ListItem({ item }) {
  const dispatch = useDispatch()

  return (
    <li>
      <Card>
        <p className={`${styles.text} ${item.done ? styles.done : ''}`}>
          {item.text}
        </p>

        <button 
          type='button' 
          onClick={() => dispatch(deleteItem(item.id))} 
          className={styles.deleteBtn}
        >
          <img src="/assets/trash.svg" alt="Delete" />
        </button>
        
        <button 
          type="button" 
          onClick={() => dispatch(changeDone(item.id))} 
          className={styles.doneBtn}
        >
          <DoneIcon className={styles.doneImg} item={item} />
        </button>
      </Card>
    </li>
  )

}