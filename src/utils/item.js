import { idGenerator } from './idGenerator'

export class Item {

  constructor(text) {
    this.id = idGenerator()
    this.text = text
    this.done = false
  }
}