export function loadDataFromStorage(key) {
  const currentState = localStorage.getItem(key)
  console.log(currentState);
  if (currentState) {
    return JSON.parse(currentState)
  } else {
    return []
  }
}
