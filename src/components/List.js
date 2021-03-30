import { ListItem } from "./ListItem";

import styles from '../styles/components/List.module.css'

import { useSelector } from "react-redux";

import { filterItemsByState } from '../utils/filterItemsByState'

export function List() {
  const items = useSelector(state => state.listItems)
  const filterType = useSelector(state => state.visibleListItems)
  
  const renderItems = filterItemsByState(items, filterType)

  return (
    <ul className={styles.list}>
      {renderItems.map(item => {
        return (
          <ListItem
            key={item.id} 
            item={item} 
        />
        )
      })}
    </ul>
  )
}