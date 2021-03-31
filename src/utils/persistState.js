export function persistState(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}