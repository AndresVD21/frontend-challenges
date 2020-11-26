import { Component } from '@angular/core';

@Component({
  selector: 'frontend-challenges-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user = {
    name: 'Victor',
    lastName: 'Crest',
    age: 26,
    location: 'London',
    followers: '80K',
    likes: '803K',
    photos: '1.4K'
  }

  constructor() {}
}
