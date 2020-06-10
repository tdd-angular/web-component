
class AmazingButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', () => {
      console.log('custom-click')
    });
  }

  connectedCallback() {
    this.style.border = 'solid 1px blue';
    this.style.backgroundColor = 'blue';
    this.style.color = "white";
    this.style.padding = '10px 20px';
    this.style.cursor = "default";
  }
}
window.customElements.define('amazing-button', AmazingButton);
