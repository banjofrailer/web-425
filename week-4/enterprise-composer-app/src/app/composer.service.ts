/**
 * Title: composer.service.ts
 * Author: Professor Krasso
 * Date: 2 August 2020
 * Modified By: Sarah Kovar
 * Description: Composer service
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers)
      if (composer.composerId == composerId) {
        return composer;
      }
  }

filterComposers(name: string): Observable<IComposer[]> {
  return of(this.composers).pipe(
    map(composers =>
      composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
}
}






