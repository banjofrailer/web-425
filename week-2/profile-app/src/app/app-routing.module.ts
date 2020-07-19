/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   12 July 2020
; Modified by: Sarah Kovar
; Description: App routing module
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
