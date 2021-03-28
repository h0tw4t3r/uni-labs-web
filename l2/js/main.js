import ItemListModel from './model/List.model';
import ItemListView from './view/List.view';
import Controller from './controller/List.controller';

const itemListModel = new ItemListModel();
const itemListView = new ItemListView(itemListModel);

const controller = new Controller(itemListModel, itemListView);

controller.addItem('https://google.com/');
controller.addItem('https://instagram.com/');
