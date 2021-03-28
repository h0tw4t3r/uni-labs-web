export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        const disabled = (this.itemModel.shortened) ? "disabled" : "";
        const color = (this.itemModel.shortened) ? "grey" : "black";
        return `
           <li class="list-group-item d-flex align-items-center text-align-center">
                    <span class="me-2 ${this.itemModel.shortened ? '' : 'me-auto'}">Long link: ${this.itemModel.url}</span>
                    ${this.itemModel.shortened ? `<span class="me-auto">Shortened ${this.itemModel.shortened}</span>` : ''}
                    <button ${disabled} data-id="${this.itemModel.id}" type="button" class="btn btn-info shorten-button me-2">Shorten</button>
                    <button data-id="${this.itemModel.id}" type="button" class="btn btn-danger del-button">Delete</button>
            </li>`;
    }
}