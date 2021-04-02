import HandleItemsFromLocalStorage from './HandleItemsFromLocalStorage.js';


const handleLocalStorage = new HandleItemsFromLocalStorage();

function getList() {
  return handleLocalStorage.getFromLocalStorage;
}

export default getList;
