/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 24 August 2020
 * Modified By: Sarah Kovar
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books"
  }
}
