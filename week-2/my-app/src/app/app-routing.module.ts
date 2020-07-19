import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// go to the home component
//http://localhost:4200
//http://localhost:4200/home

// go to the contact component
//http://localhost:4200/contact

// go to the about component
//http://localhost:4200/about

const routes: Routes = [
  {
    path:'',
component: HomeComponent
},
{
  path:'home',
component: HomeComponent
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
