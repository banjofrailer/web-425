/**
 * Title: gpa.component.ts
 * Author: Professor Krasso
 * Date: 16 August 2020
 * Modified By: Sarah Kovar
 * Description: GPA Component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
