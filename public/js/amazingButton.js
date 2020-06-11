
let tmpl = document.createElement('template');
tmpl.innerHTML = `
<style>
    button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
    }
</style>
<button><slot></slot></button>
`;

class AmazingButton extends HTMLElement {
  myCustomProperty = "content";
  myCustomMethod = function() { console.log("Hello World."); }

  constructor() {
    super();

    this.addEventListener('click', () => {
      console.log('custom-click')
    });

    const shadowRoot = this.attachShadow({mode: 'open'})
    .appendChild(tmpl.content.cloneNode(true));
  }
}
window.customElements.define('amazing-button', AmazingButton);
