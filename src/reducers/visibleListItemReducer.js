export function visibleListItemReducer(state = 'all', action) {
  switch (action.type) {
    case 'all':
      return action.type

    case 'completed':
      return action.type

    case 'uncompleted':
      return action.type

    default:
      return state
  }
}