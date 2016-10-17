import { WcElement } from '../wc-element';

const template = require('./wc-card.html');

class WcCard extends WcElement {
  
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['title'];
  }

  createdCallback() {
    super.createdCallback();
    super.render(template);
    this.tick();
  }

  attachedCallback() {
    super.attachedCallback();
    const title = this.getAttribute('title');
  }

  detachedCallback() {
    super.detachedCallback();
  }

  attributeChangedCallback(attributeName, previousValue, currentValue) {
    super.attributeChangedCallback(attributeName, previousValue, currentValue);

    if (attributeName === 'title') {
      let titleRef = this.shadowRoot.querySelector('h1');
      if (currentValue) {
        titleRef.innerText = currentValue;
        titleRef.removeAttribute('hidden');
      }
      else {
        titleRef.innerText = '';
        titleRef.setAttribute('hidden', 'true');
      }
    }
  }

  private tick() {
    setInterval( () => {
      super.fire('tick');
    }, 1000);
  }

}

document.registerElement('wc-card', WcCard);
