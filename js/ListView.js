class ListView {
  constructor(listViewID, listItems) {
    this.view = document.getElementById(listViewID);
    this.list = listItems;

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
    
    this.list().forEach(({title}) => {
      title = title.toLowerCase().trim();
      if (condition(title)) {
        const element = createItem(title);

        this.view.appendChild(element);
      }
    });
  }
}

export default ListView;