class ListView {
  constructor(listItems, previewUpdate) {
    this.view = document.getElementById('allItems');
    this.list = listItems;
    this.previewUpdate = previewUpdate;

    this.update = this.update.bind(this);
  }

  selectItem(configs) {
    const selectedItems = [...document.getElementsByClassName('selected-item')];
    selectedItems.forEach(itemSelected => {
      itemSelected.classList.remove('selected-item');
    });
    configs.element.classList.add('selected-item');

    const {title, text, id} = configs;

    this.previewUpdate({title, text, id})
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
    
    this.list().forEach(({title, text, id}, index) => {
      title = title.toLowerCase().trim();
      if (condition(title)) {
        const element = createItem(title);

        element.tabIndex = 6 + (index+1);
        element.addEventListener('click', this.selectItem.bind(this, {title, text, id, element}));

        this.view.appendChild(element);
      }
    });
  }
}

export default ListView;