/**
 * Title: wishlist-create.component.ts
 * Author: Professor Krasso
 * Date: 15 August 2020
 * Modified By: Sarah Kovar
 * Description: Wishlist-create component
 */


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  addItem() {
    console.log('Inside wishlist-create.component.ts (child) - addItem() function');
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }
}


