const minWidthItems = 650;
const minWidthPreview = 850;

class MenuPreview {
  constructor(config) {
    
    this.previewBox = document.getElementById(config.preview.boxID);
    this.menuPreview = document.getElementById(config.preview.menuID);
    this.classOpenPreview = config.preview.classOpen;

    this.itemsBox = document.getElementById(config.items.boxID);
    this.menuItems = document.getElementById(config.items.menuID);
    this.classOpenItems = config.items.classOpen;

    this.state = {
      items: {
        open: false,
      },
      preview: {
        open: false,
      },
	  zIndex: 201,
    }

	window.onresize = (e) => {
		const width = e.currentTarget.innerWidth;

		if (width <= minWidthItems && this.state.items.open === true) {
			this.itemsBox.classList.remove(this.classOpenItems);
			this.state.items.open = false;
		}
		
		if (width <= minWidthPreview && this.state.preview.open === true) {
			this.previewBox.classList.remove(this.classOpenPreview);
			this.state.preview.open = false;
		}
	}
  }

  toggleOpenViews = (element, classToOpen, stateElement) => {
    stateElement.open = !stateElement.open;
    element.classList.toggle(classToOpen, stateElement.open);
	element.style.zIndex = ++this.state.zIndex;
  }

  setZIndex(element) {
	  element.style.zIndex = ++this.state.zIndex;
  }

  config = () => {
	this.itemsBox.addEventListener('click', this.setZIndex.bind(this, (this.itemsBox)));
	this.previewBox.addEventListener('click', this.setZIndex.bind(this, (this.previewBox)));

    this.menuItems.addEventListener('click', () => this.toggleOpenViews(
      this.itemsBox,
      this.classOpenItems,
      this.state.items,
    ))

    this.menuPreview.addEventListener('click', () => this.toggleOpenViews(
      this.previewBox,
      this.classOpenPreview,
      this.state.preview,
    ))

  }
}

export default {
  configMenuPreview(config) {
    const instance = new MenuPreview(config);
    instance.config();
  }
}
