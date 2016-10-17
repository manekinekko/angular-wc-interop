import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 Web Components Interop!';
  counter = 0;
  tick = 0;
  componentEvent = [];
  imageUrl = 'https://s3.amazonaws.com/media-p.slid.es/uploads/129681/images/2836606/Google-Now-Wallpaper-1.png';
  cardTitle = 'Custom Card Title';

  onComponentCustomEvent(event) {
    this.componentEvent.push({d: +new Date(), type: event.type});
  }

  onComponentTick(type) {
    this.tick++;
  }

  onClicked() {
    this.counter++;
  }
}
