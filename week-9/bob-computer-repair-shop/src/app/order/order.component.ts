/**
 * Title: order.component.ts
 * Author: Sarah Kovar
 * Date: 2 September 2020
 * Description: Order Component
 */

import { Component, OnInit } from '@angular/core';
//import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { isNgTemplate } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { FormValidatorService } from '../form-validator.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form: FormGroup;
  checkedItems = [];
  orderTotal: number;
  partsValue: string;
  laborValue: string;

  Data: Array<any> = [
    { name: 'Password Reset: $39.99', value: 39.99, checked: false},
    { name: 'Spyware Removal: $99.99', value: 99.99, checked: false},
    { name: 'RAM Upgrade: $129.99', value: 129.99, checked: false},
    { name: 'Software Installation: $49.99', value: 49.99, checked: false},
    { name: 'Tune-up: $89.99', value: 89.99, checked: false},
    { name: 'Keyboard Cleaning: $45.00', value: 45.00, checked: false},
    { name: 'Disk Clean-up: $149.99', value: 149.99, checked: false},
  ]

  //constructor(private fb: FormBuilder) {
  //  this.form = this.fb.group({
  //    checkArray: this.fb.array([], [Validators.required])
  //  })
  // }

  constructor(private dialog: MatDialog) {

  }

   onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      console.log(e.target.value)
      this.orderTotal += e.target.value;
      console.log(this.orderTotal);
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++
      });
    }
  }

  getCheckedItems() {
    this.checkedItems = this.Data.filter((item) => {
      return item.isChecked;
    });
  }

  sumCheckedItems() {
    this.checkedItems = [];
    this.Data.forEach((item) => {
      if(item.checked) {
        this.checkedItems.push(item)
        this.orderTotal += item.value;
        console.log(this.orderTotal);
      }
    });



  //submitForm() {
  //  console.log(this.form.value)
  //}

}

  getPartsValue() {
    this.orderTotal += parseFloat(this.partsValue);
    console.log(this.orderTotal);
  }

  getLaborValue() {
    this.orderTotal += parseFloat(this.laborValue) * 50;
    console.log(this.orderTotal)
  }

  ngOnInit(): void {
    this.orderTotal = 0;
    this.getCheckedItems();

    partsPrice: ['', Validators.compose([Validators.required, Validators.pattern('^[0-]*$')])];
    laborPrice: ['', Validators.compose([Validators.required, Validators.pattern('^[0-]*$')])];

  }

  submitForm() {
    this.sumCheckedItems();
    //console.log(this.orderTotal);
    this.checkedItems.forEach((item) => {
      item.checked = false;
    });
    this.orderTotal = 0;
    this.partsValue = "";
    this.laborValue = "";
  }

  //get servicesFormArray(): FormArray {
  //  return this.orderTotal.controls.serviceRepairOptions as FormArray;
  //}

  generateSummary() {
    this.sumCheckedItems();
    const dialogRef = this.dialog.open(OrderSummaryComponent, {
      width: '80%',
      data:{
        laborHours: this.laborValue,
        partsPrice: this.partsValue,
        checkedItems: this.checkedItems,
        invoiceTotal: this.orderTotal
      }
    });
    this.checkedItems.forEach((item) => {
      item.checked = false;
    });
    this.getCheckedItems();
    this.orderTotal = 0;
    this.partsValue = "";
    this.laborValue = "";
  }


}
