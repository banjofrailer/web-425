/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 19 July 2020
 * Modified By: Sarah Kovar
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';

//create Composer class with full name and genre
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  //new array of composers for table
  constructor() {
    this.composers = [
      new Composer("Carlo Savina", "Spaghetti Western"),
      new Composer("Charles Hunter", "Ragtime"),
      new Composer("Johannes Brahms", "Orchestra"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Antonín Dvořák", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
