import menu from './menu.js';
import listItems from './list.js';

class ListView {
  constructor(listViewID, listItems) {
    this.view = document.getElementById(listViewID);
    this.list = listItems;
  }

  update(condition=() => true) {
    this.view.innerHTML = "";

    function createItem(title) {
      const container = document.createElement('div');
      const titleBox = document.createElement('p');

      container.classList.add('item');
      titleBox.classList.add('title');

      titleBox.textContent = String(title);
      container.appendChild(titleBox);

      return container;
    }
    
    this.list.forEach(({title}) => {
      title = title.toLowerCase().trim();
      if (condition(title)) {
        const element = createItem(title);

        this.view.appendChild(element);
      }
    });
  }
}

class Search extends ListView {
  constructor(inputSearch, listView, listItems) {
    super(listView, listItems);
    this.input = document.getElementById(inputSearch);
    this.input.onkeypress = this.handleKeyDown;
    this.input.onkeydown = this.handleKeyDown;
    this.input.onkeyup = this.handleKeyDown;
  }

  handleKeyDown = (e) => {
    function condition(text) {
      const value = e.target.value.toLowerCase().trim();
      if (text.startsWith(value)) {
        return true;
      }
      return false;
    }

    this.update(condition);
  }
}

const listView = new Search('search', 'allItems', listItems);
listView.update();

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