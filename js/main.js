import menu from './menu.js';
import listItems from './list.js';
import Search from './Search.js';
import HandleNewItems from './HandleNewItems.js';
import HandlePreview from './HandlePreview.js';

const preview = new HandlePreview(
  document.getElementById('container_preview'),
)

const listView = new Search('search', listItems, preview.update);
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