/**
 * Title: app-routing.module.ts
 * Author: Sarah Kovar
 * Date: 1 September 2020
 * Description: App Routing Module
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
