const KEY_ITEMS = 'list-items'

class HandleItemsFromLocalStorage {
  constructor() {
    this.items = [];

    this.addNewItemToLocalStorage = this.addNewItemToLocalStorage.bind(this);
    this.removeItemFromLocalStorage = this.removeItemFromLocalStorage.bind(this);
  }

  get getFromLocalStorage() {
    const items = localStorage.getItem(KEY_ITEMS) || "\[\]";
    this.items = JSON.parse(items);

    return this.items;
  }

  addNewItemToLocalStorage(item) {
    const newListItems = JSON.stringify([...this.getFromLocalStorage, item]);
    try {
      localStorage.setItem(KEY_ITEMS, newListItems);
      this.items = JSON.parse(newListItems);
      return true;
    } catch(e) {
      return false;
    }
  }

  removeItemFromLocalStorage(ID) {
    const updateLocalStorage = (list) => {
      localStorage.setItem(KEY_ITEMS, JSON.stringify(list));
      this.items = list;
    }

    let newItems = this.getFromLocalStorage.filter((item) => String(item["id"]) !== String(ID));

    updateLocalStorage(newItems);
  }
}

export default HandleItemsFromLocalStorage;