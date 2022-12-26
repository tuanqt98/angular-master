import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-master';
  user = {
    name: 'Nguyen Quoc Tuan',
    age: 25
  };
  handle() {
    this.user.name = 'test';
  }
}
