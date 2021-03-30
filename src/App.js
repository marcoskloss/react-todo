import { List } from './components/List'
import { Form } from './components/Form'

import styles from './styles/components/App.module.css'

import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { listItemsReducer } from './reducers/listItemsReducer'
import { visibleListItemReducer } from './reducers/visibleListItemReducer'

import { loadDataFromStorage } from './utils/loadDataFromStorage'
import { persistState } from './utils/persistState'

const SAVED_ITEMS = 'savedItems'

const allReducers = combineReducers({
  listItems: listItemsReducer,
  visibleListItems: visibleListItemReducer
})

const store = createStore(allReducers, loadDataFromStorage(SAVED_ITEMS))
store.subscribe(() => {
  persistState(SAVED_ITEMS ,store.getState())
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
