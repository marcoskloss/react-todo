import { useState } from "react"

import { useDispatch } from 'react-redux'
import { addItem } from '../actions/listAction'

import { Select } from '../components/Select'

import styles from '../styles/components/Form.module.css'



export function Form() {
  const [inputText, setInputText] = useState("")

  const dispatch = useDispatch()

  function handleChange(e) {
    const text = e.target.value
    setInputText(text)
  }

  function onAddItem(e) {
    e.preventDefault()

    if (!inputText) return

    dispatch(addItem(inputText))
    setInputText("")

    const inputElement = e.target.parentNode.children[0]
    inputElement.focus()
  }

  return (
    <form className={styles.container}>
      <input onChange={handleChange} type="text" value={inputText}></input>
      <button onClick={onAddItem}>+</button>
      <Select />
    </form>
  )
}