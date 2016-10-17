import { WcElement } from '../wc-element';

const template = require('./wc-stock.html');

class Wcstock extends WcElement {

  constructor() {
    super();
  }

  static get observedAttributes() {
    return [];
  }

  createdCallback() {
    super.createdCallback();
    super.render(template);

    const container = this.shadowRoot.querySelector('#container');
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    const myChart = Highcharts.chart(container, {
        chart: {
            events: {
                load: function() {
                    const series = this.series[0];
                    setInterval(() => {
                        const x = (new Date()).getTime(), // current time
                            y = Math.round(Math.random() * 100);
                        series.addPoint([x, y], true, true);
                    }, 100);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: this.title
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        Math.round(Math.random() * 100)
                    ]);
                }
                return data;
            }())
        }]
    });

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

document.registerElement('wc-stock', Wcstock);
