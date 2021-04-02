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
        open: true,
      },
      preview: {
        open: true,
      }
    }
  }

  toggleOpenViews = (element, classToOpen, stateElement) => {
    element.classList.toggle(classToOpen, stateElement.open);
    stateElement.open = !stateElement.open;
  }

  config = () => {
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