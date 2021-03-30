import { List } from './components/List'
import { Form } from './components/Form'

import styles from './styles/components/App.module.css'

import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { listItemsReducer } from './reducers/listItemsReducer'
import { visibleListItemReducer } from './reducers/visibleListItemReducer'

const SAVED_ITEMS = 'savedItems'

function loadDataFromStorage() {
  const currentState = localStorage.getItem(SAVED_ITEMS)
  if (currentState) {
    return JSON.parse(currentState)
  } else {
    return []
  }
}

function persistState(state) {
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

const allReducers = combineReducers({
  listItems: listItemsReducer,
  visibleListItems: visibleListItemReducer
})

const store = createStore(allReducers, loadDataFromStorage())
store.subscribe(() => {
  persistState(store.getState())
})

function App() {
  return (
    <div>
      <div className={styles.container}>
        <header>
          <h1>Todo List</h1>
        </header>

        <Provider store={store}>
          <Form />
          <List />  
        </Provider>
      </div>
    </div>
  );
}

export default App;
