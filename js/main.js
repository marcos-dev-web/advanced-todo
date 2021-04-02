import menu from './menu.js';
import listItems from './list.js';
import Search from './Search.js';
import HandleNewItems from './HandleNewItems.js';

const listView = new Search('search', 'allItems', listItems);
listView.update();

new HandleNewItems({
  buttonCancel: document.getElementById('cancel'),
  buttonDone: document.getElementById('done'),
  inputTitle: document.getElementById('title'),
  inputText: document.getElementById('text'),
  updateList: listView.update,
})

menu.configMenuPreview({
  preview: {
    boxID: 'preview',
    menuID: 'menuPreview',
    classOpen: 'previewOpen'
  },
  items: {
    boxID: 'listView',
    menuID: 'menuItems',
    classOpen: 'itemsOpen'
  },
})