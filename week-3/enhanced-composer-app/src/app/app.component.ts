/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 19 July 2020
 * Modified By: Sarah Kovar
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'composer-app';
  assignment: string = "Exercise 3.2 - Passing Data to Routes, Part 1";
}
