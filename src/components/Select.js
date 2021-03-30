import styles from '../styles/components/Select.module.css'

import { useDispatch } from 'react-redux'
import { visibleItemListActions } from '../actions/visibleItemListAction'


export function Select() {
  const dispatch = useDispatch()

  function handleClick(e) {
    const select = e.target
    const selectedOptionValue  = select.options[select.selectedIndex].value
    dispatch(
      visibleItemListActions[selectedOptionValue]()
    )
  }

  return (
    <select id="selected" className={styles.select} onClick={handleClick}>
      <option value="all" onClick={handleClick}>All</option>
      <option value="completed" onClick={handleClick}>Completed</option>
      <option value="uncompleted" onClick={handleClick}>Uncompleted</option>
    </select>
  )
}