import styles from '../styles/components/Select.module.css'

export function Select({ changeViewItems }) {
  function handleClick(e) {
    const select = e.target
    const selectedOptionValue  = select.options[select.selectedIndex].value
    changeViewItems(selectedOptionValue)
  }

  return (
    <select name="" id="selected" className={styles.select} onClick={handleClick}>
      <option value="all" onClick={handleClick}>All</option>
      <option value="completed" onClick={handleClick}>Completed</option>
      <option value="uncompleted" onClick={handleClick}>Uncompleted</option>
    </select>
  )
}