import ListView from './ListView.js';

class Search extends ListView {
  constructor(inputSearch, listItems, previewUpdate) {
    super(listItems, previewUpdate);
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

export default Search;