import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CancionComponent} from './cancion/cancion.component';
import {HomeComponent} from './home/home.component';



const APP_ROUTES: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'home/:id', component: CancionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
