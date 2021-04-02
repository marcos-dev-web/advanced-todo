import HandleItemsFromLocalStorage from './HandleItemsFromLocalStorage.js';

class HandleNewItems extends HandleItemsFromLocalStorage {
  constructor({inputTitle, inputText, buttonDone, buttonCancel, updateList}) {
    super();
    this.inputTitle = inputTitle;
    this.inputText = inputText;
    this.buttonDone = buttonDone;
    this.buttonCancel = buttonCancel;
    this.updateList = updateList;

    this.resetFields = this.resetFields.bind(this);
    this.handleValueInput = this.handleValueInput.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);

    this.inputTitle.onkeydown = this.handleValueInput;
    this.inputText.onkeydown = this.handleValueInput;

    this.inputTitle.onkeyup = this.handleValueInput;
    this.inputText.onkeyup = this.handleValueInput;

    this.buttonDone.onclick = this.save;
    this.buttonCancel.onclick = this.cancel;

    this.state = {
      id: 0,
      title: {
        length: 0,
        value: '',
      },
      text: {
        length: 0,
        value: '',
      },
      buttons: {
        cancel: {
          element: this.buttonCancel,
          disabled: true,
        },
        done: {
          element: this.buttonDone,
          disabled: true,
        }
      }
    }
  }

  toggleDisabledButton() {
    if (this.state.title.length > 0 || this.state.text.length > 0 && (!this.state.buttons["cancel"].disabled || !this.state.butons["done"].disabled)) {
      this.state.buttons["cancel"].disabled = false;
      this.state.buttons["done"].disabled = false;

      this.state.buttons["cancel"].element.classList.remove('disabled');
      this.state.buttons["done"].element.classList.remove('disabled');
    } else {
      this.state.buttons["cancel"].disabled = true;
      this.state.buttons["done"].disabled = true;

      this.state.buttons["cancel"].element.classList.add('disabled');
      this.state.buttons["done"].element.classList.add('disabled');
    }
  }

  resetFields() {
    this.inputTitle.value = "";
    this.inputText.value = "";

    this.state = {
      ...this.state,
      title: {
        value: "",
        length: 0,
      },
      text: {
        value: "",
        length: 0,
      },
      buttons: {
        cancel: {
          element: this.buttonCancel,
          disabled: true,
        },
        done: {
          element: this.buttonDone,
          disabled: true,
        }
      }
    }
  }

  handleValueInput(event) {
    const type = event.target.getAttribute('id');
    const value = event.target.value.replace('  ', ' ');
    this.state[type].value = value;
    this.state[type].length = value.length;

    this.inputTitle.value = this.state["title"].value;
    this.inputText.value = this.state["text"].value;

    this.toggleDisabledButton();
  }

  save() {
    if (!this.state.buttons["done"].disabled) {
      this.addNewItemToLocalStorage({
        title: this.state.title.value,
        text: this.state.text.value,
        id: this.state.id,
      })

      this.state.id++;
      this.resetFields();
      this.toggleDisabledButton();
      this.updateList();
    }
  }

  cancel() {
    this.resetFields();
    this.toggleDisabledButton();
  }
}


export default HandleNewItems;