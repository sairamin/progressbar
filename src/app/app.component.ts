import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progressbar';
  data = {
    type: 'success',
    value: 85,
    max: 150
  };
}
