/**
 * Title: order-summary.component.ts
 * Author: Sarah Kovar
 * Date: 6 September 2020
 * Description: Order Summary Component
 */

import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, DialogRole } from '@angular/material/dialog';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() checkedItems;
  @Input() orderTotal: number;
  @Input() partsValue: number;
  @Input() laborValue: number;

  constructor(private dialogRef: MatDialogRef<OrderSummaryComponent>, @Inject(MAT_DIALOG_DATA)data) {
    this.laborValue = data.laborHours,
    this.partsValue = data.partsPrice,
    this.checkedItems = data.checkedItems,
    this.orderTotal = data.invoiceTotal
   }

   orderDate: number = Date.now();

  ngOnInit(): void {
  }

}
