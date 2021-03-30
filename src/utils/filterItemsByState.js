export function filterItemsByState(list, type) {
  if (type === 'all') return list

  if (type === 'completed') {
    return list.filter(item => item.done)
  }

  if (type === 'uncompleted') {
    return list.filter(item => !item.done)
  }
}