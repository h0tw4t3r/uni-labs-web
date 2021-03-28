export default class itemListModel {
  constructor() {
    this.items = [];
    this.onChangeCallback = null;
  }

  add(item) {
    item.onChangeCallback = this.onChangeCallback;
    this.items.push(item);
  }

  delete(itemId) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items.splice(itemIndex, 1);
  }

  toggleShortening(itemId) {
    this.items.forEach((item) => {
      if (itemId === item.id) item.toggleShortening();
    });
  }

  setOnChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
}
