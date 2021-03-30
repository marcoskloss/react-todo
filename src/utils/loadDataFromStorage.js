export function loadDataFromStorage(key) {
  const currentState = localStorage.getItem(key)
  if (currentState) {
    return JSON.parse(currentState)
  } else {
    return []
  }
}
