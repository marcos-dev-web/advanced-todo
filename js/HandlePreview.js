import HandleItemsFromLocalStorage from './HandleItemsFromLocalStorage.js';
import ListView from './ListView.js';

class HandlePreview extends HandleItemsFromLocalStorage {
  constructor(preview) {
    super();
    this.preview = preview;
    
    this.deleteItem = this.deleteItem.bind(this);
    this.resetPreview = this.resetPreview.bind(this);

    this.update = this.update.bind(this);
    this.buttonDelete = document.getElementById('delete');
    this.id = null;

    this.buttonDelete.onclick = this.deleteItem;

    this.listView = new ListView(() => this.getFromLocalStorage, this.update);
  }

  resetPreview() {
    this.preview.innerHTML = ""
    this.id = null;
    this.buttonDelete.style.display = "none";
    this.listView.update();
  }

  deleteItem() {
    if (this.id !== null) {
      this.removeItemFromLocalStorage(this.id);
      this.resetPreview();
    }
  }

  update({title, text, id}) {
    this.buttonDelete.style.display = "block";

    function createTemplate() {
      const container = document.createElement("div");
      const h2 = document.createElement('h2');
      const p = document.createElement('p');

      container.classList.add('item_selected');
      h2.classList.add('title_item_selected')
      p.classList.add('text_item_selected');

      h2.textContent = String(title);
      p.textContent = String(text);

      container.appendChild(h2);
      container.appendChild(p);



      return container;
    }

    this.id = String(id);

    const template = createTemplate();

    this.preview.innerHTML = "";
    this.preview.appendChild(template);

    const reset = (e) => {
      const acceptClasses = ['item', 'view', 'item_selected', 'title_item_selected', 'text_item_selected', 'container_preview', 'ball', 'menu']
      if (!acceptClasses.some(cls => e.target.classList.contains(cls))) {
        this.resetPreview();
      }
    }

    window.removeEventListener('click', reset);
    window.addEventListener('click', reset);
  }
}

export default HandlePreview;