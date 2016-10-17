// import './wc-card.html';
const template = require('./wc-card.html');

class WcCard extends HTMLElement {

  shadow;

  constructor() {
    super();
  }

  createdCallback() {
    console.log('WcCard::createdCallback');
    this.render();
  }

  attachedCallback() {
    console.log('WcCard::attachedCallback');
  }

  detachedCallback() {
    console.log('WcCard::detachedCallback');
  }

  attributeChangedCallback() {
    console.log('WcCard::attributeChangedCallback');
  }

  private render() {
    debugger;
    const template = document.querySelector('#template');
    // const instance = template.content.cloneNode(true);

    // const instance = document.createElement('h1');
    // instance.innerText = 'Hello from Web Component';

    const shadowRoot = this.createShadowRoot();
    shadowRoot.innerHTML = template.toString();
  }

}

// document.registerElement('wc-card', WcCard);
(<any>window).customElements.define('sg-card', WcCard);
