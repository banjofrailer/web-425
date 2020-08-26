/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 24 August 2020
 * Modified By: Sarah Kovar
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: Array<string> = ['0345339681','0261103571','9780593099322','9780261102361','9780261102378','9780590302715','9780316769532,9780743273565','9780590405959'];

  constructor(private http: HttpClient) {
/*   this.books = [
      {
        isbn: '9780486280615',
        title: 'Adventures of Huckleberry Finn',
        description: 'About a young boy, Huck, in search of freedom and adventure.',
        numOfPages: 224,
        authors: ['Mark Twain']
      },
      {
        isbn: '1503215679',
        title: 'The Adventures of Tom Sawyer',
        description: "Tom Sawyer is a young boy living with his Aunt Polly on the banks of the Mississippi River. He seems to most enjoy getting into trouble.",
        numOfPages: 168,
        authors: ['Mark Twain']
      },
      {
        isbn: '0898702682',
        title: 'Joan of Arc',
        description: "The Sieur Louis de Conte, a fictional character invented by Mark Twain, tells the story of Joan of Arc, Louis' childhood friend and an actual figure in history, who fights for French independence from the English in the 15th century.",
        numOfPages: 452,
        authors: ['Mark Twain']
      },
      {
        isbn: '1949460738',
        title: 'Life on the Mississippi',
        description: "An autobiographical chronicle of Mark Twain's adventures during his training as a steamboat captain when he was twenty-one years old.",
        numOfPages: 488,
        authors: ['Mark Twain']
      },
      {
        isbn: '1704766796',
        title: 'The Prince and The Pauper',
        description: "The story of two identical young boys: a pauper named Tom Canty and the son of King Henry VIII, Prince Edward.",
        numOfPages: 132,
        authors: ['Mark Twain']
      }
    ] */
   }

   getBooks() {
    let params = new HttpParams()
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }

}
