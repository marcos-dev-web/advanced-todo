const KEY_ITEMS = 'list-items'

class HandleItemsFromLocalStorage {
  constructor() {
    this.items = [];
  }

  get getFromLocalStorage() {
    const items = localStorage.getItem(KEY_ITEMS) || [];
    this.items = JSON.parse(items);

    return this.items;
  }

  addNewItemToLocalStorage(item) {
    const newListItems = JSON.stringify([...this.getFromLocalStorage, item]);
    try {
      localStorage.setItem(KEY_ITEMS, newListItems);
      return true;
    } catch(e) {
      return false;
    }
  }

  removeItemFromLocalStorage(ID) {
    function updateLocalStorage(list) {
      localStorage.setItem(KEY_ITEMS, JSON.stringify(list));
    }

    const items = this.getFromLocalStorage();
    this.items = items.filter((item) => item["id"] !== String(ID));
    updateLocalStorage(this.items);
  }
}

export default HandleItemsFromLocalStorage;