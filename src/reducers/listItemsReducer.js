export function listItemsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
      
    case 'DELETE_ITEM':
      const filteredItems = state.filter(item => item.id !== action.payload)
      return filteredItems

    case 'CHANGE_DONE':
      const updatedItems = state.map(item => {
        if (item.id === action.payload) {
          item.done = !item.done
        }
        return item
      }) 
      return updatedItems  

    case 'ITEMS_FROM_STORAGE':
      return action.payload
  
    default:
      return state
  }
}