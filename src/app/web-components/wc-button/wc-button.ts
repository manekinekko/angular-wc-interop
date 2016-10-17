import { WcElement } from '../wc-element';

const template = require('./wc-button.html');

class WcButton extends WcElement {

  constructor() {
    super();
  }

  createdCallback() {
    super.createdCallback();
    super.render(template);
  }

  attachedCallback() {
    super.attachedCallback();
  }

  detachedCallback() {
    super.detachedCallback();
  }

  attributeChangedCallback(attributeName, previousValue, currentValue) {
    super.attributeChangedCallback(attributeName, previousValue, currentValue);
  }

}

document.registerElement('wc-button', WcButton);
