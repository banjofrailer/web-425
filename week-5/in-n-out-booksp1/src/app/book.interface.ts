/**
 * Title: app.interface.ts
 * Author: Professor Krasso
 * Date: 8 August 2020
 * Modified By: Sarah Kovar
 * Description: App interface
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
