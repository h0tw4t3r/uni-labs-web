import ItemListModel from './model/List.model.js';
import ItemListView from './view/List.view.js';
import Controller from './controller/List.controller.js';

let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);

let controller = new Controller(itemListModel, itemListView);

controller.addItem('https://google.com/');
controller.addItem('https://instagram.com/');