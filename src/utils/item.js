export class Item {
  static id = 0

  constructor(text) {
    this.id = Item.id++
    this.text = text
    this.done = false
  }
}