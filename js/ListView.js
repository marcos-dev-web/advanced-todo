class ListView {
  constructor(listItems, previewUpdate) {
    this.view = document.getElementById('allItems');
    this.list = listItems;
    this.previewUpdate = previewUpdate;

    this.update = this.update.bind(this);
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
    
    this.list().forEach(({title, text, id}) => {
      title = title.toLowerCase().trim();
      if (condition(title)) {
        const element = createItem(title);

        element.addEventListener('click', this.previewUpdate.bind(this, {title, text, id}));

        this.view.appendChild(element);
      }
    });
  }
}

export default ListView;