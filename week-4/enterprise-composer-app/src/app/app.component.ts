/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 2 August 2020
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
  assignment: string = "Assignment 4.4 - Async Pipe";
}
