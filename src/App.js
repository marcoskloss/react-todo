import { useEffect, useState } from 'react';

import { Item } from './utils/item'
import { List } from './components/List'
import { Form } from './components/Form'

import styles from './styles/components/App.module.css'

const SAVED_ITEMS = 'savedItems'

function App() {
  const [itemsList, setItemsList] = useState([])
  const [viewItems, setViewItems] = useState('all')
  const [visibleTodos, setVisibleTodos] = useState([])

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (savedItems) setItemsList(savedItems)
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(itemsList))
  }, [itemsList])

  useEffect(() => {
    const filterVisibleTodos = {
      completed() {
        setVisibleTodos(itemsList.filter(todo => todo.done))
      },
      uncompleted () {
        setVisibleTodos(itemsList.filter(todo => !todo.done))
      },
      all() {
        setVisibleTodos(itemsList)
      }
    }

    filterVisibleTodos[viewItems]()

  }, [viewItems, itemsList])

  function onAddItem(text) {
    const item = new Item(text)
    setItemsList(prevState => [...prevState, item])
  }

  function onItemDeleted(item) {
    const filteredItems = itemsList.filter(it => it.id !== item.id)
    setItemsList(filteredItems)
  }

  function onItemHasDone(item) {
    const updatedItems = itemsList.map(it => {
      if (it.id === item.id) {
        it.done = !it.done
      }
      return it
    })

    setItemsList(updatedItems)
  }

  return (
    <div>
      <div className={styles.container}>
        <header>
          <h1>Todo List</h1>
        </header>

        <Form onAddItem={onAddItem} changeViewItems={setViewItems}/>
        <List
          onItemDeleted={onItemDeleted}
          items={visibleTodos}
          onItemHasDone={onItemHasDone}
          viewItems={viewItems}
        >
        </List>
      </div>
    </div>
  );
}

export default App;
