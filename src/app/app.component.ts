import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-master';
  isDanger = false;
  isWarning = false;
  type = 'password';
  show = false;
  handePwd() {
    if (this.type === 'password') {
      this.type = 'text';
      this.show = true;
    } else {
      this.type = 'password';
      this.show = false;
    }
  }
}
