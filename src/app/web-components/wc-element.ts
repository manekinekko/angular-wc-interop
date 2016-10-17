export class WcElement extends HTMLElement {

  constructor() {
    super();
  }

  static get observedAttributes() {
    return [];
  }

  createdCallback() {
    setTimeout( () => this.fire('created'), 0 );
  }

  attachedCallback() {
    setTimeout( () => this.fire('attached'), 0 );
  }

  detachedCallback() {
    this.fire('detached');
  }

  attributeChangedCallback(attributeName, previousValue, currentValue) {
    this.fire('attributeChanged');
  }

  render(templateString) {
    const content = this.getTemplateContent(templateString);
    const shadowRoot = this.createShadowRoot();
    shadowRoot.appendChild(content);
  }

  getTemplateContent(templateString) {
    let div = document.createElement('div');
    div.innerHTML = templateString;
    const content = div.querySelector('template').content;
    div = null;
    return document.importNode(content, true);
  }

  fire(type, data={}) {
    const event = new Event(type, {bubbles: true, cancelable: true});
    this.dispatchEvent(event);
  }

}
