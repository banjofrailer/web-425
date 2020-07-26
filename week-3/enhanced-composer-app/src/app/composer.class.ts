
import {  IComposer } from './composer.interface';
//create Composer class with full name and genre
export class Composer {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Carlo Savina", genre: "Spaghetti Western"
      },
      {
        composerId: 101, fullName: "Charles Hunter", genre: "Ragtime"
      },
      {
        composerId: 102, fullName: "Johannes Brahms", genre: "Orchestra"
      },
      {
        composerId: 103, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Antonín Dvořák", genre: "Classical"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers)
      if (composer.composerId == composerId) {
        return composer;
      }
  }

}
