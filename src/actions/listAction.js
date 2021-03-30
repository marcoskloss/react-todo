import { Item } from "../utils/item";

export function addItem(text) {
  const item = new Item(text)

  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM',
    payload: id
  }
}

export function changeDone(id) {
  return {
    type: 'CHANGE_DONE',
    payload: id
  }
}

export function itemsFromStorage(listItems) {
  return {
    type: 'ITEMS_FROM_STORAGE',
    payload: listItems
  }
}