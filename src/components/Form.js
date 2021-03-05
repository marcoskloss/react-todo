import { useState } from "react"

import { Select } from '../components/Select'

import styles from '../styles/components/Form.module.css'

export function Form({ onAddItem, changeViewItems }) {
  const [inputText, setInputText] = useState("")

  function handleChange(e) {
    const text = e.target.value
    setInputText(text)
  }

  function addItem(e) {
    e.preventDefault()

    if (!inputText) return

    onAddItem(inputText)
    setInputText("")

    const inputElement = e.target.parentNode.children[0]
    inputElement.focus()
  }

  return (
    <form className={styles.container}>
      <input onChange={handleChange} type="text" value={inputText}></input>
      <button onClick={addItem}>+</button>
      <Select changeViewItems={changeViewItems} />
    </form>
  )
}