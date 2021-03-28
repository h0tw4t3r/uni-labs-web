import ItemView from './Item.view';

export default class ItemListView {
  constructor(itemListModel) {
    this.itemListModel = itemListModel;
    this.controllerOnShorten = null;
    this.controllerOnAddItem = null;
    this.controllerOnDelItem = null;
    document.querySelector('#links').addEventListener('click', (e) => this.onClick(e));
  }

  setControllerOnShorten(controllerOnShorten) {
    this.controllerOnShorten = controllerOnShorten;
  }

  setControllerOnAddItem(controllerOnAddItem) {
    this.controllerOnAddItem = controllerOnAddItem;
  }

  setControllerOnDelItem(controllerOnDelItem) {
    this.controllerOnDelItem = controllerOnDelItem;
  }

  onClick(e) {
    if (e.target.className.includes('shorten-button')) {
      this.controllerOnShorten(e.target.dataset.id);
      return;
    }
    if (e.target.className.includes('del-button')) {
      this.controllerOnDelItem(e.target.dataset.id);
    }
  }

  onAddItem() {
    const url = prompt('Enter a new link:', '');
    if (url) this.controllerOnAddItem(url);
  }

  toHtml() {
    const itemsHtml = this.itemListModel.items.map((item) => {
      const itemView = new ItemView(item);
      return itemView.toHtml();
    }).join('');
    return `
    <div class="row justify-content-md-center">
<div class="col-12"><ul class="list-group">${itemsHtml}</ul></div>
</div>`;
  }
}
