import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Completely Dotty';

  dotsFired: boolean | undefined;
  bounceDirection: string | undefined;

  fireDotsFired() {
    this.dotsFired = true;
  }
}
