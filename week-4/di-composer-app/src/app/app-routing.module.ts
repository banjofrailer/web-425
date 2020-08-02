/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 19 July 2020
 * Modified By: Sarah Kovar
 * Description: App routing module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// go to the home component
//http://localhost:4200
//http://localhost:4200/composer-list

// go to the contact component
//http://localhost:4200/contact

// go to the about component
//http://localhost:4200/about

const routes: Routes = [
  {
    path:'',
component: ComposerListComponent
},
{
  path:'composer-list',
component: ComposerListComponent
},
{
  path:'composer-details/:composerId',
component: ComposerDetailsComponent
},
{path:'contact',
component: ContactComponent
},
{path:'about',
component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
