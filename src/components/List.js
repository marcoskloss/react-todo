import { ListItem } from "./ListItem";
import styles from '../styles/components/List.module.css'

export function List({ items, onItemDeleted, onItemHasDone, viewItems }) {
  return (
    <ul className={styles.list}>
      {items.map(item => {
        return (
          <ListItem
            key={item.id} 
            item={item} 
            onItemDeleted={onItemDeleted} 
            onItemHasDone={onItemHasDone} 
        />
        )
      })}
    </ul>
  )
}