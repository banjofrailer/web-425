/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 8 August 2020
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
    this.assignment = "Exercise 5.4 - Dialogs"
  }
}
